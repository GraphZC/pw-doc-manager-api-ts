// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { CustomerOrderOrderByRelationAggregateInputSchemaObject } from './CustomerOrderOrderByRelationAggregateInput.schema'

export const EmployeeOrderByWithRelationInputSchemaObject = {
    id: SortOrderSchema,
  username: SortOrderSchema,
  password: SortOrderSchema,
  name: SortOrderSchema,
  role: SortOrderSchema,
  createdAt: SortOrderSchema,
  updatedAt: SortOrderSchema,
  customerOrder: Joi.object().keys(CustomerOrderOrderByRelationAggregateInputSchemaObject)
}