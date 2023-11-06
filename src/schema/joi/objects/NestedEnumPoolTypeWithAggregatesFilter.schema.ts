// @ts-nocheck
import Joi from 'joi';
import { NestedIntFilterSchemaObject } from './NestedIntFilter.schema';
import { NestedEnumPoolTypeFilterSchemaObject } from './NestedEnumPoolTypeFilter.schema'

export const NestedEnumPoolTypeWithAggregatesFilterSchemaObject = {
    not: Joi.alternatives().try(Joi.link('#NestedEnumPoolTypeWithAggregatesFilter')),
  _count: Joi.object().keys(NestedIntFilterSchemaObject),
  _min: Joi.object().keys(NestedEnumPoolTypeFilterSchemaObject),
  _max: Joi.object().keys(NestedEnumPoolTypeFilterSchemaObject)
}