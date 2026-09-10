# Exos\ExosApi\ReportApi

All URIs are relative to /ExosApi/api, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**v10ReportsAcGlobalCalendarReportPost()**](ReportApi.md#v10ReportsAcGlobalCalendarReportPost) | **POST** /v1.0/reports/acGlobalCalendarReport | AC Global Calendar Report |
| [**v10ReportsAccessCustomPost()**](ReportApi.md#v10ReportsAccessCustomPost) | **POST** /v1.0/reports/accessCustom | Access custom report |
| [**v10ReportsApplicationViewNameGetAvailableGet()**](ReportApi.md#v10ReportsApplicationViewNameGetAvailableGet) | **GET** /v1.0/reports/{applicationViewName}/getAvailable | List report(s) |
| [**v10ReportsBadgeCustomPost()**](ReportApi.md#v10ReportsBadgeCustomPost) | **POST** /v1.0/reports/badgeCustom | Badge custom report |
| [**v10ReportsBlocklistorderdoorPost()**](ReportApi.md#v10ReportsBlocklistorderdoorPost) | **POST** /v1.0/reports/blocklistorderdoor | Blocklist order door report |
| [**v10ReportsControlProfileUsagePost()**](ReportApi.md#v10ReportsControlProfileUsagePost) | **POST** /v1.0/reports/controlProfileUsage | Control Profile Usage Report |
| [**v10ReportsControlProfilesPost()**](ReportApi.md#v10ReportsControlProfilesPost) | **POST** /v1.0/reports/controlProfiles | Control Profiles Report |
| [**v10ReportsDepotsPost()**](ReportApi.md#v10ReportsDepotsPost) | **POST** /v1.0/reports/depots | Depots Report |
| [**v10ReportsDownTimePeriPost()**](ReportApi.md#v10ReportsDownTimePeriPost) | **POST** /v1.0/reports/downTimePeri | Down Time Peri Report |
| [**v10ReportsPersonInRoomPost()**](ReportApi.md#v10ReportsPersonInRoomPost) | **POST** /v1.0/reports/personInRoom | Person In Room Report |
| [**v10ReportsPersonProfilesPost()**](ReportApi.md#v10ReportsPersonProfilesPost) | **POST** /v1.0/reports/personProfiles | Person Profiles Report |
| [**v10ReportsReportRdlFileNameLanguagesGet()**](ReportApi.md#v10ReportsReportRdlFileNameLanguagesGet) | **GET** /v1.0/reports/{reportRdlFileName}/languages | Report language(s) |
| [**v10ReportsRollCallPost()**](ReportApi.md#v10ReportsRollCallPost) | **POST** /v1.0/reports/rollCall | Roll Call Report |
| [**v10ReportsSecurityCheckPost()**](ReportApi.md#v10ReportsSecurityCheckPost) | **POST** /v1.0/reports/securityCheck | Security Check Report |
| [**v10ReportsStandaloneComponentsPost()**](ReportApi.md#v10ReportsStandaloneComponentsPost) | **POST** /v1.0/reports/standaloneComponents | Standalone Components Report |
| [**v10ReportsVisitConfirmationPost()**](ReportApi.md#v10ReportsVisitConfirmationPost) | **POST** /v1.0/reports/visitConfirmation | Visit Confirmation Report |
| [**v10ReportsVisitPassPost()**](ReportApi.md#v10ReportsVisitPassPost) | **POST** /v1.0/reports/visitPass | Visit Pass Report |
| [**v10ReportsVisitorGdprDataPost()**](ReportApi.md#v10ReportsVisitorGdprDataPost) | **POST** /v1.0/reports/visitorGdprData | Visitor GDPR Report |
| [**v10ReportsVisitorPassPost()**](ReportApi.md#v10ReportsVisitorPassPost) | **POST** /v1.0/reports/visitorPass | Visitor Pass Report |
| [**v10ReportsVisitorPassesPost()**](ReportApi.md#v10ReportsVisitorPassesPost) | **POST** /v1.0/reports/visitorPasses | Visitor Passes Report |
| [**v11ReportsAcCalendarReportPost()**](ReportApi.md#v11ReportsAcCalendarReportPost) | **POST** /v1.1/reports/acCalendarReport | AC Calendar Report |
| [**v11ReportsAcDoorgroupReportPost()**](ReportApi.md#v11ReportsAcDoorgroupReportPost) | **POST** /v1.1/reports/acDoorgroupReport | AC Door Group Report |
| [**v11ReportsAcGlobalRoomReportPost()**](ReportApi.md#v11ReportsAcGlobalRoomReportPost) | **POST** /v1.1/reports/acGlobalRoomReport | AC Global Room Report |
| [**v11ReportsAcPassagewayCodeReportPost()**](ReportApi.md#v11ReportsAcPassagewayCodeReportPost) | **POST** /v1.1/reports/acPassagewayCodeReport | AC Passage Way Code Report |
| [**v11ReportsAcProfileReportPost()**](ReportApi.md#v11ReportsAcProfileReportPost) | **POST** /v1.1/reports/acProfileReport | AC Profile Report |
| [**v11ReportsAcRoomReportPost()**](ReportApi.md#v11ReportsAcRoomReportPost) | **POST** /v1.1/reports/acRoomReport | AC Room Report |
| [**v11ReportsAcRoomzoneReportPost()**](ReportApi.md#v11ReportsAcRoomzoneReportPost) | **POST** /v1.1/reports/acRoomzoneReport | AC Room Zone Report |
| [**v11ReportsAcTimezoneReportPost()**](ReportApi.md#v11ReportsAcTimezoneReportPost) | **POST** /v1.1/reports/acTimezoneReport | AC Time Zone Report |
| [**v11ReportsAcValidationTimeReportPost()**](ReportApi.md#v11ReportsAcValidationTimeReportPost) | **POST** /v1.1/reports/acValidationTimeReport | AC Validation Time Report |
| [**v11ReportsMediaHandOutCardPost()**](ReportApi.md#v11ReportsMediaHandOutCardPost) | **POST** /v1.1/reports/mediaHandOutCard | Media Hand Out Card Report |
| [**v11ReportsMediaHandOutKeyPost()**](ReportApi.md#v11ReportsMediaHandOutKeyPost) | **POST** /v1.1/reports/mediaHandOutKey | Media Hand Out Key Report |
| [**v11ReportsMediaLossCardPost()**](ReportApi.md#v11ReportsMediaLossCardPost) | **POST** /v1.1/reports/mediaLossCard | Media Loss Card Report |
| [**v11ReportsMediaLossKeyPost()**](ReportApi.md#v11ReportsMediaLossKeyPost) | **POST** /v1.1/reports/mediaLossKey | Media Loss Key Report |
| [**v11ReportsMediaOverviewPost()**](ReportApi.md#v11ReportsMediaOverviewPost) | **POST** /v1.1/reports/mediaOverview | Media Overview Report |
| [**v11ReportsMediaReturnCardPost()**](ReportApi.md#v11ReportsMediaReturnCardPost) | **POST** /v1.1/reports/mediaReturnCard | Media Return Card Report |
| [**v11ReportsMediaReturnKeyPost()**](ReportApi.md#v11ReportsMediaReturnKeyPost) | **POST** /v1.1/reports/mediaReturnKey | Media Return Key Report |
| [**v11ReportsPersAccessReportPost()**](ReportApi.md#v11ReportsPersAccessReportPost) | **POST** /v1.1/reports/persAccessReport | Pers Access Report |


## `v10ReportsAcGlobalCalendarReportPost()`

```php
v10ReportsAcGlobalCalendarReportPost($ac_global_calendar_report_input): \SplFileObject
```

AC Global Calendar Report

Returns the AC Global Calendar report.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\ReportApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$ac_global_calendar_report_input = new \Exos\ExosApi\Model\AcGlobalCalendarReportInput(); // \Exos\ExosApi\Model\AcGlobalCalendarReportInput | Report Details Input

try {
    $result = $apiInstance->v10ReportsAcGlobalCalendarReportPost($ac_global_calendar_report_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ReportApi->v10ReportsAcGlobalCalendarReportPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **ac_global_calendar_report_input** | [**\Exos\ExosApi\Model\AcGlobalCalendarReportInput**](../Model/AcGlobalCalendarReportInput.md)| Report Details Input | |

### Return type

**\SplFileObject**

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/octet-stream`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10ReportsAccessCustomPost()`

```php
v10ReportsAccessCustomPost($custom_report_input): \SplFileObject
```

Access custom report

Returns a defined access report

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\ReportApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$custom_report_input = new \Exos\ExosApi\Model\CustomReportInput(); // \Exos\ExosApi\Model\CustomReportInput | Report Details Input.

try {
    $result = $apiInstance->v10ReportsAccessCustomPost($custom_report_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ReportApi->v10ReportsAccessCustomPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **custom_report_input** | [**\Exos\ExosApi\Model\CustomReportInput**](../Model/CustomReportInput.md)| Report Details Input. | |

### Return type

**\SplFileObject**

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/octet-stream`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10ReportsApplicationViewNameGetAvailableGet()`

```php
v10ReportsApplicationViewNameGetAvailableGet($application_view_name, $location, $work_station): \Exos\ExosApi\Model\GetReportsList
```

List report(s)

Will list all available reports belonging to application view name.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\ReportApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$application_view_name = 'application_view_name_example'; // string | 
$location = 'location_example'; // string | Location
$work_station = 'work_station_example'; // string | Workstation

try {
    $result = $apiInstance->v10ReportsApplicationViewNameGetAvailableGet($application_view_name, $location, $work_station);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ReportApi->v10ReportsApplicationViewNameGetAvailableGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **application_view_name** | **string**|  | |
| **location** | **string**| Location | [optional] |
| **work_station** | **string**| Workstation | [optional] |

### Return type

[**\Exos\ExosApi\Model\GetReportsList**](../Model/GetReportsList.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10ReportsBadgeCustomPost()`

```php
v10ReportsBadgeCustomPost($custom_report_input): \SplFileObject
```

Badge custom report

Returns a defined badge report

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\ReportApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$custom_report_input = new \Exos\ExosApi\Model\CustomReportInput(); // \Exos\ExosApi\Model\CustomReportInput | Report Details Input.

try {
    $result = $apiInstance->v10ReportsBadgeCustomPost($custom_report_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ReportApi->v10ReportsBadgeCustomPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **custom_report_input** | [**\Exos\ExosApi\Model\CustomReportInput**](../Model/CustomReportInput.md)| Report Details Input. | |

### Return type

**\SplFileObject**

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/octet-stream`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10ReportsBlocklistorderdoorPost()`

```php
v10ReportsBlocklistorderdoorPost($blocklist_order_door_input): \SplFileObject
```

Blocklist order door report

Returns blocklist order door report.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\ReportApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$blocklist_order_door_input = new \Exos\ExosApi\Model\BlocklistOrderDoorInput(); // \Exos\ExosApi\Model\BlocklistOrderDoorInput | Report Details Input

try {
    $result = $apiInstance->v10ReportsBlocklistorderdoorPost($blocklist_order_door_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ReportApi->v10ReportsBlocklistorderdoorPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **blocklist_order_door_input** | [**\Exos\ExosApi\Model\BlocklistOrderDoorInput**](../Model/BlocklistOrderDoorInput.md)| Report Details Input | |

### Return type

**\SplFileObject**

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/octet-stream`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10ReportsControlProfileUsagePost()`

```php
v10ReportsControlProfileUsagePost($control_profile_usage_input): \SplFileObject
```

Control Profile Usage Report

Returns a report with the usages of a specific Control Profile.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\ReportApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$control_profile_usage_input = new \Exos\ExosApi\Model\ControlProfileUsageInput(); // \Exos\ExosApi\Model\ControlProfileUsageInput | Report Details Input.

try {
    $result = $apiInstance->v10ReportsControlProfileUsagePost($control_profile_usage_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ReportApi->v10ReportsControlProfileUsagePost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **control_profile_usage_input** | [**\Exos\ExosApi\Model\ControlProfileUsageInput**](../Model/ControlProfileUsageInput.md)| Report Details Input. | |

### Return type

**\SplFileObject**

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/octet-stream`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10ReportsControlProfilesPost()`

```php
v10ReportsControlProfilesPost($control_profile_input): \SplFileObject
```

Control Profiles Report

Returns the Control Profiles report.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\ReportApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$control_profile_input = new \Exos\ExosApi\Model\ControlProfileInput(); // \Exos\ExosApi\Model\ControlProfileInput | Report Details Input.

try {
    $result = $apiInstance->v10ReportsControlProfilesPost($control_profile_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ReportApi->v10ReportsControlProfilesPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **control_profile_input** | [**\Exos\ExosApi\Model\ControlProfileInput**](../Model/ControlProfileInput.md)| Report Details Input. | |

### Return type

**\SplFileObject**

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/octet-stream`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10ReportsDepotsPost()`

```php
v10ReportsDepotsPost($depots_input): \SplFileObject
```

Depots Report

Returns the Depots Report.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\ReportApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$depots_input = new \Exos\ExosApi\Model\DepotsInput(); // \Exos\ExosApi\Model\DepotsInput | Report Details Input

try {
    $result = $apiInstance->v10ReportsDepotsPost($depots_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ReportApi->v10ReportsDepotsPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **depots_input** | [**\Exos\ExosApi\Model\DepotsInput**](../Model/DepotsInput.md)| Report Details Input | |

### Return type

**\SplFileObject**

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/octet-stream`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10ReportsDownTimePeriPost()`

```php
v10ReportsDownTimePeriPost($down_time_peri_input): \SplFileObject
```

Down Time Peri Report

Returns the Down Time Peri Report.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\ReportApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$down_time_peri_input = new \Exos\ExosApi\Model\DownTimePeriInput(); // \Exos\ExosApi\Model\DownTimePeriInput | Report Details Input

try {
    $result = $apiInstance->v10ReportsDownTimePeriPost($down_time_peri_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ReportApi->v10ReportsDownTimePeriPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **down_time_peri_input** | [**\Exos\ExosApi\Model\DownTimePeriInput**](../Model/DownTimePeriInput.md)| Report Details Input | |

### Return type

**\SplFileObject**

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/octet-stream`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10ReportsPersonInRoomPost()`

```php
v10ReportsPersonInRoomPost($person_in_room_input): \SplFileObject
```

Person In Room Report

Returns the Person In Room report.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\ReportApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$person_in_room_input = new \Exos\ExosApi\Model\PersonInRoomInput(); // \Exos\ExosApi\Model\PersonInRoomInput | Report Details Input

try {
    $result = $apiInstance->v10ReportsPersonInRoomPost($person_in_room_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ReportApi->v10ReportsPersonInRoomPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **person_in_room_input** | [**\Exos\ExosApi\Model\PersonInRoomInput**](../Model/PersonInRoomInput.md)| Report Details Input | |

### Return type

**\SplFileObject**

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/octet-stream`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10ReportsPersonProfilesPost()`

```php
v10ReportsPersonProfilesPost($person_profiles_input): \SplFileObject
```

Person Profiles Report

Returns the Person Profiles report.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\ReportApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$person_profiles_input = new \Exos\ExosApi\Model\PersonProfilesInput(); // \Exos\ExosApi\Model\PersonProfilesInput | Report Details Input

try {
    $result = $apiInstance->v10ReportsPersonProfilesPost($person_profiles_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ReportApi->v10ReportsPersonProfilesPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **person_profiles_input** | [**\Exos\ExosApi\Model\PersonProfilesInput**](../Model/PersonProfilesInput.md)| Report Details Input | |

### Return type

**\SplFileObject**

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/octet-stream`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10ReportsReportRdlFileNameLanguagesGet()`

```php
v10ReportsReportRdlFileNameLanguagesGet($report_rdl_file_name): \Exos\ExosApi\Model\GetReportLanguage
```

Report language(s)

Lists all languages the report has available.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\ReportApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$report_rdl_file_name = Depots.rdl; // string | Example: Depots.rdl

try {
    $result = $apiInstance->v10ReportsReportRdlFileNameLanguagesGet($report_rdl_file_name);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ReportApi->v10ReportsReportRdlFileNameLanguagesGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **report_rdl_file_name** | **string**| Example: Depots.rdl | |

### Return type

[**\Exos\ExosApi\Model\GetReportLanguage**](../Model/GetReportLanguage.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10ReportsRollCallPost()`

```php
v10ReportsRollCallPost($roll_call_input): \SplFileObject
```

Roll Call Report

Returns the Roll Call report.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\ReportApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$roll_call_input = new \Exos\ExosApi\Model\RollCallInput(); // \Exos\ExosApi\Model\RollCallInput | Report Details Input

try {
    $result = $apiInstance->v10ReportsRollCallPost($roll_call_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ReportApi->v10ReportsRollCallPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **roll_call_input** | [**\Exos\ExosApi\Model\RollCallInput**](../Model/RollCallInput.md)| Report Details Input | |

### Return type

**\SplFileObject**

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/octet-stream`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10ReportsSecurityCheckPost()`

```php
v10ReportsSecurityCheckPost($security_check_input): \SplFileObject
```

Security Check Report

Returns the Security Check report.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\ReportApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$security_check_input = new \Exos\ExosApi\Model\SecurityCheckInput(); // \Exos\ExosApi\Model\SecurityCheckInput | Report Details Input

try {
    $result = $apiInstance->v10ReportsSecurityCheckPost($security_check_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ReportApi->v10ReportsSecurityCheckPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **security_check_input** | [**\Exos\ExosApi\Model\SecurityCheckInput**](../Model/SecurityCheckInput.md)| Report Details Input | |

### Return type

**\SplFileObject**

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/octet-stream`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10ReportsStandaloneComponentsPost()`

```php
v10ReportsStandaloneComponentsPost($standalone_components_data_input): \SplFileObject
```

Standalone Components Report

Returns a report with the standalone components loaded to the programmer

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\ReportApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$standalone_components_data_input = new \Exos\ExosApi\Model\StandaloneComponentsDataInput(); // \Exos\ExosApi\Model\StandaloneComponentsDataInput | Report Details Input.

try {
    $result = $apiInstance->v10ReportsStandaloneComponentsPost($standalone_components_data_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ReportApi->v10ReportsStandaloneComponentsPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **standalone_components_data_input** | [**\Exos\ExosApi\Model\StandaloneComponentsDataInput**](../Model/StandaloneComponentsDataInput.md)| Report Details Input. | |

### Return type

**\SplFileObject**

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/octet-stream`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10ReportsVisitConfirmationPost()`

```php
v10ReportsVisitConfirmationPost($visit_confirmation_input): \SplFileObject
```

Visit Confirmation Report

Returns the Visit Confirmation report.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\ReportApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$visit_confirmation_input = new \Exos\ExosApi\Model\VisitConfirmationInput(); // \Exos\ExosApi\Model\VisitConfirmationInput | Report Details Input

try {
    $result = $apiInstance->v10ReportsVisitConfirmationPost($visit_confirmation_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ReportApi->v10ReportsVisitConfirmationPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **visit_confirmation_input** | [**\Exos\ExosApi\Model\VisitConfirmationInput**](../Model/VisitConfirmationInput.md)| Report Details Input | |

### Return type

**\SplFileObject**

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/octet-stream`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10ReportsVisitPassPost()`

```php
v10ReportsVisitPassPost($visit_pass_input): \SplFileObject
```

Visit Pass Report

Returns the Visit Pass report.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\ReportApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$visit_pass_input = new \Exos\ExosApi\Model\VisitPassInput(); // \Exos\ExosApi\Model\VisitPassInput | Report Details Input

try {
    $result = $apiInstance->v10ReportsVisitPassPost($visit_pass_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ReportApi->v10ReportsVisitPassPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **visit_pass_input** | [**\Exos\ExosApi\Model\VisitPassInput**](../Model/VisitPassInput.md)| Report Details Input | |

### Return type

**\SplFileObject**

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/octet-stream`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10ReportsVisitorGdprDataPost()`

```php
v10ReportsVisitorGdprDataPost($visitor_gdpr_data_input): \SplFileObject
```

Visitor GDPR Report

Returns a report with the visitor GDPR data

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\ReportApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$visitor_gdpr_data_input = new \Exos\ExosApi\Model\VisitorGdprDataInput(); // \Exos\ExosApi\Model\VisitorGdprDataInput | Report Details Input.

try {
    $result = $apiInstance->v10ReportsVisitorGdprDataPost($visitor_gdpr_data_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ReportApi->v10ReportsVisitorGdprDataPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **visitor_gdpr_data_input** | [**\Exos\ExosApi\Model\VisitorGdprDataInput**](../Model/VisitorGdprDataInput.md)| Report Details Input. | |

### Return type

**\SplFileObject**

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/octet-stream`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10ReportsVisitorPassPost()`

```php
v10ReportsVisitorPassPost($visitor_pass_input): \SplFileObject
```

Visitor Pass Report

Returns the Visitor Pass report.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\ReportApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$visitor_pass_input = new \Exos\ExosApi\Model\VisitorPassInput(); // \Exos\ExosApi\Model\VisitorPassInput | Report Details Input.

try {
    $result = $apiInstance->v10ReportsVisitorPassPost($visitor_pass_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ReportApi->v10ReportsVisitorPassPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **visitor_pass_input** | [**\Exos\ExosApi\Model\VisitorPassInput**](../Model/VisitorPassInput.md)| Report Details Input. | |

### Return type

**\SplFileObject**

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/octet-stream`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10ReportsVisitorPassesPost()`

```php
v10ReportsVisitorPassesPost($visitor_passes_input): \SplFileObject
```

Visitor Passes Report

Returns the Visitor Passes report.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\ReportApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$visitor_passes_input = new \Exos\ExosApi\Model\VisitorPassesInput(); // \Exos\ExosApi\Model\VisitorPassesInput | Report Details Input. Visitor Id is required only when generate a Visitor Pass for a specific visitor.

try {
    $result = $apiInstance->v10ReportsVisitorPassesPost($visitor_passes_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ReportApi->v10ReportsVisitorPassesPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **visitor_passes_input** | [**\Exos\ExosApi\Model\VisitorPassesInput**](../Model/VisitorPassesInput.md)| Report Details Input. Visitor Id is required only when generate a Visitor Pass for a specific visitor. | |

### Return type

**\SplFileObject**

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/octet-stream`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v11ReportsAcCalendarReportPost()`

```php
v11ReportsAcCalendarReportPost($ac_calendar_report_input): \SplFileObject
```

AC Calendar Report

Returns the AC Calendar report.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\ReportApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$ac_calendar_report_input = new \Exos\ExosApi\Model\AcCalendarReportInput(); // \Exos\ExosApi\Model\AcCalendarReportInput | Report Details Input

try {
    $result = $apiInstance->v11ReportsAcCalendarReportPost($ac_calendar_report_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ReportApi->v11ReportsAcCalendarReportPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **ac_calendar_report_input** | [**\Exos\ExosApi\Model\AcCalendarReportInput**](../Model/AcCalendarReportInput.md)| Report Details Input | |

### Return type

**\SplFileObject**

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/octet-stream`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v11ReportsAcDoorgroupReportPost()`

```php
v11ReportsAcDoorgroupReportPost($ac_doorgroup_report_input): \SplFileObject
```

AC Door Group Report

Returns the AC Door Group report.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\ReportApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$ac_doorgroup_report_input = new \Exos\ExosApi\Model\AcDoorgroupReportInput(); // \Exos\ExosApi\Model\AcDoorgroupReportInput | Report Details Input

try {
    $result = $apiInstance->v11ReportsAcDoorgroupReportPost($ac_doorgroup_report_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ReportApi->v11ReportsAcDoorgroupReportPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **ac_doorgroup_report_input** | [**\Exos\ExosApi\Model\AcDoorgroupReportInput**](../Model/AcDoorgroupReportInput.md)| Report Details Input | |

### Return type

**\SplFileObject**

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/octet-stream`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v11ReportsAcGlobalRoomReportPost()`

```php
v11ReportsAcGlobalRoomReportPost($ac_global_room_report_input): \SplFileObject
```

AC Global Room Report

Returns the AC Global Room report.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\ReportApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$ac_global_room_report_input = new \Exos\ExosApi\Model\AcGlobalRoomReportInput(); // \Exos\ExosApi\Model\AcGlobalRoomReportInput | Report Details Input

try {
    $result = $apiInstance->v11ReportsAcGlobalRoomReportPost($ac_global_room_report_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ReportApi->v11ReportsAcGlobalRoomReportPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **ac_global_room_report_input** | [**\Exos\ExosApi\Model\AcGlobalRoomReportInput**](../Model/AcGlobalRoomReportInput.md)| Report Details Input | |

### Return type

**\SplFileObject**

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/octet-stream`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v11ReportsAcPassagewayCodeReportPost()`

```php
v11ReportsAcPassagewayCodeReportPost($ac_passageway_code_report_input): \SplFileObject
```

AC Passage Way Code Report

Returns the AC Passage Way Code report.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\ReportApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$ac_passageway_code_report_input = new \Exos\ExosApi\Model\AcPassagewayCodeReportInput(); // \Exos\ExosApi\Model\AcPassagewayCodeReportInput | Report Details Input

try {
    $result = $apiInstance->v11ReportsAcPassagewayCodeReportPost($ac_passageway_code_report_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ReportApi->v11ReportsAcPassagewayCodeReportPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **ac_passageway_code_report_input** | [**\Exos\ExosApi\Model\AcPassagewayCodeReportInput**](../Model/AcPassagewayCodeReportInput.md)| Report Details Input | |

### Return type

**\SplFileObject**

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/octet-stream`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v11ReportsAcProfileReportPost()`

```php
v11ReportsAcProfileReportPost($ac_profile_report_input): \SplFileObject
```

AC Profile Report

Returns the AC Profile report.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\ReportApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$ac_profile_report_input = new \Exos\ExosApi\Model\AcProfileReportInput(); // \Exos\ExosApi\Model\AcProfileReportInput | Report Details Input

try {
    $result = $apiInstance->v11ReportsAcProfileReportPost($ac_profile_report_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ReportApi->v11ReportsAcProfileReportPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **ac_profile_report_input** | [**\Exos\ExosApi\Model\AcProfileReportInput**](../Model/AcProfileReportInput.md)| Report Details Input | |

### Return type

**\SplFileObject**

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/octet-stream`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v11ReportsAcRoomReportPost()`

```php
v11ReportsAcRoomReportPost($ac_room_report_input): \SplFileObject
```

AC Room Report

Returns the AC Room report.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\ReportApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$ac_room_report_input = new \Exos\ExosApi\Model\AcRoomReportInput(); // \Exos\ExosApi\Model\AcRoomReportInput | Report Details Input

try {
    $result = $apiInstance->v11ReportsAcRoomReportPost($ac_room_report_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ReportApi->v11ReportsAcRoomReportPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **ac_room_report_input** | [**\Exos\ExosApi\Model\AcRoomReportInput**](../Model/AcRoomReportInput.md)| Report Details Input | |

### Return type

**\SplFileObject**

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/octet-stream`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v11ReportsAcRoomzoneReportPost()`

```php
v11ReportsAcRoomzoneReportPost($ac_roomzone_report_input): \SplFileObject
```

AC Room Zone Report

Returns the AC Room Zone report.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\ReportApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$ac_roomzone_report_input = new \Exos\ExosApi\Model\AcRoomzoneReportInput(); // \Exos\ExosApi\Model\AcRoomzoneReportInput | Report Details Input

try {
    $result = $apiInstance->v11ReportsAcRoomzoneReportPost($ac_roomzone_report_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ReportApi->v11ReportsAcRoomzoneReportPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **ac_roomzone_report_input** | [**\Exos\ExosApi\Model\AcRoomzoneReportInput**](../Model/AcRoomzoneReportInput.md)| Report Details Input | |

### Return type

**\SplFileObject**

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/octet-stream`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v11ReportsAcTimezoneReportPost()`

```php
v11ReportsAcTimezoneReportPost($ac_timezone_report_input): \SplFileObject
```

AC Time Zone Report

Returns the AC Time Zone report.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\ReportApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$ac_timezone_report_input = new \Exos\ExosApi\Model\AcTimezoneReportInput(); // \Exos\ExosApi\Model\AcTimezoneReportInput | Report Details Input

try {
    $result = $apiInstance->v11ReportsAcTimezoneReportPost($ac_timezone_report_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ReportApi->v11ReportsAcTimezoneReportPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **ac_timezone_report_input** | [**\Exos\ExosApi\Model\AcTimezoneReportInput**](../Model/AcTimezoneReportInput.md)| Report Details Input | |

### Return type

**\SplFileObject**

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/octet-stream`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v11ReportsAcValidationTimeReportPost()`

```php
v11ReportsAcValidationTimeReportPost($ac_validation_time_report_input): \SplFileObject
```

AC Validation Time Report

Returns the AC Validation Time report.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\ReportApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$ac_validation_time_report_input = new \Exos\ExosApi\Model\AcValidationTimeReportInput(); // \Exos\ExosApi\Model\AcValidationTimeReportInput | Report Details Input

try {
    $result = $apiInstance->v11ReportsAcValidationTimeReportPost($ac_validation_time_report_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ReportApi->v11ReportsAcValidationTimeReportPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **ac_validation_time_report_input** | [**\Exos\ExosApi\Model\AcValidationTimeReportInput**](../Model/AcValidationTimeReportInput.md)| Report Details Input | |

### Return type

**\SplFileObject**

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/octet-stream`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v11ReportsMediaHandOutCardPost()`

```php
v11ReportsMediaHandOutCardPost($media_hand_out_card_input): \SplFileObject
```

Media Hand Out Card Report

Returns the Media Hand Out Card Report.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\ReportApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$media_hand_out_card_input = new \Exos\ExosApi\Model\MediaHandOutCardInput(); // \Exos\ExosApi\Model\MediaHandOutCardInput | Report Details Input

try {
    $result = $apiInstance->v11ReportsMediaHandOutCardPost($media_hand_out_card_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ReportApi->v11ReportsMediaHandOutCardPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **media_hand_out_card_input** | [**\Exos\ExosApi\Model\MediaHandOutCardInput**](../Model/MediaHandOutCardInput.md)| Report Details Input | |

### Return type

**\SplFileObject**

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/octet-stream`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v11ReportsMediaHandOutKeyPost()`

```php
v11ReportsMediaHandOutKeyPost($media_hand_out_key_input): \SplFileObject
```

Media Hand Out Key Report

Returns the Media Hand Out Key Report.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\ReportApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$media_hand_out_key_input = new \Exos\ExosApi\Model\MediaHandOutKeyInput(); // \Exos\ExosApi\Model\MediaHandOutKeyInput | Report Details Input

try {
    $result = $apiInstance->v11ReportsMediaHandOutKeyPost($media_hand_out_key_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ReportApi->v11ReportsMediaHandOutKeyPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **media_hand_out_key_input** | [**\Exos\ExosApi\Model\MediaHandOutKeyInput**](../Model/MediaHandOutKeyInput.md)| Report Details Input | |

### Return type

**\SplFileObject**

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/octet-stream`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v11ReportsMediaLossCardPost()`

```php
v11ReportsMediaLossCardPost($media_loss_card_input): \SplFileObject
```

Media Loss Card Report

Returns the Media Loss Card Report.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\ReportApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$media_loss_card_input = new \Exos\ExosApi\Model\MediaLossCardInput(); // \Exos\ExosApi\Model\MediaLossCardInput | Report Details Input

try {
    $result = $apiInstance->v11ReportsMediaLossCardPost($media_loss_card_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ReportApi->v11ReportsMediaLossCardPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **media_loss_card_input** | [**\Exos\ExosApi\Model\MediaLossCardInput**](../Model/MediaLossCardInput.md)| Report Details Input | |

### Return type

**\SplFileObject**

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/octet-stream`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v11ReportsMediaLossKeyPost()`

```php
v11ReportsMediaLossKeyPost($media_loss_key_input): \SplFileObject
```

Media Loss Key Report

Returns the Media Loss Key Report.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\ReportApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$media_loss_key_input = new \Exos\ExosApi\Model\MediaLossKeyInput(); // \Exos\ExosApi\Model\MediaLossKeyInput | Report Details Input

try {
    $result = $apiInstance->v11ReportsMediaLossKeyPost($media_loss_key_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ReportApi->v11ReportsMediaLossKeyPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **media_loss_key_input** | [**\Exos\ExosApi\Model\MediaLossKeyInput**](../Model/MediaLossKeyInput.md)| Report Details Input | |

### Return type

**\SplFileObject**

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/octet-stream`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v11ReportsMediaOverviewPost()`

```php
v11ReportsMediaOverviewPost($media_overview_input): \SplFileObject
```

Media Overview Report

Returns the Media Overview Report.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\ReportApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$media_overview_input = new \Exos\ExosApi\Model\MediaOverviewInput(); // \Exos\ExosApi\Model\MediaOverviewInput | Report Details Input

try {
    $result = $apiInstance->v11ReportsMediaOverviewPost($media_overview_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ReportApi->v11ReportsMediaOverviewPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **media_overview_input** | [**\Exos\ExosApi\Model\MediaOverviewInput**](../Model/MediaOverviewInput.md)| Report Details Input | |

### Return type

**\SplFileObject**

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/octet-stream`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v11ReportsMediaReturnCardPost()`

```php
v11ReportsMediaReturnCardPost($media_return_card_input): \SplFileObject
```

Media Return Card Report

Returns the Media Return Card Report.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\ReportApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$media_return_card_input = new \Exos\ExosApi\Model\MediaReturnCardInput(); // \Exos\ExosApi\Model\MediaReturnCardInput | Report Details Input

try {
    $result = $apiInstance->v11ReportsMediaReturnCardPost($media_return_card_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ReportApi->v11ReportsMediaReturnCardPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **media_return_card_input** | [**\Exos\ExosApi\Model\MediaReturnCardInput**](../Model/MediaReturnCardInput.md)| Report Details Input | |

### Return type

**\SplFileObject**

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/octet-stream`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v11ReportsMediaReturnKeyPost()`

```php
v11ReportsMediaReturnKeyPost($media_return_key_input): \SplFileObject
```

Media Return Key Report

Returns the Media Return Key Report.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\ReportApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$media_return_key_input = new \Exos\ExosApi\Model\MediaReturnKeyInput(); // \Exos\ExosApi\Model\MediaReturnKeyInput | Report Details Input

try {
    $result = $apiInstance->v11ReportsMediaReturnKeyPost($media_return_key_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ReportApi->v11ReportsMediaReturnKeyPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **media_return_key_input** | [**\Exos\ExosApi\Model\MediaReturnKeyInput**](../Model/MediaReturnKeyInput.md)| Report Details Input | |

### Return type

**\SplFileObject**

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/octet-stream`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v11ReportsPersAccessReportPost()`

```php
v11ReportsPersAccessReportPost($pers_access_report_input): \SplFileObject
```

Pers Access Report

Returns the Pers Access report.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\ReportApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$pers_access_report_input = new \Exos\ExosApi\Model\PersAccessReportInput(); // \Exos\ExosApi\Model\PersAccessReportInput | Report Details Input

try {
    $result = $apiInstance->v11ReportsPersAccessReportPost($pers_access_report_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ReportApi->v11ReportsPersAccessReportPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **pers_access_report_input** | [**\Exos\ExosApi\Model\PersAccessReportInput**](../Model/PersAccessReportInput.md)| Report Details Input | |

### Return type

**\SplFileObject**

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/octet-stream`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
