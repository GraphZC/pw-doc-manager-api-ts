import Joi from 'joi';
import { CustomerOrderUpdateManyMutationInputSchemaObject, CustomerOrderWhereInputSchemaObject } from './objects'

export const CustomerOrderUpdateManySchema = Joi.object().keys({ data: Joi.object().keys(CustomerOrderUpdateManyMutationInputSchemaObject), where: Joi.object().keys(CustomerOrderWhereInputSchemaObject)  }).required()