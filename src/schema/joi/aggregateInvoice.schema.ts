import Joi from 'joi';
import { InvoiceWhereInputSchemaObject, InvoiceOrderByWithRelationInputSchemaObject, InvoiceWhereUniqueInputSchemaObject } from './objects'

export const InvoiceAggregateSchema = Joi.object().keys({ where: Joi.object().keys(InvoiceWhereInputSchemaObject), orderBy: Joi.object().keys(InvoiceOrderByWithRelationInputSchemaObject), cursor: Joi.object().keys(InvoiceWhereUniqueInputSchemaObject), take: Joi.number(), skip: Joi.number()  }).required()