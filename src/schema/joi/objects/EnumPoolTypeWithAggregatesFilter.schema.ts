// @ts-nocheck
import Joi from 'joi';
import { NestedEnumPoolTypeWithAggregatesFilterSchemaObject } from './NestedEnumPoolTypeWithAggregatesFilter.schema';
import { NestedIntFilterSchemaObject } from './NestedIntFilter.schema';
import { NestedEnumPoolTypeFilterSchemaObject } from './NestedEnumPoolTypeFilter.schema'

export const EnumPoolTypeWithAggregatesFilterSchemaObject = {
    not: Joi.alternatives().try(Joi.object().keys(NestedEnumPoolTypeWithAggregatesFilterSchemaObject)),
  _count: Joi.object().keys(NestedIntFilterSchemaObject),
  _min: Joi.object().keys(NestedEnumPoolTypeFilterSchemaObject),
  _max: Joi.object().keys(NestedEnumPoolTypeFilterSchemaObject)
}