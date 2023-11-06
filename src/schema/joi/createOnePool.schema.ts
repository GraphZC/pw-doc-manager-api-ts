import Joi from 'joi';
import { PoolCreateInputSchemaObject } from './objects'

export const PoolCreateSchema = Joi.object().keys({ data: Joi.object().keys(PoolCreateInputSchemaObject)  }).required()