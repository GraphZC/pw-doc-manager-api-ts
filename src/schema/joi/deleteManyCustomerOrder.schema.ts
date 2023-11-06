import Joi from 'joi';
import { CustomerOrderWhereInputSchemaObject } from './objects'

export const CustomerOrderDeleteManySchema = Joi.object().keys({ where: Joi.object().keys(CustomerOrderWhereInputSchemaObject)  }).required()