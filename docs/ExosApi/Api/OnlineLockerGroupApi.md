# Exos\ExosApi\OnlineLockerGroupApi

All URIs are relative to /ExosApi/api, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**v10OnlineLockerGroupsGet()**](OnlineLockerGroupApi.md#v10OnlineLockerGroupsGet) | **GET** /v1.0/onlineLockerGroups | Get all locker group entries in the system |
| [**v10OnlineLockerGroupsOnlineLockerGroupIdLockerProposalPersonIdGet()**](OnlineLockerGroupApi.md#v10OnlineLockerGroupsOnlineLockerGroupIdLockerProposalPersonIdGet) | **GET** /v1.0/onlineLockerGroups/{onlineLockerGroupId}/lockerProposal/{personId} | Get a proposal for a locker which can be assigned to the specific person. |
| [**v10OnlineLockerGroupsOnlineLockerGroupIdUpdatePost()**](OnlineLockerGroupApi.md#v10OnlineLockerGroupsOnlineLockerGroupIdUpdatePost) | **POST** /v1.0/onlineLockerGroups/{onlineLockerGroupId}/update | Updates a specific locker group. |


## `v10OnlineLockerGroupsGet()`

```php
v10OnlineLockerGroupsGet(): \Exos\ExosApi\Model\GetLockerGroupsOutputWithTime
```

Get all locker group entries in the system

Get all locker group entries in the system.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\OnlineLockerGroupApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);

try {
    $result = $apiInstance->v10OnlineLockerGroupsGet();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OnlineLockerGroupApi->v10OnlineLockerGroupsGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\Exos\ExosApi\Model\GetLockerGroupsOutputWithTime**](../Model/GetLockerGroupsOutputWithTime.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10OnlineLockerGroupsOnlineLockerGroupIdLockerProposalPersonIdGet()`

```php
v10OnlineLockerGroupsOnlineLockerGroupIdLockerProposalPersonIdGet($online_locker_group_id, $person_id): \Exos\ExosApi\Model\GetLockerProposalOutputWithTime
```

Get a proposal for a locker which can be assigned to the specific person.

Get a proposal for a locker which can be assigned to the specific person.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\OnlineLockerGroupApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$online_locker_group_id = 'online_locker_group_id_example'; // string | id of a lockergroup
$person_id = 'person_id_example'; // string | id of person

try {
    $result = $apiInstance->v10OnlineLockerGroupsOnlineLockerGroupIdLockerProposalPersonIdGet($online_locker_group_id, $person_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OnlineLockerGroupApi->v10OnlineLockerGroupsOnlineLockerGroupIdLockerProposalPersonIdGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **online_locker_group_id** | **string**| id of a lockergroup | |
| **person_id** | **string**| id of person | |

### Return type

[**\Exos\ExosApi\Model\GetLockerProposalOutputWithTime**](../Model/GetLockerProposalOutputWithTime.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10OnlineLockerGroupsOnlineLockerGroupIdUpdatePost()`

```php
v10OnlineLockerGroupsOnlineLockerGroupIdUpdatePost($online_locker_group_id, $update_locker_group_input): \Exos\ExosApi\Model\UpdateLockerGroupOutput
```

Updates a specific locker group.

Update a specific locker group.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\OnlineLockerGroupApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$online_locker_group_id = 'online_locker_group_id_example'; // string | id of locker group
$update_locker_group_input = new \Exos\ExosApi\Model\UpdateLockerGroupInput(); // \Exos\ExosApi\Model\UpdateLockerGroupInput

try {
    $result = $apiInstance->v10OnlineLockerGroupsOnlineLockerGroupIdUpdatePost($online_locker_group_id, $update_locker_group_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OnlineLockerGroupApi->v10OnlineLockerGroupsOnlineLockerGroupIdUpdatePost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **online_locker_group_id** | **string**| id of locker group | |
| **update_locker_group_input** | [**\Exos\ExosApi\Model\UpdateLockerGroupInput**](../Model/UpdateLockerGroupInput.md)|  | |

### Return type

[**\Exos\ExosApi\Model\UpdateLockerGroupOutput**](../Model/UpdateLockerGroupOutput.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
