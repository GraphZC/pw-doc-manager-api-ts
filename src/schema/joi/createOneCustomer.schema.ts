import Joi from 'joi';
import { CustomerCreateInputSchemaObject } from './objects'

export const CustomerCreateSchema = Joi.object().keys({ data: Joi.object().keys(CustomerCreateInputSchemaObject)  }).required()