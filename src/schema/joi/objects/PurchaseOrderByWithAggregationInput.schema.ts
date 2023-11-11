// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputSchemaObject } from './SortOrderInput.schema';
import { PurchaseCountOrderByAggregateInputSchemaObject } from './PurchaseCountOrderByAggregateInput.schema';
import { PurchaseAvgOrderByAggregateInputSchemaObject } from './PurchaseAvgOrderByAggregateInput.schema';
import { PurchaseMaxOrderByAggregateInputSchemaObject } from './PurchaseMaxOrderByAggregateInput.schema';
import { PurchaseMinOrderByAggregateInputSchemaObject } from './PurchaseMinOrderByAggregateInput.schema';
import { PurchaseSumOrderByAggregateInputSchemaObject } from './PurchaseSumOrderByAggregateInput.schema'

export const PurchaseOrderByWithAggregationInputSchemaObject = {
    id: SortOrderSchema,
  poolId: Joi.alternatives().try(SortOrderSchema,
Joi.object().keys(SortOrderInputSchemaObject)),
  productId: Joi.alternatives().try(SortOrderSchema,
Joi.object().keys(SortOrderInputSchemaObject)),
  customerOrderId: SortOrderSchema,
  quantity: SortOrderSchema,
  createdAt: SortOrderSchema,
  updatedAt: SortOrderSchema,
  _count: Joi.object().keys(PurchaseCountOrderByAggregateInputSchemaObject),
  _avg: Joi.object().keys(PurchaseAvgOrderByAggregateInputSchemaObject),
  _max: Joi.object().keys(PurchaseMaxOrderByAggregateInputSchemaObject),
  _min: Joi.object().keys(PurchaseMinOrderByAggregateInputSchemaObject),
  _sum: Joi.object().keys(PurchaseSumOrderByAggregateInputSchemaObject)
}