// @ts-nocheck
import Joi from 'joi';
import { NestedEnumEmployeeRoleWithAggregatesFilterSchemaObject } from './NestedEnumEmployeeRoleWithAggregatesFilter.schema';
import { NestedIntFilterSchemaObject } from './NestedIntFilter.schema';
import { NestedEnumEmployeeRoleFilterSchemaObject } from './NestedEnumEmployeeRoleFilter.schema'

export const EnumEmployeeRoleWithAggregatesFilterSchemaObject = {
    not: Joi.alternatives().try(Joi.object().keys(NestedEnumEmployeeRoleWithAggregatesFilterSchemaObject)),
  _count: Joi.object().keys(NestedIntFilterSchemaObject),
  _min: Joi.object().keys(NestedEnumEmployeeRoleFilterSchemaObject),
  _max: Joi.object().keys(NestedEnumEmployeeRoleFilterSchemaObject)
}