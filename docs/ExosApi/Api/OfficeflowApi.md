# Exos\ExosApi\OfficeflowApi

All URIs are relative to /ExosApi/api, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**v10OfficeFlowDataFetchCACertificatesGet()**](OfficeflowApi.md#v10OfficeFlowDataFetchCACertificatesGet) | **GET** /v1.0/officeFlowData/fetchCACertificates | fetch CA certificates and return CA fingerprint |
| [**v10OfficeFlowDataFetchClientCertificatePost()**](OfficeflowApi.md#v10OfficeFlowDataFetchClientCertificatePost) | **POST** /v1.0/officeFlowData/fetchClientCertificate | fetch client certificate |
| [**v10OfficeFlowDataGetCommissioningInformationGet()**](OfficeflowApi.md#v10OfficeFlowDataGetCommissioningInformationGet) | **GET** /v1.0/officeFlowData/getCommissioningInformation | get office flow commissioning information |
| [**v10OfficeFlowDataHandleCACertificatePost()**](OfficeflowApi.md#v10OfficeFlowDataHandleCACertificatePost) | **POST** /v1.0/officeFlowData/handleCACertificate | save CA certificates if fingerprint matched otherwise remove temporary data |
| [**v10OfficeFlowDataPersonIdAssignmentsGet()**](OfficeflowApi.md#v10OfficeFlowDataPersonIdAssignmentsGet) | **GET** /v1.0/officeFlowData/{personId}/assignments | get office flow assigments |
| [**v10OfficeFlowDataPersonIdUpdatePost()**](OfficeflowApi.md#v10OfficeFlowDataPersonIdUpdatePost) | **POST** /v1.0/officeFlowData/{personId}/update | updates the office flow person data |
| [**v10OfficeFlowDataRefetchCACertificatesPost()**](OfficeflowApi.md#v10OfficeFlowDataRefetchCACertificatesPost) | **POST** /v1.0/officeFlowData/refetchCACertificates | refetch CA certificate |
| [**v10OfficeFlowDataRenewClientCertificatePost()**](OfficeflowApi.md#v10OfficeFlowDataRenewClientCertificatePost) | **POST** /v1.0/officeFlowData/renewClientCertificate | renew client certificate |
| [**v10OfficeFlowDataSetAllPost()**](OfficeflowApi.md#v10OfficeFlowDataSetAllPost) | **POST** /v1.0/officeFlowData/setAll | synchronizes office flow person data |
| [**v10OfficeFlowDataSetCommissioningInformationPost()**](OfficeflowApi.md#v10OfficeFlowDataSetCommissioningInformationPost) | **POST** /v1.0/officeFlowData/setCommissioningInformation | update office flow commissioning information |


## `v10OfficeFlowDataFetchCACertificatesGet()`

```php
v10OfficeFlowDataFetchCACertificatesGet(): string
```

fetch CA certificates and return CA fingerprint

fetch CA certificates and return CA fingerprint

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\OfficeflowApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);

try {
    $result = $apiInstance->v10OfficeFlowDataFetchCACertificatesGet();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OfficeflowApi->v10OfficeFlowDataFetchCACertificatesGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

**string**

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10OfficeFlowDataFetchClientCertificatePost()`

```php
v10OfficeFlowDataFetchClientCertificatePost($authorization_code): \Exos\ExosApi\Model\VoidResponseOutput
```

fetch client certificate

fetch client certificate

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\OfficeflowApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$authorization_code = 'authorization_code_example'; // string | AuthorizationCode

try {
    $result = $apiInstance->v10OfficeFlowDataFetchClientCertificatePost($authorization_code);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OfficeflowApi->v10OfficeFlowDataFetchClientCertificatePost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **authorization_code** | **string**| AuthorizationCode | |

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

## `v10OfficeFlowDataGetCommissioningInformationGet()`

```php
v10OfficeFlowDataGetCommissioningInformationGet(): \Exos\ExosApi\Model\OfficeFlowCommissioningInformationDtoOutput
```

get office flow commissioning information

get office flow commissioning information

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\OfficeflowApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);

try {
    $result = $apiInstance->v10OfficeFlowDataGetCommissioningInformationGet();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OfficeflowApi->v10OfficeFlowDataGetCommissioningInformationGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\Exos\ExosApi\Model\OfficeFlowCommissioningInformationDtoOutput**](../Model/OfficeFlowCommissioningInformationDtoOutput.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10OfficeFlowDataHandleCACertificatePost()`

```php
v10OfficeFlowDataHandleCACertificatePost($matched): \Exos\ExosApi\Model\VoidResponseOutput
```

save CA certificates if fingerprint matched otherwise remove temporary data

save CA certificates if fingerprint matched otherwise remove temporary data

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\OfficeflowApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$matched = True; // bool | indicates whether fingerprint matched or not

try {
    $result = $apiInstance->v10OfficeFlowDataHandleCACertificatePost($matched);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OfficeflowApi->v10OfficeFlowDataHandleCACertificatePost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **matched** | **bool**| indicates whether fingerprint matched or not | |

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

## `v10OfficeFlowDataPersonIdAssignmentsGet()`

```php
v10OfficeFlowDataPersonIdAssignmentsGet($person_id, $visit_id): \Exos\ExosApi\Model\GenericResponseOfAssignmentOutput
```

get office flow assigments

get office flow assigments

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\OfficeflowApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$person_id = 'person_id_example'; // string | id of person
$visit_id = 'visit_id_example'; // string | id of visit (only in visitor management)

try {
    $result = $apiInstance->v10OfficeFlowDataPersonIdAssignmentsGet($person_id, $visit_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OfficeflowApi->v10OfficeFlowDataPersonIdAssignmentsGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **person_id** | **string**| id of person | |
| **visit_id** | **string**| id of visit (only in visitor management) | [optional] |

### Return type

[**\Exos\ExosApi\Model\GenericResponseOfAssignmentOutput**](../Model/GenericResponseOfAssignmentOutput.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10OfficeFlowDataPersonIdUpdatePost()`

```php
v10OfficeFlowDataPersonIdUpdatePost($person_id, $update_office_flow_input): \Exos\ExosApi\Model\VoidResponseOutput
```

updates the office flow person data

updates the office flow person data

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\OfficeflowApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$person_id = 'person_id_example'; // string | id of person
$update_office_flow_input = new \Exos\ExosApi\Model\UpdateOfficeFlowInput(); // \Exos\ExosApi\Model\UpdateOfficeFlowInput

try {
    $result = $apiInstance->v10OfficeFlowDataPersonIdUpdatePost($person_id, $update_office_flow_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OfficeflowApi->v10OfficeFlowDataPersonIdUpdatePost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **person_id** | **string**| id of person | |
| **update_office_flow_input** | [**\Exos\ExosApi\Model\UpdateOfficeFlowInput**](../Model/UpdateOfficeFlowInput.md)|  | [optional] |

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

## `v10OfficeFlowDataRefetchCACertificatesPost()`

```php
v10OfficeFlowDataRefetchCACertificatesPost(): \Exos\ExosApi\Model\VoidResponseOutput
```

refetch CA certificate

refetch CA certificate

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\OfficeflowApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);

try {
    $result = $apiInstance->v10OfficeFlowDataRefetchCACertificatesPost();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OfficeflowApi->v10OfficeFlowDataRefetchCACertificatesPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

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

## `v10OfficeFlowDataRenewClientCertificatePost()`

```php
v10OfficeFlowDataRenewClientCertificatePost(): \Exos\ExosApi\Model\VoidResponseOutput
```

renew client certificate

renew client certificate

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\OfficeflowApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);

try {
    $result = $apiInstance->v10OfficeFlowDataRenewClientCertificatePost();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OfficeflowApi->v10OfficeFlowDataRenewClientCertificatePost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

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

## `v10OfficeFlowDataSetAllPost()`

```php
v10OfficeFlowDataSetAllPost(): \Exos\ExosApi\Model\VoidResponseOutput
```

synchronizes office flow person data

synchronizes office flow person data

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\OfficeflowApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);

try {
    $result = $apiInstance->v10OfficeFlowDataSetAllPost();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OfficeflowApi->v10OfficeFlowDataSetAllPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

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

## `v10OfficeFlowDataSetCommissioningInformationPost()`

```php
v10OfficeFlowDataSetCommissioningInformationPost($office_flow_commissioning_information_dto): \Exos\ExosApi\Model\VoidResponseOutput
```

update office flow commissioning information

update office flow commissioning information

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\OfficeflowApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$office_flow_commissioning_information_dto = new \Exos\ExosApi\Model\OfficeFlowCommissioningInformationDto(); // \Exos\ExosApi\Model\OfficeFlowCommissioningInformationDto | Fields

try {
    $result = $apiInstance->v10OfficeFlowDataSetCommissioningInformationPost($office_flow_commissioning_information_dto);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OfficeflowApi->v10OfficeFlowDataSetCommissioningInformationPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **office_flow_commissioning_information_dto** | [**\Exos\ExosApi\Model\OfficeFlowCommissioningInformationDto**](../Model/OfficeFlowCommissioningInformationDto.md)| Fields | |

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
