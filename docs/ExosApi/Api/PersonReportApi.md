# Exos\ExosApi\PersonReportApi

All URIs are relative to /ExosApi/api, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**v10PersonReportsCreatePost()**](PersonReportApi.md#v10PersonReportsCreatePost) | **POST** /v1.0/personReports/create | Save a report for a specific person. |
| [**v10PersonReportsGet()**](PersonReportApi.md#v10PersonReportsGet) | **GET** /v1.0/personReports | get a list of person reports for a specific person |
| [**v10PersonReportsPersonReportIdDeletePost()**](PersonReportApi.md#v10PersonReportsPersonReportIdDeletePost) | **POST** /v1.0/personReports/{personReportId}/delete | Delete a specific person report. |
| [**v10PersonReportsSettingsMaximumReportSizePost()**](PersonReportApi.md#v10PersonReportsSettingsMaximumReportSizePost) | **POST** /v1.0/personReports/settings/MaximumReportSize | expression that defines the MaximumReportSizeInBytes parameter |


## `v10PersonReportsCreatePost()`

```php
v10PersonReportsCreatePost($create_person_report_input): \Exos\ExosApi\Model\CreatePersonReportOutputWithTime
```

Save a report for a specific person.

Saves a (signed) report for a specific person.<br />The report must be passed as base64 encoded string.<br />The report size is limited to 8MB per default and can be controlled with the Parameter SYS/MAXPERSONREPORTSIZEINBYTE.<br />.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\PersonReportApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$create_person_report_input = new \Exos\ExosApi\Model\CreatePersonReportInput(); // \Exos\ExosApi\Model\CreatePersonReportInput | Report

try {
    $result = $apiInstance->v10PersonReportsCreatePost($create_person_report_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PersonReportApi->v10PersonReportsCreatePost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **create_person_report_input** | [**\Exos\ExosApi\Model\CreatePersonReportInput**](../Model/CreatePersonReportInput.md)| Report | |

### Return type

[**\Exos\ExosApi\Model\CreatePersonReportOutputWithTime**](../Model/CreatePersonReportOutputWithTime.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10PersonReportsGet()`

```php
v10PersonReportsGet($person_id, $expand, $filter, $search_string, $count, $orderby, $select, $skip, $top): \Exos\ExosApi\Model\GetPersonReportsOutputWithTime
```

get a list of person reports for a specific person

Be aware that a query made here can return up to 10000 records. If you need more, please use the built in paging functionality with $top and $skip. http://www.asp.net/web-api/overview/odata-support-in-aspnet-web-api/supporting-odata-query-options.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\PersonReportApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$person_id = 'person_id_example'; // string | id of person
$expand = 'expand_example'; // string | 
$filter = 'filter_example'; // string | 
$search_string = 'search_string_example'; // string | Fulltext search on all string, int and date fields that are selected with $select and $expand.
$count = true; // bool | adds total possible results to the response
$orderby = 'orderby_example'; // string | 
$select = 'select_example'; // string | 
$skip = 56; // int | skips the first x entries of the response(paging)
$top = 1000; // int | limits the number of returned records.

try {
    $result = $apiInstance->v10PersonReportsGet($person_id, $expand, $filter, $search_string, $count, $orderby, $select, $skip, $top);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PersonReportApi->v10PersonReportsGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **person_id** | **string**| id of person | |
| **expand** | **string**|  | [optional] |
| **filter** | **string**|  | [optional] |
| **search_string** | **string**| Fulltext search on all string, int and date fields that are selected with $select and $expand. | [optional] |
| **count** | **bool**| adds total possible results to the response | [optional] [default to true] |
| **orderby** | **string**|  | [optional] |
| **select** | **string**|  | [optional] |
| **skip** | **int**| skips the first x entries of the response(paging) | [optional] |
| **top** | **int**| limits the number of returned records. | [optional] [default to 1000] |

### Return type

[**\Exos\ExosApi\Model\GetPersonReportsOutputWithTime**](../Model/GetPersonReportsOutputWithTime.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10PersonReportsPersonReportIdDeletePost()`

```php
v10PersonReportsPersonReportIdDeletePost($person_report_id): \Exos\ExosApi\Model\VoidResponseOutput
```

Delete a specific person report.

Deletes a specific person report.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\PersonReportApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$person_report_id = 'person_report_id_example'; // string | id of person report

try {
    $result = $apiInstance->v10PersonReportsPersonReportIdDeletePost($person_report_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PersonReportApi->v10PersonReportsPersonReportIdDeletePost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **person_report_id** | **string**| id of person report | |

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

## `v10PersonReportsSettingsMaximumReportSizePost()`

```php
v10PersonReportsSettingsMaximumReportSizePost($set_maximum_report_size_in_bytes_input): \Exos\ExosApi\Model\VoidResponseOutput
```

expression that defines the MaximumReportSizeInBytes parameter

Default 8388608, valid length: 0-2147483647.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\PersonReportApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$set_maximum_report_size_in_bytes_input = new \Exos\ExosApi\Model\SetMaximumReportSizeInBytesInput(); // \Exos\ExosApi\Model\SetMaximumReportSizeInBytesInput | set parameter value

try {
    $result = $apiInstance->v10PersonReportsSettingsMaximumReportSizePost($set_maximum_report_size_in_bytes_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PersonReportApi->v10PersonReportsSettingsMaximumReportSizePost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **set_maximum_report_size_in_bytes_input** | [**\Exos\ExosApi\Model\SetMaximumReportSizeInBytesInput**](../Model/SetMaximumReportSizeInBytesInput.md)| set parameter value | [optional] |

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
