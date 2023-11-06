import Joi from 'joi';
import { CustomerWhereInputSchemaObject, CustomerOrderByWithRelationInputSchemaObject, CustomerWhereUniqueInputSchemaObject } from './objects';
import { CustomerScalarFieldEnumSchema } from './enums'

export const CustomerFindFirstSchema = Joi.object().keys({ where: Joi.object().keys(CustomerWhereInputSchemaObject), orderBy: Joi.object().keys(CustomerOrderByWithRelationInputSchemaObject), cursor: Joi.object().keys(CustomerWhereUniqueInputSchemaObject), take: Joi.number(), skip: Joi.number(), distinct: Joi.array().items(CustomerScalarFieldEnumSchema) }).required()