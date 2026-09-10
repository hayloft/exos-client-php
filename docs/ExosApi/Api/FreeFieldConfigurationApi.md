# Exos\ExosApi\FreeFieldConfigurationApi

All URIs are relative to /ExosApi/api, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**v10FreeFieldConfigurationActivatePost()**](FreeFieldConfigurationApi.md#v10FreeFieldConfigurationActivatePost) | **POST** /v1.0/freeFieldConfiguration/activate | activates a specific freefield |
| [**v10FreeFieldConfigurationDeactivatePost()**](FreeFieldConfigurationApi.md#v10FreeFieldConfigurationDeactivatePost) | **POST** /v1.0/freeFieldConfiguration/deactivate | deactivates a specific freefield |
| [**v10FreeFieldConfigurationGet()**](FreeFieldConfigurationApi.md#v10FreeFieldConfigurationGet) | **GET** /v1.0/freeFieldConfiguration | get free field configuration for a specific usage |
| [**v11FreeFieldConfigurationActivatePost()**](FreeFieldConfigurationApi.md#v11FreeFieldConfigurationActivatePost) | **POST** /v1.1/freeFieldConfiguration/activate | activates a specific freefield |


## `v10FreeFieldConfigurationActivatePost()`

```php
v10FreeFieldConfigurationActivatePost($activate_free_field_input_v10): \Exos\ExosApi\Model\ActivateFreeFieldOutputWithTime
```

activates a specific freefield

activates a specific freefield. .

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\FreeFieldConfigurationApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$activate_free_field_input_v10 = new \Exos\ExosApi\Model\ActivateFreeFieldInputV10(); // \Exos\ExosApi\Model\ActivateFreeFieldInputV10 | activates a specific freefield

try {
    $result = $apiInstance->v10FreeFieldConfigurationActivatePost($activate_free_field_input_v10);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FreeFieldConfigurationApi->v10FreeFieldConfigurationActivatePost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **activate_free_field_input_v10** | [**\Exos\ExosApi\Model\ActivateFreeFieldInputV10**](../Model/ActivateFreeFieldInputV10.md)| activates a specific freefield | |

### Return type

[**\Exos\ExosApi\Model\ActivateFreeFieldOutputWithTime**](../Model/ActivateFreeFieldOutputWithTime.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10FreeFieldConfigurationDeactivatePost()`

```php
v10FreeFieldConfigurationDeactivatePost($deactivate_free_field_input, $delete_free_field_data): \Exos\ExosApi\Model\DeactivateFreeFieldOutputWithTime
```

deactivates a specific freefield

deactivates a specific freefield. .

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\FreeFieldConfigurationApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$deactivate_free_field_input = new \Exos\ExosApi\Model\DeactivateFreeFieldInput(); // \Exos\ExosApi\Model\DeactivateFreeFieldInput | deactivates a specific freefield
$delete_free_field_data = True; // bool | delete freefield data for specific field

try {
    $result = $apiInstance->v10FreeFieldConfigurationDeactivatePost($deactivate_free_field_input, $delete_free_field_data);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FreeFieldConfigurationApi->v10FreeFieldConfigurationDeactivatePost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **deactivate_free_field_input** | [**\Exos\ExosApi\Model\DeactivateFreeFieldInput**](../Model/DeactivateFreeFieldInput.md)| deactivates a specific freefield | |
| **delete_free_field_data** | **bool**| delete freefield data for specific field | [optional] |

### Return type

[**\Exos\ExosApi\Model\DeactivateFreeFieldOutputWithTime**](../Model/DeactivateFreeFieldOutputWithTime.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10FreeFieldConfigurationGet()`

```php
v10FreeFieldConfigurationGet($usage): \Exos\ExosApi\Model\GetFreeFieldConfigurationOutputWithTime
```

get free field configuration for a specific usage

get free field configuration for a specific usage.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\FreeFieldConfigurationApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$usage = new \Exos\ExosApi\Model\\Exos\ExosApi\Model\FreeFieldUsageEnum(); // \Exos\ExosApi\Model\FreeFieldUsageEnum | freefield usage

try {
    $result = $apiInstance->v10FreeFieldConfigurationGet($usage);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FreeFieldConfigurationApi->v10FreeFieldConfigurationGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **usage** | [**\Exos\ExosApi\Model\FreeFieldUsageEnum**](../Model/.md)| freefield usage | |

### Return type

[**\Exos\ExosApi\Model\GetFreeFieldConfigurationOutputWithTime**](../Model/GetFreeFieldConfigurationOutputWithTime.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v11FreeFieldConfigurationActivatePost()`

```php
v11FreeFieldConfigurationActivatePost($activate_free_field_input): \Exos\ExosApi\Model\ActivateFreeFieldOutputWithTime
```

activates a specific freefield

activates a specific freefield. .

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\FreeFieldConfigurationApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$activate_free_field_input = new \Exos\ExosApi\Model\ActivateFreeFieldInput(); // \Exos\ExosApi\Model\ActivateFreeFieldInput | activates a specific freefield

try {
    $result = $apiInstance->v11FreeFieldConfigurationActivatePost($activate_free_field_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FreeFieldConfigurationApi->v11FreeFieldConfigurationActivatePost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **activate_free_field_input** | [**\Exos\ExosApi\Model\ActivateFreeFieldInput**](../Model/ActivateFreeFieldInput.md)| activates a specific freefield | |

### Return type

[**\Exos\ExosApi\Model\ActivateFreeFieldOutputWithTime**](../Model/ActivateFreeFieldOutputWithTime.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
