// @ts-nocheck
import Joi from 'joi';
import { NestedEnumPoolTypeFilterSchemaObject } from './NestedEnumPoolTypeFilter.schema'

export const EnumPoolTypeFilterSchemaObject = {
    not: Joi.alternatives().try(Joi.object().keys(NestedEnumPoolTypeFilterSchemaObject))
}