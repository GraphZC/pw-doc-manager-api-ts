import Joi from 'joi';
import { CustomerUpdateManyMutationInputSchemaObject, CustomerWhereInputSchemaObject } from './objects'

export const CustomerUpdateManySchema = Joi.object().keys({ data: Joi.object().keys(CustomerUpdateManyMutationInputSchemaObject), where: Joi.object().keys(CustomerWhereInputSchemaObject)  }).required()