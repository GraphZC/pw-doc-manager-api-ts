import Joi from 'joi';
import { EmployeeWhereInputSchemaObject, EmployeeOrderByWithAggregationInputSchemaObject, EmployeeScalarWhereWithAggregatesInputSchemaObject } from './objects';
import { EmployeeScalarFieldEnumSchema } from './enums'

export const EmployeeGroupBySchema = Joi.object().keys({ where: Joi.object().keys(EmployeeWhereInputSchemaObject), orderBy: Joi.object().keys(EmployeeOrderByWithAggregationInputSchemaObject), having: Joi.object().keys(EmployeeScalarWhereWithAggregatesInputSchemaObject), take: Joi.number(), skip: Joi.number(), by: Joi.array().items(EmployeeScalarFieldEnumSchema).required()  }).required()