import Joi from 'joi';
import { CustomerWhereUniqueInputSchemaObject, CustomerCreateInputSchemaObject, CustomerUpdateInputSchemaObject } from './objects'

export const CustomerUpsertSchema = Joi.object().keys({ where: Joi.object().keys(CustomerWhereUniqueInputSchemaObject), data: Joi.object().keys(CustomerCreateInputSchemaObject), update: Joi.object().keys(CustomerUpdateInputSchemaObject)  }).required()