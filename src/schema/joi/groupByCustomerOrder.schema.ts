import Joi from 'joi';
import { CustomerOrderWhereInputSchemaObject, CustomerOrderOrderByWithAggregationInputSchemaObject, CustomerOrderScalarWhereWithAggregatesInputSchemaObject } from './objects';
import { CustomerOrderScalarFieldEnumSchema } from './enums'

export const CustomerOrderGroupBySchema = Joi.object().keys({ where: Joi.object().keys(CustomerOrderWhereInputSchemaObject), orderBy: Joi.object().keys(CustomerOrderOrderByWithAggregationInputSchemaObject), having: Joi.object().keys(CustomerOrderScalarWhereWithAggregatesInputSchemaObject), take: Joi.number(), skip: Joi.number(), by: Joi.array().items(CustomerOrderScalarFieldEnumSchema).required()  }).required()