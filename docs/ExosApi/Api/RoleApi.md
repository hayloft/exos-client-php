# Exos\ExosApi\RoleApi

All URIs are relative to /ExosApi/api, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**v10AuthorisationGroupsGet()**](RoleApi.md#v10AuthorisationGroupsGet) | **GET** /v1.0/authorisationGroups | gets the authorisation groups |
| [**v10AuthorisationGroupsRoleIdNumberOfAuthorisedAuthorisationsPerGroupGet()**](RoleApi.md#v10AuthorisationGroupsRoleIdNumberOfAuthorisedAuthorisationsPerGroupGet) | **GET** /v1.0/authorisationGroups/{roleId}/numberOfAuthorisedAuthorisationsPerGroup | gets the number of authorised authorisations per group for a specific role |
| [**v10RoleAuthorisationsGet()**](RoleApi.md#v10RoleAuthorisationsGet) | **GET** /v1.0/roleAuthorisations | gets the authorisation for a specific role. |
| [**v10RoleAuthorisationsRoleIdUpdatePost()**](RoleApi.md#v10RoleAuthorisationsRoleIdUpdatePost) | **POST** /v1.0/roleAuthorisations/{roleId}/update | updates one or more authorisation(s) of a specific role |
| [**v10RolesCopyPost()**](RoleApi.md#v10RolesCopyPost) | **POST** /v1.0/roles/copy | copies all authorisations from an existing role to another role |
| [**v10RolesCreatePost()**](RoleApi.md#v10RolesCreatePost) | **POST** /v1.0/roles/create | create a new role |
| [**v10RolesGet()**](RoleApi.md#v10RolesGet) | **GET** /v1.0/roles | get a list of roles by odata query option. |
| [**v10RolesRoleIdDeletePost()**](RoleApi.md#v10RolesRoleIdDeletePost) | **POST** /v1.0/roles/{roleId}/delete | deletes a existing role |
| [**v10RolesRoleIdUpdatePost()**](RoleApi.md#v10RolesRoleIdUpdatePost) | **POST** /v1.0/roles/{roleId}/update | updates a existing role |


## `v10AuthorisationGroupsGet()`

```php
v10AuthorisationGroupsGet($role_id, $expand, $filter, $search_string, $count, $orderby, $select, $skip, $top): \Exos\ExosApi\Model\GetAuthorisationGroupsOutputWithTime
```

gets the authorisation groups

Be aware that a query made here can return up to 10000 records. If you need more, please use the built in paging functionality with $top and $skip. http://www.asp.net/web-api/overview/odata-support-in-aspnet-web-api/supporting-odata-query-options.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\RoleApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$role_id = 'role_id_example'; // string | specific role id
$expand = 'expand_example'; // string | 
$filter = 'filter_example'; // string | 
$search_string = 'search_string_example'; // string | Fulltext search on all string, int and date fields that are selected with $select and $expand.
$count = true; // bool | adds total possible results to the response
$orderby = 'orderby_example'; // string | 
$select = 'select_example'; // string | 
$skip = 56; // int | skips the first x entries of the response(paging)
$top = 1000; // int | limits the number of returned records.

try {
    $result = $apiInstance->v10AuthorisationGroupsGet($role_id, $expand, $filter, $search_string, $count, $orderby, $select, $skip, $top);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling RoleApi->v10AuthorisationGroupsGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **role_id** | **string**| specific role id | |
| **expand** | **string**|  | [optional] |
| **filter** | **string**|  | [optional] |
| **search_string** | **string**| Fulltext search on all string, int and date fields that are selected with $select and $expand. | [optional] |
| **count** | **bool**| adds total possible results to the response | [optional] [default to true] |
| **orderby** | **string**|  | [optional] |
| **select** | **string**|  | [optional] |
| **skip** | **int**| skips the first x entries of the response(paging) | [optional] |
| **top** | **int**| limits the number of returned records. | [optional] [default to 1000] |

### Return type

[**\Exos\ExosApi\Model\GetAuthorisationGroupsOutputWithTime**](../Model/GetAuthorisationGroupsOutputWithTime.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10AuthorisationGroupsRoleIdNumberOfAuthorisedAuthorisationsPerGroupGet()`

```php
v10AuthorisationGroupsRoleIdNumberOfAuthorisedAuthorisationsPerGroupGet($role_id): \Exos\ExosApi\Model\GetNumberOfAuthorisedAuthorisationsPerGroupOutputWithTime
```

gets the number of authorised authorisations per group for a specific role

gets the number of authorised authorisations per group for a specific role

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\RoleApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$role_id = 'role_id_example'; // string | specific role id

try {
    $result = $apiInstance->v10AuthorisationGroupsRoleIdNumberOfAuthorisedAuthorisationsPerGroupGet($role_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling RoleApi->v10AuthorisationGroupsRoleIdNumberOfAuthorisedAuthorisationsPerGroupGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **role_id** | **string**| specific role id | |

### Return type

[**\Exos\ExosApi\Model\GetNumberOfAuthorisedAuthorisationsPerGroupOutputWithTime**](../Model/GetNumberOfAuthorisedAuthorisationsPerGroupOutputWithTime.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10RoleAuthorisationsGet()`

```php
v10RoleAuthorisationsGet($role_id, $expand, $filter, $search_string, $count, $orderby, $select, $skip, $top): \Exos\ExosApi\Model\GetAuthorisationsOutputWithTime
```

gets the authorisation for a specific role.

Be aware that a query made here can return up to 10000 records. If you need more, please use the built in paging functionality with $top and $skip. http://www.asp.net/web-api/overview/odata-support-in-aspnet-web-api/supporting-odata-query-options.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\RoleApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$role_id = 'role_id_example'; // string | specific role
$expand = 'expand_example'; // string | 
$filter = 'filter_example'; // string | 
$search_string = 'search_string_example'; // string | Fulltext search on all string, int and date fields that are selected with $select and $expand.
$count = true; // bool | adds total possible results to the response
$orderby = 'orderby_example'; // string | 
$select = 'select_example'; // string | 
$skip = 56; // int | skips the first x entries of the response(paging)
$top = 1000; // int | limits the number of returned records.

try {
    $result = $apiInstance->v10RoleAuthorisationsGet($role_id, $expand, $filter, $search_string, $count, $orderby, $select, $skip, $top);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling RoleApi->v10RoleAuthorisationsGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **role_id** | **string**| specific role | |
| **expand** | **string**|  | [optional] |
| **filter** | **string**|  | [optional] |
| **search_string** | **string**| Fulltext search on all string, int and date fields that are selected with $select and $expand. | [optional] |
| **count** | **bool**| adds total possible results to the response | [optional] [default to true] |
| **orderby** | **string**|  | [optional] |
| **select** | **string**|  | [optional] |
| **skip** | **int**| skips the first x entries of the response(paging) | [optional] |
| **top** | **int**| limits the number of returned records. | [optional] [default to 1000] |

### Return type

[**\Exos\ExosApi\Model\GetAuthorisationsOutputWithTime**](../Model/GetAuthorisationsOutputWithTime.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10RoleAuthorisationsRoleIdUpdatePost()`

```php
v10RoleAuthorisationsRoleIdUpdatePost($role_id, $update_authorisations_input): \Exos\ExosApi\Model\RoleOutputWithTime
```

updates one or more authorisation(s) of a specific role

updates one or more authorisation(s) of a specific role.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\RoleApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$role_id = 'role_id_example'; // string | specific role id
$update_authorisations_input = new \Exos\ExosApi\Model\UpdateAuthorisationsInput(); // \Exos\ExosApi\Model\UpdateAuthorisationsInput | role to update

try {
    $result = $apiInstance->v10RoleAuthorisationsRoleIdUpdatePost($role_id, $update_authorisations_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling RoleApi->v10RoleAuthorisationsRoleIdUpdatePost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **role_id** | **string**| specific role id | |
| **update_authorisations_input** | [**\Exos\ExosApi\Model\UpdateAuthorisationsInput**](../Model/UpdateAuthorisationsInput.md)| role to update | |

### Return type

[**\Exos\ExosApi\Model\RoleOutputWithTime**](../Model/RoleOutputWithTime.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10RolesCopyPost()`

```php
v10RolesCopyPost($copy_role_input): \Exos\ExosApi\Model\VoidResponseOutput
```

copies all authorisations from an existing role to another role

copies all authorisations from an existing role to another role.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\RoleApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$copy_role_input = new \Exos\ExosApi\Model\CopyRoleInput(); // \Exos\ExosApi\Model\CopyRoleInput | role to create

try {
    $result = $apiInstance->v10RolesCopyPost($copy_role_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling RoleApi->v10RolesCopyPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **copy_role_input** | [**\Exos\ExosApi\Model\CopyRoleInput**](../Model/CopyRoleInput.md)| role to create | |

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

## `v10RolesCreatePost()`

```php
v10RolesCreatePost($create_role_input): \Exos\ExosApi\Model\RoleOutputWithTime
```

create a new role

creates a new role.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\RoleApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$create_role_input = new \Exos\ExosApi\Model\CreateRoleInput(); // \Exos\ExosApi\Model\CreateRoleInput | role to create

try {
    $result = $apiInstance->v10RolesCreatePost($create_role_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling RoleApi->v10RolesCreatePost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **create_role_input** | [**\Exos\ExosApi\Model\CreateRoleInput**](../Model/CreateRoleInput.md)| role to create | |

### Return type

[**\Exos\ExosApi\Model\RoleOutputWithTime**](../Model/RoleOutputWithTime.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10RolesGet()`

```php
v10RolesGet($expand, $filter, $search_string, $count, $orderby, $select, $skip, $top): \Exos\ExosApi\Model\GetRoleOutputWithTime
```

get a list of roles by odata query option.

Be aware that a query made here can return up to 10000 records. If you need more, please use the built in paging functionality with $top and $skip. http://www.asp.net/web-api/overview/odata-support-in-aspnet-web-api/supporting-odata-query-options.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\RoleApi(
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
    $result = $apiInstance->v10RolesGet($expand, $filter, $search_string, $count, $orderby, $select, $skip, $top);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling RoleApi->v10RolesGet: ', $e->getMessage(), PHP_EOL;
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

[**\Exos\ExosApi\Model\GetRoleOutputWithTime**](../Model/GetRoleOutputWithTime.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10RolesRoleIdDeletePost()`

```php
v10RolesRoleIdDeletePost($role_id): \Exos\ExosApi\Model\VoidResponseOutput
```

deletes a existing role

deletes a existing role.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\RoleApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$role_id = 'role_id_example'; // string | id of role

try {
    $result = $apiInstance->v10RolesRoleIdDeletePost($role_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling RoleApi->v10RolesRoleIdDeletePost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **role_id** | **string**| id of role | |

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

## `v10RolesRoleIdUpdatePost()`

```php
v10RolesRoleIdUpdatePost($role_id, $update_role_input): \Exos\ExosApi\Model\RoleOutputWithTime
```

updates a existing role

updates a existing role.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\RoleApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$role_id = 'role_id_example'; // string | id of role
$update_role_input = new \Exos\ExosApi\Model\UpdateRoleInput(); // \Exos\ExosApi\Model\UpdateRoleInput | role to update

try {
    $result = $apiInstance->v10RolesRoleIdUpdatePost($role_id, $update_role_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling RoleApi->v10RolesRoleIdUpdatePost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **role_id** | **string**| id of role | |
| **update_role_input** | [**\Exos\ExosApi\Model\UpdateRoleInput**](../Model/UpdateRoleInput.md)| role to update | |

### Return type

[**\Exos\ExosApi\Model\RoleOutputWithTime**](../Model/RoleOutputWithTime.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
