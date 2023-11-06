// @ts-nocheck
import Joi from 'joi';
import { NestedEnumEmployeeRoleFilterSchemaObject } from './NestedEnumEmployeeRoleFilter.schema'

export const EnumEmployeeRoleFilterSchemaObject = {
    not: Joi.alternatives().try(Joi.object().keys(NestedEnumEmployeeRoleFilterSchemaObject))
}