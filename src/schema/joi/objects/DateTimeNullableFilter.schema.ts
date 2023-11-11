// @ts-nocheck
import Joi from 'joi';
import { NestedDateTimeNullableFilterSchemaObject } from './NestedDateTimeNullableFilter.schema'

export const DateTimeNullableFilterSchemaObject = {
    lt: Joi.date(),
  lte: Joi.date(),
  gt: Joi.date(),
  gte: Joi.date(),
  not: Joi.alternatives().try(Joi.object().keys(NestedDateTimeNullableFilterSchemaObject))
}