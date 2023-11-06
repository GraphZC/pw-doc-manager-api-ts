import Joi from 'joi';
import { ProductUpdateInputSchemaObject, ProductWhereUniqueInputSchemaObject } from './objects'

export const ProductUpdateOneSchema = Joi.object().keys({ data: Joi.object().keys(ProductUpdateInputSchemaObject), where: Joi.object().keys(ProductWhereUniqueInputSchemaObject)  }).required()