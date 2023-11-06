import Joi from 'joi';
import { PoolWhereUniqueInputSchemaObject } from './objects'

export const PoolFindUniqueSchema = Joi.object().keys({ where: Joi.object().keys(PoolWhereUniqueInputSchemaObject) }).required()