# Exos\ExosApi\SystemManagementApi

All URIs are relative to /ExosApi/api, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**systemManagementV10ConfirmCertificateApprovalRequestPost()**](SystemManagementApi.md#systemManagementV10ConfirmCertificateApprovalRequestPost) | **POST** /systemManagement/v1.0/confirmCertificateApprovalRequest | Approves or rejects the certificate approval request of a device (Access Manager 92 xx only). |
| [**systemManagementV10GetCertificateApprovalRequestPost()**](SystemManagementApi.md#systemManagementV10GetCertificateApprovalRequestPost) | **POST** /systemManagement/v1.0/getCertificateApprovalRequest | Get the certificate approval request of a device (Access Manager 92 xx only). |
| [**systemManagementV10GetCommunicationInfoPost()**](SystemManagementApi.md#systemManagementV10GetCommunicationInfoPost) | **POST** /systemManagement/v1.0/getCommunicationInfo | Get the communication info of a device (Access Manager 92 xx only). |
| [**systemManagementV10SetCommunicationInfoPost()**](SystemManagementApi.md#systemManagementV10SetCommunicationInfoPost) | **POST** /systemManagement/v1.0/setCommunicationInfo | Set the communication info to a device (Access Manager 92 xx only). |


## `systemManagementV10ConfirmCertificateApprovalRequestPost()`

```php
systemManagementV10ConfirmCertificateApprovalRequestPost($confirm_certificate_approval_request_input): \Exos\ExosApi\Model\VoidResponse
```

Approves or rejects the certificate approval request of a device (Access Manager 92 xx only).

Approves or rejects the certificate approval request of a device (Access Manager 92 xx only).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\SystemManagementApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$confirm_certificate_approval_request_input = new \Exos\ExosApi\Model\ConfirmCertificateApprovalRequestInput(); // \Exos\ExosApi\Model\ConfirmCertificateApprovalRequestInput

try {
    $result = $apiInstance->systemManagementV10ConfirmCertificateApprovalRequestPost($confirm_certificate_approval_request_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SystemManagementApi->systemManagementV10ConfirmCertificateApprovalRequestPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **confirm_certificate_approval_request_input** | [**\Exos\ExosApi\Model\ConfirmCertificateApprovalRequestInput**](../Model/ConfirmCertificateApprovalRequestInput.md)|  | |

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

## `systemManagementV10GetCertificateApprovalRequestPost()`

```php
systemManagementV10GetCertificateApprovalRequestPost($get_certificate_approval_request_input): \Exos\ExosApi\Model\GenericResponseOfGetCertificateApprovalRequestOutput
```

Get the certificate approval request of a device (Access Manager 92 xx only).

Get the certificate approval request of a device (Access Manager 92 xx only).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\SystemManagementApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$get_certificate_approval_request_input = new \Exos\ExosApi\Model\GetCertificateApprovalRequestInput(); // \Exos\ExosApi\Model\GetCertificateApprovalRequestInput | Device address of the device for which the data is requested.

try {
    $result = $apiInstance->systemManagementV10GetCertificateApprovalRequestPost($get_certificate_approval_request_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SystemManagementApi->systemManagementV10GetCertificateApprovalRequestPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **get_certificate_approval_request_input** | [**\Exos\ExosApi\Model\GetCertificateApprovalRequestInput**](../Model/GetCertificateApprovalRequestInput.md)| Device address of the device for which the data is requested. | |

### Return type

[**\Exos\ExosApi\Model\GenericResponseOfGetCertificateApprovalRequestOutput**](../Model/GenericResponseOfGetCertificateApprovalRequestOutput.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `systemManagementV10GetCommunicationInfoPost()`

```php
systemManagementV10GetCommunicationInfoPost($get_communication_info_input): \Exos\ExosApi\Model\GenericResponseOfGetCommunicationInfoOutput
```

Get the communication info of a device (Access Manager 92 xx only).

Get the communication info of a device (Access Manager 92 xx only).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\SystemManagementApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$get_communication_info_input = new \Exos\ExosApi\Model\GetCommunicationInfoInput(); // \Exos\ExosApi\Model\GetCommunicationInfoInput | Node id of the device for which the data is requested.

try {
    $result = $apiInstance->systemManagementV10GetCommunicationInfoPost($get_communication_info_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SystemManagementApi->systemManagementV10GetCommunicationInfoPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **get_communication_info_input** | [**\Exos\ExosApi\Model\GetCommunicationInfoInput**](../Model/GetCommunicationInfoInput.md)| Node id of the device for which the data is requested. | |

### Return type

[**\Exos\ExosApi\Model\GenericResponseOfGetCommunicationInfoOutput**](../Model/GenericResponseOfGetCommunicationInfoOutput.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `systemManagementV10SetCommunicationInfoPost()`

```php
systemManagementV10SetCommunicationInfoPost($set_communication_info_input): \Exos\ExosApi\Model\VoidResponse
```

Set the communication info to a device (Access Manager 92 xx only).

Set the communication info to a device (Access Manager 92 xx only).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\SystemManagementApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$set_communication_info_input = new \Exos\ExosApi\Model\SetCommunicationInfoInput(); // \Exos\ExosApi\Model\SetCommunicationInfoInput

try {
    $result = $apiInstance->systemManagementV10SetCommunicationInfoPost($set_communication_info_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SystemManagementApi->systemManagementV10SetCommunicationInfoPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **set_communication_info_input** | [**\Exos\ExosApi\Model\SetCommunicationInfoInput**](../Model/SetCommunicationInfoInput.md)|  | |

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
