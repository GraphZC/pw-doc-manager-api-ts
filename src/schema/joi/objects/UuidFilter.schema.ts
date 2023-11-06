// @ts-nocheck
import Joi from 'joi';
import { QueryModeSchema } from '../enums/QueryMode.schema';
import { NestedUuidFilterSchemaObject } from './NestedUuidFilter.schema'

export const UuidFilterSchemaObject = {
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
Joi.object().keys(NestedUuidFilterSchemaObject))
}