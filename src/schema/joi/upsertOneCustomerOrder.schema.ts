import Joi from 'joi';
import { CustomerOrderWhereUniqueInputSchemaObject, CustomerOrderCreateInputSchemaObject, CustomerOrderUpdateInputSchemaObject } from './objects'

export const CustomerOrderUpsertSchema = Joi.object().keys({ where: Joi.object().keys(CustomerOrderWhereUniqueInputSchemaObject), data: Joi.object().keys(CustomerOrderCreateInputSchemaObject), update: Joi.object().keys(CustomerOrderUpdateInputSchemaObject)  }).required()