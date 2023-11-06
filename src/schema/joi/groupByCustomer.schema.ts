import Joi from 'joi';
import { CustomerWhereInputSchemaObject, CustomerOrderByWithAggregationInputSchemaObject, CustomerScalarWhereWithAggregatesInputSchemaObject } from './objects';
import { CustomerScalarFieldEnumSchema } from './enums'

export const CustomerGroupBySchema = Joi.object().keys({ where: Joi.object().keys(CustomerWhereInputSchemaObject), orderBy: Joi.object().keys(CustomerOrderByWithAggregationInputSchemaObject), having: Joi.object().keys(CustomerScalarWhereWithAggregatesInputSchemaObject), take: Joi.number(), skip: Joi.number(), by: Joi.array().items(CustomerScalarFieldEnumSchema).required()  }).required()