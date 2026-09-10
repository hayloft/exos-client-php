# # GetLoginOutput

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**login_id** | **string** |  | [optional] [default to 'Loginid']
**login_id_internal** | **int** |  | [default to 1]
**language_fk** | **string** |  | [optional] [default to 'ENG']
**login_name** | **string** |  | [optional] [default to 'MyLoginName']
**description** | **string** |  | [optional] [default to 'MyDescription']
**tenant_id** | **int** |  | [default to 1]
**password_validity_in_days** | **int** |  | [optional] [default to 60]
**current_password_valid_to** | **\DateTime** |  | [optional]
**time_zone_id** | **string** |  | [optional] [default to '']
**roles** | [**\Exos\ExosApi\Model\GetRoleOutput[]**](GetRoleOutput.md) |  | [optional]
**persons** | [**\Exos\ExosApi\Model\PersonBaseDataOutput[]**](PersonBaseDataOutput.md) |  | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
