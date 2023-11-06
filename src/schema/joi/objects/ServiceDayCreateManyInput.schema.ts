// @ts-nocheck
import Joi from 'joi';


export const ServiceDayCreateManyInputSchemaObject = {
    id: Joi.string(),
  poolId: Joi.string().required(),
  monday: Joi.boolean().required(),
  tuesday: Joi.boolean().required(),
  wednesday: Joi.boolean().required(),
  thursday: Joi.boolean().required(),
  friday: Joi.boolean().required(),
  saturday: Joi.boolean().required(),
  sunday: Joi.boolean().required(),
  createdAt: Joi.date(),
  updatedAt: Joi.date()
}