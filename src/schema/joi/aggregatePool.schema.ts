import Joi from 'joi';
import { PoolWhereInputSchemaObject, PoolOrderByWithRelationInputSchemaObject, PoolWhereUniqueInputSchemaObject } from './objects'

export const PoolAggregateSchema = Joi.object().keys({ where: Joi.object().keys(PoolWhereInputSchemaObject), orderBy: Joi.object().keys(PoolOrderByWithRelationInputSchemaObject), cursor: Joi.object().keys(PoolWhereUniqueInputSchemaObject), take: Joi.number(), skip: Joi.number()  }).required()