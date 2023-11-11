import Joi from 'joi';
import { ProductWhereInputSchemaObject, ProductOrderByWithAggregationInputSchemaObject, ProductScalarWhereWithAggregatesInputSchemaObject } from './objects';
import { ProductScalarFieldEnumSchema } from './enums'

export const ProductGroupBySchema = Joi.object().keys({ where: Joi.object().keys(ProductWhereInputSchemaObject), orderBy: Joi.object().keys(ProductOrderByWithAggregationInputSchemaObject), having: Joi.object().keys(ProductScalarWhereWithAggregatesInputSchemaObject), take: Joi.number(), skip: Joi.number(), by: Joi.array().items(ProductScalarFieldEnumSchema).required()  }).required()