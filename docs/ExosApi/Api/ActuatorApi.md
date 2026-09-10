# Exos\ExosApi\ActuatorApi

All URIs are relative to /ExosApi/api, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**v10ActuatorsGetConfigurationPost()**](ActuatorApi.md#v10ActuatorsGetConfigurationPost) | **POST** /v1.0/actuators/getConfiguration |  |
| [**v10ActuatorsImportInfoPost()**](ActuatorApi.md#v10ActuatorsImportInfoPost) | **POST** /v1.0/actuators/importInfo |  |
| [**v10ActuatorsImportTracebackPost()**](ActuatorApi.md#v10ActuatorsImportTracebackPost) | **POST** /v1.0/actuators/importTraceback |  |
| [**v10ActuatorsSetStatePost()**](ActuatorApi.md#v10ActuatorsSetStatePost) | **POST** /v1.0/actuators/setState |  |


## `v10ActuatorsGetConfigurationPost()`

```php
v10ActuatorsGetConfigurationPost($get_actuator_configuration_input): \Exos\ExosApi\Model\GetActuatorConfigurationOutput
```



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\ActuatorApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$get_actuator_configuration_input = new \Exos\ExosApi\Model\GetActuatorConfigurationInput(); // \Exos\ExosApi\Model\GetActuatorConfigurationInput | List of actuator addresses.

try {
    $result = $apiInstance->v10ActuatorsGetConfigurationPost($get_actuator_configuration_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ActuatorApi->v10ActuatorsGetConfigurationPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **get_actuator_configuration_input** | [**\Exos\ExosApi\Model\GetActuatorConfigurationInput**](../Model/GetActuatorConfigurationInput.md)| List of actuator addresses. | |

### Return type

[**\Exos\ExosApi\Model\GetActuatorConfigurationOutput**](../Model/GetActuatorConfigurationOutput.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10ActuatorsImportInfoPost()`

```php
v10ActuatorsImportInfoPost($import_actuator_info_input): \Exos\ExosApi\Model\VoidResponse
```



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\ActuatorApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$import_actuator_info_input = new \Exos\ExosApi\Model\ImportActuatorInfoInput(); // \Exos\ExosApi\Model\ImportActuatorInfoInput | Imports actuator info

try {
    $result = $apiInstance->v10ActuatorsImportInfoPost($import_actuator_info_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ActuatorApi->v10ActuatorsImportInfoPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **import_actuator_info_input** | [**\Exos\ExosApi\Model\ImportActuatorInfoInput**](../Model/ImportActuatorInfoInput.md)| Imports actuator info | |

### Return type

[**\Exos\ExosApi\Model\VoidResponse**](../Model/VoidResponse.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10ActuatorsImportTracebackPost()`

```php
v10ActuatorsImportTracebackPost($import_traceback_input): \Exos\ExosApi\Model\ImportTracebackOutput
```



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\ActuatorApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$import_traceback_input = new \Exos\ExosApi\Model\ImportTracebackInput(); // \Exos\ExosApi\Model\ImportTracebackInput | List of actuator traceback strings

try {
    $result = $apiInstance->v10ActuatorsImportTracebackPost($import_traceback_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ActuatorApi->v10ActuatorsImportTracebackPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **import_traceback_input** | [**\Exos\ExosApi\Model\ImportTracebackInput**](../Model/ImportTracebackInput.md)| List of actuator traceback strings | |

### Return type

[**\Exos\ExosApi\Model\ImportTracebackOutput**](../Model/ImportTracebackOutput.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10ActuatorsSetStatePost()`

```php
v10ActuatorsSetStatePost($set_actuator_state_input): \Exos\ExosApi\Model\VoidResponse
```



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\ActuatorApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$set_actuator_state_input = new \Exos\ExosApi\Model\SetActuatorStateInput(); // \Exos\ExosApi\Model\SetActuatorStateInput | List of actuator addresses/names and the actuator state.

try {
    $result = $apiInstance->v10ActuatorsSetStatePost($set_actuator_state_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ActuatorApi->v10ActuatorsSetStatePost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **set_actuator_state_input** | [**\Exos\ExosApi\Model\SetActuatorStateInput**](../Model/SetActuatorStateInput.md)| List of actuator addresses/names and the actuator state. | |

### Return type

[**\Exos\ExosApi\Model\VoidResponse**](../Model/VoidResponse.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
