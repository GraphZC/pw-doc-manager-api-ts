// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { CustomerOrderByWithRelationInputSchemaObject } from './CustomerOrderByWithRelationInput.schema';
import { PurchaseOrderByRelationAggregateInputSchemaObject } from './PurchaseOrderByRelationAggregateInput.schema';
import { ServiceDayOrderByWithRelationInputSchemaObject } from './ServiceDayOrderByWithRelationInput.schema'

export const PoolOrderByWithRelationInputSchemaObject = {
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
  customer: Joi.object().keys(CustomerOrderByWithRelationInputSchemaObject),
  purchase: Joi.object().keys(PurchaseOrderByRelationAggregateInputSchemaObject),
  serviceDay: Joi.object().keys(ServiceDayOrderByWithRelationInputSchemaObject)
}