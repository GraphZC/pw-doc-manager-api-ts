// @ts-nocheck
import Joi from 'joi';


export const PurchaseUncheckedCreateInputSchemaObject = {
    id: Joi.string(),
  poolId: Joi.alternatives().try(Joi.string()),
  productId: Joi.alternatives().try(Joi.string()),
  customerOrderId: Joi.string().required(),
  quantity: Joi.number().required(),
  createdAt: Joi.date(),
  updatedAt: Joi.date()
}