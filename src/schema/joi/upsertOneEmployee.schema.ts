import Joi from 'joi';
import { EmployeeWhereUniqueInputSchemaObject, EmployeeCreateInputSchemaObject, EmployeeUpdateInputSchemaObject } from './objects'

export const EmployeeUpsertSchema = Joi.object().keys({ where: Joi.object().keys(EmployeeWhereUniqueInputSchemaObject), data: Joi.object().keys(EmployeeCreateInputSchemaObject), update: Joi.object().keys(EmployeeUpdateInputSchemaObject)  }).required()