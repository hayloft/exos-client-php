# Exos\ExosApi\BlacklistApi

All URIs are relative to /ExosApi/api, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**v10BlacklistCreatePost()**](BlacklistApi.md#v10BlacklistCreatePost) | **POST** /v1.0/blacklist/create | blacklists a person |
| [**v10BlacklistDeletePost()**](BlacklistApi.md#v10BlacklistDeletePost) | **POST** /v1.0/blacklist/delete | removes a person from the blacklist |
| [**v10BlacklistGet()**](BlacklistApi.md#v10BlacklistGet) | **GET** /v1.0/blacklist | get all blacklist entries in the system |
| [**v10BlacklistPersonIdIsListedGet()**](BlacklistApi.md#v10BlacklistPersonIdIsListedGet) | **GET** /v1.0/blacklist/{personId}/isListed | returns whether the person is on the blacklist or not |


## `v10BlacklistCreatePost()`

```php
v10BlacklistCreatePost($blacklist_person_input): \Exos\ExosApi\Model\BlacklistPersonOutput
```

blacklists a person

<p>adds a person to the blacklist. The person is uniquely identified by LastName and optional FirstName and BirthDate. If FirstName and BirthDate is not passed, the values are counted as wildcard and any person with the given LastName is blacklisted.</p>

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\BlacklistApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$blacklist_person_input = new \Exos\ExosApi\Model\BlacklistPersonInput(); // \Exos\ExosApi\Model\BlacklistPersonInput

try {
    $result = $apiInstance->v10BlacklistCreatePost($blacklist_person_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling BlacklistApi->v10BlacklistCreatePost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **blacklist_person_input** | [**\Exos\ExosApi\Model\BlacklistPersonInput**](../Model/BlacklistPersonInput.md)|  | |

### Return type

[**\Exos\ExosApi\Model\BlacklistPersonOutput**](../Model/BlacklistPersonOutput.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10BlacklistDeletePost()`

```php
v10BlacklistDeletePost($delete_blacklist_input): \Exos\ExosApi\Model\VoidResponseOutput
```

removes a person from the blacklist

<p>removes a person from the blacklist. A Person is unique by LastName, FirstName and BirthDate.</p>

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\BlacklistApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$delete_blacklist_input = new \Exos\ExosApi\Model\DeleteBlacklistInput(); // \Exos\ExosApi\Model\DeleteBlacklistInput

try {
    $result = $apiInstance->v10BlacklistDeletePost($delete_blacklist_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling BlacklistApi->v10BlacklistDeletePost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **delete_blacklist_input** | [**\Exos\ExosApi\Model\DeleteBlacklistInput**](../Model/DeleteBlacklistInput.md)|  | |

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

## `v10BlacklistGet()`

```php
v10BlacklistGet($last_name, $first_name, $birth_date, $expand, $filter, $search_string, $count, $orderby, $select, $skip, $top): \Exos\ExosApi\Model\GetBlacklistOutput
```

get all blacklist entries in the system

Be aware that a query made here can return up to 10000 records. If you need more, please use the built in paging functionality with $top and $skip.<br /> http://www.asp.net/web-api/overview/odata-support-in-aspnet-web-api/supporting-odata-query-options. <br /> The provided searchString will result in a fulltext search on all selected fields. If the passed value is encapsulated with quotes(\"), it will be treated as an exact match search, otherwise the passed value will be an OR search over all keywords(splitted by space character).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\BlacklistApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$last_name = 'last_name_example'; // string | person lastname
$first_name = 'first_name_example'; // string | person firstname
$birth_date = new \DateTime('2013-10-20T19:20:30+01:00'); // \DateTime | person birthdate
$expand = 'expand_example'; // string | 
$filter = 'filter_example'; // string | 
$search_string = 'search_string_example'; // string | Fulltext search on all string, int and date fields that are selected with $select and $expand.
$count = true; // bool | adds total possible results to the response
$orderby = 'orderby_example'; // string | 
$select = 'select_example'; // string | 
$skip = 56; // int | skips the first x entries of the response(paging)
$top = 1000; // int | limits the number of returned records.

try {
    $result = $apiInstance->v10BlacklistGet($last_name, $first_name, $birth_date, $expand, $filter, $search_string, $count, $orderby, $select, $skip, $top);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling BlacklistApi->v10BlacklistGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **last_name** | **string**| person lastname | [optional] |
| **first_name** | **string**| person firstname | [optional] |
| **birth_date** | **\DateTime**| person birthdate | [optional] |
| **expand** | **string**|  | [optional] |
| **filter** | **string**|  | [optional] |
| **search_string** | **string**| Fulltext search on all string, int and date fields that are selected with $select and $expand. | [optional] |
| **count** | **bool**| adds total possible results to the response | [optional] [default to true] |
| **orderby** | **string**|  | [optional] |
| **select** | **string**|  | [optional] |
| **skip** | **int**| skips the first x entries of the response(paging) | [optional] |
| **top** | **int**| limits the number of returned records. | [optional] [default to 1000] |

### Return type

[**\Exos\ExosApi\Model\GetBlacklistOutput**](../Model/GetBlacklistOutput.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10BlacklistPersonIdIsListedGet()`

```php
v10BlacklistPersonIdIsListedGet($person_id): \Exos\ExosApi\Model\IsOnBlacklistOutputWithTime
```

returns whether the person is on the blacklist or not

returns whether the person is on the blacklist or not

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\BlacklistApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$person_id = 'person_id_example'; // string | id of person

try {
    $result = $apiInstance->v10BlacklistPersonIdIsListedGet($person_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling BlacklistApi->v10BlacklistPersonIdIsListedGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **person_id** | **string**| id of person | |

### Return type

[**\Exos\ExosApi\Model\IsOnBlacklistOutputWithTime**](../Model/IsOnBlacklistOutputWithTime.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
