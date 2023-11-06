// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputSchemaObject } from './SortOrderInput.schema';
import { PurchaseOrderByRelationAggregateInputSchemaObject } from './PurchaseOrderByRelationAggregateInput.schema'

export const ProductOrderByWithRelationInputSchemaObject = {
    id: SortOrderSchema,
  code: Joi.alternatives().try(SortOrderSchema,
Joi.object().keys(SortOrderInputSchemaObject)),
  name: SortOrderSchema,
  description: Joi.alternatives().try(SortOrderSchema,
Joi.object().keys(SortOrderInputSchemaObject)),
  price: SortOrderSchema,
  createdAt: SortOrderSchema,
  updatedAt: SortOrderSchema,
  purchase: Joi.object().keys(PurchaseOrderByRelationAggregateInputSchemaObject)
}