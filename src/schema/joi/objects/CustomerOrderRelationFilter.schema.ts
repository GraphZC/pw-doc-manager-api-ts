// @ts-nocheck
import Joi from 'joi';
import { CustomerOrderWhereInputSchemaObject } from './CustomerOrderWhereInput.schema'

export const CustomerOrderRelationFilterSchemaObject = {
    is: Joi.alternatives().try(Joi.object().keys(CustomerOrderWhereInputSchemaObject)),
  isNot: Joi.alternatives().try(Joi.object().keys(CustomerOrderWhereInputSchemaObject))
}