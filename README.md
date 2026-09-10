# exos-client-php

PHP client for the **dormakaba Exos 9300** API, the successor to the (legacy)
exivo API our old `exivo-client-php` wrapped.

Two APIs are generated from the vendored OpenAPI documents:

| Client | Namespace | Source spec | Surface |
|---|---|---|---|
| ExosApi | `Exos\ExosApi` | `OfflineHelp 4.4.1/ExosApi/Help/*` (merged) | persons, access rights, media, visits, badges, … (~340 paths) |
| Auth | `Exos\Auth` | `OfflineHelp 4.4.1/AuthApi/Help/AuthApiOpenApi.json` | login / token exchange (12 paths) |

The Core API (`OfflineHelp 4.4.1/Core/Help/CoreOpenApi.json`, ~340 lower-level
system/config endpoints) is **not** generated — add it to `config/build.sh` if
it is ever needed.

## Install

```
composer install
```

## Usage

```php
use Exos\ExosApi\Configuration;
use Exos\ExosApi\Api\PersonApi;

$config = (new Configuration())
    ->setHost('https://your-exos-host/ExosApi/api')
    ->setUsername($apiKey)      // ExosApi uses HTTP Basic: key / secret
    ->setPassword($apiSecret);

$persons = (new PersonApi(null, $config))->v10PersonsGet();
```

Method names on the ExosApi client are auto-derived from the HTTP verb + path
(e.g. `v10PersonsPersonIdAssignBadgePost()`) because the upstream spec ships
almost no `operationId`s. Browse `docs/ExosApi/` for the full mapping. The Auth
client's spec has real operation ids, so its method names are clean
(`login()`, `exchange()`, …).

## Regenerating

The generated code under `lib/` and `docs/` is committed. To refresh it after a
new Exos release:

1. Replace the `OfflineHelp <version>/` directory at the repo root with the one
   from the new release.
2. Run the build (needs Docker + Python 3):

   ```
   ./config/build.sh
   ```

3. Review the diff and commit.

`config/build.sh` merges the fragmented ExosApi leaf specs
(`config/merge-exos.py`), then runs
`openapitools/openapi-generator-cli` (pinned in the script) for each client.
Intermediate files land in `build/` (git-ignored).
