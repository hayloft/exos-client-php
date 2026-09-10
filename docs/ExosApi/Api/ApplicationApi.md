# Exos\ExosApi\ApplicationApi

All URIs are relative to /ExosApi/api, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**v10ApplicationAllapplicationsGet()**](ApplicationApi.md#v10ApplicationAllapplicationsGet) | **GET** /v1.0/application/allapplications |  |
| [**v10ApplicationWebapplicationsGet()**](ApplicationApi.md#v10ApplicationWebapplicationsGet) | **GET** /v1.0/application/webapplications |  |


## `v10ApplicationAllapplicationsGet()`

```php
v10ApplicationAllapplicationsGet(): \Exos\ExosApi\Model\GenericResponseOfGetClientApplicationOutput
```



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\ApplicationApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);

try {
    $result = $apiInstance->v10ApplicationAllapplicationsGet();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ApplicationApi->v10ApplicationAllapplicationsGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\Exos\ExosApi\Model\GenericResponseOfGetClientApplicationOutput**](../Model/GenericResponseOfGetClientApplicationOutput.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10ApplicationWebapplicationsGet()`

```php
v10ApplicationWebapplicationsGet(): \Exos\ExosApi\Model\GenericResponseOfGetClientApplicationOutput
```



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\ApplicationApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);

try {
    $result = $apiInstance->v10ApplicationWebapplicationsGet();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ApplicationApi->v10ApplicationWebapplicationsGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\Exos\ExosApi\Model\GenericResponseOfGetClientApplicationOutput**](../Model/GenericResponseOfGetClientApplicationOutput.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
