// @ts-nocheck
import Joi from 'joi';
import { PoolWhereInputSchemaObject } from './PoolWhereInput.schema'

export const PoolListRelationFilterSchemaObject = {
    every: Joi.object().keys(PoolWhereInputSchemaObject),
  some: Joi.object().keys(PoolWhereInputSchemaObject),
  none: Joi.object().keys(PoolWhereInputSchemaObject)
}