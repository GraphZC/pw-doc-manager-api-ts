// @ts-nocheck
import Joi from 'joi';
import { CustomerWhereInputSchemaObject } from './CustomerWhereInput.schema'

export const CustomerRelationFilterSchemaObject = {
    is: Joi.alternatives().try(Joi.object().keys(CustomerWhereInputSchemaObject)),
  isNot: Joi.alternatives().try(Joi.object().keys(CustomerWhereInputSchemaObject))
}