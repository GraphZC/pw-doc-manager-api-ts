import Joi from 'joi';

export const PurchaseScalarFieldEnumSchema = Joi.string().valid(...["id","poolId","productId","customerOrderId","quantity","createdAt","updatedAt"])