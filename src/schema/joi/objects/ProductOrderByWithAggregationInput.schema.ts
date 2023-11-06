// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputSchemaObject } from './SortOrderInput.schema';
import { ProductCountOrderByAggregateInputSchemaObject } from './ProductCountOrderByAggregateInput.schema';
import { ProductAvgOrderByAggregateInputSchemaObject } from './ProductAvgOrderByAggregateInput.schema';
import { ProductMaxOrderByAggregateInputSchemaObject } from './ProductMaxOrderByAggregateInput.schema';
import { ProductMinOrderByAggregateInputSchemaObject } from './ProductMinOrderByAggregateInput.schema';
import { ProductSumOrderByAggregateInputSchemaObject } from './ProductSumOrderByAggregateInput.schema'

export const ProductOrderByWithAggregationInputSchemaObject = {
    id: SortOrderSchema,
  code: Joi.alternatives().try(SortOrderSchema,
Joi.object().keys(SortOrderInputSchemaObject)),
  name: SortOrderSchema,
  description: Joi.alternatives().try(SortOrderSchema,
Joi.object().keys(SortOrderInputSchemaObject)),
  price: SortOrderSchema,
  createdAt: SortOrderSchema,
  updatedAt: SortOrderSchema,
  _count: Joi.object().keys(ProductCountOrderByAggregateInputSchemaObject),
  _avg: Joi.object().keys(ProductAvgOrderByAggregateInputSchemaObject),
  _max: Joi.object().keys(ProductMaxOrderByAggregateInputSchemaObject),
  _min: Joi.object().keys(ProductMinOrderByAggregateInputSchemaObject),
  _sum: Joi.object().keys(ProductSumOrderByAggregateInputSchemaObject)
}