# Exos\ExosApi\VisitApi

All URIs are relative to /ExosApi/api, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**v10EssVisitsGet()**](VisitApi.md#v10EssVisitsGet) | **GET** /v1.0/essVisits | get a list of my (ESS-User) visits by odata query options |
| [**v10VisitsCreatePost()**](VisitApi.md#v10VisitsCreatePost) | **POST** /v1.0/visits/create | create a visit |
| [**v10VisitsCsvFormattedGet()**](VisitApi.md#v10VisitsCsvFormattedGet) | **GET** /v1.0/visits/csvFormatted | get the data of visits and associated visitors in csv format with fields separated by semicolon |
| [**v10VisitsGet()**](VisitApi.md#v10VisitsGet) | **GET** /v1.0/visits | get a list of visits by odata query options |
| [**v10VisitsVisitIdAssignQrCodeBadgesToVisitorsPost()**](VisitApi.md#v10VisitsVisitIdAssignQrCodeBadgesToVisitorsPost) | **POST** /v1.0/visits/{visitId}/assignQrCodeBadgesToVisitors | generates qr code for each person and sends the mail |
| [**v10VisitsVisitIdAssignVisitorPersonIdPost()**](VisitApi.md#v10VisitsVisitIdAssignVisitorPersonIdPost) | **POST** /v1.0/visits/{visitId}/assignVisitor/{personId} | assign a visitor to the visit |
| [**v10VisitsVisitIdDeletePost()**](VisitApi.md#v10VisitsVisitIdDeletePost) | **POST** /v1.0/visits/{visitId}/delete | delete a visit |
| [**v10VisitsVisitIdFunctionsSettingGet()**](VisitApi.md#v10VisitsVisitIdFunctionsSettingGet) | **GET** /v1.0/visits/{visitId}/functionsSetting | get functions setting for a visit |
| [**v10VisitsVisitIdSendMailConfirmationPost()**](VisitApi.md#v10VisitsVisitIdSendMailConfirmationPost) | **POST** /v1.0/visits/{visitId}/sendMailConfirmation | send email confirmation |
| [**v10VisitsVisitIdUnassignVisitorPersonIdPost()**](VisitApi.md#v10VisitsVisitIdUnassignVisitorPersonIdPost) | **POST** /v1.0/visits/{visitId}/unassignVisitor/{personId} | unassign a visitor from the visit |
| [**v10VisitsVisitIdUpdatePost()**](VisitApi.md#v10VisitsVisitIdUpdatePost) | **POST** /v1.0/visits/{visitId}/update | update a visit |
| [**v10VisitsVisitIdVisitorsPersonIdCheckInPost()**](VisitApi.md#v10VisitsVisitIdVisitorsPersonIdCheckInPost) | **POST** /v1.0/visits/{visitId}/visitors/{personId}/checkIn | check-in the visitor associated to the visit |
| [**v10VisitsVisitIdVisitorsPersonIdCheckOutPost()**](VisitApi.md#v10VisitsVisitIdVisitorsPersonIdCheckOutPost) | **POST** /v1.0/visits/{visitId}/visitors/{personId}/checkOut | check-out the visitor associated to the visit |
| [**v11VisitsVisitIdAssignQrCodeBadgesToVisitorsPost()**](VisitApi.md#v11VisitsVisitIdAssignQrCodeBadgesToVisitorsPost) | **POST** /v1.1/visits/{visitId}/assignQrCodeBadgesToVisitors | generates qr code for each person and sends the mail |


## `v10EssVisitsGet()`

```php
v10EssVisitsGet($expand, $filter, $search_string, $count, $orderby, $select, $skip, $top): \Exos\ExosApi\Model\GetVisitsOutput
```

get a list of my (ESS-User) visits by odata query options

Be aware that a query made here can return up to 10000 records. If you need more, please use the built in paging functionality with $top and $skip.<br /> http://www.asp.net/web-api/overview/odata-support-in-aspnet-web-api/supporting-odata-query-options. <br /> The provided searchString will result in a fulltext search on all selected fields. If the passed value is encapsulated with quotes(\"), it will be treated as an exact match search, otherwise the passed value will be an OR search over all keywords(splitted by space character).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\VisitApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$expand = 'expand_example'; // string | Visitors
$filter = 'filter_example'; // string | Location eq 'DEFAULT_LOCATION'
$search_string = 'search_string_example'; // string | Fulltext search on all string, int and date fields that are selected with $select.
$count = true; // bool | adds total possible results to the response
$orderby = 'orderby_example'; // string | Location desc
$select = 'select_example'; // string | Location
$skip = 56; // int | skips the first x entries of the response(paging)
$top = 1000; // int | limits the number of returned records.

try {
    $result = $apiInstance->v10EssVisitsGet($expand, $filter, $search_string, $count, $orderby, $select, $skip, $top);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling VisitApi->v10EssVisitsGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **expand** | **string**| Visitors | [optional] |
| **filter** | **string**| Location eq &#39;DEFAULT_LOCATION&#39; | [optional] |
| **search_string** | **string**| Fulltext search on all string, int and date fields that are selected with $select. | [optional] |
| **count** | **bool**| adds total possible results to the response | [optional] [default to true] |
| **orderby** | **string**| Location desc | [optional] |
| **select** | **string**| Location | [optional] |
| **skip** | **int**| skips the first x entries of the response(paging) | [optional] |
| **top** | **int**| limits the number of returned records. | [optional] [default to 1000] |

### Return type

[**\Exos\ExosApi\Model\GetVisitsOutput**](../Model/GetVisitsOutput.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10VisitsCreatePost()`

```php
v10VisitsCreatePost($create_visit_input): \Exos\ExosApi\Model\CreateVisitOutput
```

create a visit

create a visit

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\VisitApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$create_visit_input = new \Exos\ExosApi\Model\CreateVisitInput(); // \Exos\ExosApi\Model\CreateVisitInput | visit to update

try {
    $result = $apiInstance->v10VisitsCreatePost($create_visit_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling VisitApi->v10VisitsCreatePost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **create_visit_input** | [**\Exos\ExosApi\Model\CreateVisitInput**](../Model/CreateVisitInput.md)| visit to update | |

### Return type

[**\Exos\ExosApi\Model\CreateVisitOutput**](../Model/CreateVisitOutput.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10VisitsCsvFormattedGet()`

```php
v10VisitsCsvFormattedGet($is_upcoming, $is_ongoing, $is_past, $visit_start_time_from, $visit_start_time_to, $fields, $location_id): \Exos\ExosApi\Model\GetVisitsCsvFormattedOutput
```

get the data of visits and associated visitors in csv format with fields separated by semicolon

get the data of visits and associated visitors in csv format with fields separated by semicolon

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\VisitApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$is_upcoming = false; // bool | The state of the visit is upcoming. Only one of the three states may be set true
$is_ongoing = false; // bool | The state of the visit is ongoing. Only one of the three states may be set true
$is_past = true; // bool | The state of the visit is past. Only one of the three states may be set true
$visit_start_time_from = new \DateTime('2013-10-20T19:20:30+01:00'); // \DateTime | The minimal start date/time of the visit. E.g. 2017-01-01
$visit_start_time_to = new \DateTime('2013-10-20T19:20:30+01:00'); // \DateTime | The maximal start date/time of the visit. E.g. 2017-01-31
$fields = 'StartTime, EndTime, Location, Info, FullName, Company, HostFirstName, HostLastName'; // string | The list of the fields to return (comma separated list of fieldId from fieldConfiguration. Fields which do not match fieldConfiguration or are not authorized are not applied). Usable fields are e.g. Visits_StartTime, Visits_EndTime, Visitors_FirstName, Visitors_LastName
$location_id = 'location_id_example'; // string | The location Id of the visit

try {
    $result = $apiInstance->v10VisitsCsvFormattedGet($is_upcoming, $is_ongoing, $is_past, $visit_start_time_from, $visit_start_time_to, $fields, $location_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling VisitApi->v10VisitsCsvFormattedGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **is_upcoming** | **bool**| The state of the visit is upcoming. Only one of the three states may be set true | [default to false] |
| **is_ongoing** | **bool**| The state of the visit is ongoing. Only one of the three states may be set true | [default to false] |
| **is_past** | **bool**| The state of the visit is past. Only one of the three states may be set true | [default to true] |
| **visit_start_time_from** | **\DateTime**| The minimal start date/time of the visit. E.g. 2017-01-01 | |
| **visit_start_time_to** | **\DateTime**| The maximal start date/time of the visit. E.g. 2017-01-31 | |
| **fields** | **string**| The list of the fields to return (comma separated list of fieldId from fieldConfiguration. Fields which do not match fieldConfiguration or are not authorized are not applied). Usable fields are e.g. Visits_StartTime, Visits_EndTime, Visitors_FirstName, Visitors_LastName | [default to &#39;StartTime, EndTime, Location, Info, FullName, Company, HostFirstName, HostLastName&#39;] |
| **location_id** | **string**| The location Id of the visit | [optional] |

### Return type

[**\Exos\ExosApi\Model\GetVisitsCsvFormattedOutput**](../Model/GetVisitsCsvFormattedOutput.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10VisitsGet()`

```php
v10VisitsGet($expand, $filter, $search_string, $count, $orderby, $select, $skip, $top): \Exos\ExosApi\Model\GetVisitsOutput
```

get a list of visits by odata query options

Be aware that a query made here can return up to 10000 records. If you need more, please use the built in paging functionality with $top and $skip.<br /> http://www.asp.net/web-api/overview/odata-support-in-aspnet-web-api/supporting-odata-query-options. <br /> The provided searchString will result in a fulltext search on all selected fields. If the passed value is encapsulated with quotes(\"), it will be treated as an exact match search, otherwise the passed value will be an OR search over all keywords(splitted by space character).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\VisitApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$expand = 'expand_example'; // string | Visitors
$filter = 'filter_example'; // string | Location eq 'DEFAULT_LOCATION'
$search_string = 'search_string_example'; // string | Fulltext search on all string, int and date fields that are selected with $select.
$count = true; // bool | adds total possible results to the response
$orderby = 'orderby_example'; // string | Location desc
$select = 'select_example'; // string | Location
$skip = 56; // int | skips the first x entries of the response(paging)
$top = 1000; // int | limits the number of returned records.

try {
    $result = $apiInstance->v10VisitsGet($expand, $filter, $search_string, $count, $orderby, $select, $skip, $top);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling VisitApi->v10VisitsGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **expand** | **string**| Visitors | [optional] |
| **filter** | **string**| Location eq &#39;DEFAULT_LOCATION&#39; | [optional] |
| **search_string** | **string**| Fulltext search on all string, int and date fields that are selected with $select. | [optional] |
| **count** | **bool**| adds total possible results to the response | [optional] [default to true] |
| **orderby** | **string**| Location desc | [optional] |
| **select** | **string**| Location | [optional] |
| **skip** | **int**| skips the first x entries of the response(paging) | [optional] |
| **top** | **int**| limits the number of returned records. | [optional] [default to 1000] |

### Return type

[**\Exos\ExosApi\Model\GetVisitsOutput**](../Model/GetVisitsOutput.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10VisitsVisitIdAssignQrCodeBadgesToVisitorsPost()`

```php
v10VisitsVisitIdAssignQrCodeBadgesToVisitorsPost($visit_id, $assign_qr_code_badge_input): \Exos\ExosApi\Model\AssignQrCodeBadgeOutputOldWithTime
```

generates qr code for each person and sends the mail

generates the QR code for each passed person and send the mail

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\VisitApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$visit_id = 'visit_id_example'; // string | id of visit
$assign_qr_code_badge_input = new \Exos\ExosApi\Model\AssignQrCodeBadgeInput(); // \Exos\ExosApi\Model\AssignQrCodeBadgeInput | visit to update

try {
    $result = $apiInstance->v10VisitsVisitIdAssignQrCodeBadgesToVisitorsPost($visit_id, $assign_qr_code_badge_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling VisitApi->v10VisitsVisitIdAssignQrCodeBadgesToVisitorsPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **visit_id** | **string**| id of visit | |
| **assign_qr_code_badge_input** | [**\Exos\ExosApi\Model\AssignQrCodeBadgeInput**](../Model/AssignQrCodeBadgeInput.md)| visit to update | |

### Return type

[**\Exos\ExosApi\Model\AssignQrCodeBadgeOutputOldWithTime**](../Model/AssignQrCodeBadgeOutputOldWithTime.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10VisitsVisitIdAssignVisitorPersonIdPost()`

```php
v10VisitsVisitIdAssignVisitorPersonIdPost($visit_id, $person_id): \Exos\ExosApi\Model\VoidResponseOutput
```

assign a visitor to the visit

assign a visitor to the visit

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\VisitApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$visit_id = 'visit_id_example'; // string | id of visit
$person_id = 'person_id_example'; // string | id of person

try {
    $result = $apiInstance->v10VisitsVisitIdAssignVisitorPersonIdPost($visit_id, $person_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling VisitApi->v10VisitsVisitIdAssignVisitorPersonIdPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **visit_id** | **string**| id of visit | |
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

## `v10VisitsVisitIdDeletePost()`

```php
v10VisitsVisitIdDeletePost($visit_id): \Exos\ExosApi\Model\VoidResponseOutput
```

delete a visit

delete a visit

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\VisitApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$visit_id = 'visit_id_example'; // string

try {
    $result = $apiInstance->v10VisitsVisitIdDeletePost($visit_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling VisitApi->v10VisitsVisitIdDeletePost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **visit_id** | **string**|  | |

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

## `v10VisitsVisitIdFunctionsSettingGet()`

```php
v10VisitsVisitIdFunctionsSettingGet($visit_id, $setting_key): \Exos\ExosApi\Model\GetFunctionsSettingOutputWithTime
```

get functions setting for a visit

returns functions setting for a visit.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\VisitApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$visit_id = 'visit_id_example'; // string | id of visit
$setting_key = 'setting_key_example'; // string | The key used to find the function ids in the settings

try {
    $result = $apiInstance->v10VisitsVisitIdFunctionsSettingGet($visit_id, $setting_key);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling VisitApi->v10VisitsVisitIdFunctionsSettingGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **visit_id** | **string**| id of visit | |
| **setting_key** | **string**| The key used to find the function ids in the settings | |

### Return type

[**\Exos\ExosApi\Model\GetFunctionsSettingOutputWithTime**](../Model/GetFunctionsSettingOutputWithTime.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10VisitsVisitIdSendMailConfirmationPost()`

```php
v10VisitsVisitIdSendMailConfirmationPost($visit_id): \Exos\ExosApi\Model\ConfirmationMailOutput
```

send email confirmation

send email confirmation

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\VisitApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$visit_id = 'visit_id_example'; // string | id of visit

try {
    $result = $apiInstance->v10VisitsVisitIdSendMailConfirmationPost($visit_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling VisitApi->v10VisitsVisitIdSendMailConfirmationPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **visit_id** | **string**| id of visit | |

### Return type

[**\Exos\ExosApi\Model\ConfirmationMailOutput**](../Model/ConfirmationMailOutput.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10VisitsVisitIdUnassignVisitorPersonIdPost()`

```php
v10VisitsVisitIdUnassignVisitorPersonIdPost($visit_id, $person_id, $unassign_badges): \Exos\ExosApi\Model\UnassignVisitorOutput
```

unassign a visitor from the visit

unassign a visitor from the visit

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\VisitApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$visit_id = 'visit_id_example'; // string | id of visit
$person_id = 'person_id_example'; // string | id of person
$unassign_badges = false; // bool | all badges of visitor should be removed

try {
    $result = $apiInstance->v10VisitsVisitIdUnassignVisitorPersonIdPost($visit_id, $person_id, $unassign_badges);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling VisitApi->v10VisitsVisitIdUnassignVisitorPersonIdPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **visit_id** | **string**| id of visit | |
| **person_id** | **string**| id of person | |
| **unassign_badges** | **bool**| all badges of visitor should be removed | [optional] [default to false] |

### Return type

[**\Exos\ExosApi\Model\UnassignVisitorOutput**](../Model/UnassignVisitorOutput.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10VisitsVisitIdUpdatePost()`

```php
v10VisitsVisitIdUpdatePost($visit_id, $update_visit_input): \Exos\ExosApi\Model\UpdateVisitOutput
```

update a visit

update a visit

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\VisitApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$visit_id = 'visit_id_example'; // string | id of visit
$update_visit_input = new \Exos\ExosApi\Model\UpdateVisitInput(); // \Exos\ExosApi\Model\UpdateVisitInput | visit to update

try {
    $result = $apiInstance->v10VisitsVisitIdUpdatePost($visit_id, $update_visit_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling VisitApi->v10VisitsVisitIdUpdatePost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **visit_id** | **string**| id of visit | |
| **update_visit_input** | [**\Exos\ExosApi\Model\UpdateVisitInput**](../Model/UpdateVisitInput.md)| visit to update | |

### Return type

[**\Exos\ExosApi\Model\UpdateVisitOutput**](../Model/UpdateVisitOutput.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10VisitsVisitIdVisitorsPersonIdCheckInPost()`

```php
v10VisitsVisitIdVisitorsPersonIdCheckInPost($visit_id, $person_id, $ignore_blacklist): \Exos\ExosApi\Model\IsCardlinkUpdateRequiredOutputWithTime
```

check-in the visitor associated to the visit

check-in the visitor associated to the visit

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\VisitApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$visit_id = 'visit_id_example'; // string | id of visit
$person_id = 'person_id_example'; // string | id of person
$ignore_blacklist = True; // bool | Ignore blacklist check

try {
    $result = $apiInstance->v10VisitsVisitIdVisitorsPersonIdCheckInPost($visit_id, $person_id, $ignore_blacklist);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling VisitApi->v10VisitsVisitIdVisitorsPersonIdCheckInPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **visit_id** | **string**| id of visit | |
| **person_id** | **string**| id of person | |
| **ignore_blacklist** | **bool**| Ignore blacklist check | [optional] |

### Return type

[**\Exos\ExosApi\Model\IsCardlinkUpdateRequiredOutputWithTime**](../Model/IsCardlinkUpdateRequiredOutputWithTime.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10VisitsVisitIdVisitorsPersonIdCheckOutPost()`

```php
v10VisitsVisitIdVisitorsPersonIdCheckOutPost($visit_id, $person_id, $unassign_badges, $source_name): \Exos\ExosApi\Model\CheckOutOutput
```

check-out the visitor associated to the visit

check-out the visitor associated to the visit

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\VisitApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$visit_id = 'visit_id_example'; // string | id of visit
$person_id = 'person_id_example'; // string | id of person
$unassign_badges = false; // bool | all badges of visitor should be removed
$source_name = 'source_name_example'; // string | Source Name is device name where check out has happened

try {
    $result = $apiInstance->v10VisitsVisitIdVisitorsPersonIdCheckOutPost($visit_id, $person_id, $unassign_badges, $source_name);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling VisitApi->v10VisitsVisitIdVisitorsPersonIdCheckOutPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **visit_id** | **string**| id of visit | |
| **person_id** | **string**| id of person | |
| **unassign_badges** | **bool**| all badges of visitor should be removed | [optional] [default to false] |
| **source_name** | **string**| Source Name is device name where check out has happened | [optional] |

### Return type

[**\Exos\ExosApi\Model\CheckOutOutput**](../Model/CheckOutOutput.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v11VisitsVisitIdAssignQrCodeBadgesToVisitorsPost()`

```php
v11VisitsVisitIdAssignQrCodeBadgesToVisitorsPost($visit_id, $assign_qr_code_badge_input): \Exos\ExosApi\Model\AssignQrCodeBadgeOutputWithTime
```

generates qr code for each person and sends the mail

generates the QR code for each passed person and send the mail

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\VisitApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$visit_id = 'visit_id_example'; // string | id of visit
$assign_qr_code_badge_input = new \Exos\ExosApi\Model\AssignQrCodeBadgeInput(); // \Exos\ExosApi\Model\AssignQrCodeBadgeInput | visit to update

try {
    $result = $apiInstance->v11VisitsVisitIdAssignQrCodeBadgesToVisitorsPost($visit_id, $assign_qr_code_badge_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling VisitApi->v11VisitsVisitIdAssignQrCodeBadgesToVisitorsPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **visit_id** | **string**| id of visit | |
| **assign_qr_code_badge_input** | [**\Exos\ExosApi\Model\AssignQrCodeBadgeInput**](../Model/AssignQrCodeBadgeInput.md)| visit to update | |

### Return type

[**\Exos\ExosApi\Model\AssignQrCodeBadgeOutputWithTime**](../Model/AssignQrCodeBadgeOutputWithTime.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
