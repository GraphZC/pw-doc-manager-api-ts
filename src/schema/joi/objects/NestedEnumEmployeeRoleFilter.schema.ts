// @ts-nocheck
import Joi from 'joi';


export const NestedEnumEmployeeRoleFilterSchemaObject = {
    not: Joi.alternatives().try(Joi.link('#NestedEnumEmployeeRoleFilter'))
}