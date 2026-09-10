# Exos\Auth\PasswordApi

All URIs are relative to http://localhost, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**passwordApiV1Password()**](PasswordApi.md#passwordApiV1Password) | **POST** /api/v1/Password | Change the password of an authenticated user. User has to be authenticated |


## `passwordApiV1Password()`

```php
passwordApiV1Password($kaba_exos_auth_service_areas_api_models_password_change_request): string
```

Change the password of an authenticated user. User has to be authenticated

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new Exos\Auth\Api\PasswordApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$kaba_exos_auth_service_areas_api_models_password_change_request = new \Exos\Auth\Model\KabaExosAuthServiceAreasApiModelsPasswordChangeRequest(); // \Exos\Auth\Model\KabaExosAuthServiceAreasApiModelsPasswordChangeRequest

try {
    $result = $apiInstance->passwordApiV1Password($kaba_exos_auth_service_areas_api_models_password_change_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PasswordApi->passwordApiV1Password: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **kaba_exos_auth_service_areas_api_models_password_change_request** | [**\Exos\Auth\Model\KabaExosAuthServiceAreasApiModelsPasswordChangeRequest**](../Model/KabaExosAuthServiceAreasApiModelsPasswordChangeRequest.md)|  | [optional] |

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
