// @ts-nocheck
import Joi from 'joi';
import { PoolCreateNestedOneWithoutPurchaseInputSchemaObject } from './PoolCreateNestedOneWithoutPurchaseInput.schema';
import { ProductCreateNestedOneWithoutPurchaseInputSchemaObject } from './ProductCreateNestedOneWithoutPurchaseInput.schema';
import { CustomerOrderCreateNestedOneWithoutPurchaseInputSchemaObject } from './CustomerOrderCreateNestedOneWithoutPurchaseInput.schema'

export const PurchaseCreateInputSchemaObject = {
    id: Joi.string(),
  quantity: Joi.number().required(),
  createdAt: Joi.date(),
  updatedAt: Joi.date(),
  pool: Joi.object().keys(PoolCreateNestedOneWithoutPurchaseInputSchemaObject),
  product: Joi.object().keys(ProductCreateNestedOneWithoutPurchaseInputSchemaObject),
  customerOrder: Joi.object().keys(CustomerOrderCreateNestedOneWithoutPurchaseInputSchemaObject)
}