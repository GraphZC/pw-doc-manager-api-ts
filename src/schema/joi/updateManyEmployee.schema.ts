import Joi from 'joi';
import { EmployeeUpdateManyMutationInputSchemaObject, EmployeeWhereInputSchemaObject } from './objects'

export const EmployeeUpdateManySchema = Joi.object().keys({ data: Joi.object().keys(EmployeeUpdateManyMutationInputSchemaObject), where: Joi.object().keys(EmployeeWhereInputSchemaObject)  }).required()