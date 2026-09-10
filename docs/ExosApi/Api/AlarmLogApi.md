# Exos\ExosApi\AlarmLogApi

All URIs are relative to /ExosApi/api, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**v10AlarmLogEntriesAlarmLogEventTypesGet()**](AlarmLogApi.md#v10AlarmLogEntriesAlarmLogEventTypesGet) | **GET** /v1.0/alarmLogEntries/alarmLogEventTypes | Get alarm event type info |
| [**v10AlarmLogEntriesGet()**](AlarmLogApi.md#v10AlarmLogEntriesGet) | **GET** /v1.0/alarmLogEntries | Get alarm log entries by odata query options |


## `v10AlarmLogEntriesAlarmLogEventTypesGet()`

```php
v10AlarmLogEntriesAlarmLogEventTypesGet(): \Exos\ExosApi\Model\GetAlarmLogEventTypeOutputWithTime
```

Get alarm event type info

Get alarm event type info.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\AlarmLogApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);

try {
    $result = $apiInstance->v10AlarmLogEntriesAlarmLogEventTypesGet();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AlarmLogApi->v10AlarmLogEntriesAlarmLogEventTypesGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\Exos\ExosApi\Model\GetAlarmLogEventTypeOutputWithTime**](../Model/GetAlarmLogEventTypeOutputWithTime.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10AlarmLogEntriesGet()`

```php
v10AlarmLogEntriesGet($expand, $filter, $search_string, $count, $orderby, $select, $skip, $top): \Exos\ExosApi\Model\GetAlarmLogEntriesOutput
```

Get alarm log entries by odata query options

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\AlarmLogApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$expand = 'expand_example'; // string | no expand
$filter = 'filter_example'; // string | LogDate ge 2016-12-31
$search_string = 'search_string_example'; // string | Fulltext search on all string, int and date fields that are selected with $select.
$count = true; // bool | adds total possible results to the response
$orderby = 'LogDate desc'; // string | LogDate desc
$select = 'select_example'; // string | Name
$skip = 56; // int | skips the first x entries of the response(paging)
$top = 1000; // int | limits the number of returned records.

try {
    $result = $apiInstance->v10AlarmLogEntriesGet($expand, $filter, $search_string, $count, $orderby, $select, $skip, $top);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AlarmLogApi->v10AlarmLogEntriesGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **expand** | **string**| no expand | [optional] |
| **filter** | **string**| LogDate ge 2016-12-31 | [optional] |
| **search_string** | **string**| Fulltext search on all string, int and date fields that are selected with $select. | [optional] |
| **count** | **bool**| adds total possible results to the response | [optional] [default to true] |
| **orderby** | **string**| LogDate desc | [optional] [default to &#39;LogDate desc&#39;] |
| **select** | **string**| Name | [optional] |
| **skip** | **int**| skips the first x entries of the response(paging) | [optional] |
| **top** | **int**| limits the number of returned records. | [optional] [default to 1000] |

### Return type

[**\Exos\ExosApi\Model\GetAlarmLogEntriesOutput**](../Model/GetAlarmLogEntriesOutput.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
