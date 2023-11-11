// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ServiceDayCountOrderByAggregateInputSchemaObject } from './ServiceDayCountOrderByAggregateInput.schema';
import { ServiceDayMaxOrderByAggregateInputSchemaObject } from './ServiceDayMaxOrderByAggregateInput.schema';
import { ServiceDayMinOrderByAggregateInputSchemaObject } from './ServiceDayMinOrderByAggregateInput.schema'

export const ServiceDayOrderByWithAggregationInputSchemaObject = {
    id: SortOrderSchema,
  monday: SortOrderSchema,
  tuesday: SortOrderSchema,
  wednesday: SortOrderSchema,
  thursday: SortOrderSchema,
  friday: SortOrderSchema,
  saturday: SortOrderSchema,
  sunday: SortOrderSchema,
  createdAt: SortOrderSchema,
  updatedAt: SortOrderSchema,
  _count: Joi.object().keys(ServiceDayCountOrderByAggregateInputSchemaObject),
  _max: Joi.object().keys(ServiceDayMaxOrderByAggregateInputSchemaObject),
  _min: Joi.object().keys(ServiceDayMinOrderByAggregateInputSchemaObject)
}