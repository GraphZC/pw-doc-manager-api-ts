import Joi from 'joi';
import { PoolWhereUniqueInputSchemaObject, PoolCreateInputSchemaObject, PoolUpdateInputSchemaObject } from './objects'

export const PoolUpsertSchema = Joi.object().keys({ where: Joi.object().keys(PoolWhereUniqueInputSchemaObject), data: Joi.object().keys(PoolCreateInputSchemaObject), update: Joi.object().keys(PoolUpdateInputSchemaObject)  }).required()