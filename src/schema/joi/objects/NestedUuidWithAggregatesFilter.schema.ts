// @ts-nocheck
import Joi from 'joi';
import { NestedIntFilterSchemaObject } from './NestedIntFilter.schema';
import { NestedStringFilterSchemaObject } from './NestedStringFilter.schema'

export const NestedUuidWithAggregatesFilterSchemaObject = {
    equals: Joi.string(),
  in: Joi.alternatives().try(Joi.array().items(Joi.string()),
Joi.string()),
  notIn: Joi.alternatives().try(Joi.array().items(Joi.string()),
Joi.string()),
  lt: Joi.string(),
  lte: Joi.string(),
  gt: Joi.string(),
  gte: Joi.string(),
  not: Joi.alternatives().try(Joi.string(),
Joi.link('#NestedUuidWithAggregatesFilter')),
  _count: Joi.object().keys(NestedIntFilterSchemaObject),
  _min: Joi.object().keys(NestedStringFilterSchemaObject),
  _max: Joi.object().keys(NestedStringFilterSchemaObject)
}