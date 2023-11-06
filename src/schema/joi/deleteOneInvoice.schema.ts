import Joi from 'joi';
import { InvoiceWhereUniqueInputSchemaObject } from './objects'

export const InvoiceDeleteOneSchema = Joi.object().keys({ where: Joi.object().keys(InvoiceWhereUniqueInputSchemaObject)  }).required()