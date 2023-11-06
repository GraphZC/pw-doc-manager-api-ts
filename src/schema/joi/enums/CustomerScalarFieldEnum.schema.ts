import Joi from 'joi';

export const CustomerScalarFieldEnumSchema = Joi.string().valid(...["id","name","address","telephone","taxId","createdAt","updatedAt"])