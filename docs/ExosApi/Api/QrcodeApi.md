# Exos\ExosApi\QrcodeApi

All URIs are relative to /ExosApi/api, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**v10QrCodeCleanQrCodesPost()**](QrcodeApi.md#v10QrCodeCleanQrCodesPost) | **POST** /v1.0/qrCode/cleanQrCodes | clean up job for qr codes |
| [**v10QrCodeVisitorSettingsGet()**](QrcodeApi.md#v10QrCodeVisitorSettingsGet) | **GET** /v1.0/qrCode/visitorSettings | gets the qr code settings for visitor management |
| [**v10QrCodeVisitorSettingsPost()**](QrcodeApi.md#v10QrCodeVisitorSettingsPost) | **POST** /v1.0/qrCode/visitorSettings | sets the qr code settings for visitor management |


## `v10QrCodeCleanQrCodesPost()`

```php
v10QrCodeCleanQrCodesPost($clean_qr_code_input): \Exos\ExosApi\Model\VoidResponseOutput
```

clean up job for qr codes

removes passed qr codes from the system

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\QrcodeApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$clean_qr_code_input = new \Exos\ExosApi\Model\CleanQrCodeInput(); // \Exos\ExosApi\Model\CleanQrCodeInput | setting values

try {
    $result = $apiInstance->v10QrCodeCleanQrCodesPost($clean_qr_code_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling QrcodeApi->v10QrCodeCleanQrCodesPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **clean_qr_code_input** | [**\Exos\ExosApi\Model\CleanQrCodeInput**](../Model/CleanQrCodeInput.md)| setting values | |

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

## `v10QrCodeVisitorSettingsGet()`

```php
v10QrCodeVisitorSettingsGet($workstation): \Exos\ExosApi\Model\GetQrCodeVisitorSettingsOutputWithTime
```

gets the qr code settings for visitor management

gets the qr code settings for visitor management

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\QrcodeApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$workstation = 'workstation_example'; // string

try {
    $result = $apiInstance->v10QrCodeVisitorSettingsGet($workstation);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling QrcodeApi->v10QrCodeVisitorSettingsGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **workstation** | **string**|  | |

### Return type

[**\Exos\ExosApi\Model\GetQrCodeVisitorSettingsOutputWithTime**](../Model/GetQrCodeVisitorSettingsOutputWithTime.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10QrCodeVisitorSettingsPost()`

```php
v10QrCodeVisitorSettingsPost($workstation, $set_qr_code_visitor_settings_input): \Exos\ExosApi\Model\VoidResponseOutput
```

sets the qr code settings for visitor management

sets the qr code settings for visitor management

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\QrcodeApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$workstation = 'workstation_example'; // string
$set_qr_code_visitor_settings_input = new \Exos\ExosApi\Model\SetQrCodeVisitorSettingsInput(); // \Exos\ExosApi\Model\SetQrCodeVisitorSettingsInput | setting values

try {
    $result = $apiInstance->v10QrCodeVisitorSettingsPost($workstation, $set_qr_code_visitor_settings_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling QrcodeApi->v10QrCodeVisitorSettingsPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **workstation** | **string**|  | |
| **set_qr_code_visitor_settings_input** | [**\Exos\ExosApi\Model\SetQrCodeVisitorSettingsInput**](../Model/SetQrCodeVisitorSettingsInput.md)| setting values | |

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
