# Exos\ExosApi\DownloadLogApi

All URIs are relative to /ExosApi/api, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**v10DownloadLogEntriesGet()**](DownloadLogApi.md#v10DownloadLogEntriesGet) | **GET** /v1.0/downloadLogEntries | Get download log entries by odata query options |


## `v10DownloadLogEntriesGet()`

```php
v10DownloadLogEntriesGet($expand, $filter, $search_string, $count, $orderby, $select, $skip, $top): \Exos\ExosApi\Model\GetDownloadLogEntriesOutput
```

Get download log entries by odata query options

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\DownloadLogApi(
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
    $result = $apiInstance->v10DownloadLogEntriesGet($expand, $filter, $search_string, $count, $orderby, $select, $skip, $top);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DownloadLogApi->v10DownloadLogEntriesGet: ', $e->getMessage(), PHP_EOL;
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

[**\Exos\ExosApi\Model\GetDownloadLogEntriesOutput**](../Model/GetDownloadLogEntriesOutput.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
