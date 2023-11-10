// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const InvoiceCountOrderByAggregateInputSchemaObject = {
    id: SortOrderSchema,
  paidAt: SortOrderSchema,
  vatIncluded: SortOrderSchema,
  createdAt: SortOrderSchema,
  updatedAt: SortOrderSchema
}