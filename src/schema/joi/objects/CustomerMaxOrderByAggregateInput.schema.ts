// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const CustomerMaxOrderByAggregateInputSchemaObject = {
    id: SortOrderSchema,
  name: SortOrderSchema,
  address: SortOrderSchema,
  telephone: SortOrderSchema,
  taxId: SortOrderSchema,
  createdAt: SortOrderSchema,
  updatedAt: SortOrderSchema
}