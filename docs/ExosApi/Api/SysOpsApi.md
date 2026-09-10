# Exos\ExosApi\SysOpsApi

All URIs are relative to /ExosApi/api, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**v10CheckAndUpdateDataStorePost()**](SysOpsApi.md#v10CheckAndUpdateDataStorePost) | **POST** /v1.0/checkAndUpdateDataStore | Checks the currentness of the datastore data (sysops tree) and updates the datastore if necessary |
| [**v10FreeSysopsEventRegistrationsPost()**](SysOpsApi.md#v10FreeSysopsEventRegistrationsPost) | **POST** /v1.0/freeSysopsEventRegistrations | frees event registrations (SignalR-Connections) that are no longer valid |
| [**v10IdActuatorsInformationGet()**](SysOpsApi.md#v10IdActuatorsInformationGet) | **GET** /v1.0/{id}/actuatorsInformation | Get actuators information |
| [**v10IdCommandCommandPost()**](SysOpsApi.md#v10IdCommandCommandPost) | **POST** /v1.0/{id}/command/{command} | execute a command for a device |
| [**v10IdCommandsGet()**](SysOpsApi.md#v10IdCommandsGet) | **GET** /v1.0/{id}/commands | get available commands for a device |
| [**v10IdDetailsGet()**](SysOpsApi.md#v10IdDetailsGet) | **GET** /v1.0/{id}/details | Get details from one periphery |
| [**v10IdPlannedProfilesCreatePost()**](SysOpsApi.md#v10IdPlannedProfilesCreatePost) | **POST** /v1.0/{id}/plannedProfiles/create | Create planned profiles for an Access point |
| [**v10IdPlannedProfilesGet()**](SysOpsApi.md#v10IdPlannedProfilesGet) | **GET** /v1.0/{id}/plannedProfiles | Get planned profiles from Access point |
| [**v10IdPlannedProfilesScheduleIdDeletePost()**](SysOpsApi.md#v10IdPlannedProfilesScheduleIdDeletePost) | **POST** /v1.0/{id}/plannedProfiles/{scheduleId}/delete | Delete planned profile from Access point |
| [**v10IdPlannedProfilesScheduleIdUpdatePost()**](SysOpsApi.md#v10IdPlannedProfilesScheduleIdUpdatePost) | **POST** /v1.0/{id}/plannedProfiles/{scheduleId}/update | Update planned profiles for an Access point |
| [**v10InitializeDataStorePost()**](SysOpsApi.md#v10InitializeDataStorePost) | **POST** /v1.0/initializeDataStore | initializes the periphery datastore. when parameter &#39;treePathOfTopNode&#39; is set only a partial of the datastore is updated (all devices starting with the path of &#39;treePathOfTopNode&#39;) |
| [**v10NodesGet()**](SysOpsApi.md#v10NodesGet) | **GET** /v1.0/nodes | Get nodes |
| [**v10PeripheryStatusListGet()**](SysOpsApi.md#v10PeripheryStatusListGet) | **GET** /v1.0/peripheryStatusList | gets the devices |
| [**v10RecalculateTreepathsPost()**](SysOpsApi.md#v10RecalculateTreepathsPost) | **POST** /v1.0/recalculateTreepaths | triggers the recalculation of flagged periphery treepaths |
| [**v10StandaloneComponentsGet()**](SysOpsApi.md#v10StandaloneComponentsGet) | **GET** /v1.0/standaloneComponents | gets the standalone devices |


## `v10CheckAndUpdateDataStorePost()`

```php
v10CheckAndUpdateDataStorePost(): \Exos\ExosApi\Model\VoidResponseOutput
```

Checks the currentness of the datastore data (sysops tree) and updates the datastore if necessary

for testing purposes

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\SysOpsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);

try {
    $result = $apiInstance->v10CheckAndUpdateDataStorePost();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SysOpsApi->v10CheckAndUpdateDataStorePost: ', $e->getMessage(), PHP_EOL;
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

## `v10FreeSysopsEventRegistrationsPost()`

```php
v10FreeSysopsEventRegistrationsPost($force): \Exos\ExosApi\Model\VoidResponseOutput
```

frees event registrations (SignalR-Connections) that are no longer valid

for testing purposes

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\SysOpsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$force = false; // bool | if true, will try to remove signalR connections, if false only when last removal was some time ago

try {
    $result = $apiInstance->v10FreeSysopsEventRegistrationsPost($force);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SysOpsApi->v10FreeSysopsEventRegistrationsPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **force** | **bool**| if true, will try to remove signalR connections, if false only when last removal was some time ago | [optional] [default to false] |

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

## `v10IdActuatorsInformationGet()`

```php
v10IdActuatorsInformationGet($id): \Exos\ExosApi\Model\V10IdActuatorsInformationGet200Response
```

Get actuators information

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\SysOpsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 'id_example'; // string | id of the periphery (devicetype (+ substatTypeChar) + internalId of the specific periphery (example: CommunicationHub with Id 1 => FS1, AMX with Id 113 => SSI113))

try {
    $result = $apiInstance->v10IdActuatorsInformationGet($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SysOpsApi->v10IdActuatorsInformationGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **string**| id of the periphery (devicetype (+ substatTypeChar) + internalId of the specific periphery (example: CommunicationHub with Id 1 &#x3D;&gt; FS1, AMX with Id 113 &#x3D;&gt; SSI113)) | |

### Return type

[**\Exos\ExosApi\Model\V10IdActuatorsInformationGet200Response**](../Model/V10IdActuatorsInformationGet200Response.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10IdCommandCommandPost()`

```php
v10IdCommandCommandPost($id, $command, $time): \Exos\ExosApi\Model\ExecuteCommandOutputWithTime
```

execute a command for a device

execute a command for a device

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\SysOpsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 'id_example'; // string | id of the periphery (devicetype + internalId of the specific periphery (example: CommunicationHub with Id 1 => FS1, AMX with Id 113 => SS113))
$command = 'command_example'; // string | The command to be executed on the device
$time = 56; // int | The time the command shall be executed (in minutes)

try {
    $result = $apiInstance->v10IdCommandCommandPost($id, $command, $time);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SysOpsApi->v10IdCommandCommandPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **string**| id of the periphery (devicetype + internalId of the specific periphery (example: CommunicationHub with Id 1 &#x3D;&gt; FS1, AMX with Id 113 &#x3D;&gt; SS113)) | |
| **command** | **string**| The command to be executed on the device | |
| **time** | **int**| The time the command shall be executed (in minutes) | [optional] |

### Return type

[**\Exos\ExosApi\Model\ExecuteCommandOutputWithTime**](../Model/ExecuteCommandOutputWithTime.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10IdCommandsGet()`

```php
v10IdCommandsGet($id): \Exos\ExosApi\Model\GetCommandsOutputWithTime
```

get available commands for a device

get available commands for a device

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\SysOpsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 'id_example'; // string | id of the periphery (devicetype + internalId of the specific periphery (example: CommunicationHub with Id 1 => FS1, AMX with Id 113 => SS113))

try {
    $result = $apiInstance->v10IdCommandsGet($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SysOpsApi->v10IdCommandsGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **string**| id of the periphery (devicetype + internalId of the specific periphery (example: CommunicationHub with Id 1 &#x3D;&gt; FS1, AMX with Id 113 &#x3D;&gt; SS113)) | |

### Return type

[**\Exos\ExosApi\Model\GetCommandsOutputWithTime**](../Model/GetCommandsOutputWithTime.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10IdDetailsGet()`

```php
v10IdDetailsGet($id): \Exos\ExosApi\Model\Detail
```

Get details from one periphery

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\SysOpsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 'id_example'; // string | id of the periphery (devicetype (+ substatTypeChar) + internalId of the specific periphery (example: CommunicationHub with Id 1 => FS1, AMX with Id 113 => SSI113))

try {
    $result = $apiInstance->v10IdDetailsGet($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SysOpsApi->v10IdDetailsGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **string**| id of the periphery (devicetype (+ substatTypeChar) + internalId of the specific periphery (example: CommunicationHub with Id 1 &#x3D;&gt; FS1, AMX with Id 113 &#x3D;&gt; SSI113)) | |

### Return type

[**\Exos\ExosApi\Model\Detail**](../Model/Detail.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10IdPlannedProfilesCreatePost()`

```php
v10IdPlannedProfilesCreatePost($id, $create_update_planned_profiles_input): \Exos\ExosApi\Model\VoidResponseOutput
```

Create planned profiles for an Access point

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\SysOpsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 'id_example'; // string | id of the Access point
$create_update_planned_profiles_input = new \Exos\ExosApi\Model\CreateUpdatePlannedProfilesInput(); // \Exos\ExosApi\Model\CreateUpdatePlannedProfilesInput

try {
    $result = $apiInstance->v10IdPlannedProfilesCreatePost($id, $create_update_planned_profiles_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SysOpsApi->v10IdPlannedProfilesCreatePost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **string**| id of the Access point | |
| **create_update_planned_profiles_input** | [**\Exos\ExosApi\Model\CreateUpdatePlannedProfilesInput**](../Model/CreateUpdatePlannedProfilesInput.md)|  | |

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

## `v10IdPlannedProfilesGet()`

```php
v10IdPlannedProfilesGet($id): \Exos\ExosApi\Model\GetPlannedProfilesOutputWithTime
```

Get planned profiles from Access point

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\SysOpsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 'id_example'; // string | id of the Access point

try {
    $result = $apiInstance->v10IdPlannedProfilesGet($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SysOpsApi->v10IdPlannedProfilesGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **string**| id of the Access point | |

### Return type

[**\Exos\ExosApi\Model\GetPlannedProfilesOutputWithTime**](../Model/GetPlannedProfilesOutputWithTime.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10IdPlannedProfilesScheduleIdDeletePost()`

```php
v10IdPlannedProfilesScheduleIdDeletePost($id, $schedule_id): \Exos\ExosApi\Model\VoidResponseOutput
```

Delete planned profile from Access point

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\SysOpsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 'id_example'; // string | Access point identifier (path segment)
$schedule_id = 'schedule_id_example'; // string | Planned profile identifier (UID)

try {
    $result = $apiInstance->v10IdPlannedProfilesScheduleIdDeletePost($id, $schedule_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SysOpsApi->v10IdPlannedProfilesScheduleIdDeletePost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **string**| Access point identifier (path segment) | |
| **schedule_id** | **string**| Planned profile identifier (UID) | |

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

## `v10IdPlannedProfilesScheduleIdUpdatePost()`

```php
v10IdPlannedProfilesScheduleIdUpdatePost($id, $schedule_id, $update_planned_profiles_input): \Exos\ExosApi\Model\VoidResponseOutput
```

Update planned profiles for an Access point

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\SysOpsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 'id_example'; // string | id of the Access point
$schedule_id = 'schedule_id_example'; // string | id of the Passageway schedule
$update_planned_profiles_input = new \Exos\ExosApi\Model\UpdatePlannedProfilesInput(); // \Exos\ExosApi\Model\UpdatePlannedProfilesInput

try {
    $result = $apiInstance->v10IdPlannedProfilesScheduleIdUpdatePost($id, $schedule_id, $update_planned_profiles_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SysOpsApi->v10IdPlannedProfilesScheduleIdUpdatePost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **string**| id of the Access point | |
| **schedule_id** | **string**| id of the Passageway schedule | |
| **update_planned_profiles_input** | [**\Exos\ExosApi\Model\UpdatePlannedProfilesInput**](../Model/UpdatePlannedProfilesInput.md)|  | |

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

## `v10InitializeDataStorePost()`

```php
v10InitializeDataStorePost($tree_path_of_top_node): \Exos\ExosApi\Model\VoidResponseOutput
```

initializes the periphery datastore. when parameter 'treePathOfTopNode' is set only a partial of the datastore is updated (all devices starting with the path of 'treePathOfTopNode')

for testing purposes

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\SysOpsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$tree_path_of_top_node = 'tree_path_of_top_node_example'; // string | path of the top node (like '/FS1' or '/FS1/129/SSI1')

try {
    $result = $apiInstance->v10InitializeDataStorePost($tree_path_of_top_node);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SysOpsApi->v10InitializeDataStorePost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **tree_path_of_top_node** | **string**| path of the top node (like &#39;/FS1&#39; or &#39;/FS1/129/SSI1&#39;) | [optional] |

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

## `v10NodesGet()`

```php
v10NodesGet($component_type, $parent_node_id): \Exos\ExosApi\Model\Node
```

Get nodes

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\SysOpsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$component_type = 'component_type_example'; // string | type of component
$parent_node_id = 'parent_node_id_example'; // string | id of the periphery (devicetype + internalId of the specific periphery (example: CommunicationHub with Id 1 => FS1, AMX with Id 113 => SS113))

try {
    $result = $apiInstance->v10NodesGet($component_type, $parent_node_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SysOpsApi->v10NodesGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **component_type** | **string**| type of component | |
| **parent_node_id** | **string**| id of the periphery (devicetype + internalId of the specific periphery (example: CommunicationHub with Id 1 &#x3D;&gt; FS1, AMX with Id 113 &#x3D;&gt; SS113)) | [optional] |

### Return type

[**\Exos\ExosApi\Model\Node**](../Model/Node.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10PeripheryStatusListGet()`

```php
v10PeripheryStatusListGet($component_type, $skip, $take, $order_by, $search_string, $filter_by_device_type, $filter_devices_with_alarm): \Exos\ExosApi\Model\Device
```

gets the devices

gets the devices

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\SysOpsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$component_type = 'component_type_example'; // string | type of component
$skip = 0; // int | Define at which element to start with. Default 0
$take = 30; // int | Define the size of items you want to get. Default 30 (restriction max 80)
$order_by = new \Exos\ExosApi\Model\\Exos\ExosApi\Model\PeripheryOrderBy(); // \Exos\ExosApi\Model\PeripheryOrderBy | Define the order
$search_string = 'search_string_example'; // string | search in device name or device address (Searchlogic: searchstring% -> startswith, %searchstring -> endswith, all other combinations -> contains)
$filter_by_device_type = new \Exos\ExosApi\Model\\Exos\ExosApi\Model\DeviceTypes(); // \Exos\ExosApi\Model\DeviceTypes | filter the data by device type (equal)
$filter_devices_with_alarm = false; // bool | filter the devices with alarm (false = all devices / true = devices not running)

try {
    $result = $apiInstance->v10PeripheryStatusListGet($component_type, $skip, $take, $order_by, $search_string, $filter_by_device_type, $filter_devices_with_alarm);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SysOpsApi->v10PeripheryStatusListGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **component_type** | **string**| type of component | |
| **skip** | **int**| Define at which element to start with. Default 0 | [optional] [default to 0] |
| **take** | **int**| Define the size of items you want to get. Default 30 (restriction max 80) | [optional] [default to 30] |
| **order_by** | [**\Exos\ExosApi\Model\PeripheryOrderBy**](../Model/.md)| Define the order | [optional] |
| **search_string** | **string**| search in device name or device address (Searchlogic: searchstring% -&gt; startswith, %searchstring -&gt; endswith, all other combinations -&gt; contains) | [optional] |
| **filter_by_device_type** | [**\Exos\ExosApi\Model\DeviceTypes**](../Model/.md)| filter the data by device type (equal) | [optional] |
| **filter_devices_with_alarm** | **bool**| filter the devices with alarm (false &#x3D; all devices / true &#x3D; devices not running) | [optional] [default to false] |

### Return type

[**\Exos\ExosApi\Model\Device**](../Model/Device.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10RecalculateTreepathsPost()`

```php
v10RecalculateTreepathsPost($wait, $force_update_data_store): \Exos\ExosApi\Model\VoidResponseOutput
```

triggers the recalculation of flagged periphery treepaths

triggers the recalculation of flagged periphery treepaths

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\SysOpsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$wait = false; // bool | Defines whether we wait for calculation to finish
$force_update_data_store = false; // bool | if true, will also force an update on the inMemory tree store (any detected changes will result in an update of the store irrespective of this param)

try {
    $result = $apiInstance->v10RecalculateTreepathsPost($wait, $force_update_data_store);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SysOpsApi->v10RecalculateTreepathsPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **wait** | **bool**| Defines whether we wait for calculation to finish | [optional] [default to false] |
| **force_update_data_store** | **bool**| if true, will also force an update on the inMemory tree store (any detected changes will result in an update of the store irrespective of this param) | [optional] [default to false] |

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

## `v10StandaloneComponentsGet()`

```php
v10StandaloneComponentsGet($skip, $take, $order_by, $folder_id, $search_string, $filter_update_required, $include_white_list, $include_card_link, $include_oss): \Exos\ExosApi\Model\StandaloneComponentsOutput
```

gets the standalone devices

gets the standalone devices

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\SysOpsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$skip = 0; // int | Define at which element to start with. Default 0
$take = 30; // int | Define the size of items you want to get. Default 30 (restriction max 80)
$order_by = new \Exos\ExosApi\Model\\Exos\ExosApi\Model\PeripheryOrderBy(); // \Exos\ExosApi\Model\PeripheryOrderBy | Define the order
$folder_id = 'folder_id_example'; // string | id of a folder
$search_string = 'search_string_example'; // string | search in device name or device address
$filter_update_required = false; // bool | filter devices that require update
$include_white_list = false; // bool | include white list devices
$include_card_link = false; // bool | include card link devices
$include_oss = false; // bool | include oss devices

try {
    $result = $apiInstance->v10StandaloneComponentsGet($skip, $take, $order_by, $folder_id, $search_string, $filter_update_required, $include_white_list, $include_card_link, $include_oss);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SysOpsApi->v10StandaloneComponentsGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **skip** | **int**| Define at which element to start with. Default 0 | [optional] [default to 0] |
| **take** | **int**| Define the size of items you want to get. Default 30 (restriction max 80) | [optional] [default to 30] |
| **order_by** | [**\Exos\ExosApi\Model\PeripheryOrderBy**](../Model/.md)| Define the order | [optional] |
| **folder_id** | **string**| id of a folder | [optional] |
| **search_string** | **string**| search in device name or device address | [optional] |
| **filter_update_required** | **bool**| filter devices that require update | [optional] [default to false] |
| **include_white_list** | **bool**| include white list devices | [optional] [default to false] |
| **include_card_link** | **bool**| include card link devices | [optional] [default to false] |
| **include_oss** | **bool**| include oss devices | [optional] [default to false] |

### Return type

[**\Exos\ExosApi\Model\StandaloneComponentsOutput**](../Model/StandaloneComponentsOutput.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
