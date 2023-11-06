// @ts-nocheck
import Joi from 'joi';


export const PurchaseCreateManyCustomerOrderInputSchemaObject = {
    id: Joi.string(),
  poolId: Joi.alternatives().try(Joi.string()),
  productId: Joi.alternatives().try(Joi.string()),
  quantity: Joi.number().required(),
  createdAt: Joi.date(),
  updatedAt: Joi.date()
}