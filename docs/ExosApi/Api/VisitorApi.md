# Exos\ExosApi\VisitorApi

All URIs are relative to /ExosApi/api, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**v10VisitorCompaniesCompanyIdDeletePost()**](VisitorApi.md#v10VisitorCompaniesCompanyIdDeletePost) | **POST** /v1.0/visitorCompanies/{companyId}/delete | deletes a existing visitor company |
| [**v10VisitorCompaniesCompanyIdUpdatePost()**](VisitorApi.md#v10VisitorCompaniesCompanyIdUpdatePost) | **POST** /v1.0/visitorCompanies/{companyId}/update | updates a existing visitor company |
| [**v10VisitorCompaniesCreatePost()**](VisitorApi.md#v10VisitorCompaniesCreatePost) | **POST** /v1.0/visitorCompanies/create | create a new visitor company |
| [**v10VisitorCompaniesGet()**](VisitorApi.md#v10VisitorCompaniesGet) | **GET** /v1.0/visitorCompanies | get a list of visitor companies |
| [**v10VisitorCompanyDepartementsCreatePost()**](VisitorApi.md#v10VisitorCompanyDepartementsCreatePost) | **POST** /v1.0/visitorCompanyDepartements/create | create a new visitor company departement |
| [**v10VisitorCompanyDepartementsDepartementIdDeletePost()**](VisitorApi.md#v10VisitorCompanyDepartementsDepartementIdDeletePost) | **POST** /v1.0/visitorCompanyDepartements/{departementId}/delete | deletes a existing visitor company departement |
| [**v10VisitorCompanyDepartementsDepartementIdUpdatePost()**](VisitorApi.md#v10VisitorCompanyDepartementsDepartementIdUpdatePost) | **POST** /v1.0/visitorCompanyDepartements/{departementId}/update | updates a existing visitor company departement |
| [**v10VisitorDetailsPersonIdVisitIdGet()**](VisitorApi.md#v10VisitorDetailsPersonIdVisitIdGet) | **GET** /v1.0/visitorDetails/{personId}/{visitId} | get the details of one Visitor |
| [**v10VisitorVisitsGet()**](VisitorApi.md#v10VisitorVisitsGet) | **GET** /v1.0/visitorVisits | get a list of visitors with visit by odata query options |
| [**v10VisitorsGet()**](VisitorApi.md#v10VisitorsGet) | **GET** /v1.0/visitors | get a list of visitors by odata query options |
| [**v10VisitorsPersonIdAnyVisitStatusGet()**](VisitorApi.md#v10VisitorsPersonIdAnyVisitStatusGet) | **GET** /v1.0/visitors/{personId}/anyVisitStatus | Get if any visits for each status exists |
| [**v10VisitorsPersonIdDeletePost()**](VisitorApi.md#v10VisitorsPersonIdDeletePost) | **POST** /v1.0/visitors/{personId}/delete | deletes an existing visitor |
| [**v10VisitorsPersonIdFunctionsSettingGet()**](VisitorApi.md#v10VisitorsPersonIdFunctionsSettingGet) | **GET** /v1.0/visitors/{personId}/functionsSetting | get functions setting for a visitor |
| [**v10VisitorsSearchAllPost()**](VisitorApi.md#v10VisitorsSearchAllPost) | **POST** /v1.0/visitors/searchAll | search all visitors |
| [**v10VisitorsSearchPost()**](VisitorApi.md#v10VisitorsSearchPost) | **POST** /v1.0/visitors/search | search visitors |


## `v10VisitorCompaniesCompanyIdDeletePost()`

```php
v10VisitorCompaniesCompanyIdDeletePost($company_id): \Exos\ExosApi\Model\VoidResponseOutput
```

deletes a existing visitor company

deletes a existing visitor company.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\VisitorApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$company_id = 'company_id_example'; // string | id of company

try {
    $result = $apiInstance->v10VisitorCompaniesCompanyIdDeletePost($company_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling VisitorApi->v10VisitorCompaniesCompanyIdDeletePost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **company_id** | **string**| id of company | |

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

## `v10VisitorCompaniesCompanyIdUpdatePost()`

```php
v10VisitorCompaniesCompanyIdUpdatePost($company_id, $update_visitor_company_input): \Exos\ExosApi\Model\UpdateVisitorCompanyOutput
```

updates a existing visitor company

updates a existing visitor company.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\VisitorApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$company_id = 'company_id_example'; // string | id of company
$update_visitor_company_input = new \Exos\ExosApi\Model\UpdateVisitorCompanyInput(); // \Exos\ExosApi\Model\UpdateVisitorCompanyInput | visitor company to update

try {
    $result = $apiInstance->v10VisitorCompaniesCompanyIdUpdatePost($company_id, $update_visitor_company_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling VisitorApi->v10VisitorCompaniesCompanyIdUpdatePost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **company_id** | **string**| id of company | |
| **update_visitor_company_input** | [**\Exos\ExosApi\Model\UpdateVisitorCompanyInput**](../Model/UpdateVisitorCompanyInput.md)| visitor company to update | |

### Return type

[**\Exos\ExosApi\Model\UpdateVisitorCompanyOutput**](../Model/UpdateVisitorCompanyOutput.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10VisitorCompaniesCreatePost()`

```php
v10VisitorCompaniesCreatePost($create_visitor_company_input): \Exos\ExosApi\Model\CreateVisitorCompanyOutput
```

create a new visitor company

create a new visitor company.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\VisitorApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$create_visitor_company_input = new \Exos\ExosApi\Model\CreateVisitorCompanyInput(); // \Exos\ExosApi\Model\CreateVisitorCompanyInput | visitor company to create

try {
    $result = $apiInstance->v10VisitorCompaniesCreatePost($create_visitor_company_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling VisitorApi->v10VisitorCompaniesCreatePost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **create_visitor_company_input** | [**\Exos\ExosApi\Model\CreateVisitorCompanyInput**](../Model/CreateVisitorCompanyInput.md)| visitor company to create | |

### Return type

[**\Exos\ExosApi\Model\CreateVisitorCompanyOutput**](../Model/CreateVisitorCompanyOutput.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10VisitorCompaniesGet()`

```php
v10VisitorCompaniesGet($expand, $filter, $search_string, $count, $orderby, $select, $skip, $top): \Exos\ExosApi\Model\GetVisitorCompaniesOutputWithTime
```

get a list of visitor companies

Be aware that a query made here can return up to 10000 records. If you need more, please use the built in paging functionality with $top and $skip. http://www.asp.net/web-api/overview/odata-support-in-aspnet-web-api/supporting-odata-query-options.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\VisitorApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$expand = 'expand_example'; // string | Departements
$filter = 'filter_example'; // string | 
$search_string = 'search_string_example'; // string | Fulltext search on all string, int and date fields that are selected with $select and $expand.
$count = true; // bool | adds total possible results to the response
$orderby = 'orderby_example'; // string | 
$select = 'select_example'; // string | 
$skip = 56; // int | skips the first x entries of the response(paging)
$top = 1000; // int | limits the number of returned records.

try {
    $result = $apiInstance->v10VisitorCompaniesGet($expand, $filter, $search_string, $count, $orderby, $select, $skip, $top);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling VisitorApi->v10VisitorCompaniesGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **expand** | **string**| Departements | [optional] |
| **filter** | **string**|  | [optional] |
| **search_string** | **string**| Fulltext search on all string, int and date fields that are selected with $select and $expand. | [optional] |
| **count** | **bool**| adds total possible results to the response | [optional] [default to true] |
| **orderby** | **string**|  | [optional] |
| **select** | **string**|  | [optional] |
| **skip** | **int**| skips the first x entries of the response(paging) | [optional] |
| **top** | **int**| limits the number of returned records. | [optional] [default to 1000] |

### Return type

[**\Exos\ExosApi\Model\GetVisitorCompaniesOutputWithTime**](../Model/GetVisitorCompaniesOutputWithTime.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10VisitorCompanyDepartementsCreatePost()`

```php
v10VisitorCompanyDepartementsCreatePost($create_visitor_company_departement_input): \Exos\ExosApi\Model\CreateVisitorCompanyDepartementOutput
```

create a new visitor company departement

create a new visitor company departement.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\VisitorApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$create_visitor_company_departement_input = new \Exos\ExosApi\Model\CreateVisitorCompanyDepartementInput(); // \Exos\ExosApi\Model\CreateVisitorCompanyDepartementInput | visitor company departement to create

try {
    $result = $apiInstance->v10VisitorCompanyDepartementsCreatePost($create_visitor_company_departement_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling VisitorApi->v10VisitorCompanyDepartementsCreatePost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **create_visitor_company_departement_input** | [**\Exos\ExosApi\Model\CreateVisitorCompanyDepartementInput**](../Model/CreateVisitorCompanyDepartementInput.md)| visitor company departement to create | |

### Return type

[**\Exos\ExosApi\Model\CreateVisitorCompanyDepartementOutput**](../Model/CreateVisitorCompanyDepartementOutput.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10VisitorCompanyDepartementsDepartementIdDeletePost()`

```php
v10VisitorCompanyDepartementsDepartementIdDeletePost($departement_id): \Exos\ExosApi\Model\VoidResponseOutput
```

deletes a existing visitor company departement

deletes a existing visitor company departement

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\VisitorApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$departement_id = 'departement_id_example'; // string | id of company departement

try {
    $result = $apiInstance->v10VisitorCompanyDepartementsDepartementIdDeletePost($departement_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling VisitorApi->v10VisitorCompanyDepartementsDepartementIdDeletePost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **departement_id** | **string**| id of company departement | |

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

## `v10VisitorCompanyDepartementsDepartementIdUpdatePost()`

```php
v10VisitorCompanyDepartementsDepartementIdUpdatePost($departement_id, $update_visitor_company_departement_input): \Exos\ExosApi\Model\UpdateVisitorCompanyDepartementOutput
```

updates a existing visitor company departement

updates a existing visitor company departement.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\VisitorApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$departement_id = 'departement_id_example'; // string | id of company departement
$update_visitor_company_departement_input = new \Exos\ExosApi\Model\UpdateVisitorCompanyDepartementInput(); // \Exos\ExosApi\Model\UpdateVisitorCompanyDepartementInput | visitor company departement to update

try {
    $result = $apiInstance->v10VisitorCompanyDepartementsDepartementIdUpdatePost($departement_id, $update_visitor_company_departement_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling VisitorApi->v10VisitorCompanyDepartementsDepartementIdUpdatePost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **departement_id** | **string**| id of company departement | |
| **update_visitor_company_departement_input** | [**\Exos\ExosApi\Model\UpdateVisitorCompanyDepartementInput**](../Model/UpdateVisitorCompanyDepartementInput.md)| visitor company departement to update | |

### Return type

[**\Exos\ExosApi\Model\UpdateVisitorCompanyDepartementOutput**](../Model/UpdateVisitorCompanyDepartementOutput.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10VisitorDetailsPersonIdVisitIdGet()`

```php
v10VisitorDetailsPersonIdVisitIdGet($person_id, $visit_id): \Exos\ExosApi\Model\GetVisitorDetailsOutputWithTime
```

get the details of one Visitor

With this end point you can get the information of a visitor, also theire access rights, free fields and Badges.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\VisitorApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$person_id = 'person_id_example'; // string | id of person
$visit_id = 'visit_id_example'; // string | id of visit

try {
    $result = $apiInstance->v10VisitorDetailsPersonIdVisitIdGet($person_id, $visit_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling VisitorApi->v10VisitorDetailsPersonIdVisitIdGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **person_id** | **string**| id of person | |
| **visit_id** | **string**| id of visit | |

### Return type

[**\Exos\ExosApi\Model\GetVisitorDetailsOutputWithTime**](../Model/GetVisitorDetailsOutputWithTime.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10VisitorVisitsGet()`

```php
v10VisitorVisitsGet($expand, $filter, $search_string, $count, $orderby, $select, $skip, $top): \Exos\ExosApi\Model\GetVisitorVisitsOutput
```

get a list of visitors with visit by odata query options

Be aware that a query made here can return up to 10000 records. If you need more, please use the built in paging functionality with $top and $skip.<br /> http://www.asp.net/web-api/overview/odata-support-in-aspnet-web-api/supporting-odata-query-options. <br /> The provided searchString will result in a fulltext search on all selected fields. If the passed value is encapsulated with quotes(\"), it will be treated as an exact match search, otherwise the passed value will be an OR search over all keywords(splitted by space character).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\VisitorApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$expand = 'expand_example'; // string | no expand
$filter = 'filter_example'; // string | FullName eq 'Hans Meier'
$search_string = 'search_string_example'; // string | Fulltext search on all string, int and date fields that are selected with $select.
$count = true; // bool | adds total possible results to the response
$orderby = 'orderby_example'; // string | FullName desc
$select = 'select_example'; // string | FullName
$skip = 56; // int | skips the first x entries of the response(paging)
$top = 1000; // int | limits the number of returned records.

try {
    $result = $apiInstance->v10VisitorVisitsGet($expand, $filter, $search_string, $count, $orderby, $select, $skip, $top);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling VisitorApi->v10VisitorVisitsGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **expand** | **string**| no expand | [optional] |
| **filter** | **string**| FullName eq &#39;Hans Meier&#39; | [optional] |
| **search_string** | **string**| Fulltext search on all string, int and date fields that are selected with $select. | [optional] |
| **count** | **bool**| adds total possible results to the response | [optional] [default to true] |
| **orderby** | **string**| FullName desc | [optional] |
| **select** | **string**| FullName | [optional] |
| **skip** | **int**| skips the first x entries of the response(paging) | [optional] |
| **top** | **int**| limits the number of returned records. | [optional] [default to 1000] |

### Return type

[**\Exos\ExosApi\Model\GetVisitorVisitsOutput**](../Model/GetVisitorVisitsOutput.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10VisitorsGet()`

```php
v10VisitorsGet($distinct_by_person_id, $expand, $filter, $search_string, $count, $orderby, $select, $skip, $top): \Exos\ExosApi\Model\GetVisitorsOutput
```

get a list of visitors by odata query options

Be aware that a query made here can return up to 10000 records. If you need more, please use the built in paging functionality with $top and $skip.<br /> http://www.asp.net/web-api/overview/odata-support-in-aspnet-web-api/supporting-odata-query-options. <br /> The provided searchString will result in a fulltext search on all selected fields. If the passed value is encapsulated with quotes(\"), it will be treated as an exact match search, otherwise the passed value will be an OR search over all keywords(splitted by space character).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\VisitorApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$distinct_by_person_id = True; // bool | distinct by personId
$expand = 'expand_example'; // string | no expand
$filter = 'filter_example'; // string | FullName eq 'Hans Meier'
$search_string = 'search_string_example'; // string | Fulltext search on all string, int and date fields that are selected with $select.
$count = true; // bool | adds total possible results to the response
$orderby = 'orderby_example'; // string | FullName desc
$select = 'select_example'; // string | FullName
$skip = 56; // int | skips the first x entries of the response(paging)
$top = 1000; // int | limits the number of returned records.

try {
    $result = $apiInstance->v10VisitorsGet($distinct_by_person_id, $expand, $filter, $search_string, $count, $orderby, $select, $skip, $top);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling VisitorApi->v10VisitorsGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **distinct_by_person_id** | **bool**| distinct by personId | [optional] |
| **expand** | **string**| no expand | [optional] |
| **filter** | **string**| FullName eq &#39;Hans Meier&#39; | [optional] |
| **search_string** | **string**| Fulltext search on all string, int and date fields that are selected with $select. | [optional] |
| **count** | **bool**| adds total possible results to the response | [optional] [default to true] |
| **orderby** | **string**| FullName desc | [optional] |
| **select** | **string**| FullName | [optional] |
| **skip** | **int**| skips the first x entries of the response(paging) | [optional] |
| **top** | **int**| limits the number of returned records. | [optional] [default to 1000] |

### Return type

[**\Exos\ExosApi\Model\GetVisitorsOutput**](../Model/GetVisitorsOutput.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10VisitorsPersonIdAnyVisitStatusGet()`

```php
v10VisitorsPersonIdAnyVisitStatusGet($person_id): \Exos\ExosApi\Model\VisitStatusOutputWithTime
```

Get if any visits for each status exists

Get if any visits for each status exists

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\VisitorApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$person_id = 'person_id_example'; // string | id of person (persontype: visitor)

try {
    $result = $apiInstance->v10VisitorsPersonIdAnyVisitStatusGet($person_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling VisitorApi->v10VisitorsPersonIdAnyVisitStatusGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **person_id** | **string**| id of person (persontype: visitor) | |

### Return type

[**\Exos\ExosApi\Model\VisitStatusOutputWithTime**](../Model/VisitStatusOutputWithTime.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10VisitorsPersonIdDeletePost()`

```php
v10VisitorsPersonIdDeletePost($person_id): \Exos\ExosApi\Model\VoidResponseOutput
```

deletes an existing visitor

deletes an existing visitor

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\VisitorApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$person_id = 'person_id_example'; // string | id of person

try {
    $result = $apiInstance->v10VisitorsPersonIdDeletePost($person_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling VisitorApi->v10VisitorsPersonIdDeletePost: ', $e->getMessage(), PHP_EOL;
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

## `v10VisitorsPersonIdFunctionsSettingGet()`

```php
v10VisitorsPersonIdFunctionsSettingGet($person_id, $visit_id, $setting_key): \Exos\ExosApi\Model\GetFunctionsSettingOutputWithTime
```

get functions setting for a visitor

returns functions setting for a visitor.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\VisitorApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$person_id = 'person_id_example'; // string | id of person (persontype: visitor)
$visit_id = 'visit_id_example'; // string | id of visit
$setting_key = 'setting_key_example'; // string | The key used to find the function ids in the settings

try {
    $result = $apiInstance->v10VisitorsPersonIdFunctionsSettingGet($person_id, $visit_id, $setting_key);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling VisitorApi->v10VisitorsPersonIdFunctionsSettingGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **person_id** | **string**| id of person (persontype: visitor) | |
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

## `v10VisitorsSearchAllPost()`

```php
v10VisitorsSearchAllPost($visitor_search_input): \Exos\ExosApi\Model\VisitorSearchDataOutputWithTime
```

search all visitors

Search all visitors

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\VisitorApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$visitor_search_input = new \Exos\ExosApi\Model\VisitorSearchInput(); // \Exos\ExosApi\Model\VisitorSearchInput | search information

try {
    $result = $apiInstance->v10VisitorsSearchAllPost($visitor_search_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling VisitorApi->v10VisitorsSearchAllPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **visitor_search_input** | [**\Exos\ExosApi\Model\VisitorSearchInput**](../Model/VisitorSearchInput.md)| search information | |

### Return type

[**\Exos\ExosApi\Model\VisitorSearchDataOutputWithTime**](../Model/VisitorSearchDataOutputWithTime.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10VisitorsSearchPost()`

```php
v10VisitorsSearchPost($visitor_search_input): \Exos\ExosApi\Model\VisitorSearchDataOutputWithTime
```

search visitors

Search visitor

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\VisitorApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$visitor_search_input = new \Exos\ExosApi\Model\VisitorSearchInput(); // \Exos\ExosApi\Model\VisitorSearchInput | search information

try {
    $result = $apiInstance->v10VisitorsSearchPost($visitor_search_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling VisitorApi->v10VisitorsSearchPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **visitor_search_input** | [**\Exos\ExosApi\Model\VisitorSearchInput**](../Model/VisitorSearchInput.md)| search information | |

### Return type

[**\Exos\ExosApi\Model\VisitorSearchDataOutputWithTime**](../Model/VisitorSearchDataOutputWithTime.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
