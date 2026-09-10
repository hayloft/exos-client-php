# Exos\ExosApi\LocationApi

All URIs are relative to /ExosApi/api, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**v10AuthorisedLocationsGet()**](LocationApi.md#v10AuthorisedLocationsGet) | **GET** /v1.0/authorisedLocations | get a list of authorised locations |
| [**v10LocationAuthorisationsLoginIdGet()**](LocationApi.md#v10LocationAuthorisationsLoginIdGet) | **GET** /v1.0/locationAuthorisations/{loginId} | gets the authorised locations of a specific user |
| [**v10LocationAuthorisationsUpdatePost()**](LocationApi.md#v10LocationAuthorisationsUpdatePost) | **POST** /v1.0/locationAuthorisations/update | updates a login location authorisation |
| [**v10LocationsCreatePost()**](LocationApi.md#v10LocationsCreatePost) | **POST** /v1.0/locations/create | create a new location |
| [**v10LocationsGet()**](LocationApi.md#v10LocationsGet) | **GET** /v1.0/locations | get a list of locations |
| [**v10LocationsLocationIdDeletePost()**](LocationApi.md#v10LocationsLocationIdDeletePost) | **POST** /v1.0/locations/{locationId}/delete | delete a location |
| [**v10LocationsLocationIdSetAsMyDefaultPost()**](LocationApi.md#v10LocationsLocationIdSetAsMyDefaultPost) | **POST** /v1.0/locations/{locationId}/setAsMyDefault | set a default location |
| [**v10LocationsLocationIdUpdatePost()**](LocationApi.md#v10LocationsLocationIdUpdatePost) | **POST** /v1.0/locations/{locationId}/update | update a location |
| [**v10WorkstationsCreatePost()**](LocationApi.md#v10WorkstationsCreatePost) | **POST** /v1.0/workstations/create | create a new workstation |
| [**v10WorkstationsWorkstationIdDeletePost()**](LocationApi.md#v10WorkstationsWorkstationIdDeletePost) | **POST** /v1.0/workstations/{workstationId}/delete | delete a workstation |
| [**v10WorkstationsWorkstationIdUpdatePost()**](LocationApi.md#v10WorkstationsWorkstationIdUpdatePost) | **POST** /v1.0/workstations/{workstationId}/update | update a workstation |


## `v10AuthorisedLocationsGet()`

```php
v10AuthorisedLocationsGet($expand, $filter, $search_string, $count, $orderby, $select, $skip, $top): \Exos\ExosApi\Model\GetOdataLocationAuthorisationsOutputWithTime
```

get a list of authorised locations

Be aware that a query made here can return up to 10000 records. If you need more, please use the built in paging functionality with $top and $skip. http://www.asp.net/web-api/overview/odata-support-in-aspnet-web-api/supporting-odata-query-options.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\LocationApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$expand = 'expand_example'; // string | no expand possible
$filter = 'filter_example'; // string | 
$search_string = 'search_string_example'; // string | Fulltext search on all string, int and date fields that are selected with $select and $expand.
$count = true; // bool | adds total possible results to the response
$orderby = 'orderby_example'; // string | 
$select = 'select_example'; // string | 
$skip = 56; // int | skips the first x entries of the response(paging)
$top = 1000; // int | limits the number of returned records.

try {
    $result = $apiInstance->v10AuthorisedLocationsGet($expand, $filter, $search_string, $count, $orderby, $select, $skip, $top);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling LocationApi->v10AuthorisedLocationsGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **expand** | **string**| no expand possible | [optional] |
| **filter** | **string**|  | [optional] |
| **search_string** | **string**| Fulltext search on all string, int and date fields that are selected with $select and $expand. | [optional] |
| **count** | **bool**| adds total possible results to the response | [optional] [default to true] |
| **orderby** | **string**|  | [optional] |
| **select** | **string**|  | [optional] |
| **skip** | **int**| skips the first x entries of the response(paging) | [optional] |
| **top** | **int**| limits the number of returned records. | [optional] [default to 1000] |

### Return type

[**\Exos\ExosApi\Model\GetOdataLocationAuthorisationsOutputWithTime**](../Model/GetOdataLocationAuthorisationsOutputWithTime.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10LocationAuthorisationsLoginIdGet()`

```php
v10LocationAuthorisationsLoginIdGet($login_id): \Exos\ExosApi\Model\GetLocationAuthorisationsOutputWithTime
```

gets the authorised locations of a specific user

gets the authorised locations of a specific user.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\LocationApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$login_id = 'login_id_example'; // string | id of login

try {
    $result = $apiInstance->v10LocationAuthorisationsLoginIdGet($login_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling LocationApi->v10LocationAuthorisationsLoginIdGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **login_id** | **string**| id of login | |

### Return type

[**\Exos\ExosApi\Model\GetLocationAuthorisationsOutputWithTime**](../Model/GetLocationAuthorisationsOutputWithTime.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10LocationAuthorisationsUpdatePost()`

```php
v10LocationAuthorisationsUpdatePost($update_location_authorisation_input): \Exos\ExosApi\Model\VoidResponseOutput
```

updates a login location authorisation

updates a login location authorisation.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\LocationApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$update_location_authorisation_input = new \Exos\ExosApi\Model\UpdateLocationAuthorisationInput(); // \Exos\ExosApi\Model\UpdateLocationAuthorisationInput | location authorisation

try {
    $result = $apiInstance->v10LocationAuthorisationsUpdatePost($update_location_authorisation_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling LocationApi->v10LocationAuthorisationsUpdatePost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **update_location_authorisation_input** | [**\Exos\ExosApi\Model\UpdateLocationAuthorisationInput**](../Model/UpdateLocationAuthorisationInput.md)| location authorisation | |

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

## `v10LocationsCreatePost()`

```php
v10LocationsCreatePost($create_location_input): \Exos\ExosApi\Model\CreateLocationOutput
```

create a new location

creates a new location.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\LocationApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$create_location_input = new \Exos\ExosApi\Model\CreateLocationInput(); // \Exos\ExosApi\Model\CreateLocationInput | location to create

try {
    $result = $apiInstance->v10LocationsCreatePost($create_location_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling LocationApi->v10LocationsCreatePost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **create_location_input** | [**\Exos\ExosApi\Model\CreateLocationInput**](../Model/CreateLocationInput.md)| location to create | |

### Return type

[**\Exos\ExosApi\Model\CreateLocationOutput**](../Model/CreateLocationOutput.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10LocationsGet()`

```php
v10LocationsGet($expand, $filter, $search_string, $count, $orderby, $select, $skip, $top): \Exos\ExosApi\Model\GetLocationsOutputWithTime
```

get a list of locations

Be aware that a query made here can return up to 10000 records. If you need more, please use the built in paging functionality with $top and $skip. http://www.asp.net/web-api/overview/odata-support-in-aspnet-web-api/supporting-odata-query-options.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\LocationApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$expand = 'expand_example'; // string | Workstations, AccessDomains, DefaultProfiles
$filter = 'filter_example'; // string | 
$search_string = 'search_string_example'; // string | Fulltext search on all string, int and date fields that are selected with $select and $expand.
$count = true; // bool | adds total possible results to the response
$orderby = 'orderby_example'; // string | 
$select = 'select_example'; // string | 
$skip = 56; // int | skips the first x entries of the response(paging)
$top = 1000; // int | limits the number of returned records.

try {
    $result = $apiInstance->v10LocationsGet($expand, $filter, $search_string, $count, $orderby, $select, $skip, $top);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling LocationApi->v10LocationsGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **expand** | **string**| Workstations, AccessDomains, DefaultProfiles | [optional] |
| **filter** | **string**|  | [optional] |
| **search_string** | **string**| Fulltext search on all string, int and date fields that are selected with $select and $expand. | [optional] |
| **count** | **bool**| adds total possible results to the response | [optional] [default to true] |
| **orderby** | **string**|  | [optional] |
| **select** | **string**|  | [optional] |
| **skip** | **int**| skips the first x entries of the response(paging) | [optional] |
| **top** | **int**| limits the number of returned records. | [optional] [default to 1000] |

### Return type

[**\Exos\ExosApi\Model\GetLocationsOutputWithTime**](../Model/GetLocationsOutputWithTime.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10LocationsLocationIdDeletePost()`

```php
v10LocationsLocationIdDeletePost($location_id): \Exos\ExosApi\Model\VoidResponseOutput
```

delete a location

deletes a location.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\LocationApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$location_id = 'location_id_example'; // string | id of location

try {
    $result = $apiInstance->v10LocationsLocationIdDeletePost($location_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling LocationApi->v10LocationsLocationIdDeletePost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **location_id** | **string**| id of location | |

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

## `v10LocationsLocationIdSetAsMyDefaultPost()`

```php
v10LocationsLocationIdSetAsMyDefaultPost($location_id): \Exos\ExosApi\Model\VoidResponseOutput
```

set a default location

old default location is replaced with new one

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\LocationApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$location_id = 'location_id_example'; // string | id of location

try {
    $result = $apiInstance->v10LocationsLocationIdSetAsMyDefaultPost($location_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling LocationApi->v10LocationsLocationIdSetAsMyDefaultPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **location_id** | **string**| id of location | |

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

## `v10LocationsLocationIdUpdatePost()`

```php
v10LocationsLocationIdUpdatePost($location_id, $update_location_input): \Exos\ExosApi\Model\UpdateLocationOutput
```

update a location

updates a location.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\LocationApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$location_id = 'location_id_example'; // string | id of location
$update_location_input = new \Exos\ExosApi\Model\UpdateLocationInput(); // \Exos\ExosApi\Model\UpdateLocationInput | location to update

try {
    $result = $apiInstance->v10LocationsLocationIdUpdatePost($location_id, $update_location_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling LocationApi->v10LocationsLocationIdUpdatePost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **location_id** | **string**| id of location | |
| **update_location_input** | [**\Exos\ExosApi\Model\UpdateLocationInput**](../Model/UpdateLocationInput.md)| location to update | |

### Return type

[**\Exos\ExosApi\Model\UpdateLocationOutput**](../Model/UpdateLocationOutput.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10WorkstationsCreatePost()`

```php
v10WorkstationsCreatePost($create_workstation_input): \Exos\ExosApi\Model\CreateWorkstationOutput
```

create a new workstation

creates a new workstation.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\LocationApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$create_workstation_input = new \Exos\ExosApi\Model\CreateWorkstationInput(); // \Exos\ExosApi\Model\CreateWorkstationInput | workstation to create

try {
    $result = $apiInstance->v10WorkstationsCreatePost($create_workstation_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling LocationApi->v10WorkstationsCreatePost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **create_workstation_input** | [**\Exos\ExosApi\Model\CreateWorkstationInput**](../Model/CreateWorkstationInput.md)| workstation to create | |

### Return type

[**\Exos\ExosApi\Model\CreateWorkstationOutput**](../Model/CreateWorkstationOutput.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10WorkstationsWorkstationIdDeletePost()`

```php
v10WorkstationsWorkstationIdDeletePost($workstation_id): \Exos\ExosApi\Model\VoidResponseOutput
```

delete a workstation

deletes a workstation.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\LocationApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$workstation_id = 'workstation_id_example'; // string | id of workstation

try {
    $result = $apiInstance->v10WorkstationsWorkstationIdDeletePost($workstation_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling LocationApi->v10WorkstationsWorkstationIdDeletePost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **workstation_id** | **string**| id of workstation | |

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

## `v10WorkstationsWorkstationIdUpdatePost()`

```php
v10WorkstationsWorkstationIdUpdatePost($workstation_id, $update_workstation_input): \Exos\ExosApi\Model\UpdateWorkstationOutput
```

update a workstation

updates a workstation.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\LocationApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$workstation_id = 'workstation_id_example'; // string | id of workstation
$update_workstation_input = new \Exos\ExosApi\Model\UpdateWorkstationInput(); // \Exos\ExosApi\Model\UpdateWorkstationInput | workstation to update

try {
    $result = $apiInstance->v10WorkstationsWorkstationIdUpdatePost($workstation_id, $update_workstation_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling LocationApi->v10WorkstationsWorkstationIdUpdatePost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **workstation_id** | **string**| id of workstation | |
| **update_workstation_input** | [**\Exos\ExosApi\Model\UpdateWorkstationInput**](../Model/UpdateWorkstationInput.md)| workstation to update | |

### Return type

[**\Exos\ExosApi\Model\UpdateWorkstationOutput**](../Model/UpdateWorkstationOutput.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
