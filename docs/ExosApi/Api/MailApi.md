# Exos\ExosApi\MailApi

All URIs are relative to /ExosApi/api, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**v10MailsSendPost()**](MailApi.md#v10MailsSendPost) | **POST** /v1.0/mails/send | send a mail |


## `v10MailsSendPost()`

```php
v10MailsSendPost($send_mail_input): \Exos\ExosApi\Model\VoidResponseOutput
```

send a mail

<p>This method provides mail send functionality with lMailLog and r9MailClient.</p><p>Required private notification license</p>

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\MailApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$send_mail_input = new \Exos\ExosApi\Model\SendMailInput(); // \Exos\ExosApi\Model\SendMailInput | Mail data

try {
    $result = $apiInstance->v10MailsSendPost($send_mail_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling MailApi->v10MailsSendPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **send_mail_input** | [**\Exos\ExosApi\Model\SendMailInput**](../Model/SendMailInput.md)| Mail data | |

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
