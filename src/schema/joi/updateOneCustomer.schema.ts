import Joi from 'joi';
import { CustomerUpdateInputSchemaObject, CustomerWhereUniqueInputSchemaObject } from './objects'

export const CustomerUpdateOneSchema = Joi.object().keys({ data: Joi.object().keys(CustomerUpdateInputSchemaObject), where: Joi.object().keys(CustomerWhereUniqueInputSchemaObject)  }).required()