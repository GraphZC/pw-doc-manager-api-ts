// @ts-nocheck
import Joi from 'joi';
import { QueryModeSchema } from '../enums/QueryMode.schema';
import { NestedUuidNullableWithAggregatesFilterSchemaObject } from './NestedUuidNullableWithAggregatesFilter.schema';
import { NestedIntNullableFilterSchemaObject } from './NestedIntNullableFilter.schema';
import { NestedStringNullableFilterSchemaObject } from './NestedStringNullableFilter.schema'

export const UuidNullableWithAggregatesFilterSchemaObject = {
    equals: Joi.alternatives().try(Joi.string()),
  in: Joi.alternatives().try(Joi.array().items(Joi.string()),
Joi.string()),
  notIn: Joi.alternatives().try(Joi.array().items(Joi.string()),
Joi.string()),
  lt: Joi.string(),
  lte: Joi.string(),
  gt: Joi.string(),
  gte: Joi.string(),
  mode: QueryModeSchema,
  not: Joi.alternatives().try(Joi.string(),
Joi.object().keys(NestedUuidNullableWithAggregatesFilterSchemaObject)),
  _count: Joi.object().keys(NestedIntNullableFilterSchemaObject),
  _min: Joi.object().keys(NestedStringNullableFilterSchemaObject),
  _max: Joi.object().keys(NestedStringNullableFilterSchemaObject)
}