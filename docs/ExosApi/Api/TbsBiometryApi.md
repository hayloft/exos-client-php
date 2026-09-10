# Exos\ExosApi\TbsBiometryApi

All URIs are relative to /ExosApi/api, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**v10TbsBiometryDeleteTbsEnrollmentPost()**](TbsBiometryApi.md#v10TbsBiometryDeleteTbsEnrollmentPost) | **POST** /v1.0/tbsBiometry/deleteTbsEnrollment | Ensure delete a TBS user |
| [**v10TbsBiometryGetTbsConfigurationGet()**](TbsBiometryApi.md#v10TbsBiometryGetTbsConfigurationGet) | **GET** /v1.0/tbsBiometry/GetTbsConfiguration | Get configuration for the tbs enrollment module. |
| [**v10TbsBiometryGetTbsUserGet()**](TbsBiometryApi.md#v10TbsBiometryGetTbsUserGet) | **GET** /v1.0/tbsBiometry/getTbsUser | Get tbs user |
| [**v10TbsBiometrySetTbsMediumPost()**](TbsBiometryApi.md#v10TbsBiometrySetTbsMediumPost) | **POST** /v1.0/tbsBiometry/setTbsMedium | Set Tbs data |
| [**v10TbsBiometrySyncBiometryFlagPost()**](TbsBiometryApi.md#v10TbsBiometrySyncBiometryFlagPost) | **POST** /v1.0/tbsBiometry/syncBiometryFlag | Sync biometric flag |


## `v10TbsBiometryDeleteTbsEnrollmentPost()`

```php
v10TbsBiometryDeleteTbsEnrollmentPost($person_uid): \Exos\ExosApi\Model\VoidResponseOutput
```

Ensure delete a TBS user

Ensure delete a TBS user

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\TbsBiometryApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$person_uid = 'person_uid_example'; // string | Uid of person

try {
    $result = $apiInstance->v10TbsBiometryDeleteTbsEnrollmentPost($person_uid);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TbsBiometryApi->v10TbsBiometryDeleteTbsEnrollmentPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **person_uid** | **string**| Uid of person | |

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

## `v10TbsBiometryGetTbsConfigurationGet()`

```php
v10TbsBiometryGetTbsConfigurationGet(): \Exos\ExosApi\Model\GenericResponseGetTbsConfigurationOutput
```

Get configuration for the tbs enrollment module.

Get configuration for the tbs enrollment module.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\TbsBiometryApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);

try {
    $result = $apiInstance->v10TbsBiometryGetTbsConfigurationGet();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TbsBiometryApi->v10TbsBiometryGetTbsConfigurationGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\Exos\ExosApi\Model\GenericResponseGetTbsConfigurationOutput**](../Model/GenericResponseGetTbsConfigurationOutput.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10TbsBiometryGetTbsUserGet()`

```php
v10TbsBiometryGetTbsUserGet($person_uid): \Exos\ExosApi\Model\GenericResponseGetTbsUserOutput
```

Get tbs user

Get tbs user

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\TbsBiometryApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$person_uid = 'person_uid_example'; // string | Uid of person

try {
    $result = $apiInstance->v10TbsBiometryGetTbsUserGet($person_uid);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TbsBiometryApi->v10TbsBiometryGetTbsUserGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **person_uid** | **string**| Uid of person | |

### Return type

[**\Exos\ExosApi\Model\GenericResponseGetTbsUserOutput**](../Model/GenericResponseGetTbsUserOutput.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10TbsBiometrySetTbsMediumPost()`

```php
v10TbsBiometrySetTbsMediumPost($person_uid, $flex_id): \Exos\ExosApi\Model\GenericResponseResultTbsOutput
```

Set Tbs data

Set Tbs data

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\TbsBiometryApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$person_uid = 'person_uid_example'; // string | Uid of person
$flex_id = 'flex_id_example'; // string | FlexId

try {
    $result = $apiInstance->v10TbsBiometrySetTbsMediumPost($person_uid, $flex_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TbsBiometryApi->v10TbsBiometrySetTbsMediumPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **person_uid** | **string**| Uid of person | |
| **flex_id** | **string**| FlexId | [optional] |

### Return type

[**\Exos\ExosApi\Model\GenericResponseResultTbsOutput**](../Model/GenericResponseResultTbsOutput.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10TbsBiometrySyncBiometryFlagPost()`

```php
v10TbsBiometrySyncBiometryFlagPost($person_uid): \Exos\ExosApi\Model\GenericResponseResultTbsOutput
```

Sync biometric flag

Sync biometric flag

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\TbsBiometryApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$person_uid = 'person_uid_example'; // string | Uid of person

try {
    $result = $apiInstance->v10TbsBiometrySyncBiometryFlagPost($person_uid);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TbsBiometryApi->v10TbsBiometrySyncBiometryFlagPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **person_uid** | **string**| Uid of person | |

### Return type

[**\Exos\ExosApi\Model\GenericResponseResultTbsOutput**](../Model/GenericResponseResultTbsOutput.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
