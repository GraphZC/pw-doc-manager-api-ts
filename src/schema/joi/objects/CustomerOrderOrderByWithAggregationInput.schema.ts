// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { CustomerOrderCountOrderByAggregateInputSchemaObject } from './CustomerOrderCountOrderByAggregateInput.schema';
import { CustomerOrderMaxOrderByAggregateInputSchemaObject } from './CustomerOrderMaxOrderByAggregateInput.schema';
import { CustomerOrderMinOrderByAggregateInputSchemaObject } from './CustomerOrderMinOrderByAggregateInput.schema'

export const CustomerOrderOrderByWithAggregationInputSchemaObject = {
    id: SortOrderSchema,
  customerId: SortOrderSchema,
  employeeId: SortOrderSchema,
  invoiceId: SortOrderSchema,
  createdAt: SortOrderSchema,
  updatedAt: SortOrderSchema,
  _count: Joi.object().keys(CustomerOrderCountOrderByAggregateInputSchemaObject),
  _max: Joi.object().keys(CustomerOrderMaxOrderByAggregateInputSchemaObject),
  _min: Joi.object().keys(CustomerOrderMinOrderByAggregateInputSchemaObject)
}