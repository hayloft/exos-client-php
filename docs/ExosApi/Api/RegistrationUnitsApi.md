# Exos\ExosApi\RegistrationUnitsApi

All URIs are relative to /ExosApi/api, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**v10RegistrationUnitsGet()**](RegistrationUnitsApi.md#v10RegistrationUnitsGet) | **GET** /v1.0/registrationUnits | get registrationUnits by odata query options |


## `v10RegistrationUnitsGet()`

```php
v10RegistrationUnitsGet($expand, $filter, $search_string, $count, $orderby, $select, $skip, $top): \Exos\ExosApi\Model\GetRegistrationUnitsOutput
```

get registrationUnits by odata query options

Be aware that a query made here can return up to 10000 records. If you need more, please use the built in paging functionality with $top and $skip. http://www.asp.net/web-api/overview/odata-support-in-aspnet-web-api/supporting-odata-query-options.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\RegistrationUnitsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$expand = 'expand_example'; // string | 
$filter = 'filter_example'; // string | startsWith(DeviceAddress, 'I010001')
$search_string = 'search_string_example'; // string | Fulltext search on all string, int and date fields that are selected with $select and $expand.
$count = true; // bool | adds total possible results to the response
$orderby = 'orderby_example'; // string | DisplayName desc
$select = 'select_example'; // string | DisplayName
$skip = 56; // int | skips the first x entries of the response(paging)
$top = 1000; // int | limits the number of returned records.

try {
    $result = $apiInstance->v10RegistrationUnitsGet($expand, $filter, $search_string, $count, $orderby, $select, $skip, $top);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling RegistrationUnitsApi->v10RegistrationUnitsGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **expand** | **string**|  | [optional] |
| **filter** | **string**| startsWith(DeviceAddress, &#39;I010001&#39;) | [optional] |
| **search_string** | **string**| Fulltext search on all string, int and date fields that are selected with $select and $expand. | [optional] |
| **count** | **bool**| adds total possible results to the response | [optional] [default to true] |
| **orderby** | **string**| DisplayName desc | [optional] |
| **select** | **string**| DisplayName | [optional] |
| **skip** | **int**| skips the first x entries of the response(paging) | [optional] |
| **top** | **int**| limits the number of returned records. | [optional] [default to 1000] |

### Return type

[**\Exos\ExosApi\Model\GetRegistrationUnitsOutput**](../Model/GetRegistrationUnitsOutput.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
