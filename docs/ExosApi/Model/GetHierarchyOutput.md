# # GetHierarchyOutput

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hierarchy_id_internal** | **int** |  | [optional]
**hierarchy_id** | **string** |  |
**hierarchy_name** | **string** |  |
**hierarchy_level** | **int** |  |
**hierarchy_type** | [**\Exos\ExosApi\Model\HierarchyType**](HierarchyType.md) |  |
**person_category_id_internal** | **int** |  | [optional] [default to 1]
**person_category_display_name** | **string** |  | [optional]
**parent_hierarchy_id_internal** | **int** |  | [optional]
**is_blocked** | **bool** |  | [optional] [default to false]
**blocked_on** | **\DateTime** |  | [optional]
**blocked_by** | **string** |  | [optional]
**blocked_reason** | **string** |  | [optional]
**hierarchy_info** | **string** |  | [optional]
**hierarchy_detail** | [**\Exos\ExosApi\Model\HierarchyDetailOutput**](HierarchyDetailOutput.md) |  | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
