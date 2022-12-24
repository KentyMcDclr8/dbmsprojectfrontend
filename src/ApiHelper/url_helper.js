export const COMMON_PATH = '/ams'
export const TABLES_PATH = COMMON_PATH + '/db-config/db-table'
export const COLUMN_TYPES_PATH = COMMON_PATH + '/db-config/db-column-types'
export const COLUMNS_PATH = (tableId) => TABLES_PATH + '/' + tableId + '/db-columns'
export const TABLES_ATTRIBUTES_PATH = (tableId) => TABLES_PATH + '/' + tableId
export const RELATIONS_PATH = (tableId) => TABLES_PATH + '/' + tableId + '/db-relations'
export const OBJECT_STRUCTURES_PATH = COMMON_PATH + '/db-config/db-object-structure'
export const OBJECT_STRUCTURES_GENERIC_SEARCH = (parentTableName) => COMMON_PATH + '/generic/' + parentTableName + '/search'
export const CREATE_OBJECT_STRUCTURE_DATA_PATH = (parentTableName) => COMMON_PATH + '/generic/' + parentTableName + '/save'
export const UPDATE_OBJECT_STRUCTURE_DATA_PATH = (parentTableName, id) => COMMON_PATH + '/generic/' + parentTableName + '/' + id + '/save'
export const ENUMSET_PATH = COMMON_PATH + '/enumset'
export const ENUMSET_BY_ID_PATH = (id) => ENUMSET_PATH + '/' + id
export const ENUMVAL_PATH = (id) => COMMON_PATH + '/enumval/enumset/' + id
export const DELETE_RELATION_PATH = (tableId, relationId) => TABLES_PATH + '/' + tableId + '/db-relation/' + relationId

export const DATA_MAPPING_PATH = COMMON_PATH + '/data-mapping-config/data-mapping'
export const DATA_MAPPING_COLUMN_PATH_ID = (id) => DATA_MAPPING_PATH + '/' + id + '/data-mapping-column'
export const DELETE_DATA_MAPPING_COL = (id, colId) => DATA_MAPPING_PATH + '/' + id + '/data-mapping-column/' + colId
export const DATA_MAPPING_PATH_BY_ID = (id) => DATA_MAPPING_PATH + '/' + id

export const PUBLISH_CHANGES_PATH = COMMON_PATH + '/db-config/publish-changes'
export const GET_CHANGES_PATH = COMMON_PATH + '/db-config/get-changes'
export const MEASURE_UNIT_PATH1 = COMMON_PATH + '/measure_unit'
export const MEASURE_UNIT_PATH = COMMON_PATH + '/generic/measure_unit/search'
export const DELETE_PATH = (tableName, recordId) => COMMON_PATH + '/generic/' + tableName + '/' + recordId
export const COLUMN_PATH = (tableId, columnId) => COMMON_PATH + '/db-config/db-table/' + tableId + '/db-column/' + columnId

export const GET_ALL_TEMPLATES_PATH = COMMON_PATH + '/batch-job-config/batch-job-template/'
export const ADD_TEMPLATE_PATH = COMMON_PATH + '/batch-job-config/batch-job-template'
export const ADD_TEMPLATE_ARG_PATH = (templateId) => COMMON_PATH + '/batch-job-config/batch-job-template/' + templateId + '/batch-job-template-arg'
export const DELETE_BATCH_JOB_TEMPLATE_PATH = (templateId) => COMMON_PATH + '/batch-job-config/batch-job-template/' + templateId
export const DELETE_BATCH_JOB_TEMPLATE_ARG_PATH = (templateId, argId) => COMMON_PATH + '/batch-job-config/batch-job-template/' + templateId + '/batch-job-template-arg/' + argId

export const ADD_BATCH_JOB_PATH = (templateId) => COMMON_PATH + '/batch-job-config/batch-job-template/' + templateId + '/batch-job'
export const ADD_BATCH_JOB_ARG_PATH = (batchJobId) => COMMON_PATH + '/batch-job-config/batch-job/' + batchJobId + '/batch-job-arg'
export const EDIT_BATCH_JOB_PATH = (templateId) => COMMON_PATH + '/batch-job-config/batch-job-template/' + templateId + '/batch-job'
export const GET_ALL_BATCH_JOBS_PATH = COMMON_PATH + '/batch-job-config/batch-job/'
export const DELETE_BATCH_JOB_PATH = (batchJobId) => COMMON_PATH + '/batch-job-config/batch-job/' + batchJobId
export const DELETE_BATCH_JOB_ARG_PATH = (batchJobId, argId) => COMMON_PATH + '/batch-job-config/batch-job/' + batchJobId + '/batch-job-arg/' + argId

export const GET_ALL_ORGANIZATIONS_PATH = COMMON_PATH + '/organization'
export const ADD_ORGANIZATION_PATH = COMMON_PATH + '/organization'
export const UPDATE_ORGANIZATION_PATH = (organizationId) => COMMON_PATH + '/organization/' + organizationId

export const GET_TENANTS_BY_ORGANIZATION_PATH = (organizationId) => COMMON_PATH + '/organization/' + organizationId + '/tenant'
export const GET_TENANTS_BY_GROUP_PATH = (groupId) => COMMON_PATH + '/organization/group/' + groupId + '/tenant'
export const ADD_TENANT_PATH = COMMON_PATH + '/organization/tenant'
export const UPDATE_TENANT_PATH = (tenantId) => COMMON_PATH + '/organization/tenant/' + tenantId

export const GET_GROUPS_BY_ORGANIZATION_PATH = (organizationId) => COMMON_PATH + '/organization/' + organizationId + '/group'
export const GET_GROUPS_BY_USER_PATH = (userId) => COMMON_PATH + '/organization/user/' + userId + '/group'
export const GET_GROUPS_BY_TENANT_PATH = (tenantId) => COMMON_PATH + '/organization/tenant/' + tenantId + '/group'
export const ADD_GROUP_PATH = COMMON_PATH + '/organization/group'
export const UPDATE_GROUP_PATH = (groupId) => COMMON_PATH + '/organization/group/' + groupId

export const GET_USERS_BY_ORGANIZATION_PATH = (organizationId) => COMMON_PATH + '/organization/' + organizationId + '/user'
export const GET_USERS_BY_GROUP_PATH = (groupId) => COMMON_PATH + '/organization/group/' + groupId + '/user'
export const GET_USERS_BY_ROLE_PATH = (roleId) => COMMON_PATH + '/organization/role/' + roleId + '/user'
export const ADD_USER_PATH = COMMON_PATH + '/organization/user'
export const UPDATE_USER_PATH = (userId) => COMMON_PATH + '/organization/user/' + userId

export const GET_USER_ROLES_PATH = (userId) => COMMON_PATH + '/organization/user/' + userId + '/roles'
export const GET_ROLES_BY_ORGANIZATION_PATH = (organizationId) => COMMON_PATH + '/organization/' + organizationId + '/role'
export const ADD_ROLE_PATH = COMMON_PATH + '/organization/role'
export const UPDATE_ROLE_PATH = (roleId) => COMMON_PATH + '/organization/role/' + roleId

export const UPSERT_USER_ROLE_PATH = COMMON_PATH + '/organization/user-roles'
export const UPSERT_TENANT_GROUP_PATH = COMMON_PATH + '/organization/tenant-groups'
export const UPSERT_USER_GROUP_PATH = COMMON_PATH + '/organization/user-groups'

export const MESSAGE_RESOURCE_PATH = COMMON_PATH + '/message-resource-config/'
export const GET_MESSAGE_RESOURCE_KEY_PATH = MESSAGE_RESOURCE_PATH + 'message-resource-key'
export const MESSAGE_RESOURCE_KEY_PATH_BY_ID = (id) => GET_MESSAGE_RESOURCE_KEY_PATH + '/' + id

export const GET_MESSAGE_RESOURCE_LOCALE_PATH = MESSAGE_RESOURCE_PATH + 'message-resource-locale'
export const MESSAGE_RESOURCE_LOCALE_PATH_BY_ID = (id) => GET_MESSAGE_RESOURCE_LOCALE_PATH + '/' + id

export const GET_MESSAGE_RESOURCE_VALUE_PATH = MESSAGE_RESOURCE_PATH + 'message-resource-value'
export const MESSAGE_RESOURCE_VALUE_PATH_BY_ID = (id) => GET_MESSAGE_RESOURCE_VALUE_PATH + '/' + id

export const CREATE_VIRTUAL_TABLE = COMMON_PATH + '/db-config/virtual-table'
export const UPDATE_COLUMN_PATH = (tableId, columnId) => TABLES_PATH + '/' + tableId + '/db-column/' + columnId
export const DELETE_TABLE_PERMANENTLY_PATH = (tableId) => TABLES_PATH + '/' + tableId + '/permanently'
export const GET_DATAMAPPING_COLUMN_LIST_BY_COLUMN_ID_PATH = (columnId) => COMMON_PATH + '/data-mapping-config/db-column/' + columnId + '/data-mapping-column'

export const GET_ATTACHMENT_UPLOAD_URL = (tableName, uid) => COMMON_PATH + '/generic/' + tableName + '/' + uid + '/attachment/upload-url'
export const APPROVE_ATTACHMENT_UPLOAD = (tableName, uid) => COMMON_PATH + '/generic/' + tableName + '/' + uid + '/attachment'

export const INDEXES_PATH = (tableId) => TABLES_PATH + '/' + tableId + '/db-index'
export const INDEX_COLUMNS_PATH = (indexId) => COMMON_PATH + '/db-config/db-index/' + indexId + '/db-index-column'
export const EDIT_INDEX_PATH = (tableId, indexId) => TABLES_PATH + '/' + tableId + '/db-index/' + indexId
export const EDIT_INDEX_COLUMN_PATH = (indexId, indexColumnId) => INDEX_COLUMNS_PATH(indexId) + '/' + indexColumnId

export const CONSTRAINTS_PATH = (tableId) =>
  TABLES_PATH + "/" + tableId + "/db-constraint";
export const DELETE_CONSTRAINT_PATH = (tableId, constraintId) =>
  CONSTRAINTS_PATH(tableId) + "/" + constraintId;
export const CONSTRAINT_COLUMNS_PATH = (constraintId) =>
  COMMON_PATH +
  "/db-config/db-constraint/" +
  constraintId +
  "/db-constraint-column";
export const DELETE_CONSTRAINT_COLUMNS_PATH = (
  constraintId,
  constraintColumnId
) => CONSTRAINT_COLUMNS_PATH(constraintId) + "/" + constraintColumnId;

export const CATEGORY_PATH = COMMON_PATH + "/db-config/db-category";
export const EDIT_CATEGORY_PATH = (categoryId) =>
  COMMON_PATH + "/db-config/db-category/" + categoryId;
export const EDIT_TABLE_CATEGORY_PATH = (categoryId, tableId) =>
  COMMON_PATH + "/db-config/db-category/" + categoryId + "/db-table/" + tableId;

export const GET_ALL_ENTITY_TEMPLATES = COMMON_PATH + "/data-mapping-config/data-mapping/template"
export const GET_INSTANCE_OF_ENTITITY_TEMPLATE = (templateId) => COMMON_PATH + "/data-mapping-config/data-mapping/template/" + templateId + "/instantiate"
export const APPLY_RULE_SET = (templateId) => COMMON_PATH + "/data-mapping-config/data-mapping/template/" + templateId + "/apply-rule-set"
export const SAVE_ASSETS_WITH_TEMPLATE = (templateId) => COMMON_PATH + "/data-mapping-config/data-mapping/template/" + templateId + "/save-instance"

export const GET_ATTACHMENTS = (tableName, wo) =>
  COMMON_PATH + "/generic/" + tableName + "/" + wo + "/attachment/search";
export const DELETE_ATTACHMENT = (tableName, wo, deleteId) =>
  COMMON_PATH + "/generic/" + tableName + "/" + wo + "/attachment/" + deleteId;
export const ADD_ATTACHMENT = (tableName, uid) =>
  COMMON_PATH + "/generic/" + tableName + "/" + uid + "/attachment/upload-url";

export const GET_SECURITY_GROUPS_FROM_TENANTS = (tenantId) => COMMON_PATH + "/security-group/tenant/" + tenantId;
export const ASSIGN_TENANTS_SECURITY_GROUP = (tenantId, securityGroupId) => COMMON_PATH + '/security-group/' + securityGroupId + '/tenant/' + tenantId
