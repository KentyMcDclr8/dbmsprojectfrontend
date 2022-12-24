/**
 * AMS Backend Service
 */
import {
  deleteFetcher,
  getFetcher,
  postFetcher,
  putFetcher,
  putTos3Fetcher,
  multipartPostFetcher
} from './api_helper'
import * as url from './url_helper'

// get tables
export const fetchTables = async () => {
  return await getFetcher(url.TABLES_PATH)
}

// eslint-disable-next-line camelcase
export const fetchTableColumns = async (table_id) => {
  return await getFetcher(url.TABLES_PATH + '/' + table_id + '/db-columns')
}

// add table
export const addTable = async (table) => {
  return postFetcher(url.TABLES_PATH, table)
}

// update table
export const updateTable = async (table) => {
  return await postFetcher(url.TABLES_PATH, table)
}

// add column to table
export const addColumn = async (payload) => {
  return await postFetcher(url.COLUMNS_PATH(payload.tableId), [payload.column])
}

// update column of table
export const updateColumn = async (payload) => {
  const column = payload.column
  return await putFetcher(url.COLUMN_PATH(payload.tableId, column.id), payload.column)
}

// delete column of table
export const deleteColumn = async (payload) => {
  return await deleteFetcher(
    url.COLUMN_PATH(payload.tableId, payload.columnId)
  )
}

// get column types
export const getColumnTypes = async () => {
  const data = await getFetcher(url.COLUMN_TYPES_PATH)
  const dataArray = Object.keys(data).map((key) => [String(key), data[key]])
  return dataArray
}

// get relations
export const fetchRelations = async (tableId) => {
  return await getFetcher(url.RELATIONS_PATH(tableId))
}

// add relation to table
export const addRelation = async (payload) => {
  return await postFetcher(url.RELATIONS_PATH(payload.tableId), [
    payload.relation
  ])
}

// update relation of table
export const updateRelation = async (payload) => {
  return await postFetcher(url.RELATIONS_PATH(payload.tableId), [
    payload.relation
  ])
}

// delete relation of table
export const deleteRelation = async (tableId, relationId) => {
  return await deleteFetcher(url.DELETE_RELATION_PATH(tableId, relationId))
}

// get table records
export const fetchTableRecords = async (tableName, rawData) => {
  return await postFetcher(
    url.OBJECT_STRUCTURES_GENERIC_SEARCH(tableName),
    rawData
  )
}

// add table record
export const addTableRecord = async (tableName, rawData) => {
  return await postFetcher(
    url.CREATE_OBJECT_STRUCTURE_DATA_PATH(tableName),
    rawData
  )
}

// update table record
export const updateTableRecord = async (
  tableName,
  id,
  rawData,
  isResponseRaw = false
) => {
  return await postFetcher(
    url.UPDATE_OBJECT_STRUCTURE_DATA_PATH(tableName, id),
    rawData,
    isResponseRaw
  )
}

export const submitForm = async (method, url, formData, isRaw) => {
  switch (method) {
    case 'POST':
      return await postFetcher(url, formData, isRaw)
    case 'GET':
      return await getFetcher(url, formData, isRaw)
  }
}

// update table attributes
export const updateTableAttributes = async (tableId, rawData) => {
  return await putFetcher(url.TABLES_ATTRIBUTES_PATH(tableId), rawData)
}

// get all enumset list
export const getTableList = async () => {
  return await getFetcher(url.TABLES_PATH)
}

// get all enumset list
export const getEnumsetList = async () => {
  return await getFetcher(url.ENUMSET_PATH)
}

// get all measure list
export const getMeasureList = async () => {
  return await getFetcher(url.MEASURE_UNIT_PATH)
}

// get enumset by id
export const getEnumSet = async (id) => {
  return await getFetcher(url.ENUMSET_BY_ID_PATH(id))
}
// get enumvals of enumset by id
export const getEnumvals = async (id) => {
  return await getFetcher(url.ENUMVAL_PATH(id))
}

// get data mappings
export const getDataMapping = async (queryString) => {
  return await getFetcher(url.DATA_MAPPING_PATH + '?' + queryString)
}

// get data mapping by Id
export const getDataMappingbyId = async (id) => {
  return await getFetcher(url.DATA_MAPPING_PATH_BY_ID(id))
}

// add data mapping
export const addDataMapping = async (rawData) => {
  return await postFetcher(url.DATA_MAPPING_PATH, rawData)
}

// update data mapping
export const updateDataMapping = async (dataMappingId, rawData) => {
  return await putFetcher(url.DATA_MAPPING_PATH_BY_ID(dataMappingId), rawData)
}

// Delete Data Mapping
export const deleteDataMapping = async (dataMappingId) => {
  return await deleteFetcher(url.DATA_MAPPING_PATH_BY_ID(dataMappingId))
}

// List Data Mapping Columns
export const listDataMappingColumns = async (queryString, dataMappingId) => {
  return await getFetcher(
    url.DATA_MAPPING_COLUMN_PATH_ID(dataMappingId) + '?' + queryString
  )
}

// Add Data Mapping col
export const addDataMappingCol = async (dataMappingId, rawData) => {
  return await postFetcher(
    url.DATA_MAPPING_COLUMN_PATH_ID(dataMappingId),
    rawData
  )
}

// Delete Data Mapping col
export const deleteDataMappingCol = async (dataMappingId, dataMappingIdCol) => {
  return await deleteFetcher(
    url.DELETE_DATA_MAPPING_COL(dataMappingId, dataMappingIdCol)
  )
}

// If response data is not json
// It should not be converted to json
export const publishChanges = async () => {
  return await getFetcher(url.PUBLISH_CHANGES_PATH, true)
}

export const getChanges = async () => {
  return await getFetcher(url.GET_CHANGES_PATH, true)
}

export const deleteTableRecord = async (tableName, recordId) => {
  return await deleteFetcher(url.DELETE_PATH(tableName, recordId))
}

// backend helpers for batch job functionalities
export const getBatchJobTemplates = async () => {
  return await getFetcher(url.GET_ALL_TEMPLATES_PATH)
}
export const addBatchJobTemplate = async (body) => {
  return await postFetcher(url.ADD_TEMPLATE_PATH, body)
}
export const editBatchJobTemplate = async (body) => {
  return await postFetcher(url.ADD_TEMPLATE_PATH, body)
}
export const deleteBatchJobTemplate = async (templateId) => {
  return await deleteFetcher(url.DELETE_BATCH_JOB_TEMPLATE_PATH(templateId))
}
export const addBatchJobTemplateArg = async (templateId, body) => {
  return await postFetcher(url.ADD_TEMPLATE_ARG_PATH(templateId), body)
}
export const deleteBatchJobTemplateArgument = async (templateId, argId) => {
  return await deleteFetcher(
    url.DELETE_BATCH_JOB_TEMPLATE_ARG_PATH(templateId, argId)
  )
}

export const getBatchJobs = async () => {
  return await getFetcher(url.GET_ALL_BATCH_JOBS_PATH)
}
export const addBatchJob = async (templateId, body) => {
  return await postFetcher(url.ADD_BATCH_JOB_PATH(templateId), body)
}
export const editBatchJob = async (body) => {
  return await postFetcher(
    url.EDIT_BATCH_JOB_PATH(body.batchJobTemplateId),
    body
  )
}
export const addBatchJobArg = async (batchJobId, body) => {
  return await postFetcher(url.ADD_BATCH_JOB_ARG_PATH(batchJobId), body)
}
export const deleteBatchJob = async (batchJobId) => {
  return await deleteFetcher(url.DELETE_BATCH_JOB_PATH(batchJobId))
}
export const deleteBatchJobArg = async (batchJobId, argId) => {
  return await deleteFetcher(url.DELETE_BATCH_JOB_ARG_PATH(batchJobId, argId))
}

// get Organizations
export const getOrganizations = async () => {
  return await getFetcher(url.GET_ALL_ORGANIZATIONS_PATH)
}
// add Organization
export const addOrganization = async (body) => {
  return await postFetcher(url.ADD_ORGANIZATION_PATH, body)
}
// Update Organization
export const updateOrganization = async (organizationId, body) => {
  return await putFetcher(url.UPDATE_ORGANIZATION_PATH(organizationId), body)
}
// get tenants using organization id
export const getTenantsByOrganizationId = async (organizationId) => {
  return await getFetcher(url.GET_TENANTS_BY_ORGANIZATION_PATH(organizationId))
}
// get tenants using group id
export const getTenantsByGroupId = async (groupId) => {
  return await getFetcher(url.GET_TENANTS_BY_GROUP_PATH(groupId))
}
// add tenant
export const addTenant = async (body) => {
  return await postFetcher(url.ADD_TENANT_PATH, body)
}
// update tenant
export const updateTenant = async (tenantId, body) => {
  return await putFetcher(url.UPDATE_TENANT_PATH(tenantId), body)
}
// get groups using organization id
export const getGroupsByOrganizationId = async (organizationId) => {
  return await getFetcher(url.GET_GROUPS_BY_ORGANIZATION_PATH(organizationId))
}
// get groups using tenant id
export const getGroupsByTenantId = async (tenantId) => {
  return await getFetcher(url.GET_GROUPS_BY_TENANT_PATH(tenantId))
}
// get groups using user id
export const getGroupsByUserId = async (userId) => {
  return await getFetcher(url.GET_GROUPS_BY_USER_PATH(userId))
}
// add group
export const addGroup = async (body) => {
  return await postFetcher(url.ADD_GROUP_PATH, body)
}
// update group
export const updateGroup = async (groupId, body) => {
  return await putFetcher(url.UPDATE_GROUP_PATH(groupId), body)
}
// get users using organization id
export const getUsersByOrganizationId = async (organizationId) => {
  return await getFetcher(url.GET_USERS_BY_ORGANIZATION_PATH(organizationId))
}
// get users using group id
export const getUsersByGroupId = async (groupId) => {
  return await getFetcher(url.GET_USERS_BY_GROUP_PATH(groupId))
}
// get users using role id
export const getUsersByRoleId = async (roleId) => {
  return await getFetcher(url.GET_USERS_BY_ROLE_PATH(roleId))
}
// add user
export const addUser = async (body) => {
  return await postFetcher(url.ADD_USER_PATH, body)
}
// update user
export const updateUser = async (userId, body) => {
  return await putFetcher(url.UPDATE_USER_PATH(userId), body)
}
// get user's roles
export const getUserRoles = async (userId) => {
  return await getFetcher(url.GET_USER_ROLES_PATH(userId))
}
// get Roles by Organization IDs
export const getRolesByOrganizationId = async (organizationId) => {
  return await getFetcher(url.GET_ROLES_BY_ORGANIZATION_PATH(organizationId))
}
// Add new Role
export const addRole = async (body) => {
  return await postFetcher(url.ADD_ROLE_PATH, body)
}
// Update Role
export const updateRole = async (roleId, body) => {
  return await putFetcher(url.UPDATE_ROLE_PATH(roleId), body)
}

// upsert UserRole
export const upsertUserRole = async (body) => {
  return await putFetcher(url.UPSERT_USER_ROLE_PATH, body)
}
// upsert tenantGroup
export const upsertTenantGroup = async (body) => {
  return await putFetcher(url.UPSERT_TENANT_GROUP_PATH, body)
}
// upsert userGroup
export const upsertUserGroup = async (body) => {
  return await putFetcher(url.UPSERT_USER_GROUP_PATH, body)
}
// create virtual table from csv
export const createVirtualTable = async (body) => {
  return await multipartPostFetcher(url.CREATE_VIRTUAL_TABLE, body)
}

// update a single column of table
export const updateSingleColumn = async (body) => {
  return await putFetcher(url.UPDATE_COLUMN_PATH(body.tableId, body.id), body)
}

// delete table permanently
export const deleteTable = async (tableId) => {
  return await deleteFetcher(url.DELETE_TABLE_PERMANENTLY_PATH(tableId))
}

// get list of datamapping columns using ColumnID
export const dataMappingColumnsListByColumnId = async (columnId) => {
  return await getFetcher(
    url.GET_DATAMAPPING_COLUMN_LIST_BY_COLUMN_ID_PATH(columnId)
  )
}

// get Message Resource Key
export const getMessageResourceKey = async () => {
  return await getFetcher(url.GET_MESSAGE_RESOURCE_KEY_PATH)
}
// get Message Resource Key by ID
export const getMessageResourceKeyId = async (keyId) => {
  return await getFetcher(url.MESSAGE_RESOURCE_KEY_PATH_BY_ID(keyId))
}
// Add Message Resource Key
export const addMessageResourceKey = async (body) => {
  return await postFetcher(url.GET_MESSAGE_RESOURCE_KEY_PATH, body)
}
// Update Message Resource Key
export const updateMessageResourceKey = async (keyId, body) => {
  return await putFetcher(url.MESSAGE_RESOURCE_KEY_PATH_BY_ID(keyId), body)
}
// Delete Message Resource Key
export const deleteMessageResourceKey = async (keyId) => {
  return await deleteFetcher(url.MESSAGE_RESOURCE_KEY_PATH_BY_ID(keyId))
}

// get Message Resource Locale
export const getMessageResourceLocale = async () => {
  return await getFetcher(url.GET_MESSAGE_RESOURCE_LOCALE_PATH)
}
// get Message Resource Locale by ID
export const getMessageResourceLocaleId = async (localeId) => {
  return await getFetcher(url.MESSAGE_RESOURCE_LOCALE_PATH_BY_ID(localeId))
}
// Add Message Resource Locale
export const addMessageResourceLocale = async (body) => {
  return await postFetcher(url.GET_MESSAGE_RESOURCE_LOCALE_PATH, body)
}
// Update Message Resource Locale
export const updateMessageResourceLocale = async (localeId, body) => {
  return await putFetcher(
    url.MESSAGE_RESOURCE_LOCALE_PATH_BY_ID(localeId),
    body
  )
}
// Delete Message Resource Locale
export const deleteMessageResourceLocale = async (localeId) => {
  return await deleteFetcher(url.MESSAGE_RESOURCE_LOCALE_PATH_BY_ID(localeId))
}

// get Message Resource Value
export const getMessageResourceValue = async () => {
  return await getFetcher(url.GET_MESSAGE_RESOURCE_VALUE_PATH)
}
// get Message Resource Value by ID
export const getMessageResourceValueId = async (valueId) => {
  return await getFetcher(url.MESSAGE_RESOURCE_VALUE_PATH_BY_ID(valueId))
}
// Add Message Resource Value
export const addMessageResourceValue = async (body) => {
  return await postFetcher(url.GET_MESSAGE_RESOURCE_VALUE_PATH, body)
}
// Update Message Resource Value
export const updateMessageResourceValue = async (valueId, body) => {
  return await putFetcher(url.MESSAGE_RESOURCE_VALUE_PATH_BY_ID(valueId), body)
}
// Delete Message Resource Value
export const deleteMessageResourceValue = async (valueId) => {
  return await deleteFetcher(url.MESSAGE_RESOURCE_VALUE_PATH_BY_ID(valueId))
}

// attachment support APIs
export const getAttachmentUploadUrl = async (tableName, uid, body) => {
  return await putFetcher(url.GET_ATTACHMENT_UPLOAD_URL(tableName, uid), body)
}
export const putFileToS3 = async (uploadUrl, file) => {
  return await putTos3Fetcher(uploadUrl, file)
}
export const approveAttachmentUpload = async (tableName, uid, body) => {
  return await postFetcher(url.APPROVE_ATTACHMENT_UPLOAD(tableName, uid), body)
}
export const addAttachment = async (table, uid, data) => {
  // console.log("hello addAtachemnsfasda", table, uid, data);

  return await putFetcher(url.ADD_ATTACHMENT(table, uid), data)
}
export const getAttachments = async (table, wo) => {
  const data = {
    pageNo: 1,
    pageSize: 256
  }
  return await postFetcher(url.GET_ATTACHMENTS(table, wo), data)
}
export const deleteAttachment = async (table, wo, attachmentId) => {
  return await deleteFetcher(url.DELETE_ATTACHMENT(table, wo, attachmentId))
}

// get index list of table
export const getIndexes = async (tableId) => {
  return await getFetcher(url.INDEXES_PATH(tableId))
}
// delete index
export const deleteIndex = async (tableId, indexId) => {
  return await deleteFetcher(url.EDIT_INDEX_PATH(tableId, indexId))
}
// update index
export const updateIndex = async (tableId, indexId, body) => {
  return await putFetcher(url.EDIT_INDEX_PATH(tableId, indexId), body)
}
// add new Indexes
export const addIndexes = async (tableId, body) => {
  return await postFetcher(url.INDEXES_PATH(tableId), body)
}

// get index column list of table
export const getIndexColumns = async (indexId) => {
  return await getFetcher(url.INDEX_COLUMNS_PATH(indexId))
}

// add new index columns
export const addIndexColumns = async (indexId, body) => {
  return await postFetcher(url.INDEX_COLUMNS_PATH(indexId), body)
}

// add update index column
export const updateIndexColumn = async (indexId, indexColumnId, body) => {
  return await putFetcher(
    url.EDIT_INDEX_COLUMN_PATH(indexId, indexColumnId),
    body
  )
}

// delete index column
export const deleteIndexColumn = async (indexId, indexColumnId) => {
  return await deleteFetcher(
    url.EDIT_INDEX_COLUMN_PATH(indexId, indexColumnId)
  )
}

// get DbConstraints List
export const getConstraints = async (tableId) => {
  return await getFetcher(url.CONSTRAINTS_PATH(tableId))
}

// save DbConstraints List
export const saveConstraints = async (tableId, body) => {
  return await postFetcher(url.CONSTRAINTS_PATH(tableId), body)
}

// delete DbConstraintColumn
export const deleteConstraint = async (tableId, constraintId) => {
  return await deleteFetcher(url.DELETE_CONSTRAINT_PATH(tableId, constraintId))
}

// get DbConstraintColumns List
export const getConstraintColumns = async (constraintId) => {
  return await getFetcher(url.CONSTRAINT_COLUMNS_PATH(constraintId))
}

// save DbConstraintColumns List
export const saveConstraintColumns = async (constraintId, body) => {
  return await postFetcher(url.CONSTRAINT_COLUMNS_PATH(constraintId), body)
}

// delete DbConstraintColumn
export const deleteConstraintColumn = async (
  constraintId,
  constraintColumnId
) => {
  return await deleteFetcher(
    url.DELETE_CONSTRAINT_COLUMNS_PATH(constraintId, constraintColumnId)
  )
}

// get all dbCategories
export const getCategories = async () => {
  return await getFetcher(url.CATEGORY_PATH)
}

// Add Category
export const addCategory = async (body) => {
  return await postFetcher(url.CATEGORY_PATH, body)
}

// Update Category
export const updateCategory = async (categoryId, body) => {
  return await putFetcher(url.EDIT_CATEGORY_PATH(categoryId), body)
}

// Delete Category
export const deleteCategory = async (categoryId) => {
  return await deleteFetcher(url.EDIT_CATEGORY_PATH(categoryId))
}

// Delete table from Category
export const deleteTableFromCategory = async (categoryId, tableId) => {
  return await deleteFetcher(url.EDIT_TABLE_CATEGORY_PATH(categoryId, tableId))
}

// Add table to Category
export const addTableToCategory = async (categoryId, tableId) => {
  return await postFetcher(url.EDIT_TABLE_CATEGORY_PATH(categoryId, tableId))
}

// Get all Entity Templates
export const getAllEntityTemplates = async () => {
  return await getFetcher(url.GET_ALL_ENTITY_TEMPLATES)
}
// Get instance of Entity Template for adding assets
export const getInstanceOfEntityTemplate = async (templateId) => {
  return await getFetcher(url.GET_INSTANCE_OF_ENTITITY_TEMPLATE(templateId))
}
// Apply rule set for entity template to get data
export const applyRuleSet = async (templateId, body) => {
  return await postFetcher(url.APPLY_RULE_SET(templateId), body)
}
// Save assets using entity template
export const saveAssetsUsingEntityTemplate = async (templateId, body) => {
  return await postFetcher(url.SAVE_ASSETS_WITH_TEMPLATE(templateId), body)
}

export const getSecurityGroupsOfTenant = async (tenantId) => {
  return await getFetcher(url.GET_SECURITY_GROUPS_FROM_TENANTS(tenantId))
}
// Assign Tenant to Security Group
export const assignTenantSecurityGroup = async (tenantId, securityGroupId) => {
  return await postFetcher(url.ASSIGN_TENANTS_SECURITY_GROUP(tenantId, securityGroupId))
}
