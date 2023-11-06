// @ts-nocheck
import Joi from 'joi';


export const NestedUuidFilterSchemaObject = {
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
Joi.link('#NestedUuidFilter'))
}