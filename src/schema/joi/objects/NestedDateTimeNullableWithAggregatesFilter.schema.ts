// @ts-nocheck
import Joi from 'joi';
import { NestedIntNullableFilterSchemaObject } from './NestedIntNullableFilter.schema';
import { NestedDateTimeNullableFilterSchemaObject } from './NestedDateTimeNullableFilter.schema'

export const NestedDateTimeNullableWithAggregatesFilterSchemaObject = {
    lt: Joi.date(),
  lte: Joi.date(),
  gt: Joi.date(),
  gte: Joi.date(),
  not: Joi.alternatives().try(Joi.link('#NestedDateTimeNullableWithAggregatesFilter')),
  _count: Joi.object().keys(NestedIntNullableFilterSchemaObject),
  _min: Joi.object().keys(NestedDateTimeNullableFilterSchemaObject),
  _max: Joi.object().keys(NestedDateTimeNullableFilterSchemaObject)
}