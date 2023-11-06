import Joi from 'joi';
import { InvoiceWhereUniqueInputSchemaObject } from './objects'

export const InvoiceFindUniqueSchema = Joi.object().keys({ where: Joi.object().keys(InvoiceWhereUniqueInputSchemaObject) }).required()