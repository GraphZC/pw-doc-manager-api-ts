// @ts-nocheck
import Joi from 'joi';
import { ProductCreateNestedOneWithoutPurchaseInputSchemaObject } from './ProductCreateNestedOneWithoutPurchaseInput.schema';
import { CustomerOrderCreateNestedOneWithoutPurchaseInputSchemaObject } from './CustomerOrderCreateNestedOneWithoutPurchaseInput.schema'

export const PurchaseCreateWithoutPoolInputSchemaObject = {
    id: Joi.string(),
  quantity: Joi.number().required(),
  createdAt: Joi.date(),
  updatedAt: Joi.date(),
  product: Joi.object().keys(ProductCreateNestedOneWithoutPurchaseInputSchemaObject),
  customerOrder: Joi.object().keys(CustomerOrderCreateNestedOneWithoutPurchaseInputSchemaObject)
}