import Joi from 'joi';
import { CustomerWhereUniqueInputSchemaObject } from './objects'

export const CustomerFindUniqueSchema = Joi.object().keys({ where: Joi.object().keys(CustomerWhereUniqueInputSchemaObject) }).required()