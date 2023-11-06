import Joi from 'joi';
import { EmployeeCreateInputSchemaObject } from './objects'

export const EmployeeCreateSchema = Joi.object().keys({ data: Joi.object().keys(EmployeeCreateInputSchemaObject)  }).required()