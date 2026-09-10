# Exos\ExosApi\AccessLogApi

All URIs are relative to /ExosApi/api, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**v10AccessLogEntriesAccessLogEventTypesGet()**](AccessLogApi.md#v10AccessLogEntriesAccessLogEventTypesGet) | **GET** /v1.0/accessLogEntries/accessLogEventTypes | Get access event type info |
| [**v10AccessLogEntriesGet()**](AccessLogApi.md#v10AccessLogEntriesGet) | **GET** /v1.0/accessLogEntries | Get access log entries by odata query options |
| [**v10AccessLogEntriesPersonalGet()**](AccessLogApi.md#v10AccessLogEntriesPersonalGet) | **GET** /v1.0/accessLogEntriesPersonal | Get access log entries by odata query options |


## `v10AccessLogEntriesAccessLogEventTypesGet()`

```php
v10AccessLogEntriesAccessLogEventTypesGet(): \Exos\ExosApi\Model\GetAccessLogEventTypeOutputWithTime
```

Get access event type info

Get access event type info.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\AccessLogApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);

try {
    $result = $apiInstance->v10AccessLogEntriesAccessLogEventTypesGet();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AccessLogApi->v10AccessLogEntriesAccessLogEventTypesGet: ', $e->getMessage(), PHP_EOL;
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

## `v10AccessLogEntriesGet()`

```php
v10AccessLogEntriesGet($expand, $filter, $search_string, $count, $orderby, $select, $skip, $top): \Exos\ExosApi\Model\GetAccessLogEntriesOutput
```

Get access log entries by odata query options

Get access log entries by odata query options.<br /> Be aware that if you have API_AC_AccessLogEntriesRead permission to none, you will not able to get information.<br /> Furthermore, If you have SYS_LOGALM_PERSONDATA permission set to none, you will not be able to filter by name nor staff no.<br /> Lastly, If you have SYS_LOGALM_DATEEDIT permission set to none, you will not be able to remove the Date/Time field in the filter and it will have the value: now - 24h.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\AccessLogApi(
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
    $result = $apiInstance->v10AccessLogEntriesGet($expand, $filter, $search_string, $count, $orderby, $select, $skip, $top);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AccessLogApi->v10AccessLogEntriesGet: ', $e->getMessage(), PHP_EOL;
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

[**\Exos\ExosApi\Model\GetAccessLogEntriesOutput**](../Model/GetAccessLogEntriesOutput.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10AccessLogEntriesPersonalGet()`

```php
v10AccessLogEntriesPersonalGet($expand, $filter, $search_string, $count, $orderby, $select, $skip, $top): \Exos\ExosApi\Model\GetAccessLogEntriesOutput
```

Get access log entries by odata query options

Be aware that a query made here can return up to 10000 records. If you need more, please use the built in paging functionality with $top and $skip.<br /> http://www.asp.net/web-api/overview/odata-support-in-aspnet-web-api/supporting-odata-query-options.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\AccessLogApi(
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
$select = 'select_example'; // string | EmployeeName
$skip = 56; // int | skips the first x entries of the response(paging)
$top = 1000; // int | limits the number of returned records.

try {
    $result = $apiInstance->v10AccessLogEntriesPersonalGet($expand, $filter, $search_string, $count, $orderby, $select, $skip, $top);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AccessLogApi->v10AccessLogEntriesPersonalGet: ', $e->getMessage(), PHP_EOL;
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
| **select** | **string**| EmployeeName | [optional] |
| **skip** | **int**| skips the first x entries of the response(paging) | [optional] |
| **top** | **int**| limits the number of returned records. | [optional] [default to 1000] |

### Return type

[**\Exos\ExosApi\Model\GetAccessLogEntriesOutput**](../Model/GetAccessLogEntriesOutput.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
