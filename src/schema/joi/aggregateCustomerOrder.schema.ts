import Joi from 'joi';
import { CustomerOrderWhereInputSchemaObject, CustomerOrderOrderByWithRelationInputSchemaObject, CustomerOrderWhereUniqueInputSchemaObject } from './objects'

export const CustomerOrderAggregateSchema = Joi.object().keys({ where: Joi.object().keys(CustomerOrderWhereInputSchemaObject), orderBy: Joi.object().keys(CustomerOrderOrderByWithRelationInputSchemaObject), cursor: Joi.object().keys(CustomerOrderWhereUniqueInputSchemaObject), take: Joi.number(), skip: Joi.number()  }).required()