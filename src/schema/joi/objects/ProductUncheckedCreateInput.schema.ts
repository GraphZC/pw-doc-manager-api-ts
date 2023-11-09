// @ts-nocheck
import Joi from 'joi';
import { PurchaseUncheckedCreateNestedManyWithoutProductInputSchemaObject } from './PurchaseUncheckedCreateNestedManyWithoutProductInput.schema'

export const ProductUncheckedCreateInputSchemaObject = {
    id: Joi.string(),
  code: Joi.alternatives().try(Joi.string()),
  name: Joi.string().required(),
  description: Joi.alternatives().try(Joi.string()),
  price: Joi.number().required(),
  unit: Joi.string().required(),
  createdAt: Joi.date(),
  updatedAt: Joi.date(),
  purchase: Joi.object().keys(PurchaseUncheckedCreateNestedManyWithoutProductInputSchemaObject)
}