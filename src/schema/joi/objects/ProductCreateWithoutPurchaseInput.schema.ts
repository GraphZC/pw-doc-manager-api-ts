// @ts-nocheck
import Joi from 'joi';


export const ProductCreateWithoutPurchaseInputSchemaObject = {
    id: Joi.string(),
  code: Joi.alternatives().try(Joi.string()),
  name: Joi.string().required(),
  description: Joi.alternatives().try(Joi.string()),
  price: Joi.number().required(),
  unit: Joi.string().required(),
  createdAt: Joi.date(),
  updatedAt: Joi.date()
}