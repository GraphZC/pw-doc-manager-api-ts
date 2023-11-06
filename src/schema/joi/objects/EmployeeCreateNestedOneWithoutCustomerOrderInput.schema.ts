// @ts-nocheck
import Joi from 'joi';
import { EmployeeCreateWithoutCustomerOrderInputSchemaObject } from './EmployeeCreateWithoutCustomerOrderInput.schema';
import { EmployeeUncheckedCreateWithoutCustomerOrderInputSchemaObject } from './EmployeeUncheckedCreateWithoutCustomerOrderInput.schema';
import { EmployeeCreateOrConnectWithoutCustomerOrderInputSchemaObject } from './EmployeeCreateOrConnectWithoutCustomerOrderInput.schema';
import { EmployeeWhereUniqueInputSchemaObject } from './EmployeeWhereUniqueInput.schema'

export const EmployeeCreateNestedOneWithoutCustomerOrderInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(EmployeeCreateWithoutCustomerOrderInputSchemaObject),
Joi.object().keys(EmployeeUncheckedCreateWithoutCustomerOrderInputSchemaObject)),
  connectOrCreate: Joi.object().keys(EmployeeCreateOrConnectWithoutCustomerOrderInputSchemaObject),
  connect: Joi.object().keys(EmployeeWhereUniqueInputSchemaObject)
}