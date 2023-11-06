import Joi from 'joi';
import { CustomerOrderWhereInputSchemaObject, CustomerOrderOrderByWithRelationInputSchemaObject, CustomerOrderWhereUniqueInputSchemaObject } from './objects';
import { CustomerOrderScalarFieldEnumSchema } from './enums'

export const CustomerOrderFindFirstSchema = Joi.object().keys({ where: Joi.object().keys(CustomerOrderWhereInputSchemaObject), orderBy: Joi.object().keys(CustomerOrderOrderByWithRelationInputSchemaObject), cursor: Joi.object().keys(CustomerOrderWhereUniqueInputSchemaObject), take: Joi.number(), skip: Joi.number(), distinct: Joi.array().items(CustomerOrderScalarFieldEnumSchema) }).required()