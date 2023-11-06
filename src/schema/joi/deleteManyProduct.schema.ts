import Joi from 'joi';
import { ProductWhereInputSchemaObject } from './objects'

export const ProductDeleteManySchema = Joi.object().keys({ where: Joi.object().keys(ProductWhereInputSchemaObject)  }).required()