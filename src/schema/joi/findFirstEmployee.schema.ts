import Joi from 'joi';
import { EmployeeWhereInputSchemaObject, EmployeeOrderByWithRelationInputSchemaObject, EmployeeWhereUniqueInputSchemaObject } from './objects';
import { EmployeeScalarFieldEnumSchema } from './enums'

export const EmployeeFindFirstSchema = Joi.object().keys({ where: Joi.object().keys(EmployeeWhereInputSchemaObject), orderBy: Joi.object().keys(EmployeeOrderByWithRelationInputSchemaObject), cursor: Joi.object().keys(EmployeeWhereUniqueInputSchemaObject), take: Joi.number(), skip: Joi.number(), distinct: Joi.array().items(EmployeeScalarFieldEnumSchema) }).required()