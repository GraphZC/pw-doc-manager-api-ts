import Joi from 'joi';
import { InvoiceUpdateManyMutationInputSchemaObject, InvoiceWhereInputSchemaObject } from './objects'

export const InvoiceUpdateManySchema = Joi.object().keys({ data: Joi.object().keys(InvoiceUpdateManyMutationInputSchemaObject), where: Joi.object().keys(InvoiceWhereInputSchemaObject)  }).required()