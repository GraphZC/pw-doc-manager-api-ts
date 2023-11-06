import Joi from 'joi';
import { ProductWhereInputSchemaObject, ProductOrderByWithRelationInputSchemaObject, ProductWhereUniqueInputSchemaObject } from './objects';
import { ProductScalarFieldEnumSchema } from './enums'

export const ProductFindManySchema = Joi.object().keys({ where: Joi.object().keys(ProductWhereInputSchemaObject), orderBy: Joi.object().keys(ProductOrderByWithRelationInputSchemaObject), cursor: Joi.object().keys(ProductWhereUniqueInputSchemaObject), take: Joi.number(), skip: Joi.number(), distinct: Joi.array().items(ProductScalarFieldEnumSchema)  }).required()