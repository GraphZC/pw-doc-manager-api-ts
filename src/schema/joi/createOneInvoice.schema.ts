import Joi from 'joi';
import { InvoiceCreateInputSchemaObject } from './objects'

export const InvoiceCreateSchema = Joi.object().keys({ data: Joi.object().keys(InvoiceCreateInputSchemaObject)  }).required()