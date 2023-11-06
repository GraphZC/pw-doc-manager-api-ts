// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const InvoiceMaxOrderByAggregateInputSchemaObject = {
    id: SortOrderSchema,
  paidAt: SortOrderSchema,
  createdAt: SortOrderSchema,
  updatedAt: SortOrderSchema
}