import Joi from 'joi';
import { ProductWhereInputSchemaObject, ProductOrderByWithRelationInputSchemaObject, ProductWhereUniqueInputSchemaObject } from './objects'

export const ProductAggregateSchema = Joi.object().keys({ where: Joi.object().keys(ProductWhereInputSchemaObject), orderBy: Joi.object().keys(ProductOrderByWithRelationInputSchemaObject), cursor: Joi.object().keys(ProductWhereUniqueInputSchemaObject), take: Joi.number(), skip: Joi.number()  }).required()