# Exos\ExosApi\FreeSelectionsApi

All URIs are relative to /ExosApi/api, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**v10FreeSelectionsActuatorListFromFreeSelectionDataPost()**](FreeSelectionsApi.md#v10FreeSelectionsActuatorListFromFreeSelectionDataPost) | **POST** /v1.0/freeSelections/actuatorListFromFreeSelectionData | Gets the list of actuators from the free selection data. |
| [**v10FreeSelectionsFreeSelectionDataForActuatorIdsPost()**](FreeSelectionsApi.md#v10FreeSelectionsFreeSelectionDataForActuatorIdsPost) | **POST** /v1.0/freeSelections/freeSelectionDataForActuatorIds | Gets the free selection data for actuator ids. |
| [**v10FreeSelectionsMediaDefinitionsGet()**](FreeSelectionsApi.md#v10FreeSelectionsMediaDefinitionsGet) | **GET** /v1.0/freeSelections/mediaDefinitions | Gets the free selection media definitions. |


## `v10FreeSelectionsActuatorListFromFreeSelectionDataPost()`

```php
v10FreeSelectionsActuatorListFromFreeSelectionDataPost($get_actuator_list_from_free_selection_data_input): \Exos\ExosApi\Model\GetActuatorListFromFreeSelectionDataOutput
```

Gets the list of actuators from the free selection data.

Gets the list of actuators from the free selection data.</p>Example code:</br>device = DesktopReaderService/FindDevice</br>mediaDefinitions = ExosApi/desktopReader_api/v1.0/freeSelections/mediaDefinitions device.MediaCodes device.DeviceUid</br>freeSelectionData = DesktopReaderService/Read mediaDefinitions</br>actuators = ExosApi/desktopReader_api/v1.0/freeSelections/actuatorListFromFreeSelectionData freeSelectionData</br>DesktopReaderService/CloseAll</p>

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\FreeSelectionsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$get_actuator_list_from_free_selection_data_input = new \Exos\ExosApi\Model\GetActuatorListFromFreeSelectionDataInput(); // \Exos\ExosApi\Model\GetActuatorListFromFreeSelectionDataInput | The free selection data read from desktop reader as byte array

try {
    $result = $apiInstance->v10FreeSelectionsActuatorListFromFreeSelectionDataPost($get_actuator_list_from_free_selection_data_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FreeSelectionsApi->v10FreeSelectionsActuatorListFromFreeSelectionDataPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **get_actuator_list_from_free_selection_data_input** | [**\Exos\ExosApi\Model\GetActuatorListFromFreeSelectionDataInput**](../Model/GetActuatorListFromFreeSelectionDataInput.md)| The free selection data read from desktop reader as byte array | |

### Return type

[**\Exos\ExosApi\Model\GetActuatorListFromFreeSelectionDataOutput**](../Model/GetActuatorListFromFreeSelectionDataOutput.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10FreeSelectionsFreeSelectionDataForActuatorIdsPost()`

```php
v10FreeSelectionsFreeSelectionDataForActuatorIdsPost($get_free_selection_data_for_actuator_ids_input): \Exos\ExosApi\Model\GetFreeSelectionDataForActuatorIdsOutput
```

Gets the free selection data for actuator ids.

Gets the free selection data for actuator ids.</p>Example code:</br>device = DesktopReaderService/FindDevice</br>mediaDefinitions = ExosApi/desktopReader_api/v1.0/freeSelections/mediaDefinitions device.MediaCodes device.DeviceUid</br>freeSelectionData = DesktopReaderService/Read mediaDefinitions</br>updatedFreeSelections = ExosApi/desktopReader_api/v1.0/freeSelections/freeSelectionDataForActuatorIds mediaDefinitions.Offset mediaDefinitions.Size freeSelectionData actuatorIds</br>updatedMediaDefinitions = mediaDefinitions</br>updatedMediaDefinitions.Offset = updatedFreeSelections.Offset</br>updatedMediaDefinitions.Size = updatedFreeSelections.Data.Size</br>DesktopReaderService/Write updatedMediaDefinitions updatedFreeSelections.Data</br>DesktopReaderService/CloseAll</p>

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\FreeSelectionsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$get_free_selection_data_for_actuator_ids_input = new \Exos\ExosApi\Model\GetFreeSelectionDataForActuatorIdsInput(); // \Exos\ExosApi\Model\GetFreeSelectionDataForActuatorIdsInput | data passed to get the free selection data for actuator ids.

try {
    $result = $apiInstance->v10FreeSelectionsFreeSelectionDataForActuatorIdsPost($get_free_selection_data_for_actuator_ids_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FreeSelectionsApi->v10FreeSelectionsFreeSelectionDataForActuatorIdsPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **get_free_selection_data_for_actuator_ids_input** | [**\Exos\ExosApi\Model\GetFreeSelectionDataForActuatorIdsInput**](../Model/GetFreeSelectionDataForActuatorIdsInput.md)| data passed to get the free selection data for actuator ids. | |

### Return type

[**\Exos\ExosApi\Model\GetFreeSelectionDataForActuatorIdsOutput**](../Model/GetFreeSelectionDataForActuatorIdsOutput.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10FreeSelectionsMediaDefinitionsGet()`

```php
v10FreeSelectionsMediaDefinitionsGet($device_uid): \Exos\ExosApi\Model\GenericResponseOfGetMediaDefinitionsOutput
```

Gets the free selection media definitions.

Gets the free selection media definitions. The device UID is only required for MIFARE to get the specified site key packet. The device UID can be obtained from the the Desktop Reader Service by calling FindDevice.</p>Example code:</br>device = DesktopReaderService/FindDevice</br>mediaDefinitions = ExosApi/desktopReader_api/v1.0/cardLink/mediaDefinitions device.DeviceUid</br>DesktopReaderService/CloseAll</p>

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\FreeSelectionsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$device_uid = 'device_uid_example'; // string | The desktop reader device UID to get the specified site key packet (only for MIFARE)

try {
    $result = $apiInstance->v10FreeSelectionsMediaDefinitionsGet($device_uid);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FreeSelectionsApi->v10FreeSelectionsMediaDefinitionsGet: ', $e->getMessage(), PHP_EOL;
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
