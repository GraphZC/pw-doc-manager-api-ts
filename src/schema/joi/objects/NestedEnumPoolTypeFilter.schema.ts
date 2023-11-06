// @ts-nocheck
import Joi from 'joi';


export const NestedEnumPoolTypeFilterSchemaObject = {
    not: Joi.alternatives().try(Joi.link('#NestedEnumPoolTypeFilter'))
}