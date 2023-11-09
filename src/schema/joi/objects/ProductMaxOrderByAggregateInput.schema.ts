// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const ProductMaxOrderByAggregateInputSchemaObject = {
    id: SortOrderSchema,
  code: SortOrderSchema,
  name: SortOrderSchema,
  description: SortOrderSchema,
  price: SortOrderSchema,
  unit: SortOrderSchema,
  createdAt: SortOrderSchema,
  updatedAt: SortOrderSchema
}