import Joi from 'joi';

export const ServiceDayScalarFieldEnumSchema = Joi.string().valid(...["id","monday","tuesday","wednesday","thursday","friday","saturday","sunday","createdAt","updatedAt"])