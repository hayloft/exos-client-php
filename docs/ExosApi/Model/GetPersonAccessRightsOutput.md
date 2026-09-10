# # GetPersonAccessRightsOutput

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**person_id_internal** | **int** |  | [default to 1]
**person_id** | **string** |  | [optional] [default to '']
**tenant_id** | **int** |  | [default to 1]
**personal_number** | **string** |  | [optional] [default to '']
**full_name** | **string** |  | [optional] [default to 'ApiLastName,ApiFirstName']
**access_exit_date** | **\DateTime** |  | [optional]
**person_type** | **string** |  | [optional]
**validation_period** | **string** |  | [optional] [default to '']
**update_period** | **\DateTime** |  | [optional]
**last_card_link_validation** | **\DateTime** |  | [optional]
**last_card_link_action** | **string** |  | [optional]
**profiles** | [**\Exos\ExosApi\Model\PersonProfileBasics[]**](PersonProfileBasics.md) |  | [optional]
**door_groups** | [**\Exos\ExosApi\Model\PersonDoorGroupBasics[]**](PersonDoorGroupBasics.md) |  | [optional]
**room_zones** | [**\Exos\ExosApi\Model\PersonRoomZoneBasics[]**](PersonRoomZoneBasics.md) |  | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
