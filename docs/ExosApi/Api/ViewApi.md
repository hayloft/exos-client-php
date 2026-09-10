# Exos\ExosApi\ViewApi

All URIs are relative to /ExosApi/api, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**v10ViewsCreatePost()**](ViewApi.md#v10ViewsCreatePost) | **POST** /v1.0/views/create | creates a new view |
| [**v10ViewsGet()**](ViewApi.md#v10ViewsGet) | **GET** /v1.0/views | get all authorised views of the logged in user |
| [**v10ViewsViewIdDeletePost()**](ViewApi.md#v10ViewsViewIdDeletePost) | **POST** /v1.0/views/{viewId}/delete | delete an existing view |
| [**v10ViewsViewIdUpdatePost()**](ViewApi.md#v10ViewsViewIdUpdatePost) | **POST** /v1.0/views/{viewId}/update | update an existing view |


## `v10ViewsCreatePost()`

```php
v10ViewsCreatePost($create_view_input): \Exos\ExosApi\Model\CreateViewOutputWithTime
```

creates a new view

creates a new view

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\ViewApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$create_view_input = new \Exos\ExosApi\Model\CreateViewInput(); // \Exos\ExosApi\Model\CreateViewInput | View

try {
    $result = $apiInstance->v10ViewsCreatePost($create_view_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ViewApi->v10ViewsCreatePost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **create_view_input** | [**\Exos\ExosApi\Model\CreateViewInput**](../Model/CreateViewInput.md)| View | |

### Return type

[**\Exos\ExosApi\Model\CreateViewOutputWithTime**](../Model/CreateViewOutputWithTime.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10ViewsGet()`

```php
v10ViewsGet($application, $type): \Exos\ExosApi\Model\GetAuthorisedViewsWithTime
```

get all authorised views of the logged in user

get all authorised views of the logged in user

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\ViewApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$application = 'application_example'; // string | Application
$type = 'type_example'; // string | Type

try {
    $result = $apiInstance->v10ViewsGet($application, $type);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ViewApi->v10ViewsGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **application** | **string**| Application | |
| **type** | **string**| Type | |

### Return type

[**\Exos\ExosApi\Model\GetAuthorisedViewsWithTime**](../Model/GetAuthorisedViewsWithTime.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10ViewsViewIdDeletePost()`

```php
v10ViewsViewIdDeletePost($view_id): \Exos\ExosApi\Model\VoidResponseOutput
```

delete an existing view

delete an existing view

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\ViewApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$view_id = 'view_id_example'; // string | id of view

try {
    $result = $apiInstance->v10ViewsViewIdDeletePost($view_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ViewApi->v10ViewsViewIdDeletePost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **view_id** | **string**| id of view | |

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

## `v10ViewsViewIdUpdatePost()`

```php
v10ViewsViewIdUpdatePost($view_id, $update_view_input): \Exos\ExosApi\Model\CreateViewOutputWithTime
```

update an existing view

update an existing view

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\ViewApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$view_id = 'view_id_example'; // string | id of view
$update_view_input = new \Exos\ExosApi\Model\UpdateViewInput(); // \Exos\ExosApi\Model\UpdateViewInput | View

try {
    $result = $apiInstance->v10ViewsViewIdUpdatePost($view_id, $update_view_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ViewApi->v10ViewsViewIdUpdatePost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **view_id** | **string**| id of view | |
| **update_view_input** | [**\Exos\ExosApi\Model\UpdateViewInput**](../Model/UpdateViewInput.md)| View | |

### Return type

[**\Exos\ExosApi\Model\CreateViewOutputWithTime**](../Model/CreateViewOutputWithTime.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
