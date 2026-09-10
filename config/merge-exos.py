#!/usr/bin/env python3
"""Merge the fragmented ExosApi OpenAPI documents into one self-contained spec.

The Exos 9300 OfflineHelp ships the ExosApi description as ~46 self-contained
leaf files under ``ExosApi/Help/<Area>/<Name>.json`` plus umbrella files
(``Exos.json`` and per-folder ``Main.json``) that only reference the leaves via
URL-encoded external ``$ref`` pointers. The umbrella ``Exos.json`` is also
incomplete (it omits Report, DesktopReader, SysOps, Log, ...).

openapi-generator does not resolve those cross-file pointers well, so we build a
single OpenAPI 3 document from the union of all leaf files:

* ``paths``   - union of every leaf's paths.
* ``schemas`` - union of every leaf's component schemas. The leaves each carry
  their own copy of the shared DTOs; identical copies are collapsed, and the
  rare genuine name clash (different definition, same name) is aliased with a
  file-scoped suffix and the referencing ``$ref``s in that file are rewritten.

Usage: merge-exos.py <ExosApi/Help dir> <output file>
"""

import collections
import glob
import hashlib
import json
import os
import sys


def canon(obj):
    return json.dumps(obj, sort_keys=True, separators=(",", ":"))


def main():
    if len(sys.argv) != 3:
        sys.exit("usage: merge-exos.py <ExosApi/Help dir> <output.json>")
    help_dir, out_path = sys.argv[1], sys.argv[2]
    os.chdir(help_dir)

    leaves = [
        f
        for f in sorted(glob.glob("**/*.json", recursive=True))
        if f != "Exos.json" and os.path.basename(f) != "Main.json"
    ]
    if not leaves:
        sys.exit(f"no leaf spec files found under {help_dir!r}")

    merged_paths = {}
    merged_schemas = {}
    schema_hash = {}
    info = servers = security = sec_schemes = None
    tags = {}
    conflicts = collections.Counter()

    for f in leaves:
        doc = json.load(open(f))
        info = info or doc.get("info")
        servers = servers or doc.get("servers")
        security = security or doc.get("security")
        components = doc.get("components") or {}
        sec_schemes = sec_schemes or components.get("securitySchemes")
        for tag in doc.get("tags") or []:
            tags.setdefault(tag["name"], tag)

        # Decide renames for this file's schemas, then apply them to the whole
        # file (paths + schemas) so intra-file $refs stay consistent.
        rename = {}
        for name, schema in (components.get("schemas") or {}).items():
            digest = hashlib.sha1(canon(schema).encode()).hexdigest()
            if name not in schema_hash:
                continue
            if schema_hash[name] == digest:
                continue  # identical copy already merged
            alias = f"{name}__{f.replace('/', '_')[:-5]}"
            rename[name] = alias
            conflicts[name] += 1

        blob = json.dumps(
            {"paths": doc.get("paths") or {}, "schemas": components.get("schemas") or {}}
        )
        for old, new in rename.items():
            blob = blob.replace(
                f'"#/components/schemas/{old}"', f'"#/components/schemas/{new}"'
            )
        chunk = json.loads(blob)

        for name, schema in chunk["schemas"].items():
            final = rename.get(name, name)
            digest = hashlib.sha1(canon(schema).encode()).hexdigest()
            if final not in schema_hash:
                merged_schemas[final] = schema
                schema_hash[final] = digest

        for path, item in chunk["paths"].items():
            if path not in merged_paths:
                merged_paths[path] = item
                continue
            for method, operation in item.items():
                existing = merged_paths[path].get(method)
                if existing is None:
                    merged_paths[path][method] = operation
                elif canon(existing) != canon(operation):
                    print(
                        f"WARN: conflicting {method.upper()} {path} (from {f})",
                        file=sys.stderr,
                    )

    root = {
        "openapi": "3.0.1",
        "info": info or {"title": "exos API", "version": "4.4.01"},
        "servers": servers or [{"url": "/ExosApi/api"}],
        "security": security or [{"basicAuth": []}],
        "tags": list(tags.values()),
        "paths": merged_paths,
        "components": {
            "schemas": merged_schemas,
            "securitySchemes": sec_schemes
            or {"basicAuth": {"type": "http", "scheme": "basic"}},
        },
    }

    os.makedirs(os.path.dirname(os.path.abspath(out_path)), exist_ok=True)
    with open(out_path, "w") as fh:
        json.dump(root, fh, indent=1)

    print(
        f"merged {len(leaves)} leaf files -> {len(merged_paths)} paths, "
        f"{len(merged_schemas)} schemas"
        + (f", aliased clashes: {dict(conflicts)}" if conflicts else "")
    )


if __name__ == "__main__":
    main()
