import Joi from 'joi';

export const InvoiceScalarFieldEnumSchema = Joi.string().valid(...["id","paidAt","vatIncluded","createdAt","updatedAt"])