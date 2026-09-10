# Exos\ExosApi\ParameterApi

All URIs are relative to /ExosApi/api, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**v10ParameterChangeSapBadgesPost()**](ParameterApi.md#v10ParameterChangeSapBadgesPost) | **POST** /v1.0/parameter/ChangeSapBadges | enables/disables change sap badges |
| [**v10ParameterGet()**](ParameterApi.md#v10ParameterGet) | **GET** /v1.0/parameter | get a specific parameter |
| [**v10ParameterMultiStandardCardPost()**](ParameterApi.md#v10ParameterMultiStandardCardPost) | **POST** /v1.0/parameter/MultiStandardCard | enables/disables multi standard card |
| [**v10ParameterOptionInitializedCardPost()**](ParameterApi.md#v10ParameterOptionInitializedCardPost) | **POST** /v1.0/parameter/OptionInitializedCard | enables/disables option initialized card |
| [**v10ParameterOptionTransitionalCardPost()**](ParameterApi.md#v10ParameterOptionTransitionalCardPost) | **POST** /v1.0/parameter/OptionTransitionalCard | enables/disables option transitional card |
| [**v10ParameterSetBadgeParametersPost()**](ParameterApi.md#v10ParameterSetBadgeParametersPost) | **POST** /v1.0/parameter/SetBadgeParameters | enables/disables option special the badge Parameters |


## `v10ParameterChangeSapBadgesPost()`

```php
v10ParameterChangeSapBadgesPost($set_boolean_parameter_input_with_default_false): \Exos\ExosApi\Model\VoidResponseOutput
```

enables/disables change sap badges

Default false.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\ParameterApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$set_boolean_parameter_input_with_default_false = new \Exos\ExosApi\Model\SetBooleanParameterInputWithDefaultFalse(); // \Exos\ExosApi\Model\SetBooleanParameterInputWithDefaultFalse

try {
    $result = $apiInstance->v10ParameterChangeSapBadgesPost($set_boolean_parameter_input_with_default_false);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ParameterApi->v10ParameterChangeSapBadgesPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **set_boolean_parameter_input_with_default_false** | [**\Exos\ExosApi\Model\SetBooleanParameterInputWithDefaultFalse**](../Model/SetBooleanParameterInputWithDefaultFalse.md)|  | |

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

## `v10ParameterGet()`

```php
v10ParameterGet($parameter_name): \Exos\ExosApi\Model\GetParameterOutputWithTime
```

get a specific parameter

get a specific parameter

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\ParameterApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$parameter_name = 'parameter_name_example'; // string | The parameter name

try {
    $result = $apiInstance->v10ParameterGet($parameter_name);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ParameterApi->v10ParameterGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **parameter_name** | **string**| The parameter name | |

### Return type

[**\Exos\ExosApi\Model\GetParameterOutputWithTime**](../Model/GetParameterOutputWithTime.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10ParameterMultiStandardCardPost()`

```php
v10ParameterMultiStandardCardPost($set_boolean_parameter_input_with_default_false): \Exos\ExosApi\Model\VoidResponseOutput
```

enables/disables multi standard card

Default false.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\ParameterApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$set_boolean_parameter_input_with_default_false = new \Exos\ExosApi\Model\SetBooleanParameterInputWithDefaultFalse(); // \Exos\ExosApi\Model\SetBooleanParameterInputWithDefaultFalse

try {
    $result = $apiInstance->v10ParameterMultiStandardCardPost($set_boolean_parameter_input_with_default_false);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ParameterApi->v10ParameterMultiStandardCardPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **set_boolean_parameter_input_with_default_false** | [**\Exos\ExosApi\Model\SetBooleanParameterInputWithDefaultFalse**](../Model/SetBooleanParameterInputWithDefaultFalse.md)|  | |

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

## `v10ParameterOptionInitializedCardPost()`

```php
v10ParameterOptionInitializedCardPost($set_boolean_parameter_input_with_default_false): \Exos\ExosApi\Model\VoidResponseOutput
```

enables/disables option initialized card

Default false.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\ParameterApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$set_boolean_parameter_input_with_default_false = new \Exos\ExosApi\Model\SetBooleanParameterInputWithDefaultFalse(); // \Exos\ExosApi\Model\SetBooleanParameterInputWithDefaultFalse

try {
    $result = $apiInstance->v10ParameterOptionInitializedCardPost($set_boolean_parameter_input_with_default_false);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ParameterApi->v10ParameterOptionInitializedCardPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **set_boolean_parameter_input_with_default_false** | [**\Exos\ExosApi\Model\SetBooleanParameterInputWithDefaultFalse**](../Model/SetBooleanParameterInputWithDefaultFalse.md)|  | |

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

## `v10ParameterOptionTransitionalCardPost()`

```php
v10ParameterOptionTransitionalCardPost($set_boolean_parameter_input_with_default_false): \Exos\ExosApi\Model\VoidResponseOutput
```

enables/disables option transitional card

Default false.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\ParameterApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$set_boolean_parameter_input_with_default_false = new \Exos\ExosApi\Model\SetBooleanParameterInputWithDefaultFalse(); // \Exos\ExosApi\Model\SetBooleanParameterInputWithDefaultFalse

try {
    $result = $apiInstance->v10ParameterOptionTransitionalCardPost($set_boolean_parameter_input_with_default_false);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ParameterApi->v10ParameterOptionTransitionalCardPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **set_boolean_parameter_input_with_default_false** | [**\Exos\ExosApi\Model\SetBooleanParameterInputWithDefaultFalse**](../Model/SetBooleanParameterInputWithDefaultFalse.md)|  | |

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

## `v10ParameterSetBadgeParametersPost()`

```php
v10ParameterSetBadgeParametersPost($badge_parameters): \Exos\ExosApi\Model\VoidResponseOutput
```

enables/disables option special the badge Parameters

Default false.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\ParameterApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$badge_parameters = new \Exos\ExosApi\Model\BadgeParameters(); // \Exos\ExosApi\Model\BadgeParameters

try {
    $result = $apiInstance->v10ParameterSetBadgeParametersPost($badge_parameters);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ParameterApi->v10ParameterSetBadgeParametersPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **badge_parameters** | [**\Exos\ExosApi\Model\BadgeParameters**](../Model/BadgeParameters.md)|  | |

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
