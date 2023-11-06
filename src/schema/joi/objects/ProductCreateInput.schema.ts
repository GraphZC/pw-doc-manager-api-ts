// @ts-nocheck
import Joi from 'joi';
import { PurchaseCreateNestedManyWithoutProductInputSchemaObject } from './PurchaseCreateNestedManyWithoutProductInput.schema'

export const ProductCreateInputSchemaObject = {
    id: Joi.string(),
  code: Joi.alternatives().try(Joi.string()),
  name: Joi.string().required(),
  description: Joi.alternatives().try(Joi.string()),
  price: Joi.number().required(),
  createdAt: Joi.date(),
  updatedAt: Joi.date(),
  purchase: Joi.object().keys(PurchaseCreateNestedManyWithoutProductInputSchemaObject)
}