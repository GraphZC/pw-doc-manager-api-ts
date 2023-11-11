// @ts-nocheck
import Joi from 'joi';
import { PoolCreateNestedOneWithoutPurchaseInputSchemaObject } from './PoolCreateNestedOneWithoutPurchaseInput.schema';
import { ProductCreateNestedOneWithoutPurchaseInputSchemaObject } from './ProductCreateNestedOneWithoutPurchaseInput.schema'

export const PurchaseCreateWithoutCustomerOrderInputSchemaObject = {
    id: Joi.string(),
  quantity: Joi.number().required(),
  createdAt: Joi.date(),
  updatedAt: Joi.date(),
  pool: Joi.object().keys(PoolCreateNestedOneWithoutPurchaseInputSchemaObject),
  product: Joi.object().keys(ProductCreateNestedOneWithoutPurchaseInputSchemaObject)
}