// @ts-nocheck
import Joi from 'joi';
import { NestedFloatFilterSchemaObject } from './NestedFloatFilter.schema'

export const FloatFilterSchemaObject = {
    equals: Joi.number(),
  in: Joi.alternatives().try(Joi.array().items(Joi.number()),
Joi.number()),
  notIn: Joi.alternatives().try(Joi.array().items(Joi.number()),
Joi.number()),
  lt: Joi.number(),
  lte: Joi.number(),
  gt: Joi.number(),
  gte: Joi.number(),
  not: Joi.alternatives().try(Joi.number(),
Joi.object().keys(NestedFloatFilterSchemaObject))
}