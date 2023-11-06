import Joi from 'joi';
import { EmployeeWhereInputSchemaObject } from './objects'

export const EmployeeDeleteManySchema = Joi.object().keys({ where: Joi.object().keys(EmployeeWhereInputSchemaObject)  }).required()