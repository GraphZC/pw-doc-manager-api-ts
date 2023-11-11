import Joi from 'joi';
import { ProductWhereUniqueInputSchemaObject } from './objects'

export const ProductFindUniqueSchema = Joi.object().keys({ where: Joi.object().keys(ProductWhereUniqueInputSchemaObject) }).required()