# # PersonAccessControlDataOutput

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**person_id_internal** | **int** |  | [optional] [default to 1]
**is_download_enabled** | **bool** |  | [optional] [default to true]
**current_number_of_invalid_pin_code_entries** | **int** |  | [optional] [default to 0]
**access_exit_date** | **\DateTime** |  | [optional]
**last_access_date** | **\DateTime** |  | [optional]
**last_access_grid_id** | **string** |  | [optional] [default to 'AccessGrid 1']
**last_access_domain_id** | **string** |  | [optional] [default to 'AccessDomain 1']
**last_reader_address** | **string** |  | [optional] [default to 'E0100010001']
**last_reader_name** | **string** |  | [optional] [default to 'Treppenhaus 1.Stock']
**is_in_out_control_ignored** | **bool** |  | [optional] [default to false]
**is_antipassback_ignored** | **bool** |  | [optional] [default to false]
**is_min_max_person_in_room_ignored** | **bool** |  | [optional] [default to false]
**security_level** | **int** |  | [optional] [default to 9]
**is_blocked** | **bool** |  | [optional] [default to false]
**is_media_traceback_enabled** | **bool** |  | [optional] [default to false]
**is_intervention_media_permitted** | **bool** |  | [optional] [default to false]
**is_fingerprint_unfeasible** | **bool** |  | [optional] [default to false]
**is_biometric_enabled** | **bool** |  | [optional] [default to false]
**extended_latch_time_active** | **bool** |  | [optional] [default to false]
**person_elevator_data** | [**\Exos\ExosApi\Model\PersonElevatorDataOutput**](PersonElevatorDataOutput.md) |  | [optional]
**person_room_data** | [**\Exos\ExosApi\Model\PersonRoomData**](PersonRoomData.md) |  | [optional]
**access_rights** | [**\Exos\ExosApi\Model\PersonAccessRights[]**](PersonAccessRights.md) |  | [optional]
**profiles** | [**\Exos\ExosApi\Model\PersonProfiles[]**](PersonProfiles.md) |  | [optional]
**has_individual_access_rights** | [**\Exos\ExosApi\Model\PersonHasIndividualAccessRights[]**](PersonHasIndividualAccessRights.md) |  | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
