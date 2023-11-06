// @ts-nocheck
import Joi from 'joi';
import { QueryModeSchema } from '../enums/QueryMode.schema';
import { NestedUuidWithAggregatesFilterSchemaObject } from './NestedUuidWithAggregatesFilter.schema';
import { NestedIntFilterSchemaObject } from './NestedIntFilter.schema';
import { NestedStringFilterSchemaObject } from './NestedStringFilter.schema'

export const UuidWithAggregatesFilterSchemaObject = {
    equals: Joi.string(),
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
Joi.object().keys(NestedUuidWithAggregatesFilterSchemaObject)),
  _count: Joi.object().keys(NestedIntFilterSchemaObject),
  _min: Joi.object().keys(NestedStringFilterSchemaObject),
  _max: Joi.object().keys(NestedStringFilterSchemaObject)
}