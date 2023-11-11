import Joi from 'joi';
import { InvoiceWhereInputSchemaObject } from './objects'

export const InvoiceDeleteManySchema = Joi.object().keys({ where: Joi.object().keys(InvoiceWhereInputSchemaObject)  }).required()