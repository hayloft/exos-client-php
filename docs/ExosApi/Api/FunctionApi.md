# Exos\ExosApi\FunctionApi

All URIs are relative to /ExosApi/api, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**v10FunctionsGet()**](FunctionApi.md#v10FunctionsGet) | **GET** /v1.0/functions | get a list of functions by odata query options |


## `v10FunctionsGet()`

```php
v10FunctionsGet($expand, $filter, $search_string, $count, $orderby, $select, $skip, $top): \Exos\ExosApi\Model\GetFunctionsOutput
```

get a list of functions by odata query options

Be aware that a query made here can return up to 10000 records. If you need more, please use the built in paging functionality with $top and $skip.<br /> http://www.asp.net/web-api/overview/odata-support-in-aspnet-web-api/supporting-odata-query-options. <br /> The provided searchString will result in a fulltext search on all selected fields. If the passed value is encapsulated with quotes(\"), it will be treated as an exact match search, otherwise the passed value will be an OR search over all keywords(splitted by space character).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\FunctionApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$expand = 'expand_example'; // string | no expand
$filter = 'filter_example'; // string | FunctionType eq 'Visit'
$search_string = 'search_string_example'; // string | Fulltext search on all string, int and date fields that are selected with $select.
$count = true; // bool | adds total possible results to the response
$orderby = 'orderby_example'; // string | FunctionName desc
$select = 'select_example'; // string | FunctionName
$skip = 56; // int | skips the first x entries of the response(paging)
$top = 1000; // int | limits the number of returned records.

try {
    $result = $apiInstance->v10FunctionsGet($expand, $filter, $search_string, $count, $orderby, $select, $skip, $top);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FunctionApi->v10FunctionsGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **expand** | **string**| no expand | [optional] |
| **filter** | **string**| FunctionType eq &#39;Visit&#39; | [optional] |
| **search_string** | **string**| Fulltext search on all string, int and date fields that are selected with $select. | [optional] |
| **count** | **bool**| adds total possible results to the response | [optional] [default to true] |
| **orderby** | **string**| FunctionName desc | [optional] |
| **select** | **string**| FunctionName | [optional] |
| **skip** | **int**| skips the first x entries of the response(paging) | [optional] |
| **top** | **int**| limits the number of returned records. | [optional] [default to 1000] |

### Return type

[**\Exos\ExosApi\Model\GetFunctionsOutput**](../Model/GetFunctionsOutput.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
