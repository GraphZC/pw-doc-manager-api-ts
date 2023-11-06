// @ts-nocheck
import Joi from 'joi';
import { ServiceDayWhereInputSchemaObject } from './ServiceDayWhereInput.schema'

export const ServiceDayRelationFilterSchemaObject = {
    is: Joi.alternatives().try(Joi.object().keys(ServiceDayWhereInputSchemaObject)),
  isNot: Joi.alternatives().try(Joi.object().keys(ServiceDayWhereInputSchemaObject))
}