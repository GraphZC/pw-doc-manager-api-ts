import Joi from 'joi';
import { PoolWhereUniqueInputSchemaObject } from './objects'

export const PoolDeleteOneSchema = Joi.object().keys({ where: Joi.object().keys(PoolWhereUniqueInputSchemaObject)  }).required()