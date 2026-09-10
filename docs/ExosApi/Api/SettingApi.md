# Exos\ExosApi\SettingApi

All URIs are relative to /ExosApi/api, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**settingsAllGET()**](SettingApi.md#settingsAllGET) | **GET** /v1.0/settings | get all available settings |
| [**settingsUngroupedDELETE()**](SettingApi.md#settingsUngroupedDELETE) | **DELETE** /v1.0/settings/{SettingGroupName} | deletes a group of settings |
| [**settingsUngroupedGET()**](SettingApi.md#settingsUngroupedGET) | **GET** /v1.0/settings/{SettingGroupName} | get a specific group of settings |
| [**settingsUngroupedPOST()**](SettingApi.md#settingsUngroupedPOST) | **POST** /v1.0/settings/{SettingGroupName} | saves a group of settings |
| [**v10SettingSettingNameDelete()**](SettingApi.md#v10SettingSettingNameDelete) | **DELETE** /v1.0/setting/{SettingName} | delete a specific setting ( not in a group ) |
| [**v10SettingSettingNameGet()**](SettingApi.md#v10SettingSettingNameGet) | **GET** /v1.0/setting/{SettingName} | get a specific setting ( not in a group ) |
| [**v10SettingSettingNamePost()**](SettingApi.md#v10SettingSettingNamePost) | **POST** /v1.0/setting/{SettingName} | saves a specific setting ( not in a group ) |
| [**v10SettingsSettingGroupNameSettingNameDelete()**](SettingApi.md#v10SettingsSettingGroupNameSettingNameDelete) | **DELETE** /v1.0/settings/{SettingGroupName}/{SettingName} | deletes a specific setting of a specific group |
| [**v10SettingsSettingGroupNameSettingNameGet()**](SettingApi.md#v10SettingsSettingGroupNameSettingNameGet) | **GET** /v1.0/settings/{SettingGroupName}/{SettingName} | get a specific setting of a specific group |
| [**v10SettingsSettingGroupNameSettingNamePost()**](SettingApi.md#v10SettingsSettingGroupNameSettingNamePost) | **POST** /v1.0/settings/{SettingGroupName}/{SettingName} | saves a specific setting of a group |


## `settingsAllGET()`

```php
settingsAllGET($application, $view, $login_id, $location, $workstation, $personal_setting): \Exos\ExosApi\Model\GetSettingsOutputWithTime
```

get all available settings

Gets a list of all settings. All returned settings will consist of a list of key/value pairs. Grouped settings will be under the specific group name. Ungrouped settings will be under the setting name and contain a key value pair with the key \"0\"

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\SettingApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$application = 'application_example'; // string | Application name
$view = 'view_example'; // string | View name
$login_id = 56; // int | Login Id (Permission 'API_SYS_SettingPassLogin' needed)
$location = 'location_example'; // string | Location value/Id
$workstation = 'workstation_example'; // string | Workstation value/Id
$personal_setting = true; // bool | set to false to get/set for a different user

try {
    $result = $apiInstance->settingsAllGET($application, $view, $login_id, $location, $workstation, $personal_setting);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SettingApi->settingsAllGET: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **application** | **string**| Application name | [optional] |
| **view** | **string**| View name | [optional] |
| **login_id** | **int**| Login Id (Permission &#39;API_SYS_SettingPassLogin&#39; needed) | [optional] |
| **location** | **string**| Location value/Id | [optional] |
| **workstation** | **string**| Workstation value/Id | [optional] |
| **personal_setting** | **bool**| set to false to get/set for a different user | [optional] [default to true] |

### Return type

[**\Exos\ExosApi\Model\GetSettingsOutputWithTime**](../Model/GetSettingsOutputWithTime.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `settingsUngroupedDELETE()`

```php
settingsUngroupedDELETE($setting_group_name, $application, $view, $login_id, $location, $workstation, $personal_setting)
```

deletes a group of settings

Remove all setting values under the specified context for a specific group.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\SettingApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$setting_group_name = 'setting_group_name_example'; // string | Setting Name
$application = 'application_example'; // string | Application name
$view = 'view_example'; // string | View name
$login_id = 56; // int | Login Id (Permission 'API_SYS_SettingPassLogin' needed)
$location = 'location_example'; // string | Location value/Id
$workstation = 'workstation_example'; // string | Workstation value/Id
$personal_setting = true; // bool | set to false to get/set for a different user

try {
    $apiInstance->settingsUngroupedDELETE($setting_group_name, $application, $view, $login_id, $location, $workstation, $personal_setting);
} catch (Exception $e) {
    echo 'Exception when calling SettingApi->settingsUngroupedDELETE: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **setting_group_name** | **string**| Setting Name | |
| **application** | **string**| Application name | [optional] |
| **view** | **string**| View name | [optional] |
| **login_id** | **int**| Login Id (Permission &#39;API_SYS_SettingPassLogin&#39; needed) | [optional] |
| **location** | **string**| Location value/Id | [optional] |
| **workstation** | **string**| Workstation value/Id | [optional] |
| **personal_setting** | **bool**| set to false to get/set for a different user | [optional] [default to true] |

### Return type

void (empty response body)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `settingsUngroupedGET()`

```php
settingsUngroupedGET($setting_group_name, $application, $view, $login_id, $location, $workstation, $personal_setting): \Exos\ExosApi\Model\GetSettingGroupOutputWithTime
```

get a specific group of settings

Gets all settings of a settingGroup. It will return all settings under this group with a key/value pair.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\SettingApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$setting_group_name = 'setting_group_name_example'; // string | Setting Name
$application = 'application_example'; // string | Application name
$view = 'view_example'; // string | View name
$login_id = 56; // int | Login Id (Permission 'API_SYS_SettingPassLogin' needed)
$location = 'location_example'; // string | Location value/Id
$workstation = 'workstation_example'; // string | Workstation value/Id
$personal_setting = true; // bool | set to false to get/set for a different user

try {
    $result = $apiInstance->settingsUngroupedGET($setting_group_name, $application, $view, $login_id, $location, $workstation, $personal_setting);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SettingApi->settingsUngroupedGET: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **setting_group_name** | **string**| Setting Name | |
| **application** | **string**| Application name | [optional] |
| **view** | **string**| View name | [optional] |
| **login_id** | **int**| Login Id (Permission &#39;API_SYS_SettingPassLogin&#39; needed) | [optional] |
| **location** | **string**| Location value/Id | [optional] |
| **workstation** | **string**| Workstation value/Id | [optional] |
| **personal_setting** | **bool**| set to false to get/set for a different user | [optional] [default to true] |

### Return type

[**\Exos\ExosApi\Model\GetSettingGroupOutputWithTime**](../Model/GetSettingGroupOutputWithTime.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `settingsUngroupedPOST()`

```php
settingsUngroupedPOST($setting_group_name, $setting_values, $application, $view, $login_id, $location, $workstation, $personal_setting)
```

saves a group of settings

Set multiple setting values for a group.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\SettingApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$setting_group_name = 'setting_group_name_example'; // string | Setting Name
$setting_values = new \Exos\ExosApi\Model\SettingValues(); // \Exos\ExosApi\Model\SettingValues | new setting value
$application = 'application_example'; // string | Application name
$view = 'view_example'; // string | View name
$login_id = 56; // int | Login Id (Permission 'API_SYS_SettingPassLogin' needed)
$location = 'location_example'; // string | Location value/Id
$workstation = 'workstation_example'; // string | Workstation value/Id
$personal_setting = true; // bool | set to false to get/set for a different user

try {
    $apiInstance->settingsUngroupedPOST($setting_group_name, $setting_values, $application, $view, $login_id, $location, $workstation, $personal_setting);
} catch (Exception $e) {
    echo 'Exception when calling SettingApi->settingsUngroupedPOST: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **setting_group_name** | **string**| Setting Name | |
| **setting_values** | [**\Exos\ExosApi\Model\SettingValues**](../Model/SettingValues.md)| new setting value | |
| **application** | **string**| Application name | [optional] |
| **view** | **string**| View name | [optional] |
| **login_id** | **int**| Login Id (Permission &#39;API_SYS_SettingPassLogin&#39; needed) | [optional] |
| **location** | **string**| Location value/Id | [optional] |
| **workstation** | **string**| Workstation value/Id | [optional] |
| **personal_setting** | **bool**| set to false to get/set for a different user | [optional] [default to true] |

### Return type

void (empty response body)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10SettingSettingNameDelete()`

```php
v10SettingSettingNameDelete($setting_name, $application, $view, $login_id, $location, $workstation, $personal_setting)
```

delete a specific setting ( not in a group )

Remove a setting value

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\SettingApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$setting_name = 'setting_name_example'; // string | Setting Name
$application = 'application_example'; // string | Application name
$view = 'view_example'; // string | View name
$login_id = 56; // int | Login Id (Permission 'API_SYS_SettingPassLogin' needed)
$location = 'location_example'; // string | Location value/Id
$workstation = 'workstation_example'; // string | Workstation value/Id
$personal_setting = true; // bool | set to false to get/set for a different user

try {
    $apiInstance->v10SettingSettingNameDelete($setting_name, $application, $view, $login_id, $location, $workstation, $personal_setting);
} catch (Exception $e) {
    echo 'Exception when calling SettingApi->v10SettingSettingNameDelete: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **setting_name** | **string**| Setting Name | |
| **application** | **string**| Application name | [optional] |
| **view** | **string**| View name | [optional] |
| **login_id** | **int**| Login Id (Permission &#39;API_SYS_SettingPassLogin&#39; needed) | [optional] |
| **location** | **string**| Location value/Id | [optional] |
| **workstation** | **string**| Workstation value/Id | [optional] |
| **personal_setting** | **bool**| set to false to get/set for a different user | [optional] [default to true] |

### Return type

void (empty response body)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10SettingSettingNameGet()`

```php
v10SettingSettingNameGet($setting_name, $application, $view, $login_id, $location, $workstation, $personal_setting): \Exos\ExosApi\Model\GetSettingOutputWithTime
```

get a specific setting ( not in a group )

Gets a setting by the name of a setting. It will return an ungrouped setting value. This should be used for settings which are stored without a SettingGroupName.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\SettingApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$setting_name = 'setting_name_example'; // string | Setting Name
$application = 'application_example'; // string | Application name
$view = 'view_example'; // string | View name
$login_id = 56; // int | Login Id (Permission 'API_SYS_SettingPassLogin' needed)
$location = 'location_example'; // string | Location value/Id
$workstation = 'workstation_example'; // string | Workstation value/Id
$personal_setting = true; // bool | set to false to get/set for a different user

try {
    $result = $apiInstance->v10SettingSettingNameGet($setting_name, $application, $view, $login_id, $location, $workstation, $personal_setting);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SettingApi->v10SettingSettingNameGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **setting_name** | **string**| Setting Name | |
| **application** | **string**| Application name | [optional] |
| **view** | **string**| View name | [optional] |
| **login_id** | **int**| Login Id (Permission &#39;API_SYS_SettingPassLogin&#39; needed) | [optional] |
| **location** | **string**| Location value/Id | [optional] |
| **workstation** | **string**| Workstation value/Id | [optional] |
| **personal_setting** | **bool**| set to false to get/set for a different user | [optional] [default to true] |

### Return type

[**\Exos\ExosApi\Model\GetSettingOutputWithTime**](../Model/GetSettingOutputWithTime.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10SettingSettingNamePost()`

```php
v10SettingSettingNamePost($setting_name, $setting_value_input, $application, $view, $login_id, $location, $workstation, $personal_setting)
```

saves a specific setting ( not in a group )

Set a setting value. Make sure to enclose the setting value with single or double quotes (' or \").

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\SettingApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$setting_name = 'setting_name_example'; // string | Setting Name
$setting_value_input = new \Exos\ExosApi\Model\SettingValueInput(); // \Exos\ExosApi\Model\SettingValueInput
$application = 'application_example'; // string | Application name
$view = 'view_example'; // string | View name
$login_id = 56; // int | Login Id (Permission 'API_SYS_SettingPassLogin' needed)
$location = 'location_example'; // string | Location value/Id
$workstation = 'workstation_example'; // string | Workstation value/Id
$personal_setting = true; // bool | set to false to get/set for a different user

try {
    $apiInstance->v10SettingSettingNamePost($setting_name, $setting_value_input, $application, $view, $login_id, $location, $workstation, $personal_setting);
} catch (Exception $e) {
    echo 'Exception when calling SettingApi->v10SettingSettingNamePost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **setting_name** | **string**| Setting Name | |
| **setting_value_input** | [**\Exos\ExosApi\Model\SettingValueInput**](../Model/SettingValueInput.md)|  | |
| **application** | **string**| Application name | [optional] |
| **view** | **string**| View name | [optional] |
| **login_id** | **int**| Login Id (Permission &#39;API_SYS_SettingPassLogin&#39; needed) | [optional] |
| **location** | **string**| Location value/Id | [optional] |
| **workstation** | **string**| Workstation value/Id | [optional] |
| **personal_setting** | **bool**| set to false to get/set for a different user | [optional] [default to true] |

### Return type

void (empty response body)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10SettingsSettingGroupNameSettingNameDelete()`

```php
v10SettingsSettingGroupNameSettingNameDelete($setting_group_name, $setting_name, $application, $view, $login_id, $location, $workstation, $personal_setting)
```

deletes a specific setting of a specific group

Remove a specific setting value within a group from a given context.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\SettingApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$setting_group_name = 'setting_group_name_example'; // string | Setting Name
$setting_name = 'setting_name_example'; // string | Setting SubName
$application = 'application_example'; // string | Application name
$view = 'view_example'; // string | View name
$login_id = 56; // int | Login Id (Permission 'API_SYS_SettingPassLogin' needed)
$location = 'location_example'; // string | Location value/Id
$workstation = 'workstation_example'; // string | Workstation value/Id
$personal_setting = true; // bool | set to false to get/set for a different user

try {
    $apiInstance->v10SettingsSettingGroupNameSettingNameDelete($setting_group_name, $setting_name, $application, $view, $login_id, $location, $workstation, $personal_setting);
} catch (Exception $e) {
    echo 'Exception when calling SettingApi->v10SettingsSettingGroupNameSettingNameDelete: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **setting_group_name** | **string**| Setting Name | |
| **setting_name** | **string**| Setting SubName | |
| **application** | **string**| Application name | [optional] |
| **view** | **string**| View name | [optional] |
| **login_id** | **int**| Login Id (Permission &#39;API_SYS_SettingPassLogin&#39; needed) | [optional] |
| **location** | **string**| Location value/Id | [optional] |
| **workstation** | **string**| Workstation value/Id | [optional] |
| **personal_setting** | **bool**| set to false to get/set for a different user | [optional] [default to true] |

### Return type

void (empty response body)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10SettingsSettingGroupNameSettingNameGet()`

```php
v10SettingsSettingGroupNameSettingNameGet($setting_group_name, $setting_name, $application, $view, $login_id, $location, $workstation, $personal_setting): \Exos\ExosApi\Model\GetSettingOutputWithTime
```

get a specific setting of a specific group

Gets a setting by the name of the settingGroup and the SettingName. Returns a single value which represents of the setting value.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\SettingApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$setting_group_name = 'setting_group_name_example'; // string | Setting Name
$setting_name = 'setting_name_example'; // string | Setting SubName
$application = 'application_example'; // string | Application name
$view = 'view_example'; // string | View name
$login_id = 56; // int | Login Id (Permission 'API_SYS_SettingPassLogin' needed)
$location = 'location_example'; // string | Location value/Id
$workstation = 'workstation_example'; // string | Workstation value/Id
$personal_setting = true; // bool | set to false to get/set for a different user

try {
    $result = $apiInstance->v10SettingsSettingGroupNameSettingNameGet($setting_group_name, $setting_name, $application, $view, $login_id, $location, $workstation, $personal_setting);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SettingApi->v10SettingsSettingGroupNameSettingNameGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **setting_group_name** | **string**| Setting Name | |
| **setting_name** | **string**| Setting SubName | |
| **application** | **string**| Application name | [optional] |
| **view** | **string**| View name | [optional] |
| **login_id** | **int**| Login Id (Permission &#39;API_SYS_SettingPassLogin&#39; needed) | [optional] |
| **location** | **string**| Location value/Id | [optional] |
| **workstation** | **string**| Workstation value/Id | [optional] |
| **personal_setting** | **bool**| set to false to get/set for a different user | [optional] [default to true] |

### Return type

[**\Exos\ExosApi\Model\GetSettingOutputWithTime**](../Model/GetSettingOutputWithTime.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10SettingsSettingGroupNameSettingNamePost()`

```php
v10SettingsSettingGroupNameSettingNamePost($setting_group_name, $setting_name, $setting_value_input, $application, $view, $login_id, $location, $workstation, $personal_setting)
```

saves a specific setting of a group

Set a setting value for a specific setting by SettingGroupName and SettingName. Make sure that the SettingValue is enclosed within single or double quotes \" or '

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\SettingApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$setting_group_name = 'setting_group_name_example'; // string | Setting Name
$setting_name = 'setting_name_example'; // string | Setting SubName
$setting_value_input = new \Exos\ExosApi\Model\SettingValueInput(); // \Exos\ExosApi\Model\SettingValueInput
$application = 'application_example'; // string | Application name
$view = 'view_example'; // string | View name
$login_id = 56; // int | Login Id (Permission 'API_SYS_SettingPassLogin' needed)
$location = 'location_example'; // string | Location value/Id
$workstation = 'workstation_example'; // string | Workstation value/Id
$personal_setting = true; // bool | set to false to get/set for a different user

try {
    $apiInstance->v10SettingsSettingGroupNameSettingNamePost($setting_group_name, $setting_name, $setting_value_input, $application, $view, $login_id, $location, $workstation, $personal_setting);
} catch (Exception $e) {
    echo 'Exception when calling SettingApi->v10SettingsSettingGroupNameSettingNamePost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **setting_group_name** | **string**| Setting Name | |
| **setting_name** | **string**| Setting SubName | |
| **setting_value_input** | [**\Exos\ExosApi\Model\SettingValueInput**](../Model/SettingValueInput.md)|  | |
| **application** | **string**| Application name | [optional] |
| **view** | **string**| View name | [optional] |
| **login_id** | **int**| Login Id (Permission &#39;API_SYS_SettingPassLogin&#39; needed) | [optional] |
| **location** | **string**| Location value/Id | [optional] |
| **workstation** | **string**| Workstation value/Id | [optional] |
| **personal_setting** | **bool**| set to false to get/set for a different user | [optional] [default to true] |

### Return type

void (empty response body)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
