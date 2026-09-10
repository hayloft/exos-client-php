# Exos\ExosApi\MasterApi

All URIs are relative to /ExosApi/api, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**v10MasterMediaDefinitionsAndDataPost()**](MasterApi.md#v10MasterMediaDefinitionsAndDataPost) | **POST** /v1.0/master/mediaDefinitionsAndData | Returns media definitions and data to program a master medium. |
| [**v10MasterMediaDefinitionsAndDataTemporaryPost()**](MasterApi.md#v10MasterMediaDefinitionsAndDataTemporaryPost) | **POST** /v1.0/master/mediaDefinitionsAndDataTemporary | Returns media definitions and data to program a temporary master medium. |


## `v10MasterMediaDefinitionsAndDataPost()`

```php
v10MasterMediaDefinitionsAndDataPost($get_master_media_definitions_and_data_input): \Exos\ExosApi\Model\GenericResponseOfGetMasterMediaDefinitionsAndDataOutput
```

Returns media definitions and data to program a master medium.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\MasterApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$get_master_media_definitions_and_data_input = new \Exos\ExosApi\Model\GetMasterMediaDefinitionsAndDataInput(); // \Exos\ExosApi\Model\GetMasterMediaDefinitionsAndDataInput

try {
    $result = $apiInstance->v10MasterMediaDefinitionsAndDataPost($get_master_media_definitions_and_data_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling MasterApi->v10MasterMediaDefinitionsAndDataPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **get_master_media_definitions_and_data_input** | [**\Exos\ExosApi\Model\GetMasterMediaDefinitionsAndDataInput**](../Model/GetMasterMediaDefinitionsAndDataInput.md)|  | |

### Return type

[**\Exos\ExosApi\Model\GenericResponseOfGetMasterMediaDefinitionsAndDataOutput**](../Model/GenericResponseOfGetMasterMediaDefinitionsAndDataOutput.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10MasterMediaDefinitionsAndDataTemporaryPost()`

```php
v10MasterMediaDefinitionsAndDataTemporaryPost($get_temporary_master_media_definitions_and_data_input): \Exos\ExosApi\Model\GenericResponseOfGetMasterMediaDefinitionsAndDataOutput
```

Returns media definitions and data to program a temporary master medium.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\MasterApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$get_temporary_master_media_definitions_and_data_input = new \Exos\ExosApi\Model\GetTemporaryMasterMediaDefinitionsAndDataInput(); // \Exos\ExosApi\Model\GetTemporaryMasterMediaDefinitionsAndDataInput

try {
    $result = $apiInstance->v10MasterMediaDefinitionsAndDataTemporaryPost($get_temporary_master_media_definitions_and_data_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling MasterApi->v10MasterMediaDefinitionsAndDataTemporaryPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **get_temporary_master_media_definitions_and_data_input** | [**\Exos\ExosApi\Model\GetTemporaryMasterMediaDefinitionsAndDataInput**](../Model/GetTemporaryMasterMediaDefinitionsAndDataInput.md)|  | |

### Return type

[**\Exos\ExosApi\Model\GenericResponseOfGetMasterMediaDefinitionsAndDataOutput**](../Model/GenericResponseOfGetMasterMediaDefinitionsAndDataOutput.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
