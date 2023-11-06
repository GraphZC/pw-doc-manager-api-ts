import Joi from 'joi';
import { EmployeeWhereUniqueInputSchemaObject } from './objects'

export const EmployeeFindUniqueSchema = Joi.object().keys({ where: Joi.object().keys(EmployeeWhereUniqueInputSchemaObject) }).required()