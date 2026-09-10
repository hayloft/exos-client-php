#!/usr/bin/env bash
#
# Regenerate the PHP client from the Exos 9300 OfflineHelp OpenAPI documents.
#
# Source of truth: the "OfflineHelp <version>" directory vendored at the repo
# root (copied from the Exos release). Two APIs are generated:
#
#   ExosApi -> lib/ExosApi  (namespace Exos\ExosApi) - the exivo-API successor
#   Auth    -> lib/Auth     (namespace Exos\Auth)    - the Auth-Service API
#
# The generated code is committed. Re-run this after dropping in a new
# OfflineHelp release, then review and commit the diff.
#
# Requires: docker, python3.

set -euo pipefail

GENERATOR_VERSION="v7.16.0"
GENERATOR_IMAGE="openapitools/openapi-generator-cli:${GENERATOR_VERSION}"

REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$REPO_DIR"

OFFLINE_HELP="$(find . -maxdepth 1 -type d -name 'OfflineHelp*' | sort | tail -n1)"
if [[ -z "$OFFLINE_HELP" ]]; then
    echo "error: no 'OfflineHelp*' directory found at repo root" >&2
    exit 1
fi
OFFLINE_HELP="${OFFLINE_HELP#./}"
echo ">> using spec source: $OFFLINE_HELP"

BUILD_DIR="$REPO_DIR/build"
rm -rf "$BUILD_DIR"
mkdir -p "$BUILD_DIR/spec"

# 1. ExosApi: merge the fragmented leaf specs into one self-contained document.
python3 config/merge-exos.py "$OFFLINE_HELP/ExosApi/Help" "$BUILD_DIR/spec/exosapi.json"

# 2. Auth: already a single self-contained document. Its vendored `servers`
#    entries are help-portal-relative ("../../") and produce a broken default
#    host; normalise them to a root-relative path.
python3 - "$OFFLINE_HELP/AuthApi/Help/AuthApiOpenApi.json" "$BUILD_DIR/spec/auth.json" <<'PY'
import json, sys
src, dst = sys.argv[1], sys.argv[2]
doc = json.load(open(src))
doc["servers"] = [{"url": "/"}]
json.dump(doc, open(dst, "w"), indent=1)
PY

# 3. Generate. --skip-validate-spec: the vendored ExosApi spec has a handful of
#    cosmetic violations (date-time example values, a stray `nullable` on a
#    parameter) that do not affect code generation.
generate() {
    local name="$1" invoker="$2"
    echo ">> generating $name ($invoker)"
    docker run --rm -u "$(id -u):$(id -g)" -v "$BUILD_DIR:/local" "$GENERATOR_IMAGE" generate \
        -i "/local/spec/${name}.json" \
        -g php \
        -o "/local/gen/${name}" \
        --skip-validate-spec \
        --additional-properties="invokerPackage=${invoker},composerPackageName=hayloft/exos-client-php,artifactVersion=4.4.1,hideGenerationTimestamp=true"
}

generate exosapi 'Exos\ExosApi'
generate auth 'Exos\Auth'

# 4. Sync generated sources + docs into the repo.
install_client() {
    local name="$1" dest="$2"
    rm -rf "lib/$dest" "docs/$dest"
    mkdir -p "lib/$dest" "docs/$dest"
    cp -r "$BUILD_DIR/gen/$name/lib/." "lib/$dest/"
    cp -r "$BUILD_DIR/gen/$name/docs/." "docs/$dest/"
    cp "$BUILD_DIR/gen/$name/README.md" "docs/$dest/README.md"
}

install_client exosapi ExosApi
install_client auth Auth

echo
echo ">> done."
echo "   ExosApi: $(find lib/ExosApi/Api -name '*.php' | wc -l | tr -d ' ') API classes, $(find lib/ExosApi/Model -name '*.php' | wc -l | tr -d ' ') models"
echo "   Auth:    $(find lib/Auth/Api -name '*.php' | wc -l | tr -d ' ') API classes, $(find lib/Auth/Model -name '*.php' | wc -l | tr -d ' ') models"
echo "   review the diff, then: composer dump-autoload && git add -A"
