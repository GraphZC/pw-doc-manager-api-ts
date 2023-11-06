// @ts-nocheck
import Joi from 'joi';
import { NestedIntFilterSchemaObject } from './NestedIntFilter.schema';
import { NestedEnumEmployeeRoleFilterSchemaObject } from './NestedEnumEmployeeRoleFilter.schema'

export const NestedEnumEmployeeRoleWithAggregatesFilterSchemaObject = {
    not: Joi.alternatives().try(Joi.link('#NestedEnumEmployeeRoleWithAggregatesFilter')),
  _count: Joi.object().keys(NestedIntFilterSchemaObject),
  _min: Joi.object().keys(NestedEnumEmployeeRoleFilterSchemaObject),
  _max: Joi.object().keys(NestedEnumEmployeeRoleFilterSchemaObject)
}