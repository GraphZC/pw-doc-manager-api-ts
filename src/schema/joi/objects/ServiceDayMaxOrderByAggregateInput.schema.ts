// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const ServiceDayMaxOrderByAggregateInputSchemaObject = {
    id: SortOrderSchema,
  monday: SortOrderSchema,
  tuesday: SortOrderSchema,
  wednesday: SortOrderSchema,
  thursday: SortOrderSchema,
  friday: SortOrderSchema,
  saturday: SortOrderSchema,
  sunday: SortOrderSchema,
  createdAt: SortOrderSchema,
  updatedAt: SortOrderSchema
}