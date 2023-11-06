import Joi from 'joi';
import { ProductUpdateManyMutationInputSchemaObject, ProductWhereInputSchemaObject } from './objects'

export const ProductUpdateManySchema = Joi.object().keys({ data: Joi.object().keys(ProductUpdateManyMutationInputSchemaObject), where: Joi.object().keys(ProductWhereInputSchemaObject)  }).required()