// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputSchemaObject } from './SortOrderInput.schema';
import { CustomerOrderOrderByWithRelationInputSchemaObject } from './CustomerOrderOrderByWithRelationInput.schema'

export const InvoiceOrderByWithRelationInputSchemaObject = {
    id: SortOrderSchema,
  paidAt: Joi.alternatives().try(SortOrderSchema,
Joi.object().keys(SortOrderInputSchemaObject)),
  createdAt: SortOrderSchema,
  updatedAt: SortOrderSchema,
  customerOrder: Joi.object().keys(CustomerOrderOrderByWithRelationInputSchemaObject)
}