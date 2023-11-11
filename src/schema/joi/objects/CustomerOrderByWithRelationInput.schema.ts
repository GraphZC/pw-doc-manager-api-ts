// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputSchemaObject } from './SortOrderInput.schema';
import { PoolOrderByRelationAggregateInputSchemaObject } from './PoolOrderByRelationAggregateInput.schema';
import { CustomerOrderOrderByRelationAggregateInputSchemaObject } from './CustomerOrderOrderByRelationAggregateInput.schema'

export const CustomerOrderByWithRelationInputSchemaObject = {
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
  pool: Joi.object().keys(PoolOrderByRelationAggregateInputSchemaObject),
  customerOrder: Joi.object().keys(CustomerOrderOrderByRelationAggregateInputSchemaObject)
}