# Exos\ExosApi\TimeZoneApi

All URIs are relative to /ExosApi/api, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**v10TimeZonesGet()**](TimeZoneApi.md#v10TimeZonesGet) | **GET** /v1.0/timeZones | get a list of time zones with the specific filters |


## `v10TimeZonesGet()`

```php
v10TimeZonesGet($expand, $filter, $search_string, $access_right_id, $access_domain_id, $access_right_type, $count, $orderby, $select, $skip, $top): \Exos\ExosApi\Model\GetTimeZoneOutputWithTime
```

get a list of time zones with the specific filters

Be aware that a query made here can return up to 10000 records. If you need more, please use the built in paging functionality with $top and $skip. http://www.asp.net/web-api/overview/odata-support-in-aspnet-web-api/supporting-odata-query-options.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\TimeZoneApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$expand = 'expand_example'; // string | 
$filter = 'filter_example'; // string | 
$search_string = 'search_string_example'; // string | Fulltext search on all string, int and date fields that are selected with $select and $expand.
$access_right_id = 'access_right_id_example'; // string | Id of the access right. Limits the output to all the time zones assignable to this access right.
$access_domain_id = 'access_domain_id_example'; // string | Id of the access domain. Limits the output to all the time zones assignable to this access domain.
$access_right_type = new \Exos\ExosApi\Model\\Exos\ExosApi\Model\AccessRightType(); // \Exos\ExosApi\Model\AccessRightType | Type of the access right. Limits the output to all the time zones assignable to this access right type.
$count = true; // bool | adds total possible results to the response
$orderby = 'orderby_example'; // string | 
$select = 'select_example'; // string | 
$skip = 56; // int | skips the first x entries of the response(paging)
$top = 1000; // int | limits the number of returned records.

try {
    $result = $apiInstance->v10TimeZonesGet($expand, $filter, $search_string, $access_right_id, $access_domain_id, $access_right_type, $count, $orderby, $select, $skip, $top);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TimeZoneApi->v10TimeZonesGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **expand** | **string**|  | [optional] |
| **filter** | **string**|  | [optional] |
| **search_string** | **string**| Fulltext search on all string, int and date fields that are selected with $select and $expand. | [optional] |
| **access_right_id** | **string**| Id of the access right. Limits the output to all the time zones assignable to this access right. | [optional] |
| **access_domain_id** | **string**| Id of the access domain. Limits the output to all the time zones assignable to this access domain. | [optional] |
| **access_right_type** | [**\Exos\ExosApi\Model\AccessRightType**](../Model/.md)| Type of the access right. Limits the output to all the time zones assignable to this access right type. | [optional] |
| **count** | **bool**| adds total possible results to the response | [optional] [default to true] |
| **orderby** | **string**|  | [optional] |
| **select** | **string**|  | [optional] |
| **skip** | **int**| skips the first x entries of the response(paging) | [optional] |
| **top** | **int**| limits the number of returned records. | [optional] [default to 1000] |

### Return type

[**\Exos\ExosApi\Model\GetTimeZoneOutputWithTime**](../Model/GetTimeZoneOutputWithTime.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
