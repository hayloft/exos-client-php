# Exos\ExosApi\KoneAccessLogApi

All URIs are relative to /ExosApi/api, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**v10KoneAccessLogEntriesKoneAccessLogEventTypesGet()**](KoneAccessLogApi.md#v10KoneAccessLogEntriesKoneAccessLogEventTypesGet) | **GET** /v1.0/koneAccessLogEntries/koneAccessLogEventTypes | Get KONE access event type info |


## `v10KoneAccessLogEntriesKoneAccessLogEventTypesGet()`

```php
v10KoneAccessLogEntriesKoneAccessLogEventTypesGet(): \Exos\ExosApi\Model\GetAccessLogEventTypeOutputWithTime
```

Get KONE access event type info

Get KONE access event type info.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\KoneAccessLogApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);

try {
    $result = $apiInstance->v10KoneAccessLogEntriesKoneAccessLogEventTypesGet();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling KoneAccessLogApi->v10KoneAccessLogEntriesKoneAccessLogEventTypesGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\Exos\ExosApi\Model\GetAccessLogEventTypeOutputWithTime**](../Model/GetAccessLogEventTypeOutputWithTime.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
