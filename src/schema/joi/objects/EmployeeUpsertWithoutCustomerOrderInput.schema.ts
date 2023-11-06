// @ts-nocheck
import Joi from 'joi';
import { EmployeeUpdateWithoutCustomerOrderInputSchemaObject } from './EmployeeUpdateWithoutCustomerOrderInput.schema';
import { EmployeeUncheckedUpdateWithoutCustomerOrderInputSchemaObject } from './EmployeeUncheckedUpdateWithoutCustomerOrderInput.schema';
import { EmployeeCreateWithoutCustomerOrderInputSchemaObject } from './EmployeeCreateWithoutCustomerOrderInput.schema';
import { EmployeeUncheckedCreateWithoutCustomerOrderInputSchemaObject } from './EmployeeUncheckedCreateWithoutCustomerOrderInput.schema'

export const EmployeeUpsertWithoutCustomerOrderInputSchemaObject = {
    update: Joi.alternatives().try(Joi.object().keys(EmployeeUpdateWithoutCustomerOrderInputSchemaObject),
Joi.object().keys(EmployeeUncheckedUpdateWithoutCustomerOrderInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(EmployeeCreateWithoutCustomerOrderInputSchemaObject),
Joi.object().keys(EmployeeUncheckedCreateWithoutCustomerOrderInputSchemaObject))
}