# # UpdateLockerGroupInput

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**online_locker_group_id** | **string** |  | [optional] [default to '']
**description** | **string** |  | [optional] [default to '']
**number_of_lockers_horizontally** | **int** |  | [optional]
**time_out_in_seconds** | **int** |  | [optional]
**max_reservation_time_in_hours** | **int** |  | [optional] [default to 24]
**free_selection_mode_active** | **bool** |  | [optional] [default to false]
**is_activated** | **bool** |  | [optional] [default to true]
**send_mail_if_locker_is_expired** | **bool** |  | [optional] [default to false]
**operators** | [**\Exos\ExosApi\Model\LockerGroupsOperator[]**](LockerGroupsOperator.md) |  | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
