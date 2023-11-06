// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputSchemaObject } from './SortOrderInput.schema';
import { CustomerCountOrderByAggregateInputSchemaObject } from './CustomerCountOrderByAggregateInput.schema';
import { CustomerMaxOrderByAggregateInputSchemaObject } from './CustomerMaxOrderByAggregateInput.schema';
import { CustomerMinOrderByAggregateInputSchemaObject } from './CustomerMinOrderByAggregateInput.schema'

export const CustomerOrderByWithAggregationInputSchemaObject = {
    id: SortOrderSchema,
  name: SortOrderSchema,
  address: Joi.alternatives().try(SortOrderSchema,
Joi.object().keys(SortOrderInputSchemaObject)),
  telephone: Joi.alternatives().try(SortOrderSchema,
Joi.object().keys(SortOrderInputSchemaObject)),
  taxId: Joi.alternatives().try(SortOrderSchema,
Joi.object().keys(SortOrderInputSchemaObject)),
  createdAt: SortOrderSchema,
  updatedAt: SortOrderSchema,
  _count: Joi.object().keys(CustomerCountOrderByAggregateInputSchemaObject),
  _max: Joi.object().keys(CustomerMaxOrderByAggregateInputSchemaObject),
  _min: Joi.object().keys(CustomerMinOrderByAggregateInputSchemaObject)
}