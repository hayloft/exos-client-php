# Exos\Auth\TokenApi

All URIs are relative to http://localhost, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**tokenApiV1TokenDelayedRevoke()**](TokenApi.md#tokenApiV1TokenDelayedRevoke) | **POST** /api/v1/Token/delayedRevoke | Schedules a revoke of the token |
| [**tokenApiV1TokenDesktopProviderLoginGetToken()**](TokenApi.md#tokenApiV1TokenDesktopProviderLoginGetToken) | **POST** /api/v1/Token/desktopProviderLoginGetToken | Retrieve that exos token has previously been created by identity provider login (OpenIdConnect) |
| [**tokenApiV1TokenExchange()**](TokenApi.md#tokenApiV1TokenExchange) | **POST** /api/v1/Token/exchange | Allows to exchange an authorization code or a refresh token into new/extended access, refresh and identity tokens. |
| [**tokenApiV1TokenKeepAlive()**](TokenApi.md#tokenApiV1TokenKeepAlive) | **POST** /api/v1/Token/keepAlive | Extends a valid tokens lifetime |
| [**tokenApiV1TokenRevoke()**](TokenApi.md#tokenApiV1TokenRevoke) | **POST** /api/v1/Token/revoke | Revokes the token (aka logs out the user) |


## `tokenApiV1TokenDelayedRevoke()`

```php
tokenApiV1TokenDelayedRevoke($kaba_exos_auth_service_areas_api_models_token_request)
```

Schedules a revoke of the token

Will log out user (revoke the token) within a configurable timespan if no other request with that token is made. Intended for internal use only

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new Exos\Auth\Api\TokenApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$kaba_exos_auth_service_areas_api_models_token_request = new \Exos\Auth\Model\KabaExosAuthServiceAreasApiModelsTokenRequest(); // \Exos\Auth\Model\KabaExosAuthServiceAreasApiModelsTokenRequest

try {
    $apiInstance->tokenApiV1TokenDelayedRevoke($kaba_exos_auth_service_areas_api_models_token_request);
} catch (Exception $e) {
    echo 'Exception when calling TokenApi->tokenApiV1TokenDelayedRevoke: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **kaba_exos_auth_service_areas_api_models_token_request** | [**\Exos\Auth\Model\KabaExosAuthServiceAreasApiModelsTokenRequest**](../Model/KabaExosAuthServiceAreasApiModelsTokenRequest.md)|  | [optional] |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `tokenApiV1TokenDesktopProviderLoginGetToken()`

```php
tokenApiV1TokenDesktopProviderLoginGetToken($kaba_exos_auth_service_areas_api_models_oidc_token_request): string
```

Retrieve that exos token has previously been created by identity provider login (OpenIdConnect)

Intended for internal use only

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new Exos\Auth\Api\TokenApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$kaba_exos_auth_service_areas_api_models_oidc_token_request = new \Exos\Auth\Model\KabaExosAuthServiceAreasApiModelsOidcTokenRequest(); // \Exos\Auth\Model\KabaExosAuthServiceAreasApiModelsOidcTokenRequest

try {
    $result = $apiInstance->tokenApiV1TokenDesktopProviderLoginGetToken($kaba_exos_auth_service_areas_api_models_oidc_token_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TokenApi->tokenApiV1TokenDesktopProviderLoginGetToken: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **kaba_exos_auth_service_areas_api_models_oidc_token_request** | [**\Exos\Auth\Model\KabaExosAuthServiceAreasApiModelsOidcTokenRequest**](../Model/KabaExosAuthServiceAreasApiModelsOidcTokenRequest.md)|  | [optional] |

### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `text/plain`, `application/json`, `text/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `tokenApiV1TokenExchange()`

```php
tokenApiV1TokenExchange($kaba_exos_auth_service_areas_api_models_token_exchange_request): \Exos\Auth\Model\KabaExosAuthServiceTokensExosTokens
```

Allows to exchange an authorization code or a refresh token into new/extended access, refresh and identity tokens.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new Exos\Auth\Api\TokenApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$kaba_exos_auth_service_areas_api_models_token_exchange_request = new \Exos\Auth\Model\KabaExosAuthServiceAreasApiModelsTokenExchangeRequest(); // \Exos\Auth\Model\KabaExosAuthServiceAreasApiModelsTokenExchangeRequest

try {
    $result = $apiInstance->tokenApiV1TokenExchange($kaba_exos_auth_service_areas_api_models_token_exchange_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TokenApi->tokenApiV1TokenExchange: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **kaba_exos_auth_service_areas_api_models_token_exchange_request** | [**\Exos\Auth\Model\KabaExosAuthServiceAreasApiModelsTokenExchangeRequest**](../Model/KabaExosAuthServiceAreasApiModelsTokenExchangeRequest.md)|  | [optional] |

### Return type

[**\Exos\Auth\Model\KabaExosAuthServiceTokensExosTokens**](../Model/KabaExosAuthServiceTokensExosTokens.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `text/plain`, `application/json`, `text/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `tokenApiV1TokenKeepAlive()`

```php
tokenApiV1TokenKeepAlive($kaba_exos_auth_service_areas_api_models_token_request): bool
```

Extends a valid tokens lifetime

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new Exos\Auth\Api\TokenApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$kaba_exos_auth_service_areas_api_models_token_request = new \Exos\Auth\Model\KabaExosAuthServiceAreasApiModelsTokenRequest(); // \Exos\Auth\Model\KabaExosAuthServiceAreasApiModelsTokenRequest

try {
    $result = $apiInstance->tokenApiV1TokenKeepAlive($kaba_exos_auth_service_areas_api_models_token_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TokenApi->tokenApiV1TokenKeepAlive: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **kaba_exos_auth_service_areas_api_models_token_request** | [**\Exos\Auth\Model\KabaExosAuthServiceAreasApiModelsTokenRequest**](../Model/KabaExosAuthServiceAreasApiModelsTokenRequest.md)|  | [optional] |

### Return type

**bool**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `text/plain`, `application/json`, `text/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `tokenApiV1TokenRevoke()`

```php
tokenApiV1TokenRevoke($kaba_exos_auth_service_areas_api_models_token_request)
```

Revokes the token (aka logs out the user)

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new Exos\Auth\Api\TokenApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$kaba_exos_auth_service_areas_api_models_token_request = new \Exos\Auth\Model\KabaExosAuthServiceAreasApiModelsTokenRequest(); // \Exos\Auth\Model\KabaExosAuthServiceAreasApiModelsTokenRequest

try {
    $apiInstance->tokenApiV1TokenRevoke($kaba_exos_auth_service_areas_api_models_token_request);
} catch (Exception $e) {
    echo 'Exception when calling TokenApi->tokenApiV1TokenRevoke: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **kaba_exos_auth_service_areas_api_models_token_request** | [**\Exos\Auth\Model\KabaExosAuthServiceAreasApiModelsTokenRequest**](../Model/KabaExosAuthServiceAreasApiModelsTokenRequest.md)|  | [optional] |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
