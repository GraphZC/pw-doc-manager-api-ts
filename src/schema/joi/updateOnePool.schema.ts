import Joi from 'joi';
import { PoolUpdateInputSchemaObject, PoolWhereUniqueInputSchemaObject } from './objects'

export const PoolUpdateOneSchema = Joi.object().keys({ data: Joi.object().keys(PoolUpdateInputSchemaObject), where: Joi.object().keys(PoolWhereUniqueInputSchemaObject)  }).required()