import Joi from 'joi';
import { CustomerOrderWhereUniqueInputSchemaObject } from './objects'

export const CustomerOrderDeleteOneSchema = Joi.object().keys({ where: Joi.object().keys(CustomerOrderWhereUniqueInputSchemaObject)  }).required()