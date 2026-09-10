# # GetAccessRightOutput

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_right_id** | **string** |  | [default to 'AccessRightId1']
**display_name** | **string** |  | [optional] [default to 'Profile 1']
**access_right_type** | [**\Exos\ExosApi\Model\AccessRightType**](AccessRightType.md) |  | [optional]
**comment** | **string** |  | [optional] [default to '']
**is_assignable_to_visitor** | **bool** |  | [optional] [default to false]
**is_assignable_to_contractor** | **bool** |  | [optional] [default to false]
**is_assignable_to_employee** | **bool** |  | [optional] [default to true]
**required_security_level** | **int** |  | [optional] [default to 0]
**valid_from** | **\DateTime** |  | [optional]
**valid_to** | **\DateTime** |  | [optional]
**tenant** | [**\Exos\ExosApi\Model\TenantOutput**](TenantOutput.md) |  | [optional]
**category** | [**\Exos\ExosApi\Model\PersonCategoryOutput**](PersonCategoryOutput.md) |  | [optional]
**access_domain** | [**\Exos\ExosApi\Model\AccessDomainOutput**](AccessDomainOutput.md) |  | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
