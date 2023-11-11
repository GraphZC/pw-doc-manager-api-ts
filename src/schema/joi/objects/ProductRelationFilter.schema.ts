// @ts-nocheck
import Joi from 'joi';
import { ProductWhereInputSchemaObject } from './ProductWhereInput.schema'

export const ProductRelationFilterSchemaObject = {
    is: Joi.alternatives().try(Joi.object().keys(ProductWhereInputSchemaObject)),
  isNot: Joi.alternatives().try(Joi.object().keys(ProductWhereInputSchemaObject))
}