import Joi from 'joi';
import { EmployeeUpdateInputSchemaObject, EmployeeWhereUniqueInputSchemaObject } from './objects'

export const EmployeeUpdateOneSchema = Joi.object().keys({ data: Joi.object().keys(EmployeeUpdateInputSchemaObject), where: Joi.object().keys(EmployeeWhereUniqueInputSchemaObject)  }).required()