import Joi from 'joi';
import { CustomerWhereUniqueInputSchemaObject } from './objects'

export const CustomerDeleteOneSchema = Joi.object().keys({ where: Joi.object().keys(CustomerWhereUniqueInputSchemaObject)  }).required()