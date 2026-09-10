# Exos\ExosApi\FieldConfigurationApi

All URIs are relative to /ExosApi/api, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**v10FieldConfigurationCreatePost()**](FieldConfigurationApi.md#v10FieldConfigurationCreatePost) | **POST** /v1.0/fieldConfiguration/create | create field configuration |
| [**v10FieldConfigurationDropListCreatePost()**](FieldConfigurationApi.md#v10FieldConfigurationDropListCreatePost) | **POST** /v1.0/fieldConfigurationDropList/create | create field configuration drop list value |
| [**v10FieldConfigurationDropListFieldIdDeletePost()**](FieldConfigurationApi.md#v10FieldConfigurationDropListFieldIdDeletePost) | **POST** /v1.0/fieldConfigurationDropList/{fieldId}/delete | delete field configuration drop list value |
| [**v10FieldConfigurationDropListGet()**](FieldConfigurationApi.md#v10FieldConfigurationDropListGet) | **GET** /v1.0/fieldConfigurationDropList | get drop down list for specific field |
| [**v10FieldConfigurationFieldIdDeletePost()**](FieldConfigurationApi.md#v10FieldConfigurationFieldIdDeletePost) | **POST** /v1.0/fieldConfiguration/{fieldId}/delete | delete field configuration |
| [**v10FieldConfigurationFieldIdUpdatePost()**](FieldConfigurationApi.md#v10FieldConfigurationFieldIdUpdatePost) | **POST** /v1.0/fieldConfiguration/{fieldId}/update | update field configuration |
| [**v10FieldConfigurationGet()**](FieldConfigurationApi.md#v10FieldConfigurationGet) | **GET** /v1.0/fieldConfiguration | get fields allowed to read |


## `v10FieldConfigurationCreatePost()`

```php
v10FieldConfigurationCreatePost($create_field_configuration_input): \Exos\ExosApi\Model\CreateFieldConfigurationOutputWithTime
```

create field configuration

Creates a free field of a specific type. .

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\FieldConfigurationApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$create_field_configuration_input = new \Exos\ExosApi\Model\CreateFieldConfigurationInput(); // \Exos\ExosApi\Model\CreateFieldConfigurationInput | field configuration to add

try {
    $result = $apiInstance->v10FieldConfigurationCreatePost($create_field_configuration_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FieldConfigurationApi->v10FieldConfigurationCreatePost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **create_field_configuration_input** | [**\Exos\ExosApi\Model\CreateFieldConfigurationInput**](../Model/CreateFieldConfigurationInput.md)| field configuration to add | |

### Return type

[**\Exos\ExosApi\Model\CreateFieldConfigurationOutputWithTime**](../Model/CreateFieldConfigurationOutputWithTime.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10FieldConfigurationDropListCreatePost()`

```php
v10FieldConfigurationDropListCreatePost($create_field_configuration_drop_list_input): \Exos\ExosApi\Model\CreateFieldConfigurationDropListOutputWithTime
```

create field configuration drop list value

creates drop list value for a field. The value must be unique. .

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\FieldConfigurationApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$create_field_configuration_drop_list_input = new \Exos\ExosApi\Model\CreateFieldConfigurationDropListInput(); // \Exos\ExosApi\Model\CreateFieldConfigurationDropListInput | field configuration drop list to add

try {
    $result = $apiInstance->v10FieldConfigurationDropListCreatePost($create_field_configuration_drop_list_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FieldConfigurationApi->v10FieldConfigurationDropListCreatePost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **create_field_configuration_drop_list_input** | [**\Exos\ExosApi\Model\CreateFieldConfigurationDropListInput**](../Model/CreateFieldConfigurationDropListInput.md)| field configuration drop list to add | |

### Return type

[**\Exos\ExosApi\Model\CreateFieldConfigurationDropListOutputWithTime**](../Model/CreateFieldConfigurationDropListOutputWithTime.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10FieldConfigurationDropListFieldIdDeletePost()`

```php
v10FieldConfigurationDropListFieldIdDeletePost($field_id, $delete_field_configuration_drop_list_input): \Exos\ExosApi\Model\DeleteFieldConfigurationDropListOutputWithTime
```

delete field configuration drop list value

delete field configuration drop list value

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\FieldConfigurationApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$field_id = 'Field01'; // string | field configuration id
$delete_field_configuration_drop_list_input = new \Exos\ExosApi\Model\DeleteFieldConfigurationDropListInput(); // \Exos\ExosApi\Model\DeleteFieldConfigurationDropListInput | value in drop list to delete

try {
    $result = $apiInstance->v10FieldConfigurationDropListFieldIdDeletePost($field_id, $delete_field_configuration_drop_list_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FieldConfigurationApi->v10FieldConfigurationDropListFieldIdDeletePost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **field_id** | **string**| field configuration id | [default to &#39;Field01&#39;] |
| **delete_field_configuration_drop_list_input** | [**\Exos\ExosApi\Model\DeleteFieldConfigurationDropListInput**](../Model/DeleteFieldConfigurationDropListInput.md)| value in drop list to delete | |

### Return type

[**\Exos\ExosApi\Model\DeleteFieldConfigurationDropListOutputWithTime**](../Model/DeleteFieldConfigurationDropListOutputWithTime.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10FieldConfigurationDropListGet()`

```php
v10FieldConfigurationDropListGet($field_id, $expand, $filter, $search_string, $count, $orderby, $select, $skip, $top): \Exos\ExosApi\Model\GetFieldConfigurationDropDownListOutputWithTime
```

get drop down list for specific field

Gets a list of possible drop down values for the specific field.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\FieldConfigurationApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$field_id = 'field_id_example'; // string | specific field id
$expand = 'expand_example'; // string | 
$filter = 'filter_example'; // string | 
$search_string = 'search_string_example'; // string | Fulltext search on all string, int and date fields that are selected with $select and $expand.
$count = true; // bool | adds total possible results to the response
$orderby = 'orderby_example'; // string | 
$select = 'select_example'; // string | 
$skip = 56; // int | skips the first x entries of the response(paging)
$top = 1000; // int | limits the number of returned records.

try {
    $result = $apiInstance->v10FieldConfigurationDropListGet($field_id, $expand, $filter, $search_string, $count, $orderby, $select, $skip, $top);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FieldConfigurationApi->v10FieldConfigurationDropListGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **field_id** | **string**| specific field id | |
| **expand** | **string**|  | [optional] |
| **filter** | **string**|  | [optional] |
| **search_string** | **string**| Fulltext search on all string, int and date fields that are selected with $select and $expand. | [optional] |
| **count** | **bool**| adds total possible results to the response | [optional] [default to true] |
| **orderby** | **string**|  | [optional] |
| **select** | **string**|  | [optional] |
| **skip** | **int**| skips the first x entries of the response(paging) | [optional] |
| **top** | **int**| limits the number of returned records. | [optional] [default to 1000] |

### Return type

[**\Exos\ExosApi\Model\GetFieldConfigurationDropDownListOutputWithTime**](../Model/GetFieldConfigurationDropDownListOutputWithTime.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10FieldConfigurationFieldIdDeletePost()`

```php
v10FieldConfigurationFieldIdDeletePost($field_id): \Exos\ExosApi\Model\DeleteFieldConfigurationOutputWithTime
```

delete field configuration

Delete specific free field. .

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\FieldConfigurationApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$field_id = 'Field01'; // string | field configuration to delete

try {
    $result = $apiInstance->v10FieldConfigurationFieldIdDeletePost($field_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FieldConfigurationApi->v10FieldConfigurationFieldIdDeletePost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **field_id** | **string**| field configuration to delete | [default to &#39;Field01&#39;] |

### Return type

[**\Exos\ExosApi\Model\DeleteFieldConfigurationOutputWithTime**](../Model/DeleteFieldConfigurationOutputWithTime.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10FieldConfigurationFieldIdUpdatePost()`

```php
v10FieldConfigurationFieldIdUpdatePost($field_id, $update_field_configuration_input): \Exos\ExosApi\Model\UpdateFieldConfigurationOutputWithTime
```

update field configuration

updates a field. .

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\FieldConfigurationApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$field_id = 'Field01'; // string | field configuration id
$update_field_configuration_input = new \Exos\ExosApi\Model\UpdateFieldConfigurationInput(); // \Exos\ExosApi\Model\UpdateFieldConfigurationInput | fieldConfiguration to be updated

try {
    $result = $apiInstance->v10FieldConfigurationFieldIdUpdatePost($field_id, $update_field_configuration_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FieldConfigurationApi->v10FieldConfigurationFieldIdUpdatePost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **field_id** | **string**| field configuration id | [default to &#39;Field01&#39;] |
| **update_field_configuration_input** | [**\Exos\ExosApi\Model\UpdateFieldConfigurationInput**](../Model/UpdateFieldConfigurationInput.md)| fieldConfiguration to be updated | |

### Return type

[**\Exos\ExosApi\Model\UpdateFieldConfigurationOutputWithTime**](../Model/UpdateFieldConfigurationOutputWithTime.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10FieldConfigurationGet()`

```php
v10FieldConfigurationGet($expand, $filter, $search_string, $count, $orderby, $select, $skip, $top): \Exos\ExosApi\Model\GetFieldConfigurationOutputWithTime
```

get fields allowed to read

Gets a flat list of possible fields that can be read in this resource.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\FieldConfigurationApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$expand = 'expand_example'; // string | 
$filter = 'filter_example'; // string | 
$search_string = 'search_string_example'; // string | Fulltext search on all string, int and date fields that are selected with $select and $expand.
$count = true; // bool | adds total possible results to the response
$orderby = 'orderby_example'; // string | 
$select = 'select_example'; // string | 
$skip = 56; // int | skips the first x entries of the response(paging)
$top = 1000; // int | limits the number of returned records.

try {
    $result = $apiInstance->v10FieldConfigurationGet($expand, $filter, $search_string, $count, $orderby, $select, $skip, $top);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FieldConfigurationApi->v10FieldConfigurationGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **expand** | **string**|  | [optional] |
| **filter** | **string**|  | [optional] |
| **search_string** | **string**| Fulltext search on all string, int and date fields that are selected with $select and $expand. | [optional] |
| **count** | **bool**| adds total possible results to the response | [optional] [default to true] |
| **orderby** | **string**|  | [optional] |
| **select** | **string**|  | [optional] |
| **skip** | **int**| skips the first x entries of the response(paging) | [optional] |
| **top** | **int**| limits the number of returned records. | [optional] [default to 1000] |

### Return type

[**\Exos\ExosApi\Model\GetFieldConfigurationOutputWithTime**](../Model/GetFieldConfigurationOutputWithTime.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
