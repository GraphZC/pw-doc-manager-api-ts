// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { PoolCountOrderByAggregateInputSchemaObject } from './PoolCountOrderByAggregateInput.schema';
import { PoolAvgOrderByAggregateInputSchemaObject } from './PoolAvgOrderByAggregateInput.schema';
import { PoolMaxOrderByAggregateInputSchemaObject } from './PoolMaxOrderByAggregateInput.schema';
import { PoolMinOrderByAggregateInputSchemaObject } from './PoolMinOrderByAggregateInput.schema';
import { PoolSumOrderByAggregateInputSchemaObject } from './PoolSumOrderByAggregateInput.schema'

export const PoolOrderByWithAggregationInputSchemaObject = {
    id: SortOrderSchema,
  customerId: SortOrderSchema,
  address: SortOrderSchema,
  price: SortOrderSchema,
  chemicalIncluded: SortOrderSchema,
  type: SortOrderSchema,
  inService: SortOrderSchema,
  serviceDayId: SortOrderSchema,
  createdAt: SortOrderSchema,
  updatedAt: SortOrderSchema,
  _count: Joi.object().keys(PoolCountOrderByAggregateInputSchemaObject),
  _avg: Joi.object().keys(PoolAvgOrderByAggregateInputSchemaObject),
  _max: Joi.object().keys(PoolMaxOrderByAggregateInputSchemaObject),
  _min: Joi.object().keys(PoolMinOrderByAggregateInputSchemaObject),
  _sum: Joi.object().keys(PoolSumOrderByAggregateInputSchemaObject)
}