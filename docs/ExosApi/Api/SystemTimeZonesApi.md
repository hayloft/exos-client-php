# Exos\ExosApi\SystemTimeZonesApi

All URIs are relative to /ExosApi/api, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**v10SystemTimeZonesGet()**](SystemTimeZonesApi.md#v10SystemTimeZonesGet) | **GET** /v1.0/systemTimeZones | get all system timezones (world time zones) |


## `v10SystemTimeZonesGet()`

```php
v10SystemTimeZonesGet(): \Exos\ExosApi\Model\GetSystemTimeZonesOutputWithTime
```

get all system timezones (world time zones)

get all system timezones (world time zones)

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\SystemTimeZonesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);

try {
    $result = $apiInstance->v10SystemTimeZonesGet();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SystemTimeZonesApi->v10SystemTimeZonesGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\Exos\ExosApi\Model\GetSystemTimeZonesOutputWithTime**](../Model/GetSystemTimeZonesOutputWithTime.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
