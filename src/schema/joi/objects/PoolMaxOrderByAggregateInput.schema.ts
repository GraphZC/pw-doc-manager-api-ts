// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const PoolMaxOrderByAggregateInputSchemaObject = {
    id: SortOrderSchema,
  customerId: SortOrderSchema,
  address: SortOrderSchema,
  price: SortOrderSchema,
  chemicalIncluded: SortOrderSchema,
  type: SortOrderSchema,
  inService: SortOrderSchema,
  createdAt: SortOrderSchema,
  updatedAt: SortOrderSchema
}