# Exos\ExosApi\CardLinkApi

All URIs are relative to /ExosApi/api, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**v10CardLinkActuatorStatusMediaDefinitionsPost()**](CardLinkApi.md#v10CardLinkActuatorStatusMediaDefinitionsPost) | **POST** /v1.0/cardLink/actuatorStatusMediaDefinitions | Gets the Actuator Status media definitions for the submitted ident media definition. |
| [**v10CardLinkCardLinkInfoFromCardLinkDataPost()**](CardLinkApi.md#v10CardLinkCardLinkInfoFromCardLinkDataPost) | **POST** /v1.0/cardLink/cardLinkInfoFromCardLinkData | Gets CardLink information from CardLink data. |
| [**v10CardLinkCardLinkUpdatedPost()**](CardLinkApi.md#v10CardLinkCardLinkUpdatedPost) | **POST** /v1.0/cardLink/cardLinkUpdated | Triggers that the CardLink updated. |
| [**v10CardLinkCheckForDuplicatePost()**](CardLinkApi.md#v10CardLinkCheckForDuplicatePost) | **POST** /v1.0/cardLink/checkForDuplicate | Check validation stamp order and generate an alarm if there is a duplicate. |
| [**v10CardLinkFabKeyChangedPost()**](CardLinkApi.md#v10CardLinkFabKeyChangedPost) | **POST** /v1.0/cardLink/fabKeyChanged | Triggers that the fabrication key changed. |
| [**v10CardLinkGetCardLinkBlacklistDataPost()**](CardLinkApi.md#v10CardLinkGetCardLinkBlacklistDataPost) | **POST** /v1.0/cardLink/getCardLinkBlacklistData | Gets the CardLink media definitions with the CardLink blacklist data for transfer blocklist. |
| [**v10CardLinkIdentMediaDefinitionsPost()**](CardLinkApi.md#v10CardLinkIdentMediaDefinitionsPost) | **POST** /v1.0/cardLink/identMediaDefinitions | Gets the ident media definitions of the submitted media codes and/or access domain number. |
| [**v10CardLinkIsCardLinkDuplicateDetectionEnabledGet()**](CardLinkApi.md#v10CardLinkIsCardLinkDuplicateDetectionEnabledGet) | **GET** /v1.0/cardLink/isCardLinkDuplicateDetectionEnabled | Indicates, whether the media duplicate detection based on the CardLink validation time is enabled. |
| [**v10CardLinkIsCardLinkUpdatePendingPersonIdAccessDomainIdGet()**](CardLinkApi.md#v10CardLinkIsCardLinkUpdatePendingPersonIdAccessDomainIdGet) | **GET** /v1.0/cardLink/isCardLinkUpdatePending/{personId}/{accessDomainId} | check if CardLink update is pending for a specific person on a specific access domain |
| [**v10CardLinkMediaDefinitionsAndDataPost()**](CardLinkApi.md#v10CardLinkMediaDefinitionsAndDataPost) | **POST** /v1.0/cardLink/mediaDefinitionsAndData | Gets the CardLink media definitions with the CardLink data for the submitted ident. |
| [**v10CardLinkMediaDefinitionsGet()**](CardLinkApi.md#v10CardLinkMediaDefinitionsGet) | **GET** /v1.0/cardLink/mediaDefinitions | Gets the CardLink media definitions. |
| [**v10CardLinkProcessActuatorStatusPost()**](CardLinkApi.md#v10CardLinkProcessActuatorStatusPost) | **POST** /v1.0/cardLink/processActuatorStatus | Processes the Actuator Status data. |
| [**v10CardLinkProcessTracebackPost()**](CardLinkApi.md#v10CardLinkProcessTracebackPost) | **POST** /v1.0/cardLink/processTraceback | Processes the Traceback data. |
| [**v10CardLinkSetSpecificUpdatePeriodPost()**](CardLinkApi.md#v10CardLinkSetSpecificUpdatePeriodPost) | **POST** /v1.0/cardLink/setSpecificUpdatePeriod | update the specific update period for a person and accessdomain |
| [**v10CardLinkTracebackMediaDefinitionsPost()**](CardLinkApi.md#v10CardLinkTracebackMediaDefinitionsPost) | **POST** /v1.0/cardLink/tracebackMediaDefinitions | Gets the Traceback media definitions for the submitted ident media definition. |
| [**v10CardLinkUpdateValidationPost()**](CardLinkApi.md#v10CardLinkUpdateValidationPost) | **POST** /v1.0/cardLink/updateValidation | update cardLink states for persons (r9autop) |
| [**v10CardLinkValidationPeriodIdAssignPersonPost()**](CardLinkApi.md#v10CardLinkValidationPeriodIdAssignPersonPost) | **POST** /v1.0/cardLink/{validationPeriodId}/assignPerson | assign a validation period to a specific person for a specific access domain |
| [**v10CardLinkValidationPeriodsPersonIdGet()**](CardLinkApi.md#v10CardLinkValidationPeriodsPersonIdGet) | **GET** /v1.0/cardLink/validationPeriods/{personId} | get validation periods for accessdomains, which are activated for cardLink, and the person has accessright |


## `v10CardLinkActuatorStatusMediaDefinitionsPost()`

```php
v10CardLinkActuatorStatusMediaDefinitionsPost($get_actuator_status_media_definitions_input): \Exos\ExosApi\Model\GenericResponseOfGetActuatorStatusMediaDefinitionsOutput
```

Gets the Actuator Status media definitions for the submitted ident media definition.



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\CardLinkApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$get_actuator_status_media_definitions_input = new \Exos\ExosApi\Model\GetActuatorStatusMediaDefinitionsInput(); // \Exos\ExosApi\Model\GetActuatorStatusMediaDefinitionsInput

try {
    $result = $apiInstance->v10CardLinkActuatorStatusMediaDefinitionsPost($get_actuator_status_media_definitions_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CardLinkApi->v10CardLinkActuatorStatusMediaDefinitionsPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **get_actuator_status_media_definitions_input** | [**\Exos\ExosApi\Model\GetActuatorStatusMediaDefinitionsInput**](../Model/GetActuatorStatusMediaDefinitionsInput.md)|  | |

### Return type

[**\Exos\ExosApi\Model\GenericResponseOfGetActuatorStatusMediaDefinitionsOutput**](../Model/GenericResponseOfGetActuatorStatusMediaDefinitionsOutput.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10CardLinkCardLinkInfoFromCardLinkDataPost()`

```php
v10CardLinkCardLinkInfoFromCardLinkDataPost($get_card_link_info_from_card_link_data_input): \Exos\ExosApi\Model\GetCardLinkInfoFromCardLinkDataOutput
```

Gets CardLink information from CardLink data.

Gets CardLink information from CardLink data.</p>Example code:</br>device = DesktopReaderService/FindDevice</br>mediaDefinitions = ExosApi/desktopReader_api/v1.0/cardLink/mediaDefinitions device.DeviceUid</br>cardLinkData = DesktopReaderService/Read mediaDefinitions</br>cardLinkInfos = ExosApi/desktopReader_api/v1.0/cardLink/cardLinkInfoFromCardLinkData cardLinkData</br>DesktopReaderService/CloseAll</p>

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\CardLinkApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$get_card_link_info_from_card_link_data_input = new \Exos\ExosApi\Model\GetCardLinkInfoFromCardLinkDataInput(); // \Exos\ExosApi\Model\GetCardLinkInfoFromCardLinkDataInput | The CardLink data read from desktop reader as byte array

try {
    $result = $apiInstance->v10CardLinkCardLinkInfoFromCardLinkDataPost($get_card_link_info_from_card_link_data_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CardLinkApi->v10CardLinkCardLinkInfoFromCardLinkDataPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **get_card_link_info_from_card_link_data_input** | [**\Exos\ExosApi\Model\GetCardLinkInfoFromCardLinkDataInput**](../Model/GetCardLinkInfoFromCardLinkDataInput.md)| The CardLink data read from desktop reader as byte array | |

### Return type

[**\Exos\ExosApi\Model\GetCardLinkInfoFromCardLinkDataOutput**](../Model/GetCardLinkInfoFromCardLinkDataOutput.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10CardLinkCardLinkUpdatedPost()`

```php
v10CardLinkCardLinkUpdatedPost($card_link_updated_input): \Exos\ExosApi\Model\VoidResponse
```

Triggers that the CardLink updated.



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\CardLinkApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$card_link_updated_input = new \Exos\ExosApi\Model\CardLinkUpdatedInput(); // \Exos\ExosApi\Model\CardLinkUpdatedInput

try {
    $result = $apiInstance->v10CardLinkCardLinkUpdatedPost($card_link_updated_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CardLinkApi->v10CardLinkCardLinkUpdatedPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **card_link_updated_input** | [**\Exos\ExosApi\Model\CardLinkUpdatedInput**](../Model/CardLinkUpdatedInput.md)|  | |

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

## `v10CardLinkCheckForDuplicatePost()`

```php
v10CardLinkCheckForDuplicatePost($check_for_duplicate_input): \Exos\ExosApi\Model\GenericResponseOfCheckForDuplicateOutput
```

Check validation stamp order and generate an alarm if there is a duplicate.



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\CardLinkApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$check_for_duplicate_input = new \Exos\ExosApi\Model\CheckForDuplicateInput(); // \Exos\ExosApi\Model\CheckForDuplicateInput

try {
    $result = $apiInstance->v10CardLinkCheckForDuplicatePost($check_for_duplicate_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CardLinkApi->v10CardLinkCheckForDuplicatePost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **check_for_duplicate_input** | [**\Exos\ExosApi\Model\CheckForDuplicateInput**](../Model/CheckForDuplicateInput.md)|  | |

### Return type

[**\Exos\ExosApi\Model\GenericResponseOfCheckForDuplicateOutput**](../Model/GenericResponseOfCheckForDuplicateOutput.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10CardLinkFabKeyChangedPost()`

```php
v10CardLinkFabKeyChangedPost($fab_key_changed_input): \Exos\ExosApi\Model\VoidResponse
```

Triggers that the fabrication key changed.



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\CardLinkApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$fab_key_changed_input = new \Exos\ExosApi\Model\FabKeyChangedInput(); // \Exos\ExosApi\Model\FabKeyChangedInput

try {
    $result = $apiInstance->v10CardLinkFabKeyChangedPost($fab_key_changed_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CardLinkApi->v10CardLinkFabKeyChangedPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **fab_key_changed_input** | [**\Exos\ExosApi\Model\FabKeyChangedInput**](../Model/FabKeyChangedInput.md)|  | |

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

## `v10CardLinkGetCardLinkBlacklistDataPost()`

```php
v10CardLinkGetCardLinkBlacklistDataPost($get_card_link_media_definitions_and_blacklist_data_input): \Exos\ExosApi\Model\GenericResponseOfGetCardLinkMediaDefinitionsAndBlacklistDataOutput
```

Gets the CardLink media definitions with the CardLink blacklist data for transfer blocklist.



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\CardLinkApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$get_card_link_media_definitions_and_blacklist_data_input = new \Exos\ExosApi\Model\GetCardLinkMediaDefinitionsAndBlacklistDataInput(); // \Exos\ExosApi\Model\GetCardLinkMediaDefinitionsAndBlacklistDataInput

try {
    $result = $apiInstance->v10CardLinkGetCardLinkBlacklistDataPost($get_card_link_media_definitions_and_blacklist_data_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CardLinkApi->v10CardLinkGetCardLinkBlacklistDataPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **get_card_link_media_definitions_and_blacklist_data_input** | [**\Exos\ExosApi\Model\GetCardLinkMediaDefinitionsAndBlacklistDataInput**](../Model/GetCardLinkMediaDefinitionsAndBlacklistDataInput.md)|  | |

### Return type

[**\Exos\ExosApi\Model\GenericResponseOfGetCardLinkMediaDefinitionsAndBlacklistDataOutput**](../Model/GenericResponseOfGetCardLinkMediaDefinitionsAndBlacklistDataOutput.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10CardLinkIdentMediaDefinitionsPost()`

```php
v10CardLinkIdentMediaDefinitionsPost($get_card_link_ident_media_definitions_input): \Exos\ExosApi\Model\GenericResponseOfGetMediaDefinitionsOutput
```

Gets the ident media definitions of the submitted media codes and/or access domain number.



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\CardLinkApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$get_card_link_ident_media_definitions_input = new \Exos\ExosApi\Model\GetCardLinkIdentMediaDefinitionsInput(); // \Exos\ExosApi\Model\GetCardLinkIdentMediaDefinitionsInput

try {
    $result = $apiInstance->v10CardLinkIdentMediaDefinitionsPost($get_card_link_ident_media_definitions_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CardLinkApi->v10CardLinkIdentMediaDefinitionsPost: ', $e->getMessage(), PHP_EOL;
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

## `v10CardLinkIsCardLinkDuplicateDetectionEnabledGet()`

```php
v10CardLinkIsCardLinkDuplicateDetectionEnabledGet(): \Exos\ExosApi\Model\GenericResponseOfIsCardLinkDuplicateDetectionEnabledOutput
```

Indicates, whether the media duplicate detection based on the CardLink validation time is enabled.

cParam CARDLINKTRANSACTION > 0.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\CardLinkApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);

try {
    $result = $apiInstance->v10CardLinkIsCardLinkDuplicateDetectionEnabledGet();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CardLinkApi->v10CardLinkIsCardLinkDuplicateDetectionEnabledGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\Exos\ExosApi\Model\GenericResponseOfIsCardLinkDuplicateDetectionEnabledOutput**](../Model/GenericResponseOfIsCardLinkDuplicateDetectionEnabledOutput.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10CardLinkIsCardLinkUpdatePendingPersonIdAccessDomainIdGet()`

```php
v10CardLinkIsCardLinkUpdatePendingPersonIdAccessDomainIdGet($person_id, $access_domain_id): \Exos\ExosApi\Model\IsCardlinkUpdatePendingForAccessDomainOutputWithTime
```

check if CardLink update is pending for a specific person on a specific access domain

<p>check if CardLink update is pending for a specific person on a specific access domain.</p>

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\CardLinkApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$person_id = 'person_id_example'; // string | id of person
$access_domain_id = 'access_domain_id_example'; // string | id of access domain

try {
    $result = $apiInstance->v10CardLinkIsCardLinkUpdatePendingPersonIdAccessDomainIdGet($person_id, $access_domain_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CardLinkApi->v10CardLinkIsCardLinkUpdatePendingPersonIdAccessDomainIdGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **person_id** | **string**| id of person | |
| **access_domain_id** | **string**| id of access domain | |

### Return type

[**\Exos\ExosApi\Model\IsCardlinkUpdatePendingForAccessDomainOutputWithTime**](../Model/IsCardlinkUpdatePendingForAccessDomainOutputWithTime.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10CardLinkMediaDefinitionsAndDataPost()`

```php
v10CardLinkMediaDefinitionsAndDataPost($get_card_link_media_definitions_and_data_input): \Exos\ExosApi\Model\GenericResponseOfGetCardLinkMediaDefinitionsAndDataOutput
```

Gets the CardLink media definitions with the CardLink data for the submitted ident.



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\CardLinkApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$get_card_link_media_definitions_and_data_input = new \Exos\ExosApi\Model\GetCardLinkMediaDefinitionsAndDataInput(); // \Exos\ExosApi\Model\GetCardLinkMediaDefinitionsAndDataInput

try {
    $result = $apiInstance->v10CardLinkMediaDefinitionsAndDataPost($get_card_link_media_definitions_and_data_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CardLinkApi->v10CardLinkMediaDefinitionsAndDataPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **get_card_link_media_definitions_and_data_input** | [**\Exos\ExosApi\Model\GetCardLinkMediaDefinitionsAndDataInput**](../Model/GetCardLinkMediaDefinitionsAndDataInput.md)|  | |

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

## `v10CardLinkMediaDefinitionsGet()`

```php
v10CardLinkMediaDefinitionsGet($device_uid): \Exos\ExosApi\Model\GenericResponseOfGetMediaDefinitionsOutput
```

Gets the CardLink media definitions.

Gets the CardLink media definitions. The device UID is only required for MIFARE to get the specified site key packet. The device UID can be obtained from the the Desktop Reader Service by calling FindDevice.</p>Example code:</br>device = DesktopReaderService/FindDevice</br>mediaDefinitions = ExosApi/desktopReader_api/v1.0/cardLink/mediaDefinitions device.DeviceUid</br>DesktopReaderService/CloseAll</p>

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\CardLinkApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$device_uid = 'device_uid_example'; // string | The desktop reader device UID to get the specified site key packet (only for MIFARE)

try {
    $result = $apiInstance->v10CardLinkMediaDefinitionsGet($device_uid);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CardLinkApi->v10CardLinkMediaDefinitionsGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **device_uid** | **string**| The desktop reader device UID to get the specified site key packet (only for MIFARE) | [optional] |

### Return type

[**\Exos\ExosApi\Model\GenericResponseOfGetMediaDefinitionsOutput**](../Model/GenericResponseOfGetMediaDefinitionsOutput.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10CardLinkProcessActuatorStatusPost()`

```php
v10CardLinkProcessActuatorStatusPost($process_actuator_status_input): \Exos\ExosApi\Model\GenericResponseOfProcessActuatorStatusOutput
```

Processes the Actuator Status data.



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\CardLinkApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$process_actuator_status_input = new \Exos\ExosApi\Model\ProcessActuatorStatusInput(); // \Exos\ExosApi\Model\ProcessActuatorStatusInput

try {
    $result = $apiInstance->v10CardLinkProcessActuatorStatusPost($process_actuator_status_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CardLinkApi->v10CardLinkProcessActuatorStatusPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **process_actuator_status_input** | [**\Exos\ExosApi\Model\ProcessActuatorStatusInput**](../Model/ProcessActuatorStatusInput.md)|  | |

### Return type

[**\Exos\ExosApi\Model\GenericResponseOfProcessActuatorStatusOutput**](../Model/GenericResponseOfProcessActuatorStatusOutput.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10CardLinkProcessTracebackPost()`

```php
v10CardLinkProcessTracebackPost($process_traceback_input): \Exos\ExosApi\Model\GenericResponseOfProcessTracebackOutput
```

Processes the Traceback data.



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\CardLinkApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$process_traceback_input = new \Exos\ExosApi\Model\ProcessTracebackInput(); // \Exos\ExosApi\Model\ProcessTracebackInput

try {
    $result = $apiInstance->v10CardLinkProcessTracebackPost($process_traceback_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CardLinkApi->v10CardLinkProcessTracebackPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **process_traceback_input** | [**\Exos\ExosApi\Model\ProcessTracebackInput**](../Model/ProcessTracebackInput.md)|  | |

### Return type

[**\Exos\ExosApi\Model\GenericResponseOfProcessTracebackOutput**](../Model/GenericResponseOfProcessTracebackOutput.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10CardLinkSetSpecificUpdatePeriodPost()`

```php
v10CardLinkSetSpecificUpdatePeriodPost($specific_update_period_input): \Exos\ExosApi\Model\VoidResponseOutput
```

update the specific update period for a person and accessdomain

<p>update the specific update period for a person and accessdomain. Set the update period to a value or unlimited or leave the two optional parameters to reset the update period.</p>

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\CardLinkApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$specific_update_period_input = new \Exos\ExosApi\Model\SpecificUpdatePeriodInput(); // \Exos\ExosApi\Model\SpecificUpdatePeriodInput

try {
    $result = $apiInstance->v10CardLinkSetSpecificUpdatePeriodPost($specific_update_period_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CardLinkApi->v10CardLinkSetSpecificUpdatePeriodPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **specific_update_period_input** | [**\Exos\ExosApi\Model\SpecificUpdatePeriodInput**](../Model/SpecificUpdatePeriodInput.md)|  | |

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

## `v10CardLinkTracebackMediaDefinitionsPost()`

```php
v10CardLinkTracebackMediaDefinitionsPost($get_traceback_media_definitions_input): \Exos\ExosApi\Model\GenericResponseOfGetMediaDefinitionsOutput
```

Gets the Traceback media definitions for the submitted ident media definition.



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\CardLinkApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$get_traceback_media_definitions_input = new \Exos\ExosApi\Model\GetTracebackMediaDefinitionsInput(); // \Exos\ExosApi\Model\GetTracebackMediaDefinitionsInput

try {
    $result = $apiInstance->v10CardLinkTracebackMediaDefinitionsPost($get_traceback_media_definitions_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CardLinkApi->v10CardLinkTracebackMediaDefinitionsPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **get_traceback_media_definitions_input** | [**\Exos\ExosApi\Model\GetTracebackMediaDefinitionsInput**](../Model/GetTracebackMediaDefinitionsInput.md)|  | |

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

## `v10CardLinkUpdateValidationPost()`

```php
v10CardLinkUpdateValidationPost($update_validation_input): \Exos\ExosApi\Model\UpdateValidationOutput
```

update cardLink states for persons (r9autop)

<p>bulk update for all persons with CardLink-righs: sets the state on the periphery (Option) and the ValidationDateTo and VirtualNetworkValidationActive-flag for persons with new, modified, removed and expired CardLink-rights - starting with LastRunDateTime - returns a maximum of 100 Cardlink states</p>

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\CardLinkApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$update_validation_input = new \Exos\ExosApi\Model\UpdateValidationInput(); // \Exos\ExosApi\Model\UpdateValidationInput

try {
    $result = $apiInstance->v10CardLinkUpdateValidationPost($update_validation_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CardLinkApi->v10CardLinkUpdateValidationPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **update_validation_input** | [**\Exos\ExosApi\Model\UpdateValidationInput**](../Model/UpdateValidationInput.md)|  | |

### Return type

[**\Exos\ExosApi\Model\UpdateValidationOutput**](../Model/UpdateValidationOutput.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10CardLinkValidationPeriodIdAssignPersonPost()`

```php
v10CardLinkValidationPeriodIdAssignPersonPost($validation_period_id, $assign_validation_period_to_person_input, $ignore_blacklist): \Exos\ExosApi\Model\VoidResponseOutput
```

assign a validation period to a specific person for a specific access domain

assign a validation period to a specific person for a specific access domain. The validation period will be set for this PersonId (required authorisation is AC_PERS_EDIT)

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\CardLinkApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$validation_period_id = 'ValidationPeriodId1'; // string | id of validation period
$assign_validation_period_to_person_input = new \Exos\ExosApi\Model\AssignValidationPeriodToPersonInput(); // \Exos\ExosApi\Model\AssignValidationPeriodToPersonInput | person id and access domain id
$ignore_blacklist = True; // bool | Ignore blacklist check

try {
    $result = $apiInstance->v10CardLinkValidationPeriodIdAssignPersonPost($validation_period_id, $assign_validation_period_to_person_input, $ignore_blacklist);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CardLinkApi->v10CardLinkValidationPeriodIdAssignPersonPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **validation_period_id** | **string**| id of validation period | [default to &#39;ValidationPeriodId1&#39;] |
| **assign_validation_period_to_person_input** | [**\Exos\ExosApi\Model\AssignValidationPeriodToPersonInput**](../Model/AssignValidationPeriodToPersonInput.md)| person id and access domain id | |
| **ignore_blacklist** | **bool**| Ignore blacklist check | [optional] |

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

## `v10CardLinkValidationPeriodsPersonIdGet()`

```php
v10CardLinkValidationPeriodsPersonIdGet($person_id): \Exos\ExosApi\Model\GetValidationPeriodOutput
```

get validation periods for accessdomains, which are activated for cardLink, and the person has accessright

<p>get validation periods for accessdomains, which are activated for cardLink and the person has accessright. The Parameter 'IsActual' defines the actual valid validation period for this accessdomain and person.</p>

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\CardLinkApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$person_id = 'person_id_example'; // string | id of person

try {
    $result = $apiInstance->v10CardLinkValidationPeriodsPersonIdGet($person_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CardLinkApi->v10CardLinkValidationPeriodsPersonIdGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **person_id** | **string**| id of person | |

### Return type

[**\Exos\ExosApi\Model\GetValidationPeriodOutput**](../Model/GetValidationPeriodOutput.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
