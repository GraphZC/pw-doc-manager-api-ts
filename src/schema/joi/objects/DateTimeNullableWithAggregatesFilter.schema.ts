// @ts-nocheck
import Joi from 'joi';
import { NestedDateTimeNullableWithAggregatesFilterSchemaObject } from './NestedDateTimeNullableWithAggregatesFilter.schema';
import { NestedIntNullableFilterSchemaObject } from './NestedIntNullableFilter.schema';
import { NestedDateTimeNullableFilterSchemaObject } from './NestedDateTimeNullableFilter.schema'

export const DateTimeNullableWithAggregatesFilterSchemaObject = {
    lt: Joi.date(),
  lte: Joi.date(),
  gt: Joi.date(),
  gte: Joi.date(),
  not: Joi.alternatives().try(Joi.object().keys(NestedDateTimeNullableWithAggregatesFilterSchemaObject)),
  _count: Joi.object().keys(NestedIntNullableFilterSchemaObject),
  _min: Joi.object().keys(NestedDateTimeNullableFilterSchemaObject),
  _max: Joi.object().keys(NestedDateTimeNullableFilterSchemaObject)
}