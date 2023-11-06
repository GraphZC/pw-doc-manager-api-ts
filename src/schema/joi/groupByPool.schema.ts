import Joi from 'joi';
import { PoolWhereInputSchemaObject, PoolOrderByWithAggregationInputSchemaObject, PoolScalarWhereWithAggregatesInputSchemaObject } from './objects';
import { PoolScalarFieldEnumSchema } from './enums'

export const PoolGroupBySchema = Joi.object().keys({ where: Joi.object().keys(PoolWhereInputSchemaObject), orderBy: Joi.object().keys(PoolOrderByWithAggregationInputSchemaObject), having: Joi.object().keys(PoolScalarWhereWithAggregatesInputSchemaObject), take: Joi.number(), skip: Joi.number(), by: Joi.array().items(PoolScalarFieldEnumSchema).required()  }).required()