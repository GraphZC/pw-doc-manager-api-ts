import Joi from 'joi';
import { InvoiceWhereInputSchemaObject, InvoiceOrderByWithAggregationInputSchemaObject, InvoiceScalarWhereWithAggregatesInputSchemaObject } from './objects';
import { InvoiceScalarFieldEnumSchema } from './enums'

export const InvoiceGroupBySchema = Joi.object().keys({ where: Joi.object().keys(InvoiceWhereInputSchemaObject), orderBy: Joi.object().keys(InvoiceOrderByWithAggregationInputSchemaObject), having: Joi.object().keys(InvoiceScalarWhereWithAggregatesInputSchemaObject), take: Joi.number(), skip: Joi.number(), by: Joi.array().items(InvoiceScalarFieldEnumSchema).required()  }).required()