# Exos\ExosApi\TimeRegistrationsApi

All URIs are relative to /ExosApi/api, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**v10TimeRegistrationsPersonIdActivatePost()**](TimeRegistrationsApi.md#v10TimeRegistrationsPersonIdActivatePost) | **POST** /v1.0/timeRegistrations/{personId}/activate | activates a person for time registrations |
| [**v10TimeRegistrationsPersonIdCreatePost()**](TimeRegistrationsApi.md#v10TimeRegistrationsPersonIdCreatePost) | **POST** /v1.0/timeRegistrations/{personId}/create | creates a new time registration |
| [**v10TimeRegistrationsPersonIdDeactivatePost()**](TimeRegistrationsApi.md#v10TimeRegistrationsPersonIdDeactivatePost) | **POST** /v1.0/timeRegistrations/{personId}/deactivate | deactivate a person for time registrations |
| [**v10TimeRegistrationsPersonIdFromDateToDateGet()**](TimeRegistrationsApi.md#v10TimeRegistrationsPersonIdFromDateToDateGet) | **GET** /v1.0/timeRegistrations/{personId}/{fromDate}/{toDate} | gets time registrations for a specific person and time period |
| [**v10TimeRegistrationsPersonIdRegistrationTimeDeletePost()**](TimeRegistrationsApi.md#v10TimeRegistrationsPersonIdRegistrationTimeDeletePost) | **POST** /v1.0/timeRegistrations/{personId}/{registrationTime}/delete | deletes a specific time registration |
| [**v10TimeRegistrationsPersonIdSetEndOfDayPost()**](TimeRegistrationsApi.md#v10TimeRegistrationsPersonIdSetEndOfDayPost) | **POST** /v1.0/timeRegistrations/{personId}/setEndOfDay | sets the end of a day for a specific date and person |


## `v10TimeRegistrationsPersonIdActivatePost()`

```php
v10TimeRegistrationsPersonIdActivatePost($person_id): \Exos\ExosApi\Model\VoidResponseOutput
```

activates a person for time registrations

enables a person to register time on registration units configured for time registrations.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\TimeRegistrationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$person_id = 'person_id_example'; // string | The personId

try {
    $result = $apiInstance->v10TimeRegistrationsPersonIdActivatePost($person_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TimeRegistrationsApi->v10TimeRegistrationsPersonIdActivatePost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **person_id** | **string**| The personId | |

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

## `v10TimeRegistrationsPersonIdCreatePost()`

```php
v10TimeRegistrationsPersonIdCreatePost($person_id, $create_time_registration_input): \Exos\ExosApi\Model\VoidResponseOutput
```

creates a new time registration

At a specific time only one registration is allowed.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\TimeRegistrationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$person_id = 'person_id_example'; // string | The personId
$create_time_registration_input = new \Exos\ExosApi\Model\CreateTimeRegistrationInput(); // \Exos\ExosApi\Model\CreateTimeRegistrationInput | data passed to create the registration

try {
    $result = $apiInstance->v10TimeRegistrationsPersonIdCreatePost($person_id, $create_time_registration_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TimeRegistrationsApi->v10TimeRegistrationsPersonIdCreatePost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **person_id** | **string**| The personId | |
| **create_time_registration_input** | [**\Exos\ExosApi\Model\CreateTimeRegistrationInput**](../Model/CreateTimeRegistrationInput.md)| data passed to create the registration | |

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

## `v10TimeRegistrationsPersonIdDeactivatePost()`

```php
v10TimeRegistrationsPersonIdDeactivatePost($person_id): \Exos\ExosApi\Model\VoidResponseOutput
```

deactivate a person for time registrations

deletes all existing time registrations for a person and prevents further registrations until time registration is activated again.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\TimeRegistrationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$person_id = 'person_id_example'; // string | The personId

try {
    $result = $apiInstance->v10TimeRegistrationsPersonIdDeactivatePost($person_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TimeRegistrationsApi->v10TimeRegistrationsPersonIdDeactivatePost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **person_id** | **string**| The personId | |

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

## `v10TimeRegistrationsPersonIdFromDateToDateGet()`

```php
v10TimeRegistrationsPersonIdFromDateToDateGet($person_id, $from_date, $to_date): \Exos\ExosApi\Model\GetTimeRegistrationsOutputWithTime
```

gets time registrations for a specific person and time period



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\TimeRegistrationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$person_id = 'person_id_example'; // string | The personId to get registraions
$from_date = new \DateTime('2013-10-20T19:20:30+01:00'); // \DateTime | First date to get
$to_date = new \DateTime('2013-10-20T19:20:30+01:00'); // \DateTime | Last date to get

try {
    $result = $apiInstance->v10TimeRegistrationsPersonIdFromDateToDateGet($person_id, $from_date, $to_date);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TimeRegistrationsApi->v10TimeRegistrationsPersonIdFromDateToDateGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **person_id** | **string**| The personId to get registraions | |
| **from_date** | **\DateTime**| First date to get | |
| **to_date** | **\DateTime**| Last date to get | |

### Return type

[**\Exos\ExosApi\Model\GetTimeRegistrationsOutputWithTime**](../Model/GetTimeRegistrationsOutputWithTime.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10TimeRegistrationsPersonIdRegistrationTimeDeletePost()`

```php
v10TimeRegistrationsPersonIdRegistrationTimeDeletePost($person_id, $registration_time): \Exos\ExosApi\Model\VoidResponseOutput
```

deletes a specific time registration

Deleteded manual corrections will disappear completely, while registrations from devices will still appear as deleted registrations.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\TimeRegistrationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$person_id = 'person_id_example'; // string | The personId
$registration_time = new \DateTime('2013-10-20T19:20:30+01:00'); // \DateTime | registration time to delete

try {
    $result = $apiInstance->v10TimeRegistrationsPersonIdRegistrationTimeDeletePost($person_id, $registration_time);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TimeRegistrationsApi->v10TimeRegistrationsPersonIdRegistrationTimeDeletePost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **person_id** | **string**| The personId | |
| **registration_time** | **\DateTime**| registration time to delete | |

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

## `v10TimeRegistrationsPersonIdSetEndOfDayPost()`

```php
v10TimeRegistrationsPersonIdSetEndOfDayPost($person_id, $set_end_of_day_input): \Exos\ExosApi\Model\VoidResponseOutput
```

sets the end of a day for a specific date and person

Sets the end of day in minutes (for example 1440 are the equivalent to 24:00)

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\TimeRegistrationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$person_id = 'person_id_example'; // string | The personId
$set_end_of_day_input = new \Exos\ExosApi\Model\SetEndOfDayInput(); // \Exos\ExosApi\Model\SetEndOfDayInput

try {
    $result = $apiInstance->v10TimeRegistrationsPersonIdSetEndOfDayPost($person_id, $set_end_of_day_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TimeRegistrationsApi->v10TimeRegistrationsPersonIdSetEndOfDayPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **person_id** | **string**| The personId | |
| **set_end_of_day_input** | [**\Exos\ExosApi\Model\SetEndOfDayInput**](../Model/SetEndOfDayInput.md)|  | |

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
