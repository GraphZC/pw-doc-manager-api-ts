// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const EmployeeMaxOrderByAggregateInputSchemaObject = {
    id: SortOrderSchema,
  username: SortOrderSchema,
  password: SortOrderSchema,
  name: SortOrderSchema,
  role: SortOrderSchema,
  createdAt: SortOrderSchema,
  updatedAt: SortOrderSchema
}