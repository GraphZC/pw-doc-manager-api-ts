import Joi from 'joi';
import { ProductWhereUniqueInputSchemaObject, ProductCreateInputSchemaObject, ProductUpdateInputSchemaObject } from './objects'

export const ProductUpsertSchema = Joi.object().keys({ where: Joi.object().keys(ProductWhereUniqueInputSchemaObject), data: Joi.object().keys(ProductCreateInputSchemaObject), update: Joi.object().keys(ProductUpdateInputSchemaObject)  }).required()