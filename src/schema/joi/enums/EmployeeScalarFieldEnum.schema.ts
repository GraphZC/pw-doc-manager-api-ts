import Joi from 'joi';

export const EmployeeScalarFieldEnumSchema = Joi.string().valid(...["id","username","password","name","role","createdAt","updatedAt"])