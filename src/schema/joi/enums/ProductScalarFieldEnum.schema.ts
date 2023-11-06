import Joi from 'joi';

export const ProductScalarFieldEnumSchema = Joi.string().valid(...["id","code","name","description","price","createdAt","updatedAt"])