import Joi from 'joi';
import { CustomerOrderCreateInputSchemaObject } from './objects'

export const CustomerOrderCreateSchema = Joi.object().keys({ data: Joi.object().keys(CustomerOrderCreateInputSchemaObject)  }).required()