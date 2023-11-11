// @ts-nocheck
import Joi from 'joi';
import { PoolCreateNestedOneWithoutServiceDayInputSchemaObject } from './PoolCreateNestedOneWithoutServiceDayInput.schema'

export const ServiceDayCreateInputSchemaObject = {
    id: Joi.string(),
  monday: Joi.boolean().required(),
  tuesday: Joi.boolean().required(),
  wednesday: Joi.boolean().required(),
  thursday: Joi.boolean().required(),
  friday: Joi.boolean().required(),
  saturday: Joi.boolean().required(),
  sunday: Joi.boolean().required(),
  createdAt: Joi.date(),
  updatedAt: Joi.date(),
  pool: Joi.object().keys(PoolCreateNestedOneWithoutServiceDayInputSchemaObject)
}