import Joi from 'joi';
import { CustomerWhereInputSchemaObject } from './objects'

export const CustomerDeleteManySchema = Joi.object().keys({ where: Joi.object().keys(CustomerWhereInputSchemaObject)  }).required()