import Joi from 'joi';
import { PoolWhereInputSchemaObject, PoolOrderByWithRelationInputSchemaObject, PoolWhereUniqueInputSchemaObject } from './objects';
import { PoolScalarFieldEnumSchema } from './enums'

export const PoolFindFirstSchema = Joi.object().keys({ where: Joi.object().keys(PoolWhereInputSchemaObject), orderBy: Joi.object().keys(PoolOrderByWithRelationInputSchemaObject), cursor: Joi.object().keys(PoolWhereUniqueInputSchemaObject), take: Joi.number(), skip: Joi.number(), distinct: Joi.array().items(PoolScalarFieldEnumSchema) }).required()