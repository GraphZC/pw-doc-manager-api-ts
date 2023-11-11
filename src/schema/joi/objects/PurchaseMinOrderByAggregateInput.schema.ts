// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const PurchaseMinOrderByAggregateInputSchemaObject = {
    id: SortOrderSchema,
  poolId: SortOrderSchema,
  productId: SortOrderSchema,
  customerOrderId: SortOrderSchema,
  quantity: SortOrderSchema,
  createdAt: SortOrderSchema,
  updatedAt: SortOrderSchema
}