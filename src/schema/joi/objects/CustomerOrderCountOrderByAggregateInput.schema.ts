// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const CustomerOrderCountOrderByAggregateInputSchemaObject = {
    id: SortOrderSchema,
  customerId: SortOrderSchema,
  employeeId: SortOrderSchema,
  invoiceId: SortOrderSchema,
  createdAt: SortOrderSchema,
  updatedAt: SortOrderSchema
}