// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { PoolOrderByWithRelationInputSchemaObject } from './PoolOrderByWithRelationInput.schema'

export const ServiceDayOrderByWithRelationInputSchemaObject = {
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
  pool: Joi.object().keys(PoolOrderByWithRelationInputSchemaObject)
}