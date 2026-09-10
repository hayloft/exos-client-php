# Exos\ExosApi\SafetyCheckApi

All URIs are relative to /ExosApi/api, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**v10SafetyCheckPersonIdPassPost()**](SafetyCheckApi.md#v10SafetyCheckPersonIdPassPost) | **POST** /v1.0/safetyCheck/{personId}/pass | Set the expiration date for safety check |
| [**v10SafetyCheckSettingsContractorSafetyCheckNotificationInDaysGet()**](SafetyCheckApi.md#v10SafetyCheckSettingsContractorSafetyCheckNotificationInDaysGet) | **GET** /v1.0/safetyCheck/settings/ContractorSafetyCheckNotificationInDays | returns the number of days when a notification will be send before the safety check will expire (Contractors) |
| [**v10SafetyCheckSettingsContractorSafetyCheckNotificationInDaysPost()**](SafetyCheckApi.md#v10SafetyCheckSettingsContractorSafetyCheckNotificationInDaysPost) | **POST** /v1.0/safetyCheck/settings/ContractorSafetyCheckNotificationInDays | sets the number of days when a notification should be send before the safety check will expire (Contractors) |
| [**v10SafetyCheckSettingsContractorSafetyCheckValidityInDaysGet()**](SafetyCheckApi.md#v10SafetyCheckSettingsContractorSafetyCheckValidityInDaysGet) | **GET** /v1.0/safetyCheck/settings/ContractorSafetyCheckValidityInDays | returns the number of days the safety check is valid for Contractors |
| [**v10SafetyCheckSettingsContractorSafetyCheckValidityInDaysPost()**](SafetyCheckApi.md#v10SafetyCheckSettingsContractorSafetyCheckValidityInDaysPost) | **POST** /v1.0/safetyCheck/settings/ContractorSafetyCheckValidityInDays | sets the number of days the safety check is valid |
| [**v10SafetyCheckSettingsEmployeeSafetyCheckNotificationInDaysGet()**](SafetyCheckApi.md#v10SafetyCheckSettingsEmployeeSafetyCheckNotificationInDaysGet) | **GET** /v1.0/safetyCheck/settings/EmployeeSafetyCheckNotificationInDays | returns the number of days when a notification will be send before the safety check will expire (employees) |
| [**v10SafetyCheckSettingsEmployeeSafetyCheckNotificationInDaysPost()**](SafetyCheckApi.md#v10SafetyCheckSettingsEmployeeSafetyCheckNotificationInDaysPost) | **POST** /v1.0/safetyCheck/settings/EmployeeSafetyCheckNotificationInDays | sets the number of days when a notification should be send before the safety check will expire (employees) |
| [**v10SafetyCheckSettingsEmployeeSafetyCheckValidityInDaysGet()**](SafetyCheckApi.md#v10SafetyCheckSettingsEmployeeSafetyCheckValidityInDaysGet) | **GET** /v1.0/safetyCheck/settings/EmployeeSafetyCheckValidityInDays | returns the number of days the safety check is valid for employees |
| [**v10SafetyCheckSettingsEmployeeSafetyCheckValidityInDaysPost()**](SafetyCheckApi.md#v10SafetyCheckSettingsEmployeeSafetyCheckValidityInDaysPost) | **POST** /v1.0/safetyCheck/settings/EmployeeSafetyCheckValidityInDays | sets the number of days the safety check is valid |
| [**v10SafetyCheckSettingsEnableContractorSafetyCheckGet()**](SafetyCheckApi.md#v10SafetyCheckSettingsEnableContractorSafetyCheckGet) | **GET** /v1.0/safetyCheck/settings/EnableContractorSafetyCheck | check if safety check for Contractors is enabled |
| [**v10SafetyCheckSettingsEnableContractorSafetyCheckNotificationGet()**](SafetyCheckApi.md#v10SafetyCheckSettingsEnableContractorSafetyCheckNotificationGet) | **GET** /v1.0/safetyCheck/settings/EnableContractorSafetyCheckNotification | checks if safety check notification is enabled for Contractors |
| [**v10SafetyCheckSettingsEnableContractorSafetyCheckNotificationPost()**](SafetyCheckApi.md#v10SafetyCheckSettingsEnableContractorSafetyCheckNotificationPost) | **POST** /v1.0/safetyCheck/settings/EnableContractorSafetyCheckNotification | enables/disables safety check notification for Contractors |
| [**v10SafetyCheckSettingsEnableContractorSafetyCheckPost()**](SafetyCheckApi.md#v10SafetyCheckSettingsEnableContractorSafetyCheckPost) | **POST** /v1.0/safetyCheck/settings/EnableContractorSafetyCheck | enables/disables safety check for Contractors |
| [**v10SafetyCheckSettingsEnableEmployeeSafetyCheckGet()**](SafetyCheckApi.md#v10SafetyCheckSettingsEnableEmployeeSafetyCheckGet) | **GET** /v1.0/safetyCheck/settings/EnableEmployeeSafetyCheck | check if safety check for employees is enabled |
| [**v10SafetyCheckSettingsEnableEmployeeSafetyCheckNotificationGet()**](SafetyCheckApi.md#v10SafetyCheckSettingsEnableEmployeeSafetyCheckNotificationGet) | **GET** /v1.0/safetyCheck/settings/EnableEmployeeSafetyCheckNotification | checks if safety check notification is enabled for employees |
| [**v10SafetyCheckSettingsEnableEmployeeSafetyCheckNotificationPost()**](SafetyCheckApi.md#v10SafetyCheckSettingsEnableEmployeeSafetyCheckNotificationPost) | **POST** /v1.0/safetyCheck/settings/EnableEmployeeSafetyCheckNotification | enables/disables safety check notification for employees |
| [**v10SafetyCheckSettingsEnableEmployeeSafetyCheckPost()**](SafetyCheckApi.md#v10SafetyCheckSettingsEnableEmployeeSafetyCheckPost) | **POST** /v1.0/safetyCheck/settings/EnableEmployeeSafetyCheck | enables/disables safety check for employees |


## `v10SafetyCheckPersonIdPassPost()`

```php
v10SafetyCheckPersonIdPassPost($person_id, $safety_check_expiration_date): \Exos\ExosApi\Model\VoidResponseOutput
```

Set the expiration date for safety check

Set the expiration date for safety check.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\SafetyCheckApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$person_id = 'person_id_example'; // string | id of person
$safety_check_expiration_date = new \Exos\ExosApi\Model\SafetyCheckExpirationDate(); // \Exos\ExosApi\Model\SafetyCheckExpirationDate | the date the saftey check will expire

try {
    $result = $apiInstance->v10SafetyCheckPersonIdPassPost($person_id, $safety_check_expiration_date);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SafetyCheckApi->v10SafetyCheckPersonIdPassPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **person_id** | **string**| id of person | |
| **safety_check_expiration_date** | [**\Exos\ExosApi\Model\SafetyCheckExpirationDate**](../Model/SafetyCheckExpirationDate.md)| the date the saftey check will expire | [optional] |

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

## `v10SafetyCheckSettingsContractorSafetyCheckNotificationInDaysGet()`

```php
v10SafetyCheckSettingsContractorSafetyCheckNotificationInDaysGet(): \Exos\ExosApi\Model\GetIntParameterOutputWithTime
```

returns the number of days when a notification will be send before the safety check will expire (Contractors)

Default false.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\SafetyCheckApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);

try {
    $result = $apiInstance->v10SafetyCheckSettingsContractorSafetyCheckNotificationInDaysGet();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SafetyCheckApi->v10SafetyCheckSettingsContractorSafetyCheckNotificationInDaysGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\Exos\ExosApi\Model\GetIntParameterOutputWithTime**](../Model/GetIntParameterOutputWithTime.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10SafetyCheckSettingsContractorSafetyCheckNotificationInDaysPost()`

```php
v10SafetyCheckSettingsContractorSafetyCheckNotificationInDaysPost($set_safety_check_notification_in_days): \Exos\ExosApi\Model\VoidResponseOutput
```

sets the number of days when a notification should be send before the safety check will expire (Contractors)

Default false.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\SafetyCheckApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$set_safety_check_notification_in_days = new \Exos\ExosApi\Model\SetSafetyCheckNotificationInDays(); // \Exos\ExosApi\Model\SetSafetyCheckNotificationInDays

try {
    $result = $apiInstance->v10SafetyCheckSettingsContractorSafetyCheckNotificationInDaysPost($set_safety_check_notification_in_days);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SafetyCheckApi->v10SafetyCheckSettingsContractorSafetyCheckNotificationInDaysPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **set_safety_check_notification_in_days** | [**\Exos\ExosApi\Model\SetSafetyCheckNotificationInDays**](../Model/SetSafetyCheckNotificationInDays.md)|  | |

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

## `v10SafetyCheckSettingsContractorSafetyCheckValidityInDaysGet()`

```php
v10SafetyCheckSettingsContractorSafetyCheckValidityInDaysGet(): \Exos\ExosApi\Model\GetIntParameterOutputWithTime
```

returns the number of days the safety check is valid for Contractors

Default false.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\SafetyCheckApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);

try {
    $result = $apiInstance->v10SafetyCheckSettingsContractorSafetyCheckValidityInDaysGet();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SafetyCheckApi->v10SafetyCheckSettingsContractorSafetyCheckValidityInDaysGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\Exos\ExosApi\Model\GetIntParameterOutputWithTime**](../Model/GetIntParameterOutputWithTime.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10SafetyCheckSettingsContractorSafetyCheckValidityInDaysPost()`

```php
v10SafetyCheckSettingsContractorSafetyCheckValidityInDaysPost($set_person_safety_check_validity_in_days_input): \Exos\ExosApi\Model\VoidResponseOutput
```

sets the number of days the safety check is valid

Default false.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\SafetyCheckApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$set_person_safety_check_validity_in_days_input = new \Exos\ExosApi\Model\SetPersonSafetyCheckValidityInDaysInput(); // \Exos\ExosApi\Model\SetPersonSafetyCheckValidityInDaysInput

try {
    $result = $apiInstance->v10SafetyCheckSettingsContractorSafetyCheckValidityInDaysPost($set_person_safety_check_validity_in_days_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SafetyCheckApi->v10SafetyCheckSettingsContractorSafetyCheckValidityInDaysPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **set_person_safety_check_validity_in_days_input** | [**\Exos\ExosApi\Model\SetPersonSafetyCheckValidityInDaysInput**](../Model/SetPersonSafetyCheckValidityInDaysInput.md)|  | |

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

## `v10SafetyCheckSettingsEmployeeSafetyCheckNotificationInDaysGet()`

```php
v10SafetyCheckSettingsEmployeeSafetyCheckNotificationInDaysGet(): \Exos\ExosApi\Model\GetIntParameterOutputWithTime
```

returns the number of days when a notification will be send before the safety check will expire (employees)

Default false.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\SafetyCheckApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);

try {
    $result = $apiInstance->v10SafetyCheckSettingsEmployeeSafetyCheckNotificationInDaysGet();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SafetyCheckApi->v10SafetyCheckSettingsEmployeeSafetyCheckNotificationInDaysGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\Exos\ExosApi\Model\GetIntParameterOutputWithTime**](../Model/GetIntParameterOutputWithTime.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10SafetyCheckSettingsEmployeeSafetyCheckNotificationInDaysPost()`

```php
v10SafetyCheckSettingsEmployeeSafetyCheckNotificationInDaysPost($set_safety_check_notification_in_days): \Exos\ExosApi\Model\VoidResponseOutput
```

sets the number of days when a notification should be send before the safety check will expire (employees)

Default false.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\SafetyCheckApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$set_safety_check_notification_in_days = new \Exos\ExosApi\Model\SetSafetyCheckNotificationInDays(); // \Exos\ExosApi\Model\SetSafetyCheckNotificationInDays

try {
    $result = $apiInstance->v10SafetyCheckSettingsEmployeeSafetyCheckNotificationInDaysPost($set_safety_check_notification_in_days);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SafetyCheckApi->v10SafetyCheckSettingsEmployeeSafetyCheckNotificationInDaysPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **set_safety_check_notification_in_days** | [**\Exos\ExosApi\Model\SetSafetyCheckNotificationInDays**](../Model/SetSafetyCheckNotificationInDays.md)|  | |

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

## `v10SafetyCheckSettingsEmployeeSafetyCheckValidityInDaysGet()`

```php
v10SafetyCheckSettingsEmployeeSafetyCheckValidityInDaysGet(): \Exos\ExosApi\Model\GetIntParameterOutputWithTime
```

returns the number of days the safety check is valid for employees

Default false.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\SafetyCheckApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);

try {
    $result = $apiInstance->v10SafetyCheckSettingsEmployeeSafetyCheckValidityInDaysGet();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SafetyCheckApi->v10SafetyCheckSettingsEmployeeSafetyCheckValidityInDaysGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\Exos\ExosApi\Model\GetIntParameterOutputWithTime**](../Model/GetIntParameterOutputWithTime.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10SafetyCheckSettingsEmployeeSafetyCheckValidityInDaysPost()`

```php
v10SafetyCheckSettingsEmployeeSafetyCheckValidityInDaysPost($set_person_safety_check_validity_in_days_input): \Exos\ExosApi\Model\VoidResponseOutput
```

sets the number of days the safety check is valid

Default false.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\SafetyCheckApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$set_person_safety_check_validity_in_days_input = new \Exos\ExosApi\Model\SetPersonSafetyCheckValidityInDaysInput(); // \Exos\ExosApi\Model\SetPersonSafetyCheckValidityInDaysInput

try {
    $result = $apiInstance->v10SafetyCheckSettingsEmployeeSafetyCheckValidityInDaysPost($set_person_safety_check_validity_in_days_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SafetyCheckApi->v10SafetyCheckSettingsEmployeeSafetyCheckValidityInDaysPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **set_person_safety_check_validity_in_days_input** | [**\Exos\ExosApi\Model\SetPersonSafetyCheckValidityInDaysInput**](../Model/SetPersonSafetyCheckValidityInDaysInput.md)|  | |

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

## `v10SafetyCheckSettingsEnableContractorSafetyCheckGet()`

```php
v10SafetyCheckSettingsEnableContractorSafetyCheckGet(): \Exos\ExosApi\Model\GetBoolParameterOutputWithTime
```

check if safety check for Contractors is enabled

Default false.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\SafetyCheckApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);

try {
    $result = $apiInstance->v10SafetyCheckSettingsEnableContractorSafetyCheckGet();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SafetyCheckApi->v10SafetyCheckSettingsEnableContractorSafetyCheckGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\Exos\ExosApi\Model\GetBoolParameterOutputWithTime**](../Model/GetBoolParameterOutputWithTime.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10SafetyCheckSettingsEnableContractorSafetyCheckNotificationGet()`

```php
v10SafetyCheckSettingsEnableContractorSafetyCheckNotificationGet(): \Exos\ExosApi\Model\GetBoolParameterOutputWithTime
```

checks if safety check notification is enabled for Contractors

Default false.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\SafetyCheckApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);

try {
    $result = $apiInstance->v10SafetyCheckSettingsEnableContractorSafetyCheckNotificationGet();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SafetyCheckApi->v10SafetyCheckSettingsEnableContractorSafetyCheckNotificationGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\Exos\ExosApi\Model\GetBoolParameterOutputWithTime**](../Model/GetBoolParameterOutputWithTime.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10SafetyCheckSettingsEnableContractorSafetyCheckNotificationPost()`

```php
v10SafetyCheckSettingsEnableContractorSafetyCheckNotificationPost($set_bool_parameter_input_with_default_false): \Exos\ExosApi\Model\VoidResponseOutput
```

enables/disables safety check notification for Contractors

Default false.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\SafetyCheckApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$set_bool_parameter_input_with_default_false = new \Exos\ExosApi\Model\SetBoolParameterInputWithDefaultFalse(); // \Exos\ExosApi\Model\SetBoolParameterInputWithDefaultFalse

try {
    $result = $apiInstance->v10SafetyCheckSettingsEnableContractorSafetyCheckNotificationPost($set_bool_parameter_input_with_default_false);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SafetyCheckApi->v10SafetyCheckSettingsEnableContractorSafetyCheckNotificationPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **set_bool_parameter_input_with_default_false** | [**\Exos\ExosApi\Model\SetBoolParameterInputWithDefaultFalse**](../Model/SetBoolParameterInputWithDefaultFalse.md)|  | |

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

## `v10SafetyCheckSettingsEnableContractorSafetyCheckPost()`

```php
v10SafetyCheckSettingsEnableContractorSafetyCheckPost($set_bool_parameter_input_with_default_false): \Exos\ExosApi\Model\VoidResponseOutput
```

enables/disables safety check for Contractors

Default false.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\SafetyCheckApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$set_bool_parameter_input_with_default_false = new \Exos\ExosApi\Model\SetBoolParameterInputWithDefaultFalse(); // \Exos\ExosApi\Model\SetBoolParameterInputWithDefaultFalse

try {
    $result = $apiInstance->v10SafetyCheckSettingsEnableContractorSafetyCheckPost($set_bool_parameter_input_with_default_false);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SafetyCheckApi->v10SafetyCheckSettingsEnableContractorSafetyCheckPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **set_bool_parameter_input_with_default_false** | [**\Exos\ExosApi\Model\SetBoolParameterInputWithDefaultFalse**](../Model/SetBoolParameterInputWithDefaultFalse.md)|  | |

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

## `v10SafetyCheckSettingsEnableEmployeeSafetyCheckGet()`

```php
v10SafetyCheckSettingsEnableEmployeeSafetyCheckGet(): \Exos\ExosApi\Model\GetBoolParameterOutputWithTime
```

check if safety check for employees is enabled

Default false.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\SafetyCheckApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);

try {
    $result = $apiInstance->v10SafetyCheckSettingsEnableEmployeeSafetyCheckGet();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SafetyCheckApi->v10SafetyCheckSettingsEnableEmployeeSafetyCheckGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\Exos\ExosApi\Model\GetBoolParameterOutputWithTime**](../Model/GetBoolParameterOutputWithTime.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10SafetyCheckSettingsEnableEmployeeSafetyCheckNotificationGet()`

```php
v10SafetyCheckSettingsEnableEmployeeSafetyCheckNotificationGet(): \Exos\ExosApi\Model\GetBoolParameterOutputWithTime
```

checks if safety check notification is enabled for employees

Default false.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\SafetyCheckApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);

try {
    $result = $apiInstance->v10SafetyCheckSettingsEnableEmployeeSafetyCheckNotificationGet();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SafetyCheckApi->v10SafetyCheckSettingsEnableEmployeeSafetyCheckNotificationGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\Exos\ExosApi\Model\GetBoolParameterOutputWithTime**](../Model/GetBoolParameterOutputWithTime.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10SafetyCheckSettingsEnableEmployeeSafetyCheckNotificationPost()`

```php
v10SafetyCheckSettingsEnableEmployeeSafetyCheckNotificationPost($set_bool_parameter_input_with_default_false): \Exos\ExosApi\Model\VoidResponseOutput
```

enables/disables safety check notification for employees

Default false.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\SafetyCheckApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$set_bool_parameter_input_with_default_false = new \Exos\ExosApi\Model\SetBoolParameterInputWithDefaultFalse(); // \Exos\ExosApi\Model\SetBoolParameterInputWithDefaultFalse

try {
    $result = $apiInstance->v10SafetyCheckSettingsEnableEmployeeSafetyCheckNotificationPost($set_bool_parameter_input_with_default_false);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SafetyCheckApi->v10SafetyCheckSettingsEnableEmployeeSafetyCheckNotificationPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **set_bool_parameter_input_with_default_false** | [**\Exos\ExosApi\Model\SetBoolParameterInputWithDefaultFalse**](../Model/SetBoolParameterInputWithDefaultFalse.md)|  | |

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

## `v10SafetyCheckSettingsEnableEmployeeSafetyCheckPost()`

```php
v10SafetyCheckSettingsEnableEmployeeSafetyCheckPost($set_bool_parameter_input_with_default_false): \Exos\ExosApi\Model\VoidResponseOutput
```

enables/disables safety check for employees

Default false.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\SafetyCheckApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$set_bool_parameter_input_with_default_false = new \Exos\ExosApi\Model\SetBoolParameterInputWithDefaultFalse(); // \Exos\ExosApi\Model\SetBoolParameterInputWithDefaultFalse

try {
    $result = $apiInstance->v10SafetyCheckSettingsEnableEmployeeSafetyCheckPost($set_bool_parameter_input_with_default_false);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SafetyCheckApi->v10SafetyCheckSettingsEnableEmployeeSafetyCheckPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **set_bool_parameter_input_with_default_false** | [**\Exos\ExosApi\Model\SetBoolParameterInputWithDefaultFalse**](../Model/SetBoolParameterInputWithDefaultFalse.md)|  | |

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
