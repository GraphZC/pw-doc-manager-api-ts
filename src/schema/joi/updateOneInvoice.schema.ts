import Joi from 'joi';
import { InvoiceUpdateInputSchemaObject, InvoiceWhereUniqueInputSchemaObject } from './objects'

export const InvoiceUpdateOneSchema = Joi.object().keys({ data: Joi.object().keys(InvoiceUpdateInputSchemaObject), where: Joi.object().keys(InvoiceWhereUniqueInputSchemaObject)  }).required()