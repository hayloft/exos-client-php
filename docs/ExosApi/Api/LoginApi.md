# Exos\ExosApi\LoginApi

All URIs are relative to /ExosApi/api, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**v10LoginsCreatePost()**](LoginApi.md#v10LoginsCreatePost) | **POST** /v1.0/logins/create | create a new login |
| [**v10LoginsCurrentUserInfoGet()**](LoginApi.md#v10LoginsCurrentUserInfoGet) | **GET** /v1.0/logins/currentUserInfo | Get current user information |
| [**v10LoginsGet()**](LoginApi.md#v10LoginsGet) | **GET** /v1.0/logins | get logins by odata query options |
| [**v10LoginsKeepMyLoginAlivePost()**](LoginApi.md#v10LoginsKeepMyLoginAlivePost) | **POST** /v1.0/logins/keepMyLoginAlive | keeps the current session alive |
| [**v10LoginsLoginIdAssignRoleRoleIdPost()**](LoginApi.md#v10LoginsLoginIdAssignRoleRoleIdPost) | **POST** /v1.0/logins/{loginId}/assignRole/{roleId} | assigns a role to a login |
| [**v10LoginsLoginIdDeletePost()**](LoginApi.md#v10LoginsLoginIdDeletePost) | **POST** /v1.0/logins/{loginId}/delete | delete a login |
| [**v10LoginsLoginIdUnassignRoleRoleIdPost()**](LoginApi.md#v10LoginsLoginIdUnassignRoleRoleIdPost) | **POST** /v1.0/logins/{loginId}/unassignRole/{roleId} | unassigns a role from a login |
| [**v10LoginsLoginIdUpdatePost()**](LoginApi.md#v10LoginsLoginIdUpdatePost) | **POST** /v1.0/logins/{loginId}/update | update a login |
| [**v10LoginsLogoutMyselfPost()**](LoginApi.md#v10LoginsLogoutMyselfPost) | **POST** /v1.0/logins/logoutMyself | logs out the currently logged in user |
| [**v10LoginsSetpasswordPost()**](LoginApi.md#v10LoginsSetpasswordPost) | **POST** /v1.0/logins/setpassword | set password for a specific login |
| [**v10LoginsSettingsPasswordComplexityCheckPost()**](LoginApi.md#v10LoginsSettingsPasswordComplexityCheckPost) | **POST** /v1.0/logins/settings/PasswordComplexityCheck | expression that defines a check for the password complexity |
| [**v10LoginsTenantsOfSsoLoginGet()**](LoginApi.md#v10LoginsTenantsOfSsoLoginGet) | **GET** /v1.0/logins/tenantsOfSsoLogin | Get available tenants for the current SSO user. |


## `v10LoginsCreatePost()`

```php
v10LoginsCreatePost($create_login_input): \Exos\ExosApi\Model\CreateLoginOutput
```

create a new login

<p>creates a new login.</p><p>To create a Single Sign On login(SSO), specify a user name with a backslash. The password is optional for SSO logins. <b>Important Information: backslash in username must be escaped with a second backslash</b>.</p>

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\LoginApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$create_login_input = new \Exos\ExosApi\Model\CreateLoginInput(); // \Exos\ExosApi\Model\CreateLoginInput | login to create

try {
    $result = $apiInstance->v10LoginsCreatePost($create_login_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling LoginApi->v10LoginsCreatePost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **create_login_input** | [**\Exos\ExosApi\Model\CreateLoginInput**](../Model/CreateLoginInput.md)| login to create | |

### Return type

[**\Exos\ExosApi\Model\CreateLoginOutput**](../Model/CreateLoginOutput.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10LoginsCurrentUserInfoGet()`

```php
v10LoginsCurrentUserInfoGet($included_permissions): \Exos\ExosApi\Model\CurrentUserInfoOutputWithTime
```

Get current user information

Gets current user name and permissions.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\LoginApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$included_permissions = True; // bool | Included permissions in return response

try {
    $result = $apiInstance->v10LoginsCurrentUserInfoGet($included_permissions);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling LoginApi->v10LoginsCurrentUserInfoGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **included_permissions** | **bool**| Included permissions in return response | [optional] |

### Return type

[**\Exos\ExosApi\Model\CurrentUserInfoOutputWithTime**](../Model/CurrentUserInfoOutputWithTime.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10LoginsGet()`

```php
v10LoginsGet($expand, $filter, $search_string, $count, $orderby, $select, $skip, $top, $include_system_logins, $login_type): \Exos\ExosApi\Model\GetLoginsOutput
```

get logins by odata query options

Be aware that a query made here can return up to 10000 records. If you need more, please use the built in paging functionality with $top and $skip.<br /> http://www.asp.net/web-api/overview/odata-support-in-aspnet-web-api/supporting-odata-query-options. <br /> The provided searchString will result in a fulltext search on all selected fields. If the passed value is encapsulated with quotes(\"), it will be treated as an exact match search, otherwise the passed value will be an OR search over all keywords(splitted by space character).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\LoginApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$expand = 'expand_example'; // string | Roles
$filter = 'filter_example'; // string | Roles/any(r: r/RoleType eq 'Admin')
$search_string = 'search_string_example'; // string | Fulltext search on all string, int and date fields that are selected with $select and $expand.
$count = true; // bool | adds total possible results to the response
$orderby = 'orderby_example'; // string | RoleName desc
$select = 'select_example'; // string | RoleName
$skip = 56; // int | skips the first x entries of the response(paging)
$top = 1000; // int | limits the number of returned records.
$include_system_logins = True; // bool | Include system logins such as 'AutoSystemUser'
$login_type = 'All'; // string | the type of login in relation to the person and person type

try {
    $result = $apiInstance->v10LoginsGet($expand, $filter, $search_string, $count, $orderby, $select, $skip, $top, $include_system_logins, $login_type);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling LoginApi->v10LoginsGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **expand** | **string**| Roles | [optional] |
| **filter** | **string**| Roles/any(r: r/RoleType eq &#39;Admin&#39;) | [optional] |
| **search_string** | **string**| Fulltext search on all string, int and date fields that are selected with $select and $expand. | [optional] |
| **count** | **bool**| adds total possible results to the response | [optional] [default to true] |
| **orderby** | **string**| RoleName desc | [optional] |
| **select** | **string**| RoleName | [optional] |
| **skip** | **int**| skips the first x entries of the response(paging) | [optional] |
| **top** | **int**| limits the number of returned records. | [optional] [default to 1000] |
| **include_system_logins** | **bool**| Include system logins such as &#39;AutoSystemUser&#39; | [optional] |
| **login_type** | **string**| the type of login in relation to the person and person type | [optional] [default to &#39;All&#39;] |

### Return type

[**\Exos\ExosApi\Model\GetLoginsOutput**](../Model/GetLoginsOutput.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10LoginsKeepMyLoginAlivePost()`

```php
v10LoginsKeepMyLoginAlivePost(): \Exos\ExosApi\Model\VoidResponseOutput
```

keeps the current session alive

allows you to keep an active login alive. (Deprecated:  use '{ExosAuth}/api/v1/Token/keepAlive' instead)

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\LoginApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);

try {
    $result = $apiInstance->v10LoginsKeepMyLoginAlivePost();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling LoginApi->v10LoginsKeepMyLoginAlivePost: ', $e->getMessage(), PHP_EOL;
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

## `v10LoginsLoginIdAssignRoleRoleIdPost()`

```php
v10LoginsLoginIdAssignRoleRoleIdPost($login_id, $role_id, $ignore_blacklist): \Exos\ExosApi\Model\VoidResponseOutput
```

assigns a role to a login

assigns a role to a login. The role will be set for this loginId.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\LoginApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$login_id = 'login_id_example'; // string | id of login
$role_id = 'role_id_example'; // string | id of role
$ignore_blacklist = True; // bool | Ignore blacklist check

try {
    $result = $apiInstance->v10LoginsLoginIdAssignRoleRoleIdPost($login_id, $role_id, $ignore_blacklist);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling LoginApi->v10LoginsLoginIdAssignRoleRoleIdPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **login_id** | **string**| id of login | |
| **role_id** | **string**| id of role | |
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

## `v10LoginsLoginIdDeletePost()`

```php
v10LoginsLoginIdDeletePost($login_id): \Exos\ExosApi\Model\VoidResponseOutput
```

delete a login

deletes a login.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\LoginApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$login_id = 'login_id_example'; // string | id of login

try {
    $result = $apiInstance->v10LoginsLoginIdDeletePost($login_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling LoginApi->v10LoginsLoginIdDeletePost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **login_id** | **string**| id of login | |

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

## `v10LoginsLoginIdUnassignRoleRoleIdPost()`

```php
v10LoginsLoginIdUnassignRoleRoleIdPost($login_id, $role_id): \Exos\ExosApi\Model\VoidResponseOutput
```

unassigns a role from a login

unassigns a role from a login. The role will be removed for this loginId.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\LoginApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$login_id = 'login_id_example'; // string | id of login
$role_id = 'role_id_example'; // string | id of role

try {
    $result = $apiInstance->v10LoginsLoginIdUnassignRoleRoleIdPost($login_id, $role_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling LoginApi->v10LoginsLoginIdUnassignRoleRoleIdPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **login_id** | **string**| id of login | |
| **role_id** | **string**| id of role | |

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

## `v10LoginsLoginIdUpdatePost()`

```php
v10LoginsLoginIdUpdatePost($login_id, $update_login_input): \Exos\ExosApi\Model\UpdateLoginOutput
```

update a login

updates a login.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\LoginApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$login_id = 'login_id_example'; // string | id of login
$update_login_input = new \Exos\ExosApi\Model\UpdateLoginInput(); // \Exos\ExosApi\Model\UpdateLoginInput | login to create

try {
    $result = $apiInstance->v10LoginsLoginIdUpdatePost($login_id, $update_login_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling LoginApi->v10LoginsLoginIdUpdatePost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **login_id** | **string**| id of login | |
| **update_login_input** | [**\Exos\ExosApi\Model\UpdateLoginInput**](../Model/UpdateLoginInput.md)| login to create | |

### Return type

[**\Exos\ExosApi\Model\UpdateLoginOutput**](../Model/UpdateLoginOutput.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10LoginsLogoutMyselfPost()`

```php
v10LoginsLogoutMyselfPost(): \Exos\ExosApi\Model\VoidResponseOutput
```

logs out the currently logged in user

logs out the currently logged in user and releases the identity token. (Deprecated:  use '{ExosAuth}/api/v1/Token/revoke' instead)

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\LoginApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);

try {
    $result = $apiInstance->v10LoginsLogoutMyselfPost();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling LoginApi->v10LoginsLogoutMyselfPost: ', $e->getMessage(), PHP_EOL;
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

## `v10LoginsSetpasswordPost()`

```php
v10LoginsSetpasswordPost($set_password_input): \Exos\ExosApi\Model\SetPasswordOutput
```

set password for a specific login

<p>Sets password for a specific login.</p><p>Set the password for a user provided by a LiginId. The new password is autmatically set as expired and has to be updated after the next login.</p>

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\LoginApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$set_password_input = new \Exos\ExosApi\Model\SetPasswordInput(); // \Exos\ExosApi\Model\SetPasswordInput | login and password to update

try {
    $result = $apiInstance->v10LoginsSetpasswordPost($set_password_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling LoginApi->v10LoginsSetpasswordPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **set_password_input** | [**\Exos\ExosApi\Model\SetPasswordInput**](../Model/SetPasswordInput.md)| login and password to update | |

### Return type

[**\Exos\ExosApi\Model\SetPasswordOutput**](../Model/SetPasswordOutput.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v10LoginsSettingsPasswordComplexityCheckPost()`

```php
v10LoginsSettingsPasswordComplexityCheckPost($set_password_complexity_check_input): \Exos\ExosApi\Model\VoidResponseOutput
```

expression that defines a check for the password complexity

Default ^(?=.*\\d)(?=.*[a-z,A-Z]).{6,}$ (at least one digit and one alphanumeric character and at least 6 characters long).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\LoginApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$set_password_complexity_check_input = new \Exos\ExosApi\Model\SetPasswordComplexityCheckInput(); // \Exos\ExosApi\Model\SetPasswordComplexityCheckInput | set parameter value

try {
    $result = $apiInstance->v10LoginsSettingsPasswordComplexityCheckPost($set_password_complexity_check_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling LoginApi->v10LoginsSettingsPasswordComplexityCheckPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **set_password_complexity_check_input** | [**\Exos\ExosApi\Model\SetPasswordComplexityCheckInput**](../Model/SetPasswordComplexityCheckInput.md)| set parameter value | [optional] |

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

## `v10LoginsTenantsOfSsoLoginGet()`

```php
v10LoginsTenantsOfSsoLoginGet($authorisations): \Exos\ExosApi\Model\TenantsOfSsoLoginOutputWithTime
```

Get available tenants for the current SSO user.

Gets all tenants available to a user through his SSO authentication.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Exos\ExosApi\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new Exos\ExosApi\Api\LoginApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$authorisations = array('authorisations_example'); // string[] | Authorisations the user must have for tenants. If granted, the TenantSsoOutput.LoginIsAuthorised property is true for those tenants.

try {
    $result = $apiInstance->v10LoginsTenantsOfSsoLoginGet($authorisations);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling LoginApi->v10LoginsTenantsOfSsoLoginGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **authorisations** | [**string[]**](../Model/string.md)| Authorisations the user must have for tenants. If granted, the TenantSsoOutput.LoginIsAuthorised property is true for those tenants. | [optional] |

### Return type

[**\Exos\ExosApi\Model\TenantsOfSsoLoginOutputWithTime**](../Model/TenantsOfSsoLoginOutputWithTime.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
