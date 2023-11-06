// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const ProductMinOrderByAggregateInputSchemaObject = {
    id: SortOrderSchema,
  code: SortOrderSchema,
  name: SortOrderSchema,
  description: SortOrderSchema,
  price: SortOrderSchema,
  createdAt: SortOrderSchema,
  updatedAt: SortOrderSchema
}