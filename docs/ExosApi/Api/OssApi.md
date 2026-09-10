# Exos\ExosApi\OssApi

All URIs are relative to /ExosApi/api, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**getOssIdentMediaDefinitions()**](OssApi.md#getOssIdentMediaDefinitions) | **POST** /v1.0/oss/identMediaDefinitions | Gets the OSS-SO ident media definitions of the submitted media code(s). |
| [**v10OssBlocklistMediaDefinitionsAndDataPost()**](OssApi.md#v10OssBlocklistMediaDefinitionsAndDataPost) | **POST** /v1.0/oss/blocklistMediaDefinitionsAndData | Gets the media definitions with the blocklist data for transfer blocklist. |


## `getOssIdentMediaDefinitions()`

```php
getOssIdentMediaDefinitions($get_card_link_ident_media_definitions_input): \Exos\ExosApi\Model\GenericResponseOfGetMediaDefinitionsOutput
```

Gets the OSS-SO ident media definitions of the submitted media code(s).



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\OssApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$get_card_link_ident_media_definitions_input = new \Exos\ExosApi\Model\GetCardLinkIdentMediaDefinitionsInput(); // \Exos\ExosApi\Model\GetCardLinkIdentMediaDefinitionsInput

try {
    $result = $apiInstance->getOssIdentMediaDefinitions($get_card_link_ident_media_definitions_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OssApi->getOssIdentMediaDefinitions: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **get_card_link_ident_media_definitions_input** | [**\Exos\ExosApi\Model\GetCardLinkIdentMediaDefinitionsInput**](../Model/GetCardLinkIdentMediaDefinitionsInput.md)|  | |

### Return type

[**\Exos\ExosApi\Model\GenericResponseOfGetMediaDefinitionsOutput**](../Model/GenericResponseOfGetMediaDefinitionsOutput.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10OssBlocklistMediaDefinitionsAndDataPost()`

```php
v10OssBlocklistMediaDefinitionsAndDataPost($get_blocklist_data_input): \Exos\ExosApi\Model\GenericResponseOfGetCardLinkMediaDefinitionsAndDataOutput
```

Gets the media definitions with the blocklist data for transfer blocklist.



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\OssApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$get_blocklist_data_input = new \Exos\ExosApi\Model\GetBlocklistDataInput(); // \Exos\ExosApi\Model\GetBlocklistDataInput

try {
    $result = $apiInstance->v10OssBlocklistMediaDefinitionsAndDataPost($get_blocklist_data_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OssApi->v10OssBlocklistMediaDefinitionsAndDataPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **get_blocklist_data_input** | [**\Exos\ExosApi\Model\GetBlocklistDataInput**](../Model/GetBlocklistDataInput.md)|  | |

### Return type

[**\Exos\ExosApi\Model\GenericResponseOfGetCardLinkMediaDefinitionsAndDataOutput**](../Model/GenericResponseOfGetCardLinkMediaDefinitionsAndDataOutput.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
