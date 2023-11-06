// @ts-nocheck
import Joi from 'joi';
import { PoolCreateNestedOneWithoutPurchaseInputSchemaObject } from './PoolCreateNestedOneWithoutPurchaseInput.schema';
import { CustomerOrderCreateNestedOneWithoutPurchaseInputSchemaObject } from './CustomerOrderCreateNestedOneWithoutPurchaseInput.schema'

export const PurchaseCreateWithoutProductInputSchemaObject = {
    id: Joi.string(),
  quantity: Joi.number().required(),
  createdAt: Joi.date(),
  updatedAt: Joi.date(),
  pool: Joi.object().keys(PoolCreateNestedOneWithoutPurchaseInputSchemaObject),
  customerOrder: Joi.object().keys(CustomerOrderCreateNestedOneWithoutPurchaseInputSchemaObject)
}