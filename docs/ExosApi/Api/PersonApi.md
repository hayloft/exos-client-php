# Exos\ExosApi\PersonApi

All URIs are relative to /ExosApi/api, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**personDeleteDeprecated()**](PersonApi.md#personDeleteDeprecated) | **POST** /v1.0/persons/{personId}/delete | deletes an existing person |
| [**v10PersonsAccessRightsGet()**](PersonApi.md#v10PersonsAccessRightsGet) | **GET** /v1.0/personsAccessRights | get persons with access right information by access domain using odata |
| [**v10PersonsCreatePost()**](PersonApi.md#v10PersonsCreatePost) | **POST** /v1.0/persons/create | creates a new person |
| [**v10PersonsGet()**](PersonApi.md#v10PersonsGet) | **GET** /v1.0/persons | get persons by odata query options |
| [**v10PersonsPersonIdActivateMobileAccessDevicePost()**](PersonApi.md#v10PersonsPersonIdActivateMobileAccessDevicePost) | **POST** /v1.0/persons/{personId}/activateMobileAccessDevice | activate a mobile access device |
| [**v10PersonsPersonIdAssignBadgePost()**](PersonApi.md#v10PersonsPersonIdAssignBadgePost) | **POST** /v1.0/persons/{personId}/assignBadge | assigns a badge to a person |
| [**v10PersonsPersonIdAssignInitializedBadgePost()**](PersonApi.md#v10PersonsPersonIdAssignInitializedBadgePost) | **POST** /v1.0/persons/{personId}/assignInitializedBadge | issues a initialized media |
| [**v10PersonsPersonIdAssignKeyPost()**](PersonApi.md#v10PersonsPersonIdAssignKeyPost) | **POST** /v1.0/persons/{personId}/assignKey | assigns a key to a person |
| [**v10PersonsPersonIdAssignKeyRingPost()**](PersonApi.md#v10PersonsPersonIdAssignKeyRingPost) | **POST** /v1.0/persons/{personId}/assignKeyRing | assigns a keyring to a person |
| [**v10PersonsPersonIdAssignLoginLoginIdPost()**](PersonApi.md#v10PersonsPersonIdAssignLoginLoginIdPost) | **POST** /v1.0/persons/{personId}/assignLogin/{loginId} | assign the login for a specific person |
| [**v10PersonsPersonIdAssignTransitionalBadgePost()**](PersonApi.md#v10PersonsPersonIdAssignTransitionalBadgePost) | **POST** /v1.0/persons/{personId}/assignTransitionalBadge | issues a transitional media |
| [**v10PersonsPersonIdBlockPost()**](PersonApi.md#v10PersonsPersonIdBlockPost) | **POST** /v1.0/persons/{personId}/block | blocks a person |
| [**v10PersonsPersonIdCreateAndAssignWalletPost()**](PersonApi.md#v10PersonsPersonIdCreateAndAssignWalletPost) | **POST** /v1.0/persons/{personId}/createAndAssignWallet | assign a wallet |
| [**v10PersonsPersonIdDeactivateMobileAccessDevicePost()**](PersonApi.md#v10PersonsPersonIdDeactivateMobileAccessDevicePost) | **POST** /v1.0/persons/{personId}/deactivateMobileAccessDevice | deactivate a mobile access device |
| [**v10PersonsPersonIdDeleteImagePost()**](PersonApi.md#v10PersonsPersonIdDeleteImagePost) | **POST** /v1.0/persons/{personId}/deleteImage | delete an image of a person |
| [**v10PersonsPersonIdReleaseToTenantTenantIdPost()**](PersonApi.md#v10PersonsPersonIdReleaseToTenantTenantIdPost) | **POST** /v1.0/persons/{personId}/releaseToTenant/{tenantId} | release a specific person to another tenant |
| [**v10PersonsPersonIdRemoveWalletBadgePost()**](PersonApi.md#v10PersonsPersonIdRemoveWalletBadgePost) | **POST** /v1.0/persons/{personId}/removeWalletBadge | remove a digital wallet badge |
| [**v10PersonsPersonIdResetWeightPost()**](PersonApi.md#v10PersonsPersonIdResetWeightPost) | **POST** /v1.0/persons/{personId}/resetWeight | reset the weight for a specific person |
| [**v10PersonsPersonIdSetPinPost()**](PersonApi.md#v10PersonsPersonIdSetPinPost) | **POST** /v1.0/persons/{personId}/setPin | sets the PIN for a specific person |
| [**v10PersonsPersonIdSetRoomPost()**](PersonApi.md#v10PersonsPersonIdSetRoomPost) | **POST** /v1.0/persons/{personId}/setRoom | (re)set the room for a specific person |
| [**v10PersonsPersonIdTenantsGet()**](PersonApi.md#v10PersonsPersonIdTenantsGet) | **GET** /v1.0/persons/{personId}/tenants | gets all the tenants for which the person is released |
| [**v10PersonsPersonIdUnassignAndDeleteWalletPost()**](PersonApi.md#v10PersonsPersonIdUnassignAndDeleteWalletPost) | **POST** /v1.0/persons/{personId}/unassignAndDeleteWallet | unassign a wallet |
| [**v10PersonsPersonIdUnassignBadgePost()**](PersonApi.md#v10PersonsPersonIdUnassignBadgePost) | **POST** /v1.0/persons/{personId}/unassignBadge | unassigns a badge from a person |
| [**v10PersonsPersonIdUnassignInitializedBadgePost()**](PersonApi.md#v10PersonsPersonIdUnassignInitializedBadgePost) | **POST** /v1.0/persons/{personId}/unassignInitializedBadge | unassigns a initialized media from a person |
| [**v10PersonsPersonIdUnassignKeyPost()**](PersonApi.md#v10PersonsPersonIdUnassignKeyPost) | **POST** /v1.0/persons/{personId}/unassignKey | unassigns a key from a person |
| [**v10PersonsPersonIdUnassignKeyRingPost()**](PersonApi.md#v10PersonsPersonIdUnassignKeyRingPost) | **POST** /v1.0/persons/{personId}/unassignKeyRing | unassigns a keyring from a person |
| [**v10PersonsPersonIdUnassignLoginPost()**](PersonApi.md#v10PersonsPersonIdUnassignLoginPost) | **POST** /v1.0/persons/{personId}/unassignLogin | unassign the login from a specific person |
| [**v10PersonsPersonIdUnassignTransitionalBadgePost()**](PersonApi.md#v10PersonsPersonIdUnassignTransitionalBadgePost) | **POST** /v1.0/persons/{personId}/unassignTransitionalBadge | unassigns a transitional media from a person |
| [**v10PersonsPersonIdUnblockPost()**](PersonApi.md#v10PersonsPersonIdUnblockPost) | **POST** /v1.0/persons/{personId}/unblock | unblocks a person |
| [**v10PersonsPersonIdUnreleaseFromTenantTenantIdPost()**](PersonApi.md#v10PersonsPersonIdUnreleaseFromTenantTenantIdPost) | **POST** /v1.0/persons/{personId}/unreleaseFromTenant/{tenantId} | unrelease a person from another tenant |
| [**v10PersonsPersonIdUpdatePost()**](PersonApi.md#v10PersonsPersonIdUpdatePost) | **POST** /v1.0/persons/{personId}/update | updates an existing person |
| [**v10PersonsPersonIdUploadImagePost()**](PersonApi.md#v10PersonsPersonIdUploadImagePost) | **POST** /v1.0/persons/{personId}/uploadImage | upload an image of a person |
| [**v10PersonsPersonUidAssignAndCreateTransitionalBadgePost()**](PersonApi.md#v10PersonsPersonUidAssignAndCreateTransitionalBadgePost) | **POST** /v1.0/persons/{personUid}/assignAndCreateTransitionalBadge | assign a transitional badge |
| [**v10PersonsPersonUidAssignAndCreateVisitorBadgePost()**](PersonApi.md#v10PersonsPersonUidAssignAndCreateVisitorBadgePost) | **POST** /v1.0/persons/{personUid}/assignAndCreateVisitorBadge | assign and create a badge to a person |
| [**v10PersonsPersonUidUnassignAndDeleteTransitionalBadgePost()**](PersonApi.md#v10PersonsPersonUidUnassignAndDeleteTransitionalBadgePost) | **POST** /v1.0/persons/{personUid}/unassignAndDeleteTransitionalBadge | unassigns and delete a transitional media from a person |
| [**v10PersonsPersonUidUnassignAndDeleteVisitorBadgePost()**](PersonApi.md#v10PersonsPersonUidUnassignAndDeleteVisitorBadgePost) | **POST** /v1.0/persons/{personUid}/unassignAndDeleteVisitorBadge | unassign and delete a badge from a person |
| [**v10PersonsSetMyPinPost()**](PersonApi.md#v10PersonsSetMyPinPost) | **POST** /v1.0/persons/setMyPin | set the PIN for the currently logged in person |
| [**v10PersonsSettingsEnableMultipleBadgesPost()**](PersonApi.md#v10PersonsSettingsEnableMultipleBadgesPost) | **POST** /v1.0/persons/settings/EnableMultipleBadges | expression that defines the EnableMultipleBadges parameter |
| [**v10PersonsSettingsEnableMultipleProfilesPost()**](PersonApi.md#v10PersonsSettingsEnableMultipleProfilesPost) | **POST** /v1.0/persons/settings/EnableMultipleProfiles | enable assigning multiple profiles per access domain or profile collections. |
| [**v10PersonsSettingsEnableSecurityLevelPost()**](PersonApi.md#v10PersonsSettingsEnableSecurityLevelPost) | **POST** /v1.0/persons/settings/EnableSecurityLevel | expression that defines the EnableSecurityLevel parameter |
| [**v10PersonsSettingsFullnameSeparatorPost()**](PersonApi.md#v10PersonsSettingsFullnameSeparatorPost) | **POST** /v1.0/persons/settings/FullnameSeparator | expression that defines the separator for combined name field (FullName) |
| [**v10PersonsSettingsMaximumPincodeLengthPost()**](PersonApi.md#v10PersonsSettingsMaximumPincodeLengthPost) | **POST** /v1.0/persons/settings/MaximumPincodeLength | expression that defines the maximum pincode length |
| [**v10PersonsSettingsMinimumPincodeLengthPost()**](PersonApi.md#v10PersonsSettingsMinimumPincodeLengthPost) | **POST** /v1.0/persons/settings/MinimumPincodeLength | expression that defines the minimum pincode length |
| [**v11PersonsAccessRightsAssignmentIdUpdatePost()**](PersonApi.md#v11PersonsAccessRightsAssignmentIdUpdatePost) | **POST** /v1.1/persons/accessRights/{assignmentId}/update | updates an access right assignment from a person |
| [**v11PersonsCreatePost()**](PersonApi.md#v11PersonsCreatePost) | **POST** /v1.1/persons/create | creates a new person |
| [**v11PersonsPersonIdAssignAccessRightPost()**](PersonApi.md#v11PersonsPersonIdAssignAccessRightPost) | **POST** /v1.1/persons/{personId}/assignAccessRight | assigns a access right to a person |
| [**v11PersonsPersonIdDeletePost()**](PersonApi.md#v11PersonsPersonIdDeletePost) | **POST** /v1.1/persons/{personId}/delete | Deletes an existing person |
| [**v11PersonsPersonIdUnassignAccessRightAssignmentIdPost()**](PersonApi.md#v11PersonsPersonIdUnassignAccessRightAssignmentIdPost) | **POST** /v1.1/persons/{personId}/unassignAccessRight/{assignmentId} | unassigns an access right from a person |
| [**v11PersonsPersonIdUnassignAccessRightPost()**](PersonApi.md#v11PersonsPersonIdUnassignAccessRightPost) | **POST** /v1.1/persons/{personId}/unassignAccessRight | unassigns an access right from a person |


## `personDeleteDeprecated()`

```php
personDeleteDeprecated($person_id): \Exos\ExosApi\Model\VoidResponseOutput
```

deletes an existing person

Deletes a person.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\PersonApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$person_id = 'person_id_example'; // string | id of person

try {
    $result = $apiInstance->personDeleteDeprecated($person_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PersonApi->personDeleteDeprecated: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **person_id** | **string**| id of person | |

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

## `v10PersonsAccessRightsGet()`

```php
v10PersonsAccessRightsGet($access_domain_id, $person_type, $expand, $filter, $search_string, $count, $orderby, $select, $skip, $top): \Exos\ExosApi\Model\GetPersonsAccessRightsOutput
```

get persons with access right information by access domain using odata

<p>Be aware that a query made here can return up to 10000 records. If you need more, please use the built in paging functionality with $top and $skip.The provided searchString will result in a fulltext search on all selected fields. If the passed value is encapsulated with quotes(\"), it will be treated as an exact match search, otherwise the passed value will be an OR search over all keywords(splitted by space character).</p>

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\PersonApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$access_domain_id = 'access_domain_id_example'; // string | id of access domain
$person_type = 'All'; // string | the person type
$expand = 'expand_example'; // string | (DoorGroups,Profiles,RoomZones)
$filter = 'filter_example'; // string | startswith(FullName,'a')
$search_string = 'search_string_example'; // string | Fulltext search on all string, int and date fields that are selected with $select and $expand.
$count = true; // bool | adds total possible results to the response
$orderby = 'orderby_example'; // string | FullName desc
$select = 'select_example'; // string | PersonId,FullName
$skip = 56; // int | skips the first x entries of the response(paging)
$top = 1000; // int | limits the number of returned records.

try {
    $result = $apiInstance->v10PersonsAccessRightsGet($access_domain_id, $person_type, $expand, $filter, $search_string, $count, $orderby, $select, $skip, $top);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PersonApi->v10PersonsAccessRightsGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **access_domain_id** | **string**| id of access domain | |
| **person_type** | **string**| the person type | [optional] [default to &#39;All&#39;] |
| **expand** | **string**| (DoorGroups,Profiles,RoomZones) | [optional] |
| **filter** | **string**| startswith(FullName,&#39;a&#39;) | [optional] |
| **search_string** | **string**| Fulltext search on all string, int and date fields that are selected with $select and $expand. | [optional] |
| **count** | **bool**| adds total possible results to the response | [optional] [default to true] |
| **orderby** | **string**| FullName desc | [optional] |
| **select** | **string**| PersonId,FullName | [optional] |
| **skip** | **int**| skips the first x entries of the response(paging) | [optional] |
| **top** | **int**| limits the number of returned records. | [optional] [default to 1000] |

### Return type

[**\Exos\ExosApi\Model\GetPersonsAccessRightsOutput**](../Model/GetPersonsAccessRightsOutput.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10PersonsCreatePost()`

```php
v10PersonsCreatePost($create_person_input, $ignore_blacklist, $location_id): \Exos\ExosApi\Model\CreatePersonOutputWithTime
```

creates a new person

Method is deprecated, please use 'api/v1.1/persons/create' instead - EXOS 4.3.0

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\PersonApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$create_person_input = new \Exos\ExosApi\Model\CreatePersonInput(); // \Exos\ExosApi\Model\CreatePersonInput | person to add
$ignore_blacklist = True; // bool | Ignore blacklist check
$location_id = 'location_id_example'; // string | Location id

try {
    $result = $apiInstance->v10PersonsCreatePost($create_person_input, $ignore_blacklist, $location_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PersonApi->v10PersonsCreatePost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **create_person_input** | [**\Exos\ExosApi\Model\CreatePersonInput**](../Model/CreatePersonInput.md)| person to add | |
| **ignore_blacklist** | **bool**| Ignore blacklist check | [optional] |
| **location_id** | **string**| Location id | [optional] |

### Return type

[**\Exos\ExosApi\Model\CreatePersonOutputWithTime**](../Model/CreatePersonOutputWithTime.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10PersonsGet()`

```php
v10PersonsGet($person_type, $expand, $filter, $search_string, $count, $orderby, $select, $skip, $top, $search_string_logic): \Exos\ExosApi\Model\GetPersonsOutput
```

get persons by odata query options

<p>Be aware that a query made here can return up to 10000 records. If you need more, please use the built in paging functionality with $top and $skip.The provided searchString will result in a fulltext search on all selected fields. If the passed value is encapsulated with quotes(\"), it will be treated as an exact match search, otherwise the passed value will be an OR search over all keywords(splitted by space character).</p>

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\PersonApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$person_type = 'All'; // string | the person type
$expand = 'expand_example'; // string | PersonBaseData($select=LastName,FirstName)
$filter = 'filter_example'; // string | startswith(PersonBaseData/LastName,'a')
$search_string = 'search_string_example'; // string | Fulltext search on all string, int and date fields that are selected with $select and $expand.
$count = true; // bool | adds total possible results to the response
$orderby = 'orderby_example'; // string | PersonBaseData/LastName desc
$select = 'select_example'; // string | PersonId,ClientId
$skip = 56; // int | skips the first x entries of the response(paging)
$top = 1000; // int | limits the number of returned records.
$search_string_logic = 'SelectedFields'; // string | Logic that is to be applied to the search string. If no value is provided: 'SelectedFields' is applied. ('SelectedFields': Filter in fields provided in the select/expand clause, 'BasicFields': filter only in fullname, personal nr, badge filtering, 'PersonalNumberOnly': only filter in personal number)

try {
    $result = $apiInstance->v10PersonsGet($person_type, $expand, $filter, $search_string, $count, $orderby, $select, $skip, $top, $search_string_logic);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PersonApi->v10PersonsGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **person_type** | **string**| the person type | [optional] [default to &#39;All&#39;] |
| **expand** | **string**| PersonBaseData($select&#x3D;LastName,FirstName) | [optional] |
| **filter** | **string**| startswith(PersonBaseData/LastName,&#39;a&#39;) | [optional] |
| **search_string** | **string**| Fulltext search on all string, int and date fields that are selected with $select and $expand. | [optional] |
| **count** | **bool**| adds total possible results to the response | [optional] [default to true] |
| **orderby** | **string**| PersonBaseData/LastName desc | [optional] |
| **select** | **string**| PersonId,ClientId | [optional] |
| **skip** | **int**| skips the first x entries of the response(paging) | [optional] |
| **top** | **int**| limits the number of returned records. | [optional] [default to 1000] |
| **search_string_logic** | **string**| Logic that is to be applied to the search string. If no value is provided: &#39;SelectedFields&#39; is applied. (&#39;SelectedFields&#39;: Filter in fields provided in the select/expand clause, &#39;BasicFields&#39;: filter only in fullname, personal nr, badge filtering, &#39;PersonalNumberOnly&#39;: only filter in personal number) | [optional] [default to &#39;SelectedFields&#39;] |

### Return type

[**\Exos\ExosApi\Model\GetPersonsOutput**](../Model/GetPersonsOutput.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10PersonsPersonIdActivateMobileAccessDevicePost()`

```php
v10PersonsPersonIdActivateMobileAccessDevicePost($person_id, $activate_mobile_access_device_input): \Exos\ExosApi\Model\VoidResponseOutput
```

activate a mobile access device

activate a mobile access device.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\PersonApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$person_id = 'person_id_example'; // string | id of person
$activate_mobile_access_device_input = new \Exos\ExosApi\Model\ActivateMobileAccessDeviceInput(); // \Exos\ExosApi\Model\ActivateMobileAccessDeviceInput

try {
    $result = $apiInstance->v10PersonsPersonIdActivateMobileAccessDevicePost($person_id, $activate_mobile_access_device_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PersonApi->v10PersonsPersonIdActivateMobileAccessDevicePost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **person_id** | **string**| id of person | |
| **activate_mobile_access_device_input** | [**\Exos\ExosApi\Model\ActivateMobileAccessDeviceInput**](../Model/ActivateMobileAccessDeviceInput.md)|  | [optional] |

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

## `v10PersonsPersonIdAssignBadgePost()`

```php
v10PersonsPersonIdAssignBadgePost($person_id, $assign_badge_input, $ignore_blacklist): \Exos\ExosApi\Model\AssignBadgeOutputWithTime
```

assigns a badge to a person

Assigns the badge to the person.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\PersonApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$person_id = 'person_id_example'; // string | id of person
$assign_badge_input = new \Exos\ExosApi\Model\AssignBadgeInput(); // \Exos\ExosApi\Model\AssignBadgeInput | Badge
$ignore_blacklist = True; // bool | Ignore blacklist check

try {
    $result = $apiInstance->v10PersonsPersonIdAssignBadgePost($person_id, $assign_badge_input, $ignore_blacklist);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PersonApi->v10PersonsPersonIdAssignBadgePost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **person_id** | **string**| id of person | |
| **assign_badge_input** | [**\Exos\ExosApi\Model\AssignBadgeInput**](../Model/AssignBadgeInput.md)| Badge | |
| **ignore_blacklist** | **bool**| Ignore blacklist check | [optional] |

### Return type

[**\Exos\ExosApi\Model\AssignBadgeOutputWithTime**](../Model/AssignBadgeOutputWithTime.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10PersonsPersonIdAssignInitializedBadgePost()`

```php
v10PersonsPersonIdAssignInitializedBadgePost($person_id, $assign_initialized_badge_input, $ignore_blacklist): \Exos\ExosApi\Model\AssignInitializedBadgeOutputWithTime
```

issues a initialized media

<p>Assigns an existing initialized media to the person and blocks the standard media.</p>

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\PersonApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$person_id = 'person_id_example'; // string | id of person
$assign_initialized_badge_input = new \Exos\ExosApi\Model\AssignInitializedBadgeInput(); // \Exos\ExosApi\Model\AssignInitializedBadgeInput | Badges
$ignore_blacklist = True; // bool | Ignore blacklist check

try {
    $result = $apiInstance->v10PersonsPersonIdAssignInitializedBadgePost($person_id, $assign_initialized_badge_input, $ignore_blacklist);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PersonApi->v10PersonsPersonIdAssignInitializedBadgePost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **person_id** | **string**| id of person | |
| **assign_initialized_badge_input** | [**\Exos\ExosApi\Model\AssignInitializedBadgeInput**](../Model/AssignInitializedBadgeInput.md)| Badges | |
| **ignore_blacklist** | **bool**| Ignore blacklist check | [optional] |

### Return type

[**\Exos\ExosApi\Model\AssignInitializedBadgeOutputWithTime**](../Model/AssignInitializedBadgeOutputWithTime.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10PersonsPersonIdAssignKeyPost()`

```php
v10PersonsPersonIdAssignKeyPost($person_id, $assign_key_input, $ignore_blacklist): \Exos\ExosApi\Model\AssignKeyOutputWithTime
```

assigns a key to a person

Assigns the key to the person.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\PersonApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$person_id = 'person_id_example'; // string | id of person
$assign_key_input = new \Exos\ExosApi\Model\AssignKeyInput(); // \Exos\ExosApi\Model\AssignKeyInput | Key
$ignore_blacklist = True; // bool | Ignore blacklist check

try {
    $result = $apiInstance->v10PersonsPersonIdAssignKeyPost($person_id, $assign_key_input, $ignore_blacklist);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PersonApi->v10PersonsPersonIdAssignKeyPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **person_id** | **string**| id of person | |
| **assign_key_input** | [**\Exos\ExosApi\Model\AssignKeyInput**](../Model/AssignKeyInput.md)| Key | |
| **ignore_blacklist** | **bool**| Ignore blacklist check | [optional] |

### Return type

[**\Exos\ExosApi\Model\AssignKeyOutputWithTime**](../Model/AssignKeyOutputWithTime.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10PersonsPersonIdAssignKeyRingPost()`

```php
v10PersonsPersonIdAssignKeyRingPost($person_id, $assign_key_ring_input, $ignore_blacklist): \Exos\ExosApi\Model\AssignKeyRingOutputWithTime
```

assigns a keyring to a person

Assigns the keyring to the person.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\PersonApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$person_id = 'person_id_example'; // string | id of person
$assign_key_ring_input = new \Exos\ExosApi\Model\AssignKeyRingInput(); // \Exos\ExosApi\Model\AssignKeyRingInput | KeyRing
$ignore_blacklist = True; // bool | Ignore blacklist check

try {
    $result = $apiInstance->v10PersonsPersonIdAssignKeyRingPost($person_id, $assign_key_ring_input, $ignore_blacklist);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PersonApi->v10PersonsPersonIdAssignKeyRingPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **person_id** | **string**| id of person | |
| **assign_key_ring_input** | [**\Exos\ExosApi\Model\AssignKeyRingInput**](../Model/AssignKeyRingInput.md)| KeyRing | |
| **ignore_blacklist** | **bool**| Ignore blacklist check | [optional] |

### Return type

[**\Exos\ExosApi\Model\AssignKeyRingOutputWithTime**](../Model/AssignKeyRingOutputWithTime.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10PersonsPersonIdAssignLoginLoginIdPost()`

```php
v10PersonsPersonIdAssignLoginLoginIdPost($person_id, $login_id, $ignore_blacklist): \Exos\ExosApi\Model\VoidResponseOutput
```

assign the login for a specific person

assigns a login to a specific person. The login will be set for this PersonId (required authorisation is LOGIN_AssignPerson)

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\PersonApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$person_id = 'PersonId1'; // string | id of person
$login_id = 'LoginId1'; // string | id of login
$ignore_blacklist = True; // bool | Ignore blacklist check

try {
    $result = $apiInstance->v10PersonsPersonIdAssignLoginLoginIdPost($person_id, $login_id, $ignore_blacklist);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PersonApi->v10PersonsPersonIdAssignLoginLoginIdPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **person_id** | **string**| id of person | [default to &#39;PersonId1&#39;] |
| **login_id** | **string**| id of login | [default to &#39;LoginId1&#39;] |
| **ignore_blacklist** | **bool**| Ignore blacklist check | [optional] |

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

## `v10PersonsPersonIdAssignTransitionalBadgePost()`

```php
v10PersonsPersonIdAssignTransitionalBadgePost($person_id, $assign_transitional_badge_input, $ignore_blacklist): \Exos\ExosApi\Model\AssignTransitionalBadgeOutputWithTime
```

issues a transitional media

<p>Assigns an existing transitional media to the person and blocks the standard or initial media.</p>

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\PersonApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$person_id = 'person_id_example'; // string | id of person
$assign_transitional_badge_input = new \Exos\ExosApi\Model\AssignTransitionalBadgeInput(); // \Exos\ExosApi\Model\AssignTransitionalBadgeInput | Badges
$ignore_blacklist = True; // bool | Ignore blacklist check

try {
    $result = $apiInstance->v10PersonsPersonIdAssignTransitionalBadgePost($person_id, $assign_transitional_badge_input, $ignore_blacklist);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PersonApi->v10PersonsPersonIdAssignTransitionalBadgePost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **person_id** | **string**| id of person | |
| **assign_transitional_badge_input** | [**\Exos\ExosApi\Model\AssignTransitionalBadgeInput**](../Model/AssignTransitionalBadgeInput.md)| Badges | |
| **ignore_blacklist** | **bool**| Ignore blacklist check | [optional] |

### Return type

[**\Exos\ExosApi\Model\AssignTransitionalBadgeOutputWithTime**](../Model/AssignTransitionalBadgeOutputWithTime.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10PersonsPersonIdBlockPost()`

```php
v10PersonsPersonIdBlockPost($person_id, $block_person_input): \Exos\ExosApi\Model\IsCardlinkUpdateRequiredOutputWithTime
```

blocks a person

blocks a person.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\PersonApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$person_id = 'person_id_example'; // string | id of person
$block_person_input = new \Exos\ExosApi\Model\BlockPersonInput(); // \Exos\ExosApi\Model\BlockPersonInput

try {
    $result = $apiInstance->v10PersonsPersonIdBlockPost($person_id, $block_person_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PersonApi->v10PersonsPersonIdBlockPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **person_id** | **string**| id of person | |
| **block_person_input** | [**\Exos\ExosApi\Model\BlockPersonInput**](../Model/BlockPersonInput.md)|  | |

### Return type

[**\Exos\ExosApi\Model\IsCardlinkUpdateRequiredOutputWithTime**](../Model/IsCardlinkUpdateRequiredOutputWithTime.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10PersonsPersonIdCreateAndAssignWalletPost()`

```php
v10PersonsPersonIdCreateAndAssignWalletPost($person_id, $create_and_assign_wallet_input): \Exos\ExosApi\Model\VoidResponseOutput
```

assign a wallet

assign a wallet.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\PersonApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$person_id = 'person_id_example'; // string | id of person
$create_and_assign_wallet_input = new \Exos\ExosApi\Model\CreateAndAssignWalletInput(); // \Exos\ExosApi\Model\CreateAndAssignWalletInput

try {
    $result = $apiInstance->v10PersonsPersonIdCreateAndAssignWalletPost($person_id, $create_and_assign_wallet_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PersonApi->v10PersonsPersonIdCreateAndAssignWalletPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **person_id** | **string**| id of person | |
| **create_and_assign_wallet_input** | [**\Exos\ExosApi\Model\CreateAndAssignWalletInput**](../Model/CreateAndAssignWalletInput.md)|  | [optional] |

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

## `v10PersonsPersonIdDeactivateMobileAccessDevicePost()`

```php
v10PersonsPersonIdDeactivateMobileAccessDevicePost($person_id): \Exos\ExosApi\Model\VoidResponseOutput
```

deactivate a mobile access device

deactivate a mobile access device.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\PersonApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$person_id = 'person_id_example'; // string | id of person

try {
    $result = $apiInstance->v10PersonsPersonIdDeactivateMobileAccessDevicePost($person_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PersonApi->v10PersonsPersonIdDeactivateMobileAccessDevicePost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **person_id** | **string**| id of person | |

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

## `v10PersonsPersonIdDeleteImagePost()`

```php
v10PersonsPersonIdDeleteImagePost($person_id): \Exos\ExosApi\Model\VoidResponseOutput
```

delete an image of a person

<p>delete an image of a person. </p>

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\PersonApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$person_id = 'person_id_example'; // string | id of person

try {
    $result = $apiInstance->v10PersonsPersonIdDeleteImagePost($person_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PersonApi->v10PersonsPersonIdDeleteImagePost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **person_id** | **string**| id of person | |

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

## `v10PersonsPersonIdReleaseToTenantTenantIdPost()`

```php
v10PersonsPersonIdReleaseToTenantTenantIdPost($person_id, $tenant_id): \Exos\ExosApi\Model\VoidResponseOutput
```

release a specific person to another tenant

release a specific person to another tenant.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\PersonApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$person_id = 'person_id_example'; // string | id of person
$tenant_id = 'tenant_id_example'; // string | id of tenant

try {
    $result = $apiInstance->v10PersonsPersonIdReleaseToTenantTenantIdPost($person_id, $tenant_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PersonApi->v10PersonsPersonIdReleaseToTenantTenantIdPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **person_id** | **string**| id of person | |
| **tenant_id** | **string**| id of tenant | |

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

## `v10PersonsPersonIdRemoveWalletBadgePost()`

```php
v10PersonsPersonIdRemoveWalletBadgePost($person_id, $remove_wallet_badge_input): \Exos\ExosApi\Model\UnassignBadgeOutputWithTime
```

remove a digital wallet badge

remove a digital wallet badge

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\PersonApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$person_id = 'person_id_example'; // string | id of person
$remove_wallet_badge_input = new \Exos\ExosApi\Model\RemoveWalletBadgeInput(); // \Exos\ExosApi\Model\RemoveWalletBadgeInput

try {
    $result = $apiInstance->v10PersonsPersonIdRemoveWalletBadgePost($person_id, $remove_wallet_badge_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PersonApi->v10PersonsPersonIdRemoveWalletBadgePost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **person_id** | **string**| id of person | |
| **remove_wallet_badge_input** | [**\Exos\ExosApi\Model\RemoveWalletBadgeInput**](../Model/RemoveWalletBadgeInput.md)|  | [optional] |

### Return type

[**\Exos\ExosApi\Model\UnassignBadgeOutputWithTime**](../Model/UnassignBadgeOutputWithTime.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10PersonsPersonIdResetWeightPost()`

```php
v10PersonsPersonIdResetWeightPost($person_id): \Exos\ExosApi\Model\VoidResponseOutput
```

reset the weight for a specific person

<p>resets a weight for a specific person. The weight will be set for this PersonId </p>

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\PersonApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$person_id = 'person_id_example'; // string | id of person

try {
    $result = $apiInstance->v10PersonsPersonIdResetWeightPost($person_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PersonApi->v10PersonsPersonIdResetWeightPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **person_id** | **string**| id of person | |

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

## `v10PersonsPersonIdSetPinPost()`

```php
v10PersonsPersonIdSetPinPost($person_id, $body): \Exos\ExosApi\Model\VoidResponseOutput
```

sets the PIN for a specific person

Sets a PIN for a specific person. The PIN will be set for this PersonId

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\PersonApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$person_id = 'person_id_example'; // string | id of person
$body = 'body_example'; // string

try {
    $result = $apiInstance->v10PersonsPersonIdSetPinPost($person_id, $body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PersonApi->v10PersonsPersonIdSetPinPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **person_id** | **string**| id of person | |
| **body** | **string**|  | |

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

## `v10PersonsPersonIdSetRoomPost()`

```php
v10PersonsPersonIdSetRoomPost($person_id, $body): \Exos\ExosApi\Model\VoidResponseOutput
```

(re)set the room for a specific person

<p>(re)sets a room for a specific person. The room will be set for this PersonId. </p>

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\PersonApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$person_id = 'person_id_example'; // string | id of person
$body = 'body_example'; // string | id of room or empty for wildcard room

try {
    $result = $apiInstance->v10PersonsPersonIdSetRoomPost($person_id, $body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PersonApi->v10PersonsPersonIdSetRoomPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **person_id** | **string**| id of person | |
| **body** | **string**| id of room or empty for wildcard room | |

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

## `v10PersonsPersonIdTenantsGet()`

```php
v10PersonsPersonIdTenantsGet($person_id): \Exos\ExosApi\Model\TenantReleaseOutputWithTime
```

gets all the tenants for which the person is released

gets all tenants for which the person is released.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\PersonApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$person_id = 'person_id_example'; // string | id of person

try {
    $result = $apiInstance->v10PersonsPersonIdTenantsGet($person_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PersonApi->v10PersonsPersonIdTenantsGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **person_id** | **string**| id of person | |

### Return type

[**\Exos\ExosApi\Model\TenantReleaseOutputWithTime**](../Model/TenantReleaseOutputWithTime.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10PersonsPersonIdUnassignAndDeleteWalletPost()`

```php
v10PersonsPersonIdUnassignAndDeleteWalletPost($person_id): \Exos\ExosApi\Model\VoidResponseOutput
```

unassign a wallet

unassign and delete a wallet

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\PersonApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$person_id = 'person_id_example'; // string | id of person

try {
    $result = $apiInstance->v10PersonsPersonIdUnassignAndDeleteWalletPost($person_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PersonApi->v10PersonsPersonIdUnassignAndDeleteWalletPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **person_id** | **string**| id of person | |

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

## `v10PersonsPersonIdUnassignBadgePost()`

```php
v10PersonsPersonIdUnassignBadgePost($person_id, $unassign_badge_input): \Exos\ExosApi\Model\UnassignBadgeOutputWithTime
```

unassigns a badge from a person

<p>Unassigns a badge. Can not be executed if there is an active transitional or initialized badge assigned to it.</p>

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\PersonApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$person_id = 'person_id_example'; // string | id of person
$unassign_badge_input = new \Exos\ExosApi\Model\UnassignBadgeInput(); // \Exos\ExosApi\Model\UnassignBadgeInput | Badge

try {
    $result = $apiInstance->v10PersonsPersonIdUnassignBadgePost($person_id, $unassign_badge_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PersonApi->v10PersonsPersonIdUnassignBadgePost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **person_id** | **string**| id of person | |
| **unassign_badge_input** | [**\Exos\ExosApi\Model\UnassignBadgeInput**](../Model/UnassignBadgeInput.md)| Badge | |

### Return type

[**\Exos\ExosApi\Model\UnassignBadgeOutputWithTime**](../Model/UnassignBadgeOutputWithTime.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10PersonsPersonIdUnassignInitializedBadgePost()`

```php
v10PersonsPersonIdUnassignInitializedBadgePost($person_id, $unassign_initialized_badge_input): \Exos\ExosApi\Model\UnassignInitializedBadgeOutputWithTime
```

unassigns a initialized media from a person

<p>unassigns a initialized media from a person and unblocks the standard media.</p>

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\PersonApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$person_id = 'person_id_example'; // string | id of person
$unassign_initialized_badge_input = new \Exos\ExosApi\Model\UnassignInitializedBadgeInput(); // \Exos\ExosApi\Model\UnassignInitializedBadgeInput | Badge

try {
    $result = $apiInstance->v10PersonsPersonIdUnassignInitializedBadgePost($person_id, $unassign_initialized_badge_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PersonApi->v10PersonsPersonIdUnassignInitializedBadgePost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **person_id** | **string**| id of person | |
| **unassign_initialized_badge_input** | [**\Exos\ExosApi\Model\UnassignInitializedBadgeInput**](../Model/UnassignInitializedBadgeInput.md)| Badge | |

### Return type

[**\Exos\ExosApi\Model\UnassignInitializedBadgeOutputWithTime**](../Model/UnassignInitializedBadgeOutputWithTime.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10PersonsPersonIdUnassignKeyPost()`

```php
v10PersonsPersonIdUnassignKeyPost($person_id, $unassign_key_input): \Exos\ExosApi\Model\UnassignKeyOutputWithTime
```

unassigns a key from a person

Unassigns a key.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\PersonApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$person_id = 'person_id_example'; // string | id of person
$unassign_key_input = new \Exos\ExosApi\Model\UnassignKeyInput(); // \Exos\ExosApi\Model\UnassignKeyInput | Key

try {
    $result = $apiInstance->v10PersonsPersonIdUnassignKeyPost($person_id, $unassign_key_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PersonApi->v10PersonsPersonIdUnassignKeyPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **person_id** | **string**| id of person | |
| **unassign_key_input** | [**\Exos\ExosApi\Model\UnassignKeyInput**](../Model/UnassignKeyInput.md)| Key | |

### Return type

[**\Exos\ExosApi\Model\UnassignKeyOutputWithTime**](../Model/UnassignKeyOutputWithTime.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10PersonsPersonIdUnassignKeyRingPost()`

```php
v10PersonsPersonIdUnassignKeyRingPost($person_id, $unassign_key_ring_input): \Exos\ExosApi\Model\UnassignKeyRingOutputWithTime
```

unassigns a keyring from a person

Unassigns a keyring.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\PersonApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$person_id = 'person_id_example'; // string | id of person
$unassign_key_ring_input = new \Exos\ExosApi\Model\UnassignKeyRingInput(); // \Exos\ExosApi\Model\UnassignKeyRingInput | Keyring

try {
    $result = $apiInstance->v10PersonsPersonIdUnassignKeyRingPost($person_id, $unassign_key_ring_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PersonApi->v10PersonsPersonIdUnassignKeyRingPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **person_id** | **string**| id of person | |
| **unassign_key_ring_input** | [**\Exos\ExosApi\Model\UnassignKeyRingInput**](../Model/UnassignKeyRingInput.md)| Keyring | |

### Return type

[**\Exos\ExosApi\Model\UnassignKeyRingOutputWithTime**](../Model/UnassignKeyRingOutputWithTime.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10PersonsPersonIdUnassignLoginPost()`

```php
v10PersonsPersonIdUnassignLoginPost($person_id): \Exos\ExosApi\Model\VoidResponseOutput
```

unassign the login from a specific person

unassigns a login from a specific person. The login will be unassigned from this PersonId (required authorisation is LOGIN_AssignPerson)

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\PersonApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$person_id = 'person_id_example'; // string | id of person

try {
    $result = $apiInstance->v10PersonsPersonIdUnassignLoginPost($person_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PersonApi->v10PersonsPersonIdUnassignLoginPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **person_id** | **string**| id of person | |

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

## `v10PersonsPersonIdUnassignTransitionalBadgePost()`

```php
v10PersonsPersonIdUnassignTransitionalBadgePost($person_id, $unassign_transitional_badge_input, $unassign_transitional_medium_behaviour): \Exos\ExosApi\Model\UnassignTransitionalBadgeOutputWithTime
```

unassigns a transitional media from a person

<p>unassigns a transitional media from a person and unblocks the standard or initial media.</p>

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\PersonApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$person_id = 'person_id_example'; // string | id of person
$unassign_transitional_badge_input = new \Exos\ExosApi\Model\UnassignTransitionalBadgeInput(); // \Exos\ExosApi\Model\UnassignTransitionalBadgeInput | Badge
$unassign_transitional_medium_behaviour = 'unassign_transitional_medium_behaviour_example'; // string

try {
    $result = $apiInstance->v10PersonsPersonIdUnassignTransitionalBadgePost($person_id, $unassign_transitional_badge_input, $unassign_transitional_medium_behaviour);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PersonApi->v10PersonsPersonIdUnassignTransitionalBadgePost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **person_id** | **string**| id of person | |
| **unassign_transitional_badge_input** | [**\Exos\ExosApi\Model\UnassignTransitionalBadgeInput**](../Model/UnassignTransitionalBadgeInput.md)| Badge | |
| **unassign_transitional_medium_behaviour** | **string**|  | [optional] |

### Return type

[**\Exos\ExosApi\Model\UnassignTransitionalBadgeOutputWithTime**](../Model/UnassignTransitionalBadgeOutputWithTime.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10PersonsPersonIdUnblockPost()`

```php
v10PersonsPersonIdUnblockPost($person_id, $unblock_person_input, $ignore_blacklist): \Exos\ExosApi\Model\IsCardlinkUpdateRequiredOutputWithTime
```

unblocks a person

unblocks a person.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\PersonApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$person_id = 'person_id_example'; // string | id of person
$unblock_person_input = new \Exos\ExosApi\Model\UnblockPersonInput(); // \Exos\ExosApi\Model\UnblockPersonInput
$ignore_blacklist = True; // bool | Ignore blacklist check

try {
    $result = $apiInstance->v10PersonsPersonIdUnblockPost($person_id, $unblock_person_input, $ignore_blacklist);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PersonApi->v10PersonsPersonIdUnblockPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **person_id** | **string**| id of person | |
| **unblock_person_input** | [**\Exos\ExosApi\Model\UnblockPersonInput**](../Model/UnblockPersonInput.md)|  | |
| **ignore_blacklist** | **bool**| Ignore blacklist check | [optional] |

### Return type

[**\Exos\ExosApi\Model\IsCardlinkUpdateRequiredOutputWithTime**](../Model/IsCardlinkUpdateRequiredOutputWithTime.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10PersonsPersonIdUnreleaseFromTenantTenantIdPost()`

```php
v10PersonsPersonIdUnreleaseFromTenantTenantIdPost($person_id, $tenant_id): \Exos\ExosApi\Model\VoidResponseOutput
```

unrelease a person from another tenant

unrelease a person from another tenant.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\PersonApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$person_id = 'person_id_example'; // string | id of person
$tenant_id = 'tenant_id_example'; // string | id of tenant

try {
    $result = $apiInstance->v10PersonsPersonIdUnreleaseFromTenantTenantIdPost($person_id, $tenant_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PersonApi->v10PersonsPersonIdUnreleaseFromTenantTenantIdPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **person_id** | **string**| id of person | |
| **tenant_id** | **string**| id of tenant | |

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

## `v10PersonsPersonIdUpdatePost()`

```php
v10PersonsPersonIdUpdatePost($person_id, $update_person_input, $ignore_blacklist): \Exos\ExosApi\Model\UpdatePersonOutputWithTime
```

updates an existing person

Update Person.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\PersonApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$person_id = 'person_id_example'; // string | id of person
$update_person_input = new \Exos\ExosApi\Model\UpdatePersonInput(); // \Exos\ExosApi\Model\UpdatePersonInput | Fields
$ignore_blacklist = True; // bool | Ignore blacklist check

try {
    $result = $apiInstance->v10PersonsPersonIdUpdatePost($person_id, $update_person_input, $ignore_blacklist);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PersonApi->v10PersonsPersonIdUpdatePost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **person_id** | **string**| id of person | |
| **update_person_input** | [**\Exos\ExosApi\Model\UpdatePersonInput**](../Model/UpdatePersonInput.md)| Fields | |
| **ignore_blacklist** | **bool**| Ignore blacklist check | [optional] |

### Return type

[**\Exos\ExosApi\Model\UpdatePersonOutputWithTime**](../Model/UpdatePersonOutputWithTime.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10PersonsPersonIdUploadImagePost()`

```php
v10PersonsPersonIdUploadImagePost($person_id, $image): \Exos\ExosApi\Model\VoidResponseOutput
```

upload an image of a person

<p>upload an image of a person. It will override the existing image of this person. The file size is limited to 1MB(Default) and can be controlled with the Parameter SYS/MAXIMAGESIZEINBYTE. Supported image formats are PNG, JPEG, GIF, BMP, TIFF.</p>

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\PersonApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$person_id = 'person_id_example'; // string | id of person
$image = '/path/to/file.txt'; // \SplFileObject | The image of the user

try {
    $result = $apiInstance->v10PersonsPersonIdUploadImagePost($person_id, $image);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PersonApi->v10PersonsPersonIdUploadImagePost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **person_id** | **string**| id of person | |
| **image** | **\SplFileObject****\SplFileObject**| The image of the user | |

### Return type

[**\Exos\ExosApi\Model\VoidResponseOutput**](../Model/VoidResponseOutput.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10PersonsPersonUidAssignAndCreateTransitionalBadgePost()`

```php
v10PersonsPersonUidAssignAndCreateTransitionalBadgePost($person_uid, $create_and_assign_transitional_badge_input, $ignore_blacklist): \Exos\ExosApi\Model\CreateAndAssignTransitionalBadgeOutputWithTime
```

assign a transitional badge

<p>Create and assign a transitional media to the person and blocks the standard or initial media.</p>

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\PersonApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$person_uid = 'person_uid_example'; // string | uid of person
$create_and_assign_transitional_badge_input = new \Exos\ExosApi\Model\CreateAndAssignTransitionalBadgeInput(); // \Exos\ExosApi\Model\CreateAndAssignTransitionalBadgeInput | Badges
$ignore_blacklist = True; // bool | Ignore blacklist check

try {
    $result = $apiInstance->v10PersonsPersonUidAssignAndCreateTransitionalBadgePost($person_uid, $create_and_assign_transitional_badge_input, $ignore_blacklist);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PersonApi->v10PersonsPersonUidAssignAndCreateTransitionalBadgePost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **person_uid** | **string**| uid of person | |
| **create_and_assign_transitional_badge_input** | [**\Exos\ExosApi\Model\CreateAndAssignTransitionalBadgeInput**](../Model/CreateAndAssignTransitionalBadgeInput.md)| Badges | |
| **ignore_blacklist** | **bool**| Ignore blacklist check | [optional] |

### Return type

[**\Exos\ExosApi\Model\CreateAndAssignTransitionalBadgeOutputWithTime**](../Model/CreateAndAssignTransitionalBadgeOutputWithTime.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10PersonsPersonUidAssignAndCreateVisitorBadgePost()`

```php
v10PersonsPersonUidAssignAndCreateVisitorBadgePost($person_uid, $create_and_assign_visitor_badge_input, $ignore_blacklist): \Exos\ExosApi\Model\CreateAndAssignBadgeOutputWithTime
```

assign and create a badge to a person

assign and create the badge to the person.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\PersonApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$person_uid = 'person_uid_example'; // string | uid of person
$create_and_assign_visitor_badge_input = new \Exos\ExosApi\Model\CreateAndAssignVisitorBadgeInput(); // \Exos\ExosApi\Model\CreateAndAssignVisitorBadgeInput | Badge
$ignore_blacklist = True; // bool | Ignore blacklist check

try {
    $result = $apiInstance->v10PersonsPersonUidAssignAndCreateVisitorBadgePost($person_uid, $create_and_assign_visitor_badge_input, $ignore_blacklist);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PersonApi->v10PersonsPersonUidAssignAndCreateVisitorBadgePost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **person_uid** | **string**| uid of person | |
| **create_and_assign_visitor_badge_input** | [**\Exos\ExosApi\Model\CreateAndAssignVisitorBadgeInput**](../Model/CreateAndAssignVisitorBadgeInput.md)| Badge | |
| **ignore_blacklist** | **bool**| Ignore blacklist check | [optional] |

### Return type

[**\Exos\ExosApi\Model\CreateAndAssignBadgeOutputWithTime**](../Model/CreateAndAssignBadgeOutputWithTime.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10PersonsPersonUidUnassignAndDeleteTransitionalBadgePost()`

```php
v10PersonsPersonUidUnassignAndDeleteTransitionalBadgePost($person_uid, $unassign_and_delete_transitional_badge_input, $unassign_transitional_medium_behaviour): \Exos\ExosApi\Model\UnassignTransitionalBadgeOutputWithTime
```

unassigns and delete a transitional media from a person

<p>unassigns and delete a transitional media from a person and unblocks the standard or initial media.</p>

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\PersonApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$person_uid = 'person_uid_example'; // string | uid of person
$unassign_and_delete_transitional_badge_input = new \Exos\ExosApi\Model\UnassignAndDeleteTransitionalBadgeInput(); // \Exos\ExosApi\Model\UnassignAndDeleteTransitionalBadgeInput | Badge
$unassign_transitional_medium_behaviour = 'unassign_transitional_medium_behaviour_example'; // string

try {
    $result = $apiInstance->v10PersonsPersonUidUnassignAndDeleteTransitionalBadgePost($person_uid, $unassign_and_delete_transitional_badge_input, $unassign_transitional_medium_behaviour);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PersonApi->v10PersonsPersonUidUnassignAndDeleteTransitionalBadgePost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **person_uid** | **string**| uid of person | |
| **unassign_and_delete_transitional_badge_input** | [**\Exos\ExosApi\Model\UnassignAndDeleteTransitionalBadgeInput**](../Model/UnassignAndDeleteTransitionalBadgeInput.md)| Badge | |
| **unassign_transitional_medium_behaviour** | **string**|  | [optional] |

### Return type

[**\Exos\ExosApi\Model\UnassignTransitionalBadgeOutputWithTime**](../Model/UnassignTransitionalBadgeOutputWithTime.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10PersonsPersonUidUnassignAndDeleteVisitorBadgePost()`

```php
v10PersonsPersonUidUnassignAndDeleteVisitorBadgePost($person_uid, $unassign_and_delete_visitor_badge_input): \Exos\ExosApi\Model\UnassignBadgeOutputWithTime
```

unassign and delete a badge from a person

<p>Unassign and delete a badge. Can not be executed if there is an active transitional or initialized badge assigned to it.</p>

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\PersonApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$person_uid = 'person_uid_example'; // string | uid of person
$unassign_and_delete_visitor_badge_input = new \Exos\ExosApi\Model\UnassignAndDeleteVisitorBadgeInput(); // \Exos\ExosApi\Model\UnassignAndDeleteVisitorBadgeInput | Badge

try {
    $result = $apiInstance->v10PersonsPersonUidUnassignAndDeleteVisitorBadgePost($person_uid, $unassign_and_delete_visitor_badge_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PersonApi->v10PersonsPersonUidUnassignAndDeleteVisitorBadgePost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **person_uid** | **string**| uid of person | |
| **unassign_and_delete_visitor_badge_input** | [**\Exos\ExosApi\Model\UnassignAndDeleteVisitorBadgeInput**](../Model/UnassignAndDeleteVisitorBadgeInput.md)| Badge | |

### Return type

[**\Exos\ExosApi\Model\UnassignBadgeOutputWithTime**](../Model/UnassignBadgeOutputWithTime.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10PersonsSetMyPinPost()`

```php
v10PersonsSetMyPinPost($body): \Exos\ExosApi\Model\VoidResponseOutput
```

set the PIN for the currently logged in person

Sets your PIN

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\PersonApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$body = 'body_example'; // string

try {
    $result = $apiInstance->v10PersonsSetMyPinPost($body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PersonApi->v10PersonsSetMyPinPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **body** | **string**|  | |

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

## `v10PersonsSettingsEnableMultipleBadgesPost()`

```php
v10PersonsSettingsEnableMultipleBadgesPost($set_bool_parameter_input_with_default_false): \Exos\ExosApi\Model\VoidResponseOutput
```

expression that defines the EnableMultipleBadges parameter

Default false.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\PersonApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$set_bool_parameter_input_with_default_false = new \Exos\ExosApi\Model\SetBoolParameterInputWithDefaultFalse(); // \Exos\ExosApi\Model\SetBoolParameterInputWithDefaultFalse

try {
    $result = $apiInstance->v10PersonsSettingsEnableMultipleBadgesPost($set_bool_parameter_input_with_default_false);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PersonApi->v10PersonsSettingsEnableMultipleBadgesPost: ', $e->getMessage(), PHP_EOL;
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

## `v10PersonsSettingsEnableMultipleProfilesPost()`

```php
v10PersonsSettingsEnableMultipleProfilesPost(): \Exos\ExosApi\Model\VoidResponseOutput
```

enable assigning multiple profiles per access domain or profile collections.

enable assigning multiple profiles per access domain or profile collections.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\PersonApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);

try {
    $result = $apiInstance->v10PersonsSettingsEnableMultipleProfilesPost();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PersonApi->v10PersonsSettingsEnableMultipleProfilesPost: ', $e->getMessage(), PHP_EOL;
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

## `v10PersonsSettingsEnableSecurityLevelPost()`

```php
v10PersonsSettingsEnableSecurityLevelPost($set_bool_parameter_input_with_default_false): \Exos\ExosApi\Model\VoidResponseOutput
```

expression that defines the EnableSecurityLevel parameter

Default false.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\PersonApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$set_bool_parameter_input_with_default_false = new \Exos\ExosApi\Model\SetBoolParameterInputWithDefaultFalse(); // \Exos\ExosApi\Model\SetBoolParameterInputWithDefaultFalse

try {
    $result = $apiInstance->v10PersonsSettingsEnableSecurityLevelPost($set_bool_parameter_input_with_default_false);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PersonApi->v10PersonsSettingsEnableSecurityLevelPost: ', $e->getMessage(), PHP_EOL;
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

## `v10PersonsSettingsFullnameSeparatorPost()`

```php
v10PersonsSettingsFullnameSeparatorPost($set_fullname_separator_input): \Exos\ExosApi\Model\VoidResponseOutput
```

expression that defines the separator for combined name field (FullName)

Default \" \" (space), valid length: 1-10 characters.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\PersonApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$set_fullname_separator_input = new \Exos\ExosApi\Model\SetFullnameSeparatorInput(); // \Exos\ExosApi\Model\SetFullnameSeparatorInput | set parameter value

try {
    $result = $apiInstance->v10PersonsSettingsFullnameSeparatorPost($set_fullname_separator_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PersonApi->v10PersonsSettingsFullnameSeparatorPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **set_fullname_separator_input** | [**\Exos\ExosApi\Model\SetFullnameSeparatorInput**](../Model/SetFullnameSeparatorInput.md)| set parameter value | [optional] |

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

## `v10PersonsSettingsMaximumPincodeLengthPost()`

```php
v10PersonsSettingsMaximumPincodeLengthPost($set_maximum_pincode_length_input): \Exos\ExosApi\Model\VoidResponseOutput
```

expression that defines the maximum pincode length

Default 4, valid length: 1-8.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\PersonApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$set_maximum_pincode_length_input = new \Exos\ExosApi\Model\SetMaximumPincodeLengthInput(); // \Exos\ExosApi\Model\SetMaximumPincodeLengthInput | set parameter value

try {
    $result = $apiInstance->v10PersonsSettingsMaximumPincodeLengthPost($set_maximum_pincode_length_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PersonApi->v10PersonsSettingsMaximumPincodeLengthPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **set_maximum_pincode_length_input** | [**\Exos\ExosApi\Model\SetMaximumPincodeLengthInput**](../Model/SetMaximumPincodeLengthInput.md)| set parameter value | [optional] |

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

## `v10PersonsSettingsMinimumPincodeLengthPost()`

```php
v10PersonsSettingsMinimumPincodeLengthPost($set_minimum_pincode_length_input): \Exos\ExosApi\Model\VoidResponseOutput
```

expression that defines the minimum pincode length

Default 1, valid length: 1-8.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\PersonApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$set_minimum_pincode_length_input = new \Exos\ExosApi\Model\SetMinimumPincodeLengthInput(); // \Exos\ExosApi\Model\SetMinimumPincodeLengthInput | set parameter value

try {
    $result = $apiInstance->v10PersonsSettingsMinimumPincodeLengthPost($set_minimum_pincode_length_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PersonApi->v10PersonsSettingsMinimumPincodeLengthPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **set_minimum_pincode_length_input** | [**\Exos\ExosApi\Model\SetMinimumPincodeLengthInput**](../Model/SetMinimumPincodeLengthInput.md)| set parameter value | [optional] |

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

## `v11PersonsAccessRightsAssignmentIdUpdatePost()`

```php
v11PersonsAccessRightsAssignmentIdUpdatePost($assignment_id, $update_assigned_access_right_input, $ignore_blacklist): \Exos\ExosApi\Model\UpdateAccessRightOutputWithTime
```

updates an access right assignment from a person

updates an access right from a person.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\PersonApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$assignment_id = 'assignment_id_example'; // string | id of the assignment
$update_assigned_access_right_input = new \Exos\ExosApi\Model\UpdateAssignedAccessRightInput(); // \Exos\ExosApi\Model\UpdateAssignedAccessRightInput
$ignore_blacklist = True; // bool | Ignore blacklist check

try {
    $result = $apiInstance->v11PersonsAccessRightsAssignmentIdUpdatePost($assignment_id, $update_assigned_access_right_input, $ignore_blacklist);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PersonApi->v11PersonsAccessRightsAssignmentIdUpdatePost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **assignment_id** | **string**| id of the assignment | |
| **update_assigned_access_right_input** | [**\Exos\ExosApi\Model\UpdateAssignedAccessRightInput**](../Model/UpdateAssignedAccessRightInput.md)|  | |
| **ignore_blacklist** | **bool**| Ignore blacklist check | [optional] |

### Return type

[**\Exos\ExosApi\Model\UpdateAccessRightOutputWithTime**](../Model/UpdateAccessRightOutputWithTime.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v11PersonsCreatePost()`

```php
v11PersonsCreatePost($create_person_input, $ignore_blacklist, $location_id): \Exos\ExosApi\Model\CreatePersonOutputWithTime
```

creates a new person

Creates a person.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\PersonApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$create_person_input = new \Exos\ExosApi\Model\CreatePersonInput(); // \Exos\ExosApi\Model\CreatePersonInput | person to add
$ignore_blacklist = True; // bool | Ignore blacklist check
$location_id = 'location_id_example'; // string | Location id

try {
    $result = $apiInstance->v11PersonsCreatePost($create_person_input, $ignore_blacklist, $location_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PersonApi->v11PersonsCreatePost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **create_person_input** | [**\Exos\ExosApi\Model\CreatePersonInput**](../Model/CreatePersonInput.md)| person to add | |
| **ignore_blacklist** | **bool**| Ignore blacklist check | [optional] |
| **location_id** | **string**| Location id | [optional] |

### Return type

[**\Exos\ExosApi\Model\CreatePersonOutputWithTime**](../Model/CreatePersonOutputWithTime.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v11PersonsPersonIdAssignAccessRightPost()`

```php
v11PersonsPersonIdAssignAccessRightPost($person_id, $assign_access_right_input, $ignore_blacklist): \Exos\ExosApi\Model\AssignAccessRightOutputWithTime
```

assigns a access right to a person

<p>Assigns a access right to a person.</p><p>If a accessright will be assigned to a <b>visitor</b> the <b>visitId</b> is <b>mandatory</b></p><p>Depending on the type of access right you are going to assign you have to provide different parameters.</p><p>If an access right to an single access point is assigned with different access right types the system evaluates the different access right types in the defined order starting with priority 1. So if you assign a Profile which gives you access during the day to a specific door, you can override this by assigning an access grid with a timezone that allows access during the night. Without multiprofile option two access rights to the same end point can not be assigned with undefined or overlapping validation periods.</p><table><thead><tr><th>AccessRightType</th><th>Priority</th><th>Required parameters</td><th>Optional parameters</th><th>Not allowed parameters</th></tr></thead><tbody><tr><td>ProfileSuperCollection</td><td>5</td><td>AccessRightId</td><td>ValidFrom<br>ValidTo<br>Comment</td><td>SecurityLevel<br>TimeZoneId<br>IsOfficeModeEnabled</td></tr><tr><td>ProfileCollection</td><td>4</td><td>AccessRightId</td><td>ValidFrom<br>ValidTo<br>Comment</td><td>SecurityLevel<br>TimeZoneId<br>IsOfficeModeEnabled</td></tr><tr><td>Profile</td><td>3</td><td>AccessRightId</td><td>ValidFrom<br>ValidTo<br>Comment</td><td>SecurityLevel<br>TimeZoneId<br>IsOfficeModeEnabled</td></tr><tr><td>DoorGroup</td><td>2</td><td>AccessRightId<br>TimeZoneId</td><td>ValidFrom<br>ValidTo<br>Comment<br>IsOfficeModeEnabled</td><td>SecurityLevel</td></tr><tr><td>AccessGrid</td><td>1</td><td>AccessRightId<br>TimeZoneId</td><td>ValidFrom<br>ValidTo<br>Comment<br>SecurityLevel(required if configured)<br>IsOfficeModeEnabled</td><td></td></tr><tr><td>AccessGridDepot</td><td>1</td><td>AccessRightId<br>TimeZoneId</td><td>ValidFrom<br>ValidTo<br>Comment<br>SecurityLevel(required if configured)<br>IsOfficeModeEnabled</td><td></td></tr><tr><td>AccessGridParking</td><td>1</td><td>AccessRightId<br>TimeZoneId</td><td>ValidFrom<br>ValidTo<br>Comment<br>SecurityLevel(required if configured)<br>IsOfficeModeEnabled</td><td></td></tr><tr><td>ComponentStandalone</td><td>1</td><td>AccessRightId<br>TimeZoneId</td><td>ValidFrom<br>ValidTo<br>Comment<br>IsOfficeModeEnabled</td><td>SecurityLevel</td></tr></tbody></table>

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\PersonApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$person_id = 'person_id_example'; // string | id of person
$assign_access_right_input = new \Exos\ExosApi\Model\AssignAccessRightInput(); // \Exos\ExosApi\Model\AssignAccessRightInput
$ignore_blacklist = True; // bool | Ignore blacklist check

try {
    $result = $apiInstance->v11PersonsPersonIdAssignAccessRightPost($person_id, $assign_access_right_input, $ignore_blacklist);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PersonApi->v11PersonsPersonIdAssignAccessRightPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **person_id** | **string**| id of person | |
| **assign_access_right_input** | [**\Exos\ExosApi\Model\AssignAccessRightInput**](../Model/AssignAccessRightInput.md)|  | |
| **ignore_blacklist** | **bool**| Ignore blacklist check | [optional] |

### Return type

[**\Exos\ExosApi\Model\AssignAccessRightOutputWithTime**](../Model/AssignAccessRightOutputWithTime.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v11PersonsPersonIdDeletePost()`

```php
v11PersonsPersonIdDeletePost($person_id, $check_only): \Exos\ExosApi\Model\DeletePersonOutputWithTime
```

Deletes an existing person

Deletes an existing person.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\PersonApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$person_id = 'person_id_example'; // string | id of person
$check_only = True; // bool | Does not delete. Returns deletion warnings and errors

try {
    $result = $apiInstance->v11PersonsPersonIdDeletePost($person_id, $check_only);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PersonApi->v11PersonsPersonIdDeletePost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **person_id** | **string**| id of person | |
| **check_only** | **bool**| Does not delete. Returns deletion warnings and errors | [optional] |

### Return type

[**\Exos\ExosApi\Model\DeletePersonOutputWithTime**](../Model/DeletePersonOutputWithTime.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v11PersonsPersonIdUnassignAccessRightAssignmentIdPost()`

```php
v11PersonsPersonIdUnassignAccessRightAssignmentIdPost($person_id, $assignment_id): \Exos\ExosApi\Model\UnassignAccessRightOutputWithTime
```

unassigns an access right from a person

unassigns an access right from a person.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\PersonApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$person_id = 'person_id_example'; // string | id of person
$assignment_id = 'assignment_id_example'; // string | id of access right assignment

try {
    $result = $apiInstance->v11PersonsPersonIdUnassignAccessRightAssignmentIdPost($person_id, $assignment_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PersonApi->v11PersonsPersonIdUnassignAccessRightAssignmentIdPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **person_id** | **string**| id of person | |
| **assignment_id** | **string**| id of access right assignment | |

### Return type

[**\Exos\ExosApi\Model\UnassignAccessRightOutputWithTime**](../Model/UnassignAccessRightOutputWithTime.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v11PersonsPersonIdUnassignAccessRightPost()`

```php
v11PersonsPersonIdUnassignAccessRightPost($person_id, $unassign_access_right_input): \Exos\ExosApi\Model\UnassignAccessRightOutputWithTime
```

unassigns an access right from a person

unassigns an access right from a person.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\PersonApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$person_id = 'person_id_example'; // string | id of person
$unassign_access_right_input = new \Exos\ExosApi\Model\UnassignAccessRightInput(); // \Exos\ExosApi\Model\UnassignAccessRightInput

try {
    $result = $apiInstance->v11PersonsPersonIdUnassignAccessRightPost($person_id, $unassign_access_right_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PersonApi->v11PersonsPersonIdUnassignAccessRightPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **person_id** | **string**| id of person | |
| **unassign_access_right_input** | [**\Exos\ExosApi\Model\UnassignAccessRightInput**](../Model/UnassignAccessRightInput.md)|  | |

### Return type

[**\Exos\ExosApi\Model\UnassignAccessRightOutputWithTime**](../Model/UnassignAccessRightOutputWithTime.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
