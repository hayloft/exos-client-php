# Exos\ExosApi\AccessRightApi

All URIs are relative to /ExosApi/api, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**v10AccessDomainsGet()**](AccessRightApi.md#v10AccessDomainsGet) | **GET** /v1.0/accessDomains | get a list of access domains (administration areas) |
| [**v10AccessRightAssignmentsGet()**](AccessRightApi.md#v10AccessRightAssignmentsGet) | **GET** /v1.0/accessRightAssignments | get a list of access rights assigned to a specific person in addition to all unassigned access rights |
| [**v10AccessRightsAccessCheckGet()**](AccessRightApi.md#v10AccessRightsAccessCheckGet) | **GET** /v1.0/accessRights/accessCheck | checks if a specific access right is valid at a specific time for a person |
| [**v10AccessRightsAccessRightDetailsAccessRightIdGet()**](AccessRightApi.md#v10AccessRightsAccessRightDetailsAccessRightIdGet) | **GET** /v1.0/accessRights/accessRightDetails/{accessRightId} | get access right details / child access rights |
| [**v10AccessRightsAlarmZoneSwitchesPersonIdGet()**](AccessRightApi.md#v10AccessRightsAlarmZoneSwitchesPersonIdGet) | **GET** /v1.0/accessRights/alarmZoneSwitches/{personId} | get alarm zone switches for accessdomains |
| [**v10AccessRightsAlarmZoneSwitchesPersonIdUpdatePost()**](AccessRightApi.md#v10AccessRightsAlarmZoneSwitchesPersonIdUpdatePost) | **POST** /v1.0/accessRights/alarmZoneSwitches/{personId}/update | set alarm zone switches for a specific accessdomain of a person |
| [**v10AccessRightsGet()**](AccessRightApi.md#v10AccessRightsGet) | **GET** /v1.0/accessRights | get a list of access rights |
| [**v10AccessRightsMinimisedGet()**](AccessRightApi.md#v10AccessRightsMinimisedGet) | **GET** /v1.0/accessRights/minimised | Not officially supported, can change without notice. Get a list of minimised access rights for a given administration area, access right type, and time zone. |


## `v10AccessDomainsGet()`

```php
v10AccessDomainsGet($expand, $filter, $search_string, $count, $orderby, $select, $skip, $top): \Exos\ExosApi\Model\GetAccessDomainsOutputWithTime
```

get a list of access domains (administration areas)

Be aware that a query made here can return up to 10000 records. If you need more, please use the built in paging functionality with $top and $skip. http://www.asp.net/web-api/overview/odata-support-in-aspnet-web-api/supporting-odata-query-options.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\AccessRightApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$expand = 'expand_example'; // string | 
$filter = 'filter_example'; // string | 
$search_string = 'search_string_example'; // string | Fulltext search on all string, int and date fields that are selected with $select and $expand.
$count = true; // bool | adds total possible results to the response
$orderby = 'orderby_example'; // string | 
$select = 'select_example'; // string | 
$skip = 56; // int | skips the first x entries of the response(paging)
$top = 1000; // int | limits the number of returned records.

try {
    $result = $apiInstance->v10AccessDomainsGet($expand, $filter, $search_string, $count, $orderby, $select, $skip, $top);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AccessRightApi->v10AccessDomainsGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **expand** | **string**|  | [optional] |
| **filter** | **string**|  | [optional] |
| **search_string** | **string**| Fulltext search on all string, int and date fields that are selected with $select and $expand. | [optional] |
| **count** | **bool**| adds total possible results to the response | [optional] [default to true] |
| **orderby** | **string**|  | [optional] |
| **select** | **string**|  | [optional] |
| **skip** | **int**| skips the first x entries of the response(paging) | [optional] |
| **top** | **int**| limits the number of returned records. | [optional] [default to 1000] |

### Return type

[**\Exos\ExosApi\Model\GetAccessDomainsOutputWithTime**](../Model/GetAccessDomainsOutputWithTime.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10AccessRightAssignmentsGet()`

```php
v10AccessRightAssignmentsGet($person_id, $expand, $filter, $search_string, $count, $orderby, $select, $skip, $top): \Exos\ExosApi\Model\GetAccessRightAssignemntsOutputWithTime
```

get a list of access rights assigned to a specific person in addition to all unassigned access rights

Be aware that a query made here can return up to 10000 records. If you need more, please use the built in paging functionality with $top and $skip. http://www.asp.net/web-api/overview/odata-support-in-aspnet-web-api/supporting-odata-query-options.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\AccessRightApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$person_id = 'person_id_example'; // string | specific person
$expand = 'expand_example'; // string | 
$filter = 'filter_example'; // string | 
$search_string = 'search_string_example'; // string | Fulltext search on all string, int and date fields that are selected with $select and $expand.
$count = true; // bool | adds total possible results to the response
$orderby = 'orderby_example'; // string | 
$select = 'select_example'; // string | 
$skip = 56; // int | skips the first x entries of the response(paging)
$top = 1000; // int | limits the number of returned records.

try {
    $result = $apiInstance->v10AccessRightAssignmentsGet($person_id, $expand, $filter, $search_string, $count, $orderby, $select, $skip, $top);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AccessRightApi->v10AccessRightAssignmentsGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **person_id** | **string**| specific person | [optional] |
| **expand** | **string**|  | [optional] |
| **filter** | **string**|  | [optional] |
| **search_string** | **string**| Fulltext search on all string, int and date fields that are selected with $select and $expand. | [optional] |
| **count** | **bool**| adds total possible results to the response | [optional] [default to true] |
| **orderby** | **string**|  | [optional] |
| **select** | **string**|  | [optional] |
| **skip** | **int**| skips the first x entries of the response(paging) | [optional] |
| **top** | **int**| limits the number of returned records. | [optional] [default to 1000] |

### Return type

[**\Exos\ExosApi\Model\GetAccessRightAssignemntsOutputWithTime**](../Model/GetAccessRightAssignemntsOutputWithTime.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10AccessRightsAccessCheckGet()`

```php
v10AccessRightsAccessCheckGet($person_id, $access_right_id, $date_time_to_check_access, $include_access_decision_tree): \Exos\ExosApi\Model\AccessCheckOutputWithTime
```

checks if a specific access right is valid at a specific time for a person

Checks if a specific access right is valid at a specific time for a person. Returns access decision information and a reason why access was denied. You must be able to see the person and the access right to perform a check.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\AccessRightApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$person_id = 'person_id_example'; // string | 
$access_right_id = 'access_right_id_example'; // string | 
$date_time_to_check_access = new \DateTime('2013-10-20T19:20:30+01:00'); // \DateTime | takes current time if empty
$include_access_decision_tree = True; // bool | 

try {
    $result = $apiInstance->v10AccessRightsAccessCheckGet($person_id, $access_right_id, $date_time_to_check_access, $include_access_decision_tree);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AccessRightApi->v10AccessRightsAccessCheckGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **person_id** | **string**|  | [optional] |
| **access_right_id** | **string**|  | [optional] |
| **date_time_to_check_access** | **\DateTime**| takes current time if empty | [optional] |
| **include_access_decision_tree** | **bool**|  | [optional] |

### Return type

[**\Exos\ExosApi\Model\AccessCheckOutputWithTime**](../Model/AccessCheckOutputWithTime.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10AccessRightsAccessRightDetailsAccessRightIdGet()`

```php
v10AccessRightsAccessRightDetailsAccessRightIdGet($access_right_id): \Exos\ExosApi\Model\GetAccessRightDetailsOutput
```

get access right details / child access rights

get access right details / child access rights.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\AccessRightApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$access_right_id = 'access_right_id_example'; // string | id of accessright

try {
    $result = $apiInstance->v10AccessRightsAccessRightDetailsAccessRightIdGet($access_right_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AccessRightApi->v10AccessRightsAccessRightDetailsAccessRightIdGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **access_right_id** | **string**| id of accessright | |

### Return type

[**\Exos\ExosApi\Model\GetAccessRightDetailsOutput**](../Model/GetAccessRightDetailsOutput.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10AccessRightsAlarmZoneSwitchesPersonIdGet()`

```php
v10AccessRightsAlarmZoneSwitchesPersonIdGet($person_id): \Exos\ExosApi\Model\GetAlarmZoneSwitchOutput
```

get alarm zone switches for accessdomains

<p>get alarm zone switches for accessdomains (at least one registration unit in accessdomain must be activated for alarmzones), which the person has accessright.</p>

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\AccessRightApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$person_id = 'person_id_example'; // string | id of person

try {
    $result = $apiInstance->v10AccessRightsAlarmZoneSwitchesPersonIdGet($person_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AccessRightApi->v10AccessRightsAlarmZoneSwitchesPersonIdGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **person_id** | **string**| id of person | |

### Return type

[**\Exos\ExosApi\Model\GetAlarmZoneSwitchOutput**](../Model/GetAlarmZoneSwitchOutput.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10AccessRightsAlarmZoneSwitchesPersonIdUpdatePost()`

```php
v10AccessRightsAlarmZoneSwitchesPersonIdUpdatePost($person_id, $set_alarm_zone_switch_input, $ignore_blacklist): \Exos\ExosApi\Model\VoidResponseOutput
```

set alarm zone switches for a specific accessdomain of a person

set alarm zone switches for a specific accessdomain of a person.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\AccessRightApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$person_id = 'person_id_example'; // string | id of person
$set_alarm_zone_switch_input = new \Exos\ExosApi\Model\SetAlarmZoneSwitchInput(); // \Exos\ExosApi\Model\SetAlarmZoneSwitchInput
$ignore_blacklist = True; // bool | Ignore blacklist check

try {
    $result = $apiInstance->v10AccessRightsAlarmZoneSwitchesPersonIdUpdatePost($person_id, $set_alarm_zone_switch_input, $ignore_blacklist);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AccessRightApi->v10AccessRightsAlarmZoneSwitchesPersonIdUpdatePost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **person_id** | **string**| id of person | |
| **set_alarm_zone_switch_input** | [**\Exos\ExosApi\Model\SetAlarmZoneSwitchInput**](../Model/SetAlarmZoneSwitchInput.md)|  | |
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

## `v10AccessRightsGet()`

```php
v10AccessRightsGet($expand, $filter, $search_string, $count, $orderby, $select, $skip, $top): \Exos\ExosApi\Model\GetAccessRightsOutputWithTime
```

get a list of access rights

Be aware that a query made here can return up to 10000 records. If you need more, please use the built in paging functionality with $top and $skip. http://www.asp.net/web-api/overview/odata-support-in-aspnet-web-api/supporting-odata-query-options.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\AccessRightApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$expand = 'expand_example'; // string | 
$filter = 'filter_example'; // string | 
$search_string = 'search_string_example'; // string | Fulltext search on all string, int and date fields that are selected with $select and $expand.
$count = true; // bool | adds total possible results to the response
$orderby = 'orderby_example'; // string | 
$select = 'select_example'; // string | 
$skip = 56; // int | skips the first x entries of the response(paging)
$top = 1000; // int | limits the number of returned records.

try {
    $result = $apiInstance->v10AccessRightsGet($expand, $filter, $search_string, $count, $orderby, $select, $skip, $top);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AccessRightApi->v10AccessRightsGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **expand** | **string**|  | [optional] |
| **filter** | **string**|  | [optional] |
| **search_string** | **string**| Fulltext search on all string, int and date fields that are selected with $select and $expand. | [optional] |
| **count** | **bool**| adds total possible results to the response | [optional] [default to true] |
| **orderby** | **string**|  | [optional] |
| **select** | **string**|  | [optional] |
| **skip** | **int**| skips the first x entries of the response(paging) | [optional] |
| **top** | **int**| limits the number of returned records. | [optional] [default to 1000] |

### Return type

[**\Exos\ExosApi\Model\GetAccessRightsOutputWithTime**](../Model/GetAccessRightsOutputWithTime.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10AccessRightsMinimisedGet()`

```php
v10AccessRightsMinimisedGet($access_domain_id, $access_right_type, $person_type, $time_zone_id, $top, $skip): \Exos\ExosApi\Model\GetAccessRightsMinimised
```

Not officially supported, can change without notice. Get a list of minimised access rights for a given administration area, access right type, and time zone.



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\AccessRightApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$access_domain_id = 'access_domain_id_example'; // string | The id of the administration area.
$access_right_type = new \Exos\ExosApi\Model\\Exos\ExosApi\Model\AccessRightType(); // \Exos\ExosApi\Model\AccessRightType | The access right type. Only AllAccessGridTypes, DoorGroup, ComponentStandalone are supported.
$person_type = new \Exos\ExosApi\Model\\Exos\ExosApi\Model\AccessRightPersonType(); // \Exos\ExosApi\Model\AccessRightPersonType | The person type.
$time_zone_id = 'time_zone_id_example'; // string | The id of the time zone.
$top = 3.4; // float | Limits the number of returned entries to x.
$skip = 0; // float | Skips the first x entries (pagination).

try {
    $result = $apiInstance->v10AccessRightsMinimisedGet($access_domain_id, $access_right_type, $person_type, $time_zone_id, $top, $skip);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AccessRightApi->v10AccessRightsMinimisedGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **access_domain_id** | **string**| The id of the administration area. | [optional] |
| **access_right_type** | [**\Exos\ExosApi\Model\AccessRightType**](../Model/.md)| The access right type. Only AllAccessGridTypes, DoorGroup, ComponentStandalone are supported. | [optional] |
| **person_type** | [**\Exos\ExosApi\Model\AccessRightPersonType**](../Model/.md)| The person type. | [optional] |
| **time_zone_id** | **string**| The id of the time zone. | [optional] |
| **top** | **float**| Limits the number of returned entries to x. | [optional] |
| **skip** | **float**| Skips the first x entries (pagination). | [optional] [default to 0] |

### Return type

[**\Exos\ExosApi\Model\GetAccessRightsMinimised**](../Model/GetAccessRightsMinimised.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
