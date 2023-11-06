// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { EmployeeCountOrderByAggregateInputSchemaObject } from './EmployeeCountOrderByAggregateInput.schema';
import { EmployeeMaxOrderByAggregateInputSchemaObject } from './EmployeeMaxOrderByAggregateInput.schema';
import { EmployeeMinOrderByAggregateInputSchemaObject } from './EmployeeMinOrderByAggregateInput.schema'

export const EmployeeOrderByWithAggregationInputSchemaObject = {
    id: SortOrderSchema,
  username: SortOrderSchema,
  password: SortOrderSchema,
  name: SortOrderSchema,
  role: SortOrderSchema,
  createdAt: SortOrderSchema,
  updatedAt: SortOrderSchema,
  _count: Joi.object().keys(EmployeeCountOrderByAggregateInputSchemaObject),
  _max: Joi.object().keys(EmployeeMaxOrderByAggregateInputSchemaObject),
  _min: Joi.object().keys(EmployeeMinOrderByAggregateInputSchemaObject)
}