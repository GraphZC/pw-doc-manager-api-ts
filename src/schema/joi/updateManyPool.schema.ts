import Joi from 'joi';
import { PoolUpdateManyMutationInputSchemaObject, PoolWhereInputSchemaObject } from './objects'

export const PoolUpdateManySchema = Joi.object().keys({ data: Joi.object().keys(PoolUpdateManyMutationInputSchemaObject), where: Joi.object().keys(PoolWhereInputSchemaObject)  }).required()