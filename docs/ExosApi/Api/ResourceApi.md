# Exos\ExosApi\ResourceApi

All URIs are relative to /ExosApi/api, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**v10ResourceTextsResourceIdLanguageIdGet()**](ResourceApi.md#v10ResourceTextsResourceIdLanguageIdGet) | **GET** /v1.0/resourceTexts/{resourceId}/{languageId} | get a specific resource text in a specific language |
| [**v10ResourceTextsResourceIdUpdatePost()**](ResourceApi.md#v10ResourceTextsResourceIdUpdatePost) | **POST** /v1.0/resourceTexts/{resourceId}/update | updates the resource text for a specific resource and language |


## `v10ResourceTextsResourceIdLanguageIdGet()`

```php
v10ResourceTextsResourceIdLanguageIdGet($resource_id, $language_id): \Exos\ExosApi\Model\GetResourceTextOutputWithTime
```

get a specific resource text in a specific language

get a specific resource text in a specific language

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\ResourceApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$resource_id = 'resource_id_example'; // string | resource Id
$language_id = 'language_id_example'; // string | language Id

try {
    $result = $apiInstance->v10ResourceTextsResourceIdLanguageIdGet($resource_id, $language_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ResourceApi->v10ResourceTextsResourceIdLanguageIdGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **resource_id** | **string**| resource Id | |
| **language_id** | **string**| language Id | |

### Return type

[**\Exos\ExosApi\Model\GetResourceTextOutputWithTime**](../Model/GetResourceTextOutputWithTime.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10ResourceTextsResourceIdUpdatePost()`

```php
v10ResourceTextsResourceIdUpdatePost($resource_id, $update_resource_text_input): \Exos\ExosApi\Model\VoidResponseOutput
```

updates the resource text for a specific resource and language

updates the resource text for a specific resource and language

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\ResourceApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$resource_id = 'resource_id_example'; // string | id of resource
$update_resource_text_input = new \Exos\ExosApi\Model\UpdateResourceTextInput(); // \Exos\ExosApi\Model\UpdateResourceTextInput | set parameter value

try {
    $result = $apiInstance->v10ResourceTextsResourceIdUpdatePost($resource_id, $update_resource_text_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ResourceApi->v10ResourceTextsResourceIdUpdatePost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **resource_id** | **string**| id of resource | |
| **update_resource_text_input** | [**\Exos\ExosApi\Model\UpdateResourceTextInput**](../Model/UpdateResourceTextInput.md)| set parameter value | [optional] |

### Return type

[**\Exos\ExosApi\Model\VoidResponseOutput**](../Model/VoidResponseOutput.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
