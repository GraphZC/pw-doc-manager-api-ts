// @ts-nocheck
import Joi from 'joi';
import { PurchaseWhereInputSchemaObject } from './PurchaseWhereInput.schema'

export const PurchaseListRelationFilterSchemaObject = {
    every: Joi.object().keys(PurchaseWhereInputSchemaObject),
  some: Joi.object().keys(PurchaseWhereInputSchemaObject),
  none: Joi.object().keys(PurchaseWhereInputSchemaObject)
}