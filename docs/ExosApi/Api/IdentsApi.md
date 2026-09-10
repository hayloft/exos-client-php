# Exos\ExosApi\IdentsApi

All URIs are relative to /ExosApi/api, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**v10IdentMediaDefinitionsPost()**](IdentsApi.md#v10IdentMediaDefinitionsPost) | **POST** /v1.0/ident/mediaDefinitions | Gets the ident media definitions of the submitted media code(s). |
| [**v10IdentUserMediumPost()**](IdentsApi.md#v10IdentUserMediumPost) | **POST** /v1.0/ident/userMedium | Returns a user medium from the submitted ident. |


## `v10IdentMediaDefinitionsPost()`

```php
v10IdentMediaDefinitionsPost($get_media_definitions_input): \Exos\ExosApi\Model\GenericResponseOfGetMediaDefinitionsOutput
```

Gets the ident media definitions of the submitted media code(s).



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\IdentsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$get_media_definitions_input = new \Exos\ExosApi\Model\GetMediaDefinitionsInput(); // \Exos\ExosApi\Model\GetMediaDefinitionsInput

try {
    $result = $apiInstance->v10IdentMediaDefinitionsPost($get_media_definitions_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling IdentsApi->v10IdentMediaDefinitionsPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **get_media_definitions_input** | [**\Exos\ExosApi\Model\GetMediaDefinitionsInput**](../Model/GetMediaDefinitionsInput.md)|  | |

### Return type

[**\Exos\ExosApi\Model\GenericResponseOfGetMediaDefinitionsOutput**](../Model/GenericResponseOfGetMediaDefinitionsOutput.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10IdentUserMediumPost()`

```php
v10IdentUserMediumPost($get_user_medium_input): \Exos\ExosApi\Model\GenericResponseOfGetUserMediumOutput
```

Returns a user medium from the submitted ident.



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\IdentsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$get_user_medium_input = new \Exos\ExosApi\Model\GetUserMediumInput(); // \Exos\ExosApi\Model\GetUserMediumInput

try {
    $result = $apiInstance->v10IdentUserMediumPost($get_user_medium_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling IdentsApi->v10IdentUserMediumPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **get_user_medium_input** | [**\Exos\ExosApi\Model\GetUserMediumInput**](../Model/GetUserMediumInput.md)|  | |

### Return type

[**\Exos\ExosApi\Model\GenericResponseOfGetUserMediumOutput**](../Model/GenericResponseOfGetUserMediumOutput.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
