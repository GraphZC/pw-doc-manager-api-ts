// @ts-nocheck
import Joi from 'joi';
import { EmployeeWhereUniqueInputSchemaObject } from './EmployeeWhereUniqueInput.schema';
import { EmployeeCreateWithoutCustomerOrderInputSchemaObject } from './EmployeeCreateWithoutCustomerOrderInput.schema';
import { EmployeeUncheckedCreateWithoutCustomerOrderInputSchemaObject } from './EmployeeUncheckedCreateWithoutCustomerOrderInput.schema'

export const EmployeeCreateOrConnectWithoutCustomerOrderInputSchemaObject = {
    where: Joi.object().keys(EmployeeWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(Joi.object().keys(EmployeeCreateWithoutCustomerOrderInputSchemaObject),
Joi.object().keys(EmployeeUncheckedCreateWithoutCustomerOrderInputSchemaObject))
}