// @ts-nocheck
import Joi from 'joi';


export const NestedDateTimeNullableFilterSchemaObject = {
    lt: Joi.date(),
  lte: Joi.date(),
  gt: Joi.date(),
  gte: Joi.date(),
  not: Joi.alternatives().try(Joi.link('#NestedDateTimeNullableFilter'))
}