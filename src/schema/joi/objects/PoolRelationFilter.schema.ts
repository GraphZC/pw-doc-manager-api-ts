// @ts-nocheck
import Joi from 'joi';
import { PoolWhereInputSchemaObject } from './PoolWhereInput.schema'

export const PoolRelationFilterSchemaObject = {
    is: Joi.alternatives().try(Joi.object().keys(PoolWhereInputSchemaObject)),
  isNot: Joi.alternatives().try(Joi.object().keys(PoolWhereInputSchemaObject))
}