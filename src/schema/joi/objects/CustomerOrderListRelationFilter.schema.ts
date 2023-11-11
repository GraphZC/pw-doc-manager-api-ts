// @ts-nocheck
import Joi from 'joi';
import { CustomerOrderWhereInputSchemaObject } from './CustomerOrderWhereInput.schema'

export const CustomerOrderListRelationFilterSchemaObject = {
    every: Joi.object().keys(CustomerOrderWhereInputSchemaObject),
  some: Joi.object().keys(CustomerOrderWhereInputSchemaObject),
  none: Joi.object().keys(CustomerOrderWhereInputSchemaObject)
}