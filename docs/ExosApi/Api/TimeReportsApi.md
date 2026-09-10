# Exos\ExosApi\TimeReportsApi

All URIs are relative to /ExosApi/api, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**v10TimeReportsPresenceTimeForHierarchyHierarchyIdFromDateToDateGet()**](TimeReportsApi.md#v10TimeReportsPresenceTimeForHierarchyHierarchyIdFromDateToDateGet) | **GET** /v1.0/timeReports/presenceTime/forHierarchy/{hierarchyId}/{fromDate}/{toDate} | gets the presence time for all persons under a specific hierarchy |
| [**v10TimeReportsPresenceTimeForPersonPersonIdFromDateToDateGet()**](TimeReportsApi.md#v10TimeReportsPresenceTimeForPersonPersonIdFromDateToDateGet) | **GET** /v1.0/timeReports/presenceTime/forPerson/{personId}/{fromDate}/{toDate} | gets the presence time for a person in a specific period |


## `v10TimeReportsPresenceTimeForHierarchyHierarchyIdFromDateToDateGet()`

```php
v10TimeReportsPresenceTimeForHierarchyHierarchyIdFromDateToDateGet($hierarchy_id, $from_date, $to_date): \Exos\ExosApi\Model\GetHierarchyPresenceTimeOutputWithTime
```

gets the presence time for all persons under a specific hierarchy



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\TimeReportsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$hierarchy_id = 'hierarchy_id_example'; // string | The hierarchyId to get presenceTime
$from_date = new \DateTime('2013-10-20T19:20:30+01:00'); // \DateTime | First date to get
$to_date = new \DateTime('2013-10-20T19:20:30+01:00'); // \DateTime | Last date to get

try {
    $result = $apiInstance->v10TimeReportsPresenceTimeForHierarchyHierarchyIdFromDateToDateGet($hierarchy_id, $from_date, $to_date);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TimeReportsApi->v10TimeReportsPresenceTimeForHierarchyHierarchyIdFromDateToDateGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **hierarchy_id** | **string**| The hierarchyId to get presenceTime | |
| **from_date** | **\DateTime**| First date to get | |
| **to_date** | **\DateTime**| Last date to get | |

### Return type

[**\Exos\ExosApi\Model\GetHierarchyPresenceTimeOutputWithTime**](../Model/GetHierarchyPresenceTimeOutputWithTime.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10TimeReportsPresenceTimeForPersonPersonIdFromDateToDateGet()`

```php
v10TimeReportsPresenceTimeForPersonPersonIdFromDateToDateGet($person_id, $from_date, $to_date): \Exos\ExosApi\Model\GetPersonPresenceTimeOutputWithTime
```

gets the presence time for a person in a specific period



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\TimeReportsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$person_id = 'person_id_example'; // string | The personId
$from_date = new \DateTime('2013-10-20T19:20:30+01:00'); // \DateTime | First date to get
$to_date = new \DateTime('2013-10-20T19:20:30+01:00'); // \DateTime | Last date to get

try {
    $result = $apiInstance->v10TimeReportsPresenceTimeForPersonPersonIdFromDateToDateGet($person_id, $from_date, $to_date);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TimeReportsApi->v10TimeReportsPresenceTimeForPersonPersonIdFromDateToDateGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **person_id** | **string**| The personId | |
| **from_date** | **\DateTime**| First date to get | |
| **to_date** | **\DateTime**| Last date to get | |

### Return type

[**\Exos\ExosApi\Model\GetPersonPresenceTimeOutputWithTime**](../Model/GetPersonPresenceTimeOutputWithTime.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
