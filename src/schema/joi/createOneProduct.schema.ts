import Joi from 'joi';
import { ProductCreateInputSchemaObject } from './objects'

export const ProductCreateSchema = Joi.object().keys({ data: Joi.object().keys(ProductCreateInputSchemaObject)  }).required()