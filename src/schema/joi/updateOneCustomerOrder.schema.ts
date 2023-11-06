import Joi from 'joi';
import { CustomerOrderUpdateInputSchemaObject, CustomerOrderWhereUniqueInputSchemaObject } from './objects'

export const CustomerOrderUpdateOneSchema = Joi.object().keys({ data: Joi.object().keys(CustomerOrderUpdateInputSchemaObject), where: Joi.object().keys(CustomerOrderWhereUniqueInputSchemaObject)  }).required()