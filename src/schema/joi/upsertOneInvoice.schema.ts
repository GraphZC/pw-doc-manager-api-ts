import Joi from 'joi';
import { InvoiceWhereUniqueInputSchemaObject, InvoiceCreateInputSchemaObject, InvoiceUpdateInputSchemaObject } from './objects'

export const InvoiceUpsertSchema = Joi.object().keys({ where: Joi.object().keys(InvoiceWhereUniqueInputSchemaObject), data: Joi.object().keys(InvoiceCreateInputSchemaObject), update: Joi.object().keys(InvoiceUpdateInputSchemaObject)  }).required()