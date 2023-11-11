// @ts-nocheck
import Joi from 'joi';


export const PurchaseCreateManyProductInputSchemaObject = {
    id: Joi.string(),
  poolId: Joi.alternatives().try(Joi.string()),
  customerOrderId: Joi.string().required(),
  quantity: Joi.number().required(),
  createdAt: Joi.date(),
  updatedAt: Joi.date()
}