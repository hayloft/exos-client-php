# Exos\ExosApi\PassagewayApi

All URIs are relative to /ExosApi/api, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**v10PassagewaysPassagewayIdOpenoncePost()**](PassagewayApi.md#v10PassagewaysPassagewayIdOpenoncePost) | **POST** /v1.0/passageways/{passagewayId}/openonce | open passageway once |


## `v10PassagewaysPassagewayIdOpenoncePost()`

```php
v10PassagewaysPassagewayIdOpenoncePost($passageway_id): \Exos\ExosApi\Model\VoidResponseOutput
```

open passageway once

open passageway once

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\PassagewayApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$passageway_id = 'passageway_id_example'; // string | id of passageway

try {
    $result = $apiInstance->v10PassagewaysPassagewayIdOpenoncePost($passageway_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PassagewayApi->v10PassagewaysPassagewayIdOpenoncePost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **passageway_id** | **string**| id of passageway | |

### Return type

[**\Exos\ExosApi\Model\VoidResponseOutput**](../Model/VoidResponseOutput.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
