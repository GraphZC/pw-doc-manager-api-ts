// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputSchemaObject } from './SortOrderInput.schema';
import { PoolOrderByWithRelationInputSchemaObject } from './PoolOrderByWithRelationInput.schema';
import { ProductOrderByWithRelationInputSchemaObject } from './ProductOrderByWithRelationInput.schema';
import { CustomerOrderOrderByWithRelationInputSchemaObject } from './CustomerOrderOrderByWithRelationInput.schema'

export const PurchaseOrderByWithRelationInputSchemaObject = {
    id: SortOrderSchema,
  poolId: Joi.alternatives().try(SortOrderSchema,
Joi.object().keys(SortOrderInputSchemaObject)),
  productId: Joi.alternatives().try(SortOrderSchema,
Joi.object().keys(SortOrderInputSchemaObject)),
  customerOrderId: SortOrderSchema,
  quantity: SortOrderSchema,
  createdAt: SortOrderSchema,
  updatedAt: SortOrderSchema,
  pool: Joi.object().keys(PoolOrderByWithRelationInputSchemaObject),
  product: Joi.object().keys(ProductOrderByWithRelationInputSchemaObject),
  customerOrder: Joi.object().keys(CustomerOrderOrderByWithRelationInputSchemaObject)
}