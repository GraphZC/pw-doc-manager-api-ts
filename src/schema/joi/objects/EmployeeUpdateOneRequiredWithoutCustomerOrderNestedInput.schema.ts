// @ts-nocheck
import Joi from 'joi';
import { EmployeeCreateWithoutCustomerOrderInputSchemaObject } from './EmployeeCreateWithoutCustomerOrderInput.schema';
import { EmployeeUncheckedCreateWithoutCustomerOrderInputSchemaObject } from './EmployeeUncheckedCreateWithoutCustomerOrderInput.schema';
import { EmployeeCreateOrConnectWithoutCustomerOrderInputSchemaObject } from './EmployeeCreateOrConnectWithoutCustomerOrderInput.schema';
import { EmployeeUpsertWithoutCustomerOrderInputSchemaObject } from './EmployeeUpsertWithoutCustomerOrderInput.schema';
import { EmployeeWhereUniqueInputSchemaObject } from './EmployeeWhereUniqueInput.schema';
import { EmployeeUpdateWithoutCustomerOrderInputSchemaObject } from './EmployeeUpdateWithoutCustomerOrderInput.schema';
import { EmployeeUncheckedUpdateWithoutCustomerOrderInputSchemaObject } from './EmployeeUncheckedUpdateWithoutCustomerOrderInput.schema'

export const EmployeeUpdateOneRequiredWithoutCustomerOrderNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(EmployeeCreateWithoutCustomerOrderInputSchemaObject),
Joi.object().keys(EmployeeUncheckedCreateWithoutCustomerOrderInputSchemaObject)),
  connectOrCreate: Joi.object().keys(EmployeeCreateOrConnectWithoutCustomerOrderInputSchemaObject),
  upsert: Joi.object().keys(EmployeeUpsertWithoutCustomerOrderInputSchemaObject),
  connect: Joi.object().keys(EmployeeWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(EmployeeUpdateWithoutCustomerOrderInputSchemaObject),
Joi.object().keys(EmployeeUncheckedUpdateWithoutCustomerOrderInputSchemaObject))
}