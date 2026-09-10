# Exos\Auth\LoginApi

All URIs are relative to http://localhost, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**loginApiV1Login()**](LoginApi.md#loginApiV1Login) | **POST** /api/v1/Login | Allows to perform a login via user name and password. If successful, returns a identity token. |
| [**loginApiV1LoginIdentityProviders()**](LoginApi.md#loginApiV1LoginIdentityProviders) | **GET** /api/v1/Login/identityProviders | Returns a list of all external identity providers (openIdConnect) |
| [**loginApiV1LoginTenants()**](LoginApi.md#loginApiV1LoginTenants) | **GET** /api/v1/Login/tenants | Returns a list of all available tenants/clients (not to be confused with OAuth client id) |
| [**loginApiV1LoginWebapps()**](LoginApi.md#loginApiV1LoginWebapps) | **GET** /api/v1/Login/webapps | Deprecated: returns a list of all available webapps/client applications. Please use \&quot;/v1.0/application/webapplications\&quot; of ExosApi as this endpoint will be removed in the future |
| [**loginApiV1LoginWindows()**](LoginApi.md#loginApiV1LoginWindows) | **POST** /api/v1/Login/Windows | Allows to perform a windows login. If successful, returns a identity token. |
| [**loginApiV1LoginWithPasswordChange()**](LoginApi.md#loginApiV1LoginWithPasswordChange) | **POST** /api/v1/Login/WithPasswordChange | Allows to perform a login with an integrated password change with user name, password and new password. If successful, returns a identity token. |


## `loginApiV1Login()`

```php
loginApiV1Login($kaba_exos_auth_service_areas_api_models_login_username_password_request): string
```

Allows to perform a login via user name and password. If successful, returns a identity token.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new Exos\Auth\Api\LoginApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$kaba_exos_auth_service_areas_api_models_login_username_password_request = new \Exos\Auth\Model\KabaExosAuthServiceAreasApiModelsLoginUsernamePasswordRequest(); // \Exos\Auth\Model\KabaExosAuthServiceAreasApiModelsLoginUsernamePasswordRequest

try {
    $result = $apiInstance->loginApiV1Login($kaba_exos_auth_service_areas_api_models_login_username_password_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling LoginApi->loginApiV1Login: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **kaba_exos_auth_service_areas_api_models_login_username_password_request** | [**\Exos\Auth\Model\KabaExosAuthServiceAreasApiModelsLoginUsernamePasswordRequest**](../Model/KabaExosAuthServiceAreasApiModelsLoginUsernamePasswordRequest.md)|  | [optional] |

### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`, `text/json`, `application/*+json`
- **Accept**: `text/plain`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `loginApiV1LoginIdentityProviders()`

```php
loginApiV1LoginIdentityProviders(): \Exos\Auth\Model\KabaExosAuthServiceAreasApiModelsIdentityProviderModel[]
```

Returns a list of all external identity providers (openIdConnect)

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new Exos\Auth\Api\LoginApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);

try {
    $result = $apiInstance->loginApiV1LoginIdentityProviders();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling LoginApi->loginApiV1LoginIdentityProviders: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\Exos\Auth\Model\KabaExosAuthServiceAreasApiModelsIdentityProviderModel[]**](../Model/KabaExosAuthServiceAreasApiModelsIdentityProviderModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `text/plain`, `application/json`, `text/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `loginApiV1LoginTenants()`

```php
loginApiV1LoginTenants(): \Exos\Auth\Model\KabaExosAuthServiceAreasApiModelsTenantModel[]
```

Returns a list of all available tenants/clients (not to be confused with OAuth client id)

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new Exos\Auth\Api\LoginApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);

try {
    $result = $apiInstance->loginApiV1LoginTenants();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling LoginApi->loginApiV1LoginTenants: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\Exos\Auth\Model\KabaExosAuthServiceAreasApiModelsTenantModel[]**](../Model/KabaExosAuthServiceAreasApiModelsTenantModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `text/plain`, `application/json`, `text/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `loginApiV1LoginWebapps()`

```php
loginApiV1LoginWebapps(): \Exos\Auth\Model\KabaExosAuthServiceAreasApiModelsWebAppModel[]
```

Deprecated: returns a list of all available webapps/client applications. Please use \"/v1.0/application/webapplications\" of ExosApi as this endpoint will be removed in the future

Requires authentication via Cookie (opaque_token)

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new Exos\Auth\Api\LoginApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);

try {
    $result = $apiInstance->loginApiV1LoginWebapps();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling LoginApi->loginApiV1LoginWebapps: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\Exos\Auth\Model\KabaExosAuthServiceAreasApiModelsWebAppModel[]**](../Model/KabaExosAuthServiceAreasApiModelsWebAppModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `text/plain`, `application/json`, `text/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `loginApiV1LoginWindows()`

```php
loginApiV1LoginWindows($kaba_exos_auth_service_areas_api_models_login_request): string
```

Allows to perform a windows login. If successful, returns a identity token.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new Exos\Auth\Api\LoginApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$kaba_exos_auth_service_areas_api_models_login_request = new \Exos\Auth\Model\KabaExosAuthServiceAreasApiModelsLoginRequest(); // \Exos\Auth\Model\KabaExosAuthServiceAreasApiModelsLoginRequest

try {
    $result = $apiInstance->loginApiV1LoginWindows($kaba_exos_auth_service_areas_api_models_login_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling LoginApi->loginApiV1LoginWindows: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **kaba_exos_auth_service_areas_api_models_login_request** | [**\Exos\Auth\Model\KabaExosAuthServiceAreasApiModelsLoginRequest**](../Model/KabaExosAuthServiceAreasApiModelsLoginRequest.md)|  | [optional] |

### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`, `text/json`, `application/*+json`
- **Accept**: `text/plain`, `application/json`, `text/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `loginApiV1LoginWithPasswordChange()`

```php
loginApiV1LoginWithPasswordChange($kaba_exos_auth_service_areas_api_models_login_with_password_change_request): string
```

Allows to perform a login with an integrated password change with user name, password and new password. If successful, returns a identity token.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new Exos\Auth\Api\LoginApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$kaba_exos_auth_service_areas_api_models_login_with_password_change_request = new \Exos\Auth\Model\KabaExosAuthServiceAreasApiModelsLoginWithPasswordChangeRequest(); // \Exos\Auth\Model\KabaExosAuthServiceAreasApiModelsLoginWithPasswordChangeRequest

try {
    $result = $apiInstance->loginApiV1LoginWithPasswordChange($kaba_exos_auth_service_areas_api_models_login_with_password_change_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling LoginApi->loginApiV1LoginWithPasswordChange: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **kaba_exos_auth_service_areas_api_models_login_with_password_change_request** | [**\Exos\Auth\Model\KabaExosAuthServiceAreasApiModelsLoginWithPasswordChangeRequest**](../Model/KabaExosAuthServiceAreasApiModelsLoginWithPasswordChangeRequest.md)|  | [optional] |

### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`, `text/json`, `application/*+json`
- **Accept**: `text/plain`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
