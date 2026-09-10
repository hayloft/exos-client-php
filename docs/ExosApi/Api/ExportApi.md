# Exos\ExosApi\ExportApi

All URIs are relative to /ExosApi/api, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**v10ExportBlacklistGet()**](ExportApi.md#v10ExportBlacklistGet) | **GET** /v1.0/export/blacklist | Generate the blacklist export. |
| [**v10ExportExportIdDeletePost()**](ExportApi.md#v10ExportExportIdDeletePost) | **POST** /v1.0/export/{exportId}/delete | Delete export data by its identifier. |
| [**v10ExportExportIdDownloadGet()**](ExportApi.md#v10ExportExportIdDownloadGet) | **GET** /v1.0/export/{exportId}/download | Download export by its identifier. |
| [**v10ExportListOwnViewNameGet()**](ExportApi.md#v10ExportListOwnViewNameGet) | **GET** /v1.0/export/list-own/{viewName} | Get my own exports of a given view. |
| [**v10ExportLogsAccessLogGet()**](ExportApi.md#v10ExportLogsAccessLogGet) | **GET** /v1.0/export/logs/accessLog | Generate the access log export. |
| [**v10ExportLogsAccessLogPersonalGet()**](ExportApi.md#v10ExportLogsAccessLogPersonalGet) | **GET** /v1.0/export/logs/accessLogPersonal | Generate the personal access log export. |
| [**v10ExportLogsAlarmLogGet()**](ExportApi.md#v10ExportLogsAlarmLogGet) | **GET** /v1.0/export/logs/alarmLog | Generate the alarm log export. |
| [**v10ExportLogsAuditLogGet()**](ExportApi.md#v10ExportLogsAuditLogGet) | **GET** /v1.0/export/logs/auditLog | Generate the audit log export. |
| [**v10ExportLogsDownLogGet()**](ExportApi.md#v10ExportLogsDownLogGet) | **GET** /v1.0/export/logs/downLog | Generate the download log export. |
| [**v10ExportLogsKoneAccessLogGet()**](ExportApi.md#v10ExportLogsKoneAccessLogGet) | **GET** /v1.0/export/logs/koneAccessLog | Generate the KONE access log export. |
| [**v10ExportLogsVisitorLogGet()**](ExportApi.md#v10ExportLogsVisitorLogGet) | **GET** /v1.0/export/logs/visitorLog | Generate the visitor log export. |
| [**v10ExportPersonAccessRightsGet()**](ExportApi.md#v10ExportPersonAccessRightsGet) | **GET** /v1.0/export/personAccessRights | Generate the person access rights export. |
| [**v10ExportPersonsGet()**](ExportApi.md#v10ExportPersonsGet) | **GET** /v1.0/export/persons | Generate the person export. |
| [**v10ExportVisitsVisitorVisitGet()**](ExportApi.md#v10ExportVisitsVisitorVisitGet) | **GET** /v1.0/export/visits/visitorVisit | Generate the visitor visit export. |


## `v10ExportBlacklistGet()`

```php
v10ExportBlacklistGet($view_name, $columns_string, $file_name, $export_format, $title, $select, $expand, $filter, $search_string, $count, $orderby): \Exos\ExosApi\Model\ExportResponse
```

Generate the blacklist export.

Starts the generation of the blacklist export in the background.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\ExportApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$view_name = 'view_name_example'; // string | name of the application view
$columns_string = 'columns_string_example'; // string | columns to be displayed in the export (separated by a comma)
$file_name = 'file_name_example'; // string | name of the export file
$export_format = new \Exos\ExosApi\Model\\Exos\ExosApi\Model\ExportFormat(); // \Exos\ExosApi\Model\ExportFormat | format of the export file
$title = 'title_example'; // string | title for the pdf export
$select = 'select_example'; // string | FirstName,LastName,Reason,BlacklistId
$expand = 'expand_example'; // string | Entity($select=Column1,Column2)
$filter = 'filter_example'; // string | FirstName eq 'Test'
$search_string = 'search_string_example'; // string | Fulltext search on all string, int and date fields that are selected with $select and $expand.
$count = true; // bool | adds total possible results to the response
$orderby = 'orderby_example'; // string | LastName desc

try {
    $result = $apiInstance->v10ExportBlacklistGet($view_name, $columns_string, $file_name, $export_format, $title, $select, $expand, $filter, $search_string, $count, $orderby);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ExportApi->v10ExportBlacklistGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **view_name** | **string**| name of the application view | |
| **columns_string** | **string**| columns to be displayed in the export (separated by a comma) | |
| **file_name** | **string**| name of the export file | |
| **export_format** | [**\Exos\ExosApi\Model\ExportFormat**](../Model/.md)| format of the export file | |
| **title** | **string**| title for the pdf export | |
| **select** | **string**| FirstName,LastName,Reason,BlacklistId | |
| **expand** | **string**| Entity($select&#x3D;Column1,Column2) | [optional] |
| **filter** | **string**| FirstName eq &#39;Test&#39; | [optional] |
| **search_string** | **string**| Fulltext search on all string, int and date fields that are selected with $select and $expand. | [optional] |
| **count** | **bool**| adds total possible results to the response | [optional] [default to true] |
| **orderby** | **string**| LastName desc | [optional] |

### Return type

[**\Exos\ExosApi\Model\ExportResponse**](../Model/ExportResponse.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10ExportExportIdDeletePost()`

```php
v10ExportExportIdDeletePost($export_id)
```

Delete export data by its identifier.

Deletes from the server all data corresponding to the given export identifier.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\ExportApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$export_id = 'export_id_example'; // string | export identifier

try {
    $apiInstance->v10ExportExportIdDeletePost($export_id);
} catch (Exception $e) {
    echo 'Exception when calling ExportApi->v10ExportExportIdDeletePost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **export_id** | **string**| export identifier | |

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

## `v10ExportExportIdDownloadGet()`

```php
v10ExportExportIdDownloadGet($export_id): \SplFileObject
```

Download export by its identifier.

Gets the contents of the file with the exported data corresponding to the given export identifier.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\ExportApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$export_id = 'export_id_example'; // string | export identifier

try {
    $result = $apiInstance->v10ExportExportIdDownloadGet($export_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ExportApi->v10ExportExportIdDownloadGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **export_id** | **string**| export identifier | |

### Return type

**\SplFileObject**

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/octet-stream`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10ExportListOwnViewNameGet()`

```php
v10ExportListOwnViewNameGet($view_name): \Exos\ExosApi\Model\GetExportListResponse
```

Get my own exports of a given view.

Gets the list of existing data exports that were requested by the current user from the given application view.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\ExportApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$view_name = 'view_name_example'; // string | name of the application view

try {
    $result = $apiInstance->v10ExportListOwnViewNameGet($view_name);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ExportApi->v10ExportListOwnViewNameGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **view_name** | **string**| name of the application view | |

### Return type

[**\Exos\ExosApi\Model\GetExportListResponse**](../Model/GetExportListResponse.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10ExportLogsAccessLogGet()`

```php
v10ExportLogsAccessLogGet($columns_string, $file_name, $export_format, $title, $select, $expand, $filter, $search_string, $person_name, $count, $orderby): \Exos\ExosApi\Model\ExportResponse
```

Generate the access log export.

Starts the generation of the access log export in the background.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\ExportApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$columns_string = 'columns_string_example'; // string | columns to be displayed in the export (separated by a comma)
$file_name = 'file_name_example'; // string | name of the export file
$export_format = new \Exos\ExosApi\Model\\Exos\ExosApi\Model\ExportFormat(); // \Exos\ExosApi\Model\ExportFormat | format of the export file
$title = 'title_example'; // string | title for the pdf export
$select = 'select_example'; // string | DeviceAddress,CardNr,PersonalNr
$expand = 'expand_example'; // string | Entity($select=Column1,Column2)
$filter = 'filter_example'; // string | startswith(PersonalNr,'123')
$search_string = 'search_string_example'; // string | Fulltext search on all string, int and date fields that are selected with $select and $expand.
$person_name = 'person_name_example'; // string | Name of the person which was selected
$count = true; // bool | adds total possible results to the response
$orderby = 'orderby_example'; // string | PersonalNr desc

try {
    $result = $apiInstance->v10ExportLogsAccessLogGet($columns_string, $file_name, $export_format, $title, $select, $expand, $filter, $search_string, $person_name, $count, $orderby);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ExportApi->v10ExportLogsAccessLogGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **columns_string** | **string**| columns to be displayed in the export (separated by a comma) | |
| **file_name** | **string**| name of the export file | |
| **export_format** | [**\Exos\ExosApi\Model\ExportFormat**](../Model/.md)| format of the export file | |
| **title** | **string**| title for the pdf export | |
| **select** | **string**| DeviceAddress,CardNr,PersonalNr | |
| **expand** | **string**| Entity($select&#x3D;Column1,Column2) | [optional] |
| **filter** | **string**| startswith(PersonalNr,&#39;123&#39;) | [optional] |
| **search_string** | **string**| Fulltext search on all string, int and date fields that are selected with $select and $expand. | [optional] |
| **person_name** | **string**| Name of the person which was selected | [optional] |
| **count** | **bool**| adds total possible results to the response | [optional] [default to true] |
| **orderby** | **string**| PersonalNr desc | [optional] |

### Return type

[**\Exos\ExosApi\Model\ExportResponse**](../Model/ExportResponse.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10ExportLogsAccessLogPersonalGet()`

```php
v10ExportLogsAccessLogPersonalGet($columns_string, $file_name, $export_format, $title, $select, $expand, $filter, $search_string, $count, $orderby): \Exos\ExosApi\Model\ExportResponse
```

Generate the personal access log export.

Starts the generation of the personal access log export in the background.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\ExportApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$columns_string = 'columns_string_example'; // string | columns to be displayed in the export (separated by a comma)
$file_name = 'file_name_example'; // string | name of the export file
$export_format = new \Exos\ExosApi\Model\\Exos\ExosApi\Model\ExportFormat(); // \Exos\ExosApi\Model\ExportFormat | format of the export file
$title = 'title_example'; // string | title for the pdf export
$select = 'select_example'; // string | DeviceAddress,CardNr,PersonalNr
$expand = 'expand_example'; // string | Entity($select=Column1,Column2)
$filter = 'filter_example'; // string | startswith(PersonalNr,'123')
$search_string = 'search_string_example'; // string | Fulltext search on all string, int and date fields that are selected with $select and $expand.
$count = true; // bool | adds total possible results to the response
$orderby = 'orderby_example'; // string | PersonalNr desc

try {
    $result = $apiInstance->v10ExportLogsAccessLogPersonalGet($columns_string, $file_name, $export_format, $title, $select, $expand, $filter, $search_string, $count, $orderby);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ExportApi->v10ExportLogsAccessLogPersonalGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **columns_string** | **string**| columns to be displayed in the export (separated by a comma) | |
| **file_name** | **string**| name of the export file | |
| **export_format** | [**\Exos\ExosApi\Model\ExportFormat**](../Model/.md)| format of the export file | |
| **title** | **string**| title for the pdf export | |
| **select** | **string**| DeviceAddress,CardNr,PersonalNr | |
| **expand** | **string**| Entity($select&#x3D;Column1,Column2) | [optional] |
| **filter** | **string**| startswith(PersonalNr,&#39;123&#39;) | [optional] |
| **search_string** | **string**| Fulltext search on all string, int and date fields that are selected with $select and $expand. | [optional] |
| **count** | **bool**| adds total possible results to the response | [optional] [default to true] |
| **orderby** | **string**| PersonalNr desc | [optional] |

### Return type

[**\Exos\ExosApi\Model\ExportResponse**](../Model/ExportResponse.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10ExportLogsAlarmLogGet()`

```php
v10ExportLogsAlarmLogGet($columns_string, $file_name, $export_format, $title, $select, $expand, $filter, $search_string, $count, $orderby): \Exos\ExosApi\Model\ExportResponse
```

Generate the alarm log export.

Starts the generation of the alarm log export in the background.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\ExportApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$columns_string = 'columns_string_example'; // string | columns to be displayed in the export (separated by a comma)
$file_name = 'file_name_example'; // string | name of the export file
$export_format = new \Exos\ExosApi\Model\\Exos\ExosApi\Model\ExportFormat(); // \Exos\ExosApi\Model\ExportFormat | format of the export file
$title = 'title_example'; // string | title for the pdf export
$select = 'select_example'; // string | Text,DeviceAddress,DeviceName
$expand = 'expand_example'; // string | Entity($select=Column1,Column2)
$filter = 'filter_example'; // string | startswith(Text,'Connection')
$search_string = 'search_string_example'; // string | Fulltext search on all string, int and date fields that are selected with $select and $expand.
$count = true; // bool | adds total possible results to the response
$orderby = 'orderby_example'; // string | LogID desc

try {
    $result = $apiInstance->v10ExportLogsAlarmLogGet($columns_string, $file_name, $export_format, $title, $select, $expand, $filter, $search_string, $count, $orderby);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ExportApi->v10ExportLogsAlarmLogGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **columns_string** | **string**| columns to be displayed in the export (separated by a comma) | |
| **file_name** | **string**| name of the export file | |
| **export_format** | [**\Exos\ExosApi\Model\ExportFormat**](../Model/.md)| format of the export file | |
| **title** | **string**| title for the pdf export | |
| **select** | **string**| Text,DeviceAddress,DeviceName | |
| **expand** | **string**| Entity($select&#x3D;Column1,Column2) | [optional] |
| **filter** | **string**| startswith(Text,&#39;Connection&#39;) | [optional] |
| **search_string** | **string**| Fulltext search on all string, int and date fields that are selected with $select and $expand. | [optional] |
| **count** | **bool**| adds total possible results to the response | [optional] [default to true] |
| **orderby** | **string**| LogID desc | [optional] |

### Return type

[**\Exos\ExosApi\Model\ExportResponse**](../Model/ExportResponse.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10ExportLogsAuditLogGet()`

```php
v10ExportLogsAuditLogGet($columns_string, $file_name, $export_format, $title, $select, $expand, $filter, $search_string, $count, $orderby): \Exos\ExosApi\Model\ExportResponse
```

Generate the audit log export.

Starts the generation of the audit log export in the background.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\ExportApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$columns_string = 'columns_string_example'; // string | columns to be displayed in the export (separated by a comma)
$file_name = 'file_name_example'; // string | name of the export file
$export_format = new \Exos\ExosApi\Model\\Exos\ExosApi\Model\ExportFormat(); // \Exos\ExosApi\Model\ExportFormat | format of the export file
$title = 'title_example'; // string | title for the pdf export
$select = 'select_example'; // string | Initiator,Text,DataRecord,NewValue
$expand = 'expand_example'; // string | Entity($select=Column1,Column2)
$filter = 'filter_example'; // string | startswith(Initiator,'a')
$search_string = 'search_string_example'; // string | Fulltext search on all string, int and date fields that are selected with $select and $expand.
$count = true; // bool | adds total possible results to the response
$orderby = 'orderby_example'; // string | Initiator desc

try {
    $result = $apiInstance->v10ExportLogsAuditLogGet($columns_string, $file_name, $export_format, $title, $select, $expand, $filter, $search_string, $count, $orderby);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ExportApi->v10ExportLogsAuditLogGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **columns_string** | **string**| columns to be displayed in the export (separated by a comma) | |
| **file_name** | **string**| name of the export file | |
| **export_format** | [**\Exos\ExosApi\Model\ExportFormat**](../Model/.md)| format of the export file | |
| **title** | **string**| title for the pdf export | |
| **select** | **string**| Initiator,Text,DataRecord,NewValue | |
| **expand** | **string**| Entity($select&#x3D;Column1,Column2) | [optional] |
| **filter** | **string**| startswith(Initiator,&#39;a&#39;) | [optional] |
| **search_string** | **string**| Fulltext search on all string, int and date fields that are selected with $select and $expand. | [optional] |
| **count** | **bool**| adds total possible results to the response | [optional] [default to true] |
| **orderby** | **string**| Initiator desc | [optional] |

### Return type

[**\Exos\ExosApi\Model\ExportResponse**](../Model/ExportResponse.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10ExportLogsDownLogGet()`

```php
v10ExportLogsDownLogGet($columns_string, $file_name, $export_format, $title, $select, $expand, $filter, $search_string, $count, $orderby): \Exos\ExosApi\Model\ExportResponse
```

Generate the download log export.

Starts the generation of the download log export in the background.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\ExportApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$columns_string = 'columns_string_example'; // string | columns to be displayed in the export (separated by a comma)
$file_name = 'file_name_example'; // string | name of the export file
$export_format = new \Exos\ExosApi\Model\\Exos\ExosApi\Model\ExportFormat(); // \Exos\ExosApi\Model\ExportFormat | format of the export file
$title = 'title_example'; // string | title for the pdf export
$select = 'select_example'; // string | LogDate,Login
$expand = 'expand_example'; // string | Entity($select=Column1,Column2)
$filter = 'filter_example'; // string | startswith(Login,'admin')
$search_string = 'search_string_example'; // string | Fulltext search on all string, int and date fields that are selected with $select and $expand.
$count = true; // bool | adds total possible results to the response
$orderby = 'orderby_example'; // string | LogID desc

try {
    $result = $apiInstance->v10ExportLogsDownLogGet($columns_string, $file_name, $export_format, $title, $select, $expand, $filter, $search_string, $count, $orderby);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ExportApi->v10ExportLogsDownLogGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **columns_string** | **string**| columns to be displayed in the export (separated by a comma) | |
| **file_name** | **string**| name of the export file | |
| **export_format** | [**\Exos\ExosApi\Model\ExportFormat**](../Model/.md)| format of the export file | |
| **title** | **string**| title for the pdf export | |
| **select** | **string**| LogDate,Login | |
| **expand** | **string**| Entity($select&#x3D;Column1,Column2) | [optional] |
| **filter** | **string**| startswith(Login,&#39;admin&#39;) | [optional] |
| **search_string** | **string**| Fulltext search on all string, int and date fields that are selected with $select and $expand. | [optional] |
| **count** | **bool**| adds total possible results to the response | [optional] [default to true] |
| **orderby** | **string**| LogID desc | [optional] |

### Return type

[**\Exos\ExosApi\Model\ExportResponse**](../Model/ExportResponse.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10ExportLogsKoneAccessLogGet()`

```php
v10ExportLogsKoneAccessLogGet($columns_string, $file_name, $export_format, $title, $select, $expand, $filter, $search_string, $person_name, $count, $orderby): \Exos\ExosApi\Model\ExportResponse
```

Generate the KONE access log export.

Starts the generation of the KONE access log export in the background.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\ExportApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$columns_string = 'columns_string_example'; // string | columns to be displayed in the export (separated by a comma)
$file_name = 'file_name_example'; // string | name of the export file
$export_format = new \Exos\ExosApi\Model\\Exos\ExosApi\Model\ExportFormat(); // \Exos\ExosApi\Model\ExportFormat | format of the export file
$title = 'title_example'; // string | title for the pdf export
$select = 'select_example'; // string | DeviceAddress,CardNr,PersonalNr
$expand = 'expand_example'; // string | Entity($select=Column1,Column2)
$filter = 'filter_example'; // string | startswith(PersonalNr,'123')
$search_string = 'search_string_example'; // string | Fulltext search on all string, int and date fields that are selected with $select and $expand.
$person_name = 'person_name_example'; // string | Name of the person which was selected
$count = true; // bool | adds total possible results to the response
$orderby = 'orderby_example'; // string | PersonalNr desc

try {
    $result = $apiInstance->v10ExportLogsKoneAccessLogGet($columns_string, $file_name, $export_format, $title, $select, $expand, $filter, $search_string, $person_name, $count, $orderby);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ExportApi->v10ExportLogsKoneAccessLogGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **columns_string** | **string**| columns to be displayed in the export (separated by a comma) | |
| **file_name** | **string**| name of the export file | |
| **export_format** | [**\Exos\ExosApi\Model\ExportFormat**](../Model/.md)| format of the export file | |
| **title** | **string**| title for the pdf export | |
| **select** | **string**| DeviceAddress,CardNr,PersonalNr | |
| **expand** | **string**| Entity($select&#x3D;Column1,Column2) | [optional] |
| **filter** | **string**| startswith(PersonalNr,&#39;123&#39;) | [optional] |
| **search_string** | **string**| Fulltext search on all string, int and date fields that are selected with $select and $expand. | [optional] |
| **person_name** | **string**| Name of the person which was selected | [optional] |
| **count** | **bool**| adds total possible results to the response | [optional] [default to true] |
| **orderby** | **string**| PersonalNr desc | [optional] |

### Return type

[**\Exos\ExosApi\Model\ExportResponse**](../Model/ExportResponse.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10ExportLogsVisitorLogGet()`

```php
v10ExportLogsVisitorLogGet($columns_string, $file_name, $export_format, $title, $select, $expand, $filter, $search_string, $count, $orderby): \Exos\ExosApi\Model\ExportResponse
```

Generate the visitor log export.

Starts the generation of the visitor log export in the background.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\ExportApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$columns_string = 'columns_string_example'; // string | columns to be displayed in the export (separated by a comma)
$file_name = 'file_name_example'; // string | name of the export file
$export_format = new \Exos\ExosApi\Model\\Exos\ExosApi\Model\ExportFormat(); // \Exos\ExosApi\Model\ExportFormat | format of the export file
$title = 'title_example'; // string | title for the pdf export
$select = 'select_example'; // string | Company,HasAccessRight,Location
$expand = 'expand_example'; // string | Entity($select=Column1,Column2)
$filter = 'filter_example'; // string | startswith(PersonalNr,'123')
$search_string = 'search_string_example'; // string | Fulltext search on all string, int and date fields that are selected with $select and $expand.
$count = true; // bool | adds total possible results to the response
$orderby = 'orderby_example'; // string | PersonalNr desc

try {
    $result = $apiInstance->v10ExportLogsVisitorLogGet($columns_string, $file_name, $export_format, $title, $select, $expand, $filter, $search_string, $count, $orderby);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ExportApi->v10ExportLogsVisitorLogGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **columns_string** | **string**| columns to be displayed in the export (separated by a comma) | |
| **file_name** | **string**| name of the export file | |
| **export_format** | [**\Exos\ExosApi\Model\ExportFormat**](../Model/.md)| format of the export file | |
| **title** | **string**| title for the pdf export | |
| **select** | **string**| Company,HasAccessRight,Location | |
| **expand** | **string**| Entity($select&#x3D;Column1,Column2) | [optional] |
| **filter** | **string**| startswith(PersonalNr,&#39;123&#39;) | [optional] |
| **search_string** | **string**| Fulltext search on all string, int and date fields that are selected with $select and $expand. | [optional] |
| **count** | **bool**| adds total possible results to the response | [optional] [default to true] |
| **orderby** | **string**| PersonalNr desc | [optional] |

### Return type

[**\Exos\ExosApi\Model\ExportResponse**](../Model/ExportResponse.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10ExportPersonAccessRightsGet()`

```php
v10ExportPersonAccessRightsGet($view_name, $columns_string, $file_name, $export_format, $title, $select, $access_domain_id, $expand, $filter, $search_string, $count, $orderby): \Exos\ExosApi\Model\ExportResponse
```

Generate the person access rights export.

Starts the generation of the person access rights export in the background.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\ExportApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$view_name = 'view_name_example'; // string | name of the application view
$columns_string = 'columns_string_example'; // string | columns to be displayed in the export (separated by a comma)
$file_name = 'file_name_example'; // string | name of the export file
$export_format = new \Exos\ExosApi\Model\\Exos\ExosApi\Model\ExportFormat(); // \Exos\ExosApi\Model\ExportFormat | format of the export file
$title = 'title_example'; // string | title for the pdf export
$select = 'select_example'; // string | LastName,AccessExitDate,PersonIdInternal
$access_domain_id = 'access_domain_id_example'; // string | accessDomainId to get persons by
$expand = 'expand_example'; // string | Entity($select=Column1,Column2)
$filter = 'filter_example'; // string | Fullname eq 'Test'
$search_string = 'search_string_example'; // string | Fulltext search on all string, int and date fields that are selected with $select and $expand.
$count = true; // bool | adds total possible results to the response
$orderby = 'orderby_example'; // string | LastName desc

try {
    $result = $apiInstance->v10ExportPersonAccessRightsGet($view_name, $columns_string, $file_name, $export_format, $title, $select, $access_domain_id, $expand, $filter, $search_string, $count, $orderby);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ExportApi->v10ExportPersonAccessRightsGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **view_name** | **string**| name of the application view | |
| **columns_string** | **string**| columns to be displayed in the export (separated by a comma) | |
| **file_name** | **string**| name of the export file | |
| **export_format** | [**\Exos\ExosApi\Model\ExportFormat**](../Model/.md)| format of the export file | |
| **title** | **string**| title for the pdf export | |
| **select** | **string**| LastName,AccessExitDate,PersonIdInternal | |
| **access_domain_id** | **string**| accessDomainId to get persons by | |
| **expand** | **string**| Entity($select&#x3D;Column1,Column2) | [optional] |
| **filter** | **string**| Fullname eq &#39;Test&#39; | [optional] |
| **search_string** | **string**| Fulltext search on all string, int and date fields that are selected with $select and $expand. | [optional] |
| **count** | **bool**| adds total possible results to the response | [optional] [default to true] |
| **orderby** | **string**| LastName desc | [optional] |

### Return type

[**\Exos\ExosApi\Model\ExportResponse**](../Model/ExportResponse.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10ExportPersonsGet()`

```php
v10ExportPersonsGet($view_name, $columns_string, $file_name, $export_format, $title, $select, $person_type, $expand, $filter, $search_string, $count, $orderby, $search_string_logic): \Exos\ExosApi\Model\ExportResponse
```

Generate the person export.

Starts the generation of the person export in the background.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\ExportApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$view_name = 'view_name_example'; // string | name of the application view
$columns_string = 'columns_string_example'; // string | columns to be displayed in the export (separated by a comma)
$file_name = 'file_name_example'; // string | name of the export file
$export_format = new \Exos\ExosApi\Model\\Exos\ExosApi\Model\ExportFormat(); // \Exos\ExosApi\Model\ExportFormat | format of the export file
$title = 'title_example'; // string | title for the pdf export
$select = 'select_example'; // string | PersonId,ClientId
$person_type = new \Exos\ExosApi\Model\\Exos\ExosApi\Model\PersonType(); // \Exos\ExosApi\Model\PersonType | the person type
$expand = 'expand_example'; // string | PersonBaseData($select=LastName,FirstName)
$filter = 'filter_example'; // string | startswith(PersonBaseData/LastName,'a')
$search_string = 'search_string_example'; // string | Fulltext search on all string, int and date fields that are selected with $select and $expand.
$count = true; // bool | adds total possible results to the response
$orderby = 'orderby_example'; // string | PersonBaseData/LastName desc
$search_string_logic = 'SelectedFields'; // string | Logic that is to be applied to the search string. If no value is provided: 'SelectedFields' is applied. ('SelectedFields': Filter in fields provided in the select/expand clause, 'BasicFields': filter only in fullname, personal nr, badge filtering, 'PersonalNumberOnly': only filter in personal number)

try {
    $result = $apiInstance->v10ExportPersonsGet($view_name, $columns_string, $file_name, $export_format, $title, $select, $person_type, $expand, $filter, $search_string, $count, $orderby, $search_string_logic);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ExportApi->v10ExportPersonsGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **view_name** | **string**| name of the application view | |
| **columns_string** | **string**| columns to be displayed in the export (separated by a comma) | |
| **file_name** | **string**| name of the export file | |
| **export_format** | [**\Exos\ExosApi\Model\ExportFormat**](../Model/.md)| format of the export file | |
| **title** | **string**| title for the pdf export | |
| **select** | **string**| PersonId,ClientId | |
| **person_type** | [**\Exos\ExosApi\Model\PersonType**](../Model/.md)| the person type | [optional] |
| **expand** | **string**| PersonBaseData($select&#x3D;LastName,FirstName) | [optional] |
| **filter** | **string**| startswith(PersonBaseData/LastName,&#39;a&#39;) | [optional] |
| **search_string** | **string**| Fulltext search on all string, int and date fields that are selected with $select and $expand. | [optional] |
| **count** | **bool**| adds total possible results to the response | [optional] [default to true] |
| **orderby** | **string**| PersonBaseData/LastName desc | [optional] |
| **search_string_logic** | **string**| Logic that is to be applied to the search string. If no value is provided: &#39;SelectedFields&#39; is applied. (&#39;SelectedFields&#39;: Filter in fields provided in the select/expand clause, &#39;BasicFields&#39;: filter only in fullname, personal nr, badge filtering, &#39;PersonalNumberOnly&#39;: only filter in personal number) | [optional] [default to &#39;SelectedFields&#39;] |

### Return type

[**\Exos\ExosApi\Model\ExportResponse**](../Model/ExportResponse.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10ExportVisitsVisitorVisitGet()`

```php
v10ExportVisitsVisitorVisitGet($columns_string, $file_name, $export_format, $title, $select, $expand, $filter, $search_string, $count, $orderby): \Exos\ExosApi\Model\ExportResponse
```

Generate the visitor visit export.

Starts the generation of the visitor visit export in the background.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\ExportApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$columns_string = 'columns_string_example'; // string | columns to be displayed in the export (separated by a comma)
$file_name = 'file_name_example'; // string | name of the export file
$export_format = new \Exos\ExosApi\Model\\Exos\ExosApi\Model\ExportFormat(); // \Exos\ExosApi\Model\ExportFormat | format of the export file
$title = 'title_example'; // string | title for the pdf export
$select = 'select_example'; // string | Company,HasAccessRight,Location,HostLastName,DateIn
$expand = 'expand_example'; // string | Entity($select=Column1,Column2)
$filter = 'filter_example'; // string | startswith(HostLastName,'Smith')
$search_string = 'search_string_example'; // string | Fulltext search on all string, int and date fields that are selected with $select and $expand.
$count = true; // bool | adds total possible results to the response
$orderby = 'orderby_example'; // string | DateIn asc

try {
    $result = $apiInstance->v10ExportVisitsVisitorVisitGet($columns_string, $file_name, $export_format, $title, $select, $expand, $filter, $search_string, $count, $orderby);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ExportApi->v10ExportVisitsVisitorVisitGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **columns_string** | **string**| columns to be displayed in the export (separated by a comma) | |
| **file_name** | **string**| name of the export file | |
| **export_format** | [**\Exos\ExosApi\Model\ExportFormat**](../Model/.md)| format of the export file | |
| **title** | **string**| title for the pdf export | |
| **select** | **string**| Company,HasAccessRight,Location,HostLastName,DateIn | |
| **expand** | **string**| Entity($select&#x3D;Column1,Column2) | [optional] |
| **filter** | **string**| startswith(HostLastName,&#39;Smith&#39;) | [optional] |
| **search_string** | **string**| Fulltext search on all string, int and date fields that are selected with $select and $expand. | [optional] |
| **count** | **bool**| adds total possible results to the response | [optional] [default to true] |
| **orderby** | **string**| DateIn asc | [optional] |

### Return type

[**\Exos\ExosApi\Model\ExportResponse**](../Model/ExportResponse.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
