// @ts-nocheck
import Joi from 'joi';
import { InvoiceWhereInputSchemaObject } from './InvoiceWhereInput.schema'

export const InvoiceRelationFilterSchemaObject = {
    is: Joi.alternatives().try(Joi.object().keys(InvoiceWhereInputSchemaObject)),
  isNot: Joi.alternatives().try(Joi.object().keys(InvoiceWhereInputSchemaObject))
}