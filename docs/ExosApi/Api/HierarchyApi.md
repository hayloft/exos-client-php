# Exos\ExosApi\HierarchyApi

All URIs are relative to /ExosApi/api, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**v10HierarchiesCreatePost()**](HierarchyApi.md#v10HierarchiesCreatePost) | **POST** /v1.0/hierarchies/create | create a new hierarchy |
| [**v10HierarchiesGet()**](HierarchyApi.md#v10HierarchiesGet) | **GET** /v1.0/hierarchies | get a list of hierarchies by odata query option. |
| [**v10HierarchiesHierarchyIdBlockPost()**](HierarchyApi.md#v10HierarchiesHierarchyIdBlockPost) | **POST** /v1.0/hierarchies/{hierarchyId}/block | blocks a complete hierarchy. All persons which belong to this hierarchy will be blocked to |
| [**v10HierarchiesHierarchyIdDeletePost()**](HierarchyApi.md#v10HierarchiesHierarchyIdDeletePost) | **POST** /v1.0/hierarchies/{hierarchyId}/delete | delete a hierarchy |
| [**v10HierarchiesHierarchyIdUnblockPost()**](HierarchyApi.md#v10HierarchiesHierarchyIdUnblockPost) | **POST** /v1.0/hierarchies/{hierarchyId}/unblock | unblocks a complete hierarchy. Persons which belong to this hierarchy can also be unblocked |
| [**v10HierarchiesHierarchyIdUpdatePost()**](HierarchyApi.md#v10HierarchiesHierarchyIdUpdatePost) | **POST** /v1.0/hierarchies/{hierarchyId}/update | update a hierarchy |


## `v10HierarchiesCreatePost()`

```php
v10HierarchiesCreatePost($create_hierarchy_input): \Exos\ExosApi\Model\HierarchyIdOutputWithTime
```

create a new hierarchy

creates a new hierarchy.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\HierarchyApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$create_hierarchy_input = new \Exos\ExosApi\Model\CreateHierarchyInput(); // \Exos\ExosApi\Model\CreateHierarchyInput | hierarchy to create

try {
    $result = $apiInstance->v10HierarchiesCreatePost($create_hierarchy_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling HierarchyApi->v10HierarchiesCreatePost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **create_hierarchy_input** | [**\Exos\ExosApi\Model\CreateHierarchyInput**](../Model/CreateHierarchyInput.md)| hierarchy to create | |

### Return type

[**\Exos\ExosApi\Model\HierarchyIdOutputWithTime**](../Model/HierarchyIdOutputWithTime.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10HierarchiesGet()`

```php
v10HierarchiesGet($hierarchy_type, $expand, $filter, $search_string, $count, $orderby, $select, $skip, $top): \Exos\ExosApi\Model\GetHierarchyOutputWithTime
```

get a list of hierarchies by odata query option.

Be aware that a query made here can return up to 10000 records. If you need more, please use the built in paging functionality with $top and $skip.<br /> http://www.asp.net/web-api/overview/odata-support-in-aspnet-web-api/supporting-odata-query-options. <br /> The provided searchString will result in a fulltext search on all selected fields. If the passed value is encapsulated with quotes(\"), it will be treated as an exact match search, otherwise the passed value will be an OR search over all keywords(splitted by space character).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\HierarchyApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$hierarchy_type = 'Intern'; // string | the hierarchy type
$expand = 'expand_example'; // string | 
$filter = 'filter_example'; // string | 
$search_string = 'search_string_example'; // string | Fulltext search on all string, int and date fields that are selected with $select and $expand.
$count = true; // bool | adds total possible results to the response
$orderby = 'orderby_example'; // string | 
$select = 'select_example'; // string | 
$skip = 56; // int | skips the first x entries of the response(paging)
$top = 1000; // int | limits the number of returned records.

try {
    $result = $apiInstance->v10HierarchiesGet($hierarchy_type, $expand, $filter, $search_string, $count, $orderby, $select, $skip, $top);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling HierarchyApi->v10HierarchiesGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **hierarchy_type** | **string**| the hierarchy type | [optional] [default to &#39;Intern&#39;] |
| **expand** | **string**|  | [optional] |
| **filter** | **string**|  | [optional] |
| **search_string** | **string**| Fulltext search on all string, int and date fields that are selected with $select and $expand. | [optional] |
| **count** | **bool**| adds total possible results to the response | [optional] [default to true] |
| **orderby** | **string**|  | [optional] |
| **select** | **string**|  | [optional] |
| **skip** | **int**| skips the first x entries of the response(paging) | [optional] |
| **top** | **int**| limits the number of returned records. | [optional] [default to 1000] |

### Return type

[**\Exos\ExosApi\Model\GetHierarchyOutputWithTime**](../Model/GetHierarchyOutputWithTime.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10HierarchiesHierarchyIdBlockPost()`

```php
v10HierarchiesHierarchyIdBlockPost($hierarchy_id, $block_hierarchy_input): \Exos\ExosApi\Model\VoidResponseOutput
```

blocks a complete hierarchy. All persons which belong to this hierarchy will be blocked to

<p>blocks a complete hierarchy. Alle persons which belong to this hierarchy will be blocked to.</p>

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\HierarchyApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$hierarchy_id = 'hierarchy_id_example'; // string | id of hierarchy
$block_hierarchy_input = new \Exos\ExosApi\Model\BlockHierarchyInput(); // \Exos\ExosApi\Model\BlockHierarchyInput

try {
    $result = $apiInstance->v10HierarchiesHierarchyIdBlockPost($hierarchy_id, $block_hierarchy_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling HierarchyApi->v10HierarchiesHierarchyIdBlockPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **hierarchy_id** | **string**| id of hierarchy | |
| **block_hierarchy_input** | [**\Exos\ExosApi\Model\BlockHierarchyInput**](../Model/BlockHierarchyInput.md)|  | |

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

## `v10HierarchiesHierarchyIdDeletePost()`

```php
v10HierarchiesHierarchyIdDeletePost($hierarchy_id): \Exos\ExosApi\Model\VoidResponseOutput
```

delete a hierarchy

deletes a hierarchy.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\HierarchyApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$hierarchy_id = 'hierarchy_id_example'; // string | id of hierarchy

try {
    $result = $apiInstance->v10HierarchiesHierarchyIdDeletePost($hierarchy_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling HierarchyApi->v10HierarchiesHierarchyIdDeletePost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **hierarchy_id** | **string**| id of hierarchy | |

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

## `v10HierarchiesHierarchyIdUnblockPost()`

```php
v10HierarchiesHierarchyIdUnblockPost($hierarchy_id, $unblock_hierarchy_input, $unblock_all_employees): \Exos\ExosApi\Model\VoidResponseOutput
```

unblocks a complete hierarchy. Persons which belong to this hierarchy can also be unblocked

<p>unblocks a complete hierarchy. Persons which belong to this hierarchy can also be unblocked when parameter 'unblockAllEmployees' is set to 'true'.</p>

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\HierarchyApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$hierarchy_id = 'hierarchy_id_example'; // string | id of hierarchy
$unblock_hierarchy_input = new \Exos\ExosApi\Model\UnblockHierarchyInput(); // \Exos\ExosApi\Model\UnblockHierarchyInput
$unblock_all_employees = false; // bool | Should all employees be unblocked when unblocking hierarchy

try {
    $result = $apiInstance->v10HierarchiesHierarchyIdUnblockPost($hierarchy_id, $unblock_hierarchy_input, $unblock_all_employees);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling HierarchyApi->v10HierarchiesHierarchyIdUnblockPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **hierarchy_id** | **string**| id of hierarchy | |
| **unblock_hierarchy_input** | [**\Exos\ExosApi\Model\UnblockHierarchyInput**](../Model/UnblockHierarchyInput.md)|  | |
| **unblock_all_employees** | **bool**| Should all employees be unblocked when unblocking hierarchy | [optional] [default to false] |

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

## `v10HierarchiesHierarchyIdUpdatePost()`

```php
v10HierarchiesHierarchyIdUpdatePost($hierarchy_id, $update_hierarchy_input): \Exos\ExosApi\Model\HierarchyIdOutputWithTime
```

update a hierarchy

updates a hierarchy.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\HierarchyApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$hierarchy_id = 'hierarchy_id_example'; // string | id of hierarchy
$update_hierarchy_input = new \Exos\ExosApi\Model\UpdateHierarchyInput(); // \Exos\ExosApi\Model\UpdateHierarchyInput | hierarchyId to create

try {
    $result = $apiInstance->v10HierarchiesHierarchyIdUpdatePost($hierarchy_id, $update_hierarchy_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling HierarchyApi->v10HierarchiesHierarchyIdUpdatePost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **hierarchy_id** | **string**| id of hierarchy | |
| **update_hierarchy_input** | [**\Exos\ExosApi\Model\UpdateHierarchyInput**](../Model/UpdateHierarchyInput.md)| hierarchyId to create | |

### Return type

[**\Exos\ExosApi\Model\HierarchyIdOutputWithTime**](../Model/HierarchyIdOutputWithTime.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
