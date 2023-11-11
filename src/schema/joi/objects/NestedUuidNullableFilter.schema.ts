// @ts-nocheck
import Joi from 'joi';


export const NestedUuidNullableFilterSchemaObject = {
    equals: Joi.alternatives().try(Joi.string()),
  in: Joi.alternatives().try(Joi.array().items(Joi.string()),
Joi.string()),
  notIn: Joi.alternatives().try(Joi.array().items(Joi.string()),
Joi.string()),
  lt: Joi.string(),
  lte: Joi.string(),
  gt: Joi.string(),
  gte: Joi.string(),
  not: Joi.alternatives().try(Joi.string(),
Joi.link('#NestedUuidNullableFilter'))
}