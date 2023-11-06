// @ts-nocheck
import Joi from 'joi';
import { EmployeeWhereInputSchemaObject } from './EmployeeWhereInput.schema'

export const EmployeeRelationFilterSchemaObject = {
    is: Joi.alternatives().try(Joi.object().keys(EmployeeWhereInputSchemaObject)),
  isNot: Joi.alternatives().try(Joi.object().keys(EmployeeWhereInputSchemaObject))
}