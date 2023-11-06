import Joi from 'joi';
import { PoolWhereInputSchemaObject } from './objects'

export const PoolDeleteManySchema = Joi.object().keys({ where: Joi.object().keys(PoolWhereInputSchemaObject)  }).required()