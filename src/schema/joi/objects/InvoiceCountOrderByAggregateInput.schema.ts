// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const InvoiceCountOrderByAggregateInputSchemaObject = {
    id: SortOrderSchema,
  paidAt: SortOrderSchema,
  createdAt: SortOrderSchema,
  updatedAt: SortOrderSchema
}