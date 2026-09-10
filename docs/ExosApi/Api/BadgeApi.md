# Exos\ExosApi\BadgeApi

All URIs are relative to /ExosApi/api, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**v10BadgesBlockPost()**](BadgeApi.md#v10BadgesBlockPost) | **POST** /v1.0/badges/block | blocks a released badge |
| [**v10BadgesCreatePost()**](BadgeApi.md#v10BadgesCreatePost) | **POST** /v1.0/badges/create | creates a new badge |
| [**v10BadgesDeletePost()**](BadgeApi.md#v10BadgesDeletePost) | **POST** /v1.0/badges/delete | delete badge |
| [**v10BadgesGet()**](BadgeApi.md#v10BadgesGet) | **GET** /v1.0/badges | get a list of badges |
| [**v10BadgesNexusUpdatePost()**](BadgeApi.md#v10BadgesNexusUpdatePost) | **POST** /v1.0/badges/nexus/update | update nexus information |
| [**v10BadgesUnblockPost()**](BadgeApi.md#v10BadgesUnblockPost) | **POST** /v1.0/badges/unblock | unblocks a released badge |
| [**v10MediaDefinitionsGet()**](BadgeApi.md#v10MediaDefinitionsGet) | **GET** /v1.0/mediaDefinitions | get a list of media definitions |
| [**v10MediaDefinitionsMediaApplicationDefinitionsSortOrderGet()**](BadgeApi.md#v10MediaDefinitionsMediaApplicationDefinitionsSortOrderGet) | **GET** /v1.0/mediaDefinitions/mediaApplicationDefinitions/sortOrder | get sort order of media application definitions |


## `v10BadgesBlockPost()`

```php
v10BadgesBlockPost($block_badge_input): \Exos\ExosApi\Model\VoidResponseOutput
```

blocks a released badge

blocks a released badge

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\BadgeApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$block_badge_input = new \Exos\ExosApi\Model\BlockBadgeInput(); // \Exos\ExosApi\Model\BlockBadgeInput | block badge with reason

try {
    $result = $apiInstance->v10BadgesBlockPost($block_badge_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling BadgeApi->v10BadgesBlockPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **block_badge_input** | [**\Exos\ExosApi\Model\BlockBadgeInput**](../Model/BlockBadgeInput.md)| block badge with reason | |

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

## `v10BadgesCreatePost()`

```php
v10BadgesCreatePost($create_badge_input): \Exos\ExosApi\Model\CreateBadgeOutputWithTime
```

creates a new badge

Creates a badge.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\BadgeApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$create_badge_input = new \Exos\ExosApi\Model\CreateBadgeInput(); // \Exos\ExosApi\Model\CreateBadgeInput | Badge

try {
    $result = $apiInstance->v10BadgesCreatePost($create_badge_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling BadgeApi->v10BadgesCreatePost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **create_badge_input** | [**\Exos\ExosApi\Model\CreateBadgeInput**](../Model/CreateBadgeInput.md)| Badge | |

### Return type

[**\Exos\ExosApi\Model\CreateBadgeOutputWithTime**](../Model/CreateBadgeOutputWithTime.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10BadgesDeletePost()`

```php
v10BadgesDeletePost($delete_badge_input): \Exos\ExosApi\Model\VoidResponseOutput
```

delete badge

delete badge

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\BadgeApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$delete_badge_input = new \Exos\ExosApi\Model\DeleteBadgeInput(); // \Exos\ExosApi\Model\DeleteBadgeInput

try {
    $result = $apiInstance->v10BadgesDeletePost($delete_badge_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling BadgeApi->v10BadgesDeletePost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **delete_badge_input** | [**\Exos\ExosApi\Model\DeleteBadgeInput**](../Model/DeleteBadgeInput.md)|  | |

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

## `v10BadgesGet()`

```php
v10BadgesGet($expand, $filter, $search_string, $count, $orderby, $select, $skip, $top): \Exos\ExosApi\Model\GetBadgesOutputWithTime
```

get a list of badges

Be aware that a query made here can return up to 10000 records. If you need more, please use the built in paging functionality with $top and $skip. http://www.asp.net/web-api/overview/odata-support-in-aspnet-web-api/supporting-odata-query-options.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\BadgeApi(
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
    $result = $apiInstance->v10BadgesGet($expand, $filter, $search_string, $count, $orderby, $select, $skip, $top);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling BadgeApi->v10BadgesGet: ', $e->getMessage(), PHP_EOL;
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

[**\Exos\ExosApi\Model\GetBadgesOutputWithTime**](../Model/GetBadgesOutputWithTime.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10BadgesNexusUpdatePost()`

```php
v10BadgesNexusUpdatePost($nexus_info_input): \Exos\ExosApi\Model\VoidResponseOutput
```

update nexus information

update nexus information after badge is printed

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\BadgeApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$nexus_info_input = new \Exos\ExosApi\Model\NexusInfoInput(); // \Exos\ExosApi\Model\NexusInfoInput | nexus information

try {
    $result = $apiInstance->v10BadgesNexusUpdatePost($nexus_info_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling BadgeApi->v10BadgesNexusUpdatePost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **nexus_info_input** | [**\Exos\ExosApi\Model\NexusInfoInput**](../Model/NexusInfoInput.md)| nexus information | |

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

## `v10BadgesUnblockPost()`

```php
v10BadgesUnblockPost($unblock_badge_input, $ignore_blacklist): \Exos\ExosApi\Model\VoidResponseOutput
```

unblocks a released badge

unblocks a released badge

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\BadgeApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$unblock_badge_input = new \Exos\ExosApi\Model\UnblockBadgeInput(); // \Exos\ExosApi\Model\UnblockBadgeInput | unblock badge
$ignore_blacklist = True; // bool | Ignore blacklist check

try {
    $result = $apiInstance->v10BadgesUnblockPost($unblock_badge_input, $ignore_blacklist);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling BadgeApi->v10BadgesUnblockPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **unblock_badge_input** | [**\Exos\ExosApi\Model\UnblockBadgeInput**](../Model/UnblockBadgeInput.md)| unblock badge | |
| **ignore_blacklist** | **bool**| Ignore blacklist check | [optional] |

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

## `v10MediaDefinitionsGet()`

```php
v10MediaDefinitionsGet($expand, $filter, $search_string, $count, $orderby, $select, $skip, $top): \Exos\ExosApi\Model\GetMediaDefinitionsOutputWithTime
```

get a list of media definitions

Be aware that a query made here can return up to 10000 records. If you need more, please use the built in paging functionality with $top and $skip. http://www.asp.net/web-api/overview/odata-support-in-aspnet-web-api/supporting-odata-query-options.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\BadgeApi(
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
    $result = $apiInstance->v10MediaDefinitionsGet($expand, $filter, $search_string, $count, $orderby, $select, $skip, $top);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling BadgeApi->v10MediaDefinitionsGet: ', $e->getMessage(), PHP_EOL;
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

[**\Exos\ExosApi\Model\GetMediaDefinitionsOutputWithTime**](../Model/GetMediaDefinitionsOutputWithTime.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10MediaDefinitionsMediaApplicationDefinitionsSortOrderGet()`

```php
v10MediaDefinitionsMediaApplicationDefinitionsSortOrderGet(): \Exos\ExosApi\Model\SortOrderOutput
```

get sort order of media application definitions

get sort order of media application definitions

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\BadgeApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);

try {
    $result = $apiInstance->v10MediaDefinitionsMediaApplicationDefinitionsSortOrderGet();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling BadgeApi->v10MediaDefinitionsMediaApplicationDefinitionsSortOrderGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\Exos\ExosApi\Model\SortOrderOutput**](../Model/SortOrderOutput.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
