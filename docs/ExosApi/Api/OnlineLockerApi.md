# Exos\ExosApi\OnlineLockerApi

All URIs are relative to /ExosApi/api, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**v10OnlineLockersGet()**](OnlineLockerApi.md#v10OnlineLockersGet) | **GET** /v1.0/onlineLockers | Get all locker entries in the system |
| [**v10OnlineLockersOnlineLockerIdAssignPost()**](OnlineLockerApi.md#v10OnlineLockersOnlineLockerIdAssignPost) | **POST** /v1.0/onlineLockers/{onlineLockerId}/assign | Assign a person to a specific locker. |
| [**v10OnlineLockersOnlineLockerIdBlockPost()**](OnlineLockerApi.md#v10OnlineLockersOnlineLockerIdBlockPost) | **POST** /v1.0/onlineLockers/{onlineLockerId}/block | Block a specific locker. |
| [**v10OnlineLockersOnlineLockerIdDisablePost()**](OnlineLockerApi.md#v10OnlineLockersOnlineLockerIdDisablePost) | **POST** /v1.0/onlineLockers/{onlineLockerId}/disable | Disable a specific locker. |
| [**v10OnlineLockersOnlineLockerIdEnablePost()**](OnlineLockerApi.md#v10OnlineLockersOnlineLockerIdEnablePost) | **POST** /v1.0/onlineLockers/{onlineLockerId}/enable | Enable a specific locker. |
| [**v10OnlineLockersOnlineLockerIdOpenPost()**](OnlineLockerApi.md#v10OnlineLockersOnlineLockerIdOpenPost) | **POST** /v1.0/onlineLockers/{onlineLockerId}/open | Open a specific locker. |
| [**v10OnlineLockersOnlineLockerIdUnassignPost()**](OnlineLockerApi.md#v10OnlineLockersOnlineLockerIdUnassignPost) | **POST** /v1.0/onlineLockers/{onlineLockerId}/unassign | Unassign a person from a specific locker. |
| [**v10OnlineLockersOnlineLockerIdUnblockPost()**](OnlineLockerApi.md#v10OnlineLockersOnlineLockerIdUnblockPost) | **POST** /v1.0/onlineLockers/{onlineLockerId}/unblock | Unblock a specific locker. |
| [**v10OnlineLockersOnlineLockerIdUpdatePost()**](OnlineLockerApi.md#v10OnlineLockersOnlineLockerIdUpdatePost) | **POST** /v1.0/onlineLockers/{onlineLockerId}/update | updates the data of a specific locker. |
| [**v10OnlineLockersPanelGet()**](OnlineLockerApi.md#v10OnlineLockersPanelGet) | **GET** /v1.0/onlineLockers/panel | Gets the lockers of a lockergroup optimized for the panel view. |


## `v10OnlineLockersGet()`

```php
v10OnlineLockersGet($expand, $filter, $search_string, $count, $orderby, $select, $skip, $top): \Exos\ExosApi\Model\GetLockersOutput
```

Get all locker entries in the system

Get all locker entries in the system.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\OnlineLockerApi(
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
    $result = $apiInstance->v10OnlineLockersGet($expand, $filter, $search_string, $count, $orderby, $select, $skip, $top);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OnlineLockerApi->v10OnlineLockersGet: ', $e->getMessage(), PHP_EOL;
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

[**\Exos\ExosApi\Model\GetLockersOutput**](../Model/GetLockersOutput.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10OnlineLockersOnlineLockerIdAssignPost()`

```php
v10OnlineLockersOnlineLockerIdAssignPost($online_locker_id, $assign_locker_input): \Exos\ExosApi\Model\VoidResponseOutput
```

Assign a person to a specific locker.

Assign a person to a specific locker.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\OnlineLockerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$online_locker_id = 'online_locker_id_example'; // string | id of locker
$assign_locker_input = new \Exos\ExosApi\Model\AssignLockerInput(); // \Exos\ExosApi\Model\AssignLockerInput

try {
    $result = $apiInstance->v10OnlineLockersOnlineLockerIdAssignPost($online_locker_id, $assign_locker_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OnlineLockerApi->v10OnlineLockersOnlineLockerIdAssignPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **online_locker_id** | **string**| id of locker | |
| **assign_locker_input** | [**\Exos\ExosApi\Model\AssignLockerInput**](../Model/AssignLockerInput.md)|  | |

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

## `v10OnlineLockersOnlineLockerIdBlockPost()`

```php
v10OnlineLockersOnlineLockerIdBlockPost($online_locker_id, $block_locker_input): \Exos\ExosApi\Model\VoidResponseOutput
```

Block a specific locker.

Block a specific locker.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\OnlineLockerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$online_locker_id = 'online_locker_id_example'; // string | id of locker
$block_locker_input = new \Exos\ExosApi\Model\BlockLockerInput(); // \Exos\ExosApi\Model\BlockLockerInput

try {
    $result = $apiInstance->v10OnlineLockersOnlineLockerIdBlockPost($online_locker_id, $block_locker_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OnlineLockerApi->v10OnlineLockersOnlineLockerIdBlockPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **online_locker_id** | **string**| id of locker | |
| **block_locker_input** | [**\Exos\ExosApi\Model\BlockLockerInput**](../Model/BlockLockerInput.md)|  | |

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

## `v10OnlineLockersOnlineLockerIdDisablePost()`

```php
v10OnlineLockersOnlineLockerIdDisablePost($online_locker_id, $disable_locker_input): \Exos\ExosApi\Model\VoidResponseOutput
```

Disable a specific locker.

Disable a specific locker.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\OnlineLockerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$online_locker_id = 'online_locker_id_example'; // string | id of locker
$disable_locker_input = new \Exos\ExosApi\Model\DisableLockerInput(); // \Exos\ExosApi\Model\DisableLockerInput

try {
    $result = $apiInstance->v10OnlineLockersOnlineLockerIdDisablePost($online_locker_id, $disable_locker_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OnlineLockerApi->v10OnlineLockersOnlineLockerIdDisablePost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **online_locker_id** | **string**| id of locker | |
| **disable_locker_input** | [**\Exos\ExosApi\Model\DisableLockerInput**](../Model/DisableLockerInput.md)|  | |

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

## `v10OnlineLockersOnlineLockerIdEnablePost()`

```php
v10OnlineLockersOnlineLockerIdEnablePost($online_locker_id): \Exos\ExosApi\Model\VoidResponseOutput
```

Enable a specific locker.

Enable a specific locker.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\OnlineLockerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$online_locker_id = 'online_locker_id_example'; // string | id of locker

try {
    $result = $apiInstance->v10OnlineLockersOnlineLockerIdEnablePost($online_locker_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OnlineLockerApi->v10OnlineLockersOnlineLockerIdEnablePost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **online_locker_id** | **string**| id of locker | |

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

## `v10OnlineLockersOnlineLockerIdOpenPost()`

```php
v10OnlineLockersOnlineLockerIdOpenPost($online_locker_id, $open_locker_input): \Exos\ExosApi\Model\VoidResponseOutput
```

Open a specific locker.

Open a specific locker.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\OnlineLockerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$online_locker_id = 'online_locker_id_example'; // string | id of locker
$open_locker_input = new \Exos\ExosApi\Model\OpenLockerInput(); // \Exos\ExosApi\Model\OpenLockerInput

try {
    $result = $apiInstance->v10OnlineLockersOnlineLockerIdOpenPost($online_locker_id, $open_locker_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OnlineLockerApi->v10OnlineLockersOnlineLockerIdOpenPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **online_locker_id** | **string**| id of locker | |
| **open_locker_input** | [**\Exos\ExosApi\Model\OpenLockerInput**](../Model/OpenLockerInput.md)|  | |

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

## `v10OnlineLockersOnlineLockerIdUnassignPost()`

```php
v10OnlineLockersOnlineLockerIdUnassignPost($online_locker_id, $unassign_locker_input): \Exos\ExosApi\Model\VoidResponseOutput
```

Unassign a person from a specific locker.

Unassign a person from a specific locker.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\OnlineLockerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$online_locker_id = 'online_locker_id_example'; // string | id of locker
$unassign_locker_input = new \Exos\ExosApi\Model\UnassignLockerInput(); // \Exos\ExosApi\Model\UnassignLockerInput

try {
    $result = $apiInstance->v10OnlineLockersOnlineLockerIdUnassignPost($online_locker_id, $unassign_locker_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OnlineLockerApi->v10OnlineLockersOnlineLockerIdUnassignPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **online_locker_id** | **string**| id of locker | |
| **unassign_locker_input** | [**\Exos\ExosApi\Model\UnassignLockerInput**](../Model/UnassignLockerInput.md)|  | |

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

## `v10OnlineLockersOnlineLockerIdUnblockPost()`

```php
v10OnlineLockersOnlineLockerIdUnblockPost($online_locker_id, $unblock_locker_input): \Exos\ExosApi\Model\VoidResponseOutput
```

Unblock a specific locker.

Unblock a specific locker.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\OnlineLockerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$online_locker_id = 'online_locker_id_example'; // string | id of locker
$unblock_locker_input = new \Exos\ExosApi\Model\UnblockLockerInput(); // \Exos\ExosApi\Model\UnblockLockerInput

try {
    $result = $apiInstance->v10OnlineLockersOnlineLockerIdUnblockPost($online_locker_id, $unblock_locker_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OnlineLockerApi->v10OnlineLockersOnlineLockerIdUnblockPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **online_locker_id** | **string**| id of locker | |
| **unblock_locker_input** | [**\Exos\ExosApi\Model\UnblockLockerInput**](../Model/UnblockLockerInput.md)|  | [optional] |

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

## `v10OnlineLockersOnlineLockerIdUpdatePost()`

```php
v10OnlineLockersOnlineLockerIdUpdatePost($online_locker_id, $update_locker_input): \Exos\ExosApi\Model\UpdateLockerOutput
```

updates the data of a specific locker.

updates the data of a specific locker.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\OnlineLockerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$online_locker_id = 'online_locker_id_example'; // string | id of locker
$update_locker_input = new \Exos\ExosApi\Model\UpdateLockerInput(); // \Exos\ExosApi\Model\UpdateLockerInput

try {
    $result = $apiInstance->v10OnlineLockersOnlineLockerIdUpdatePost($online_locker_id, $update_locker_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OnlineLockerApi->v10OnlineLockersOnlineLockerIdUpdatePost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **online_locker_id** | **string**| id of locker | |
| **update_locker_input** | [**\Exos\ExosApi\Model\UpdateLockerInput**](../Model/UpdateLockerInput.md)|  | [optional] |

### Return type

[**\Exos\ExosApi\Model\UpdateLockerOutput**](../Model/UpdateLockerOutput.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10OnlineLockersPanelGet()`

```php
v10OnlineLockersPanelGet($online_locker_group_id, $person_id): \Exos\ExosApi\Model\GetPanelViewOutputWithTime
```

Gets the lockers of a lockergroup optimized for the panel view.

Gets the lockers of a lockergroup optimized for the panel view.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\OnlineLockerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$online_locker_group_id = 'online_locker_group_id_example'; // string | id of a lockergroup
$person_id = 'person_id_example'; // string | id of a person

try {
    $result = $apiInstance->v10OnlineLockersPanelGet($online_locker_group_id, $person_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OnlineLockerApi->v10OnlineLockersPanelGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **online_locker_group_id** | **string**| id of a lockergroup | |
| **person_id** | **string**| id of a person | [optional] |

### Return type

[**\Exos\ExosApi\Model\GetPanelViewOutputWithTime**](../Model/GetPanelViewOutputWithTime.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
