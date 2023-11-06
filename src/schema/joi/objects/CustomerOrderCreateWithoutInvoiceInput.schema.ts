// @ts-nocheck
import Joi from 'joi';
import { CustomerCreateNestedOneWithoutCustomerOrderInputSchemaObject } from './CustomerCreateNestedOneWithoutCustomerOrderInput.schema';
import { EmployeeCreateNestedOneWithoutCustomerOrderInputSchemaObject } from './EmployeeCreateNestedOneWithoutCustomerOrderInput.schema';
import { PurchaseCreateNestedManyWithoutCustomerOrderInputSchemaObject } from './PurchaseCreateNestedManyWithoutCustomerOrderInput.schema'

export const CustomerOrderCreateWithoutInvoiceInputSchemaObject = {
    id: Joi.string(),
  createdAt: Joi.date(),
  updatedAt: Joi.date(),
  customer: Joi.object().keys(CustomerCreateNestedOneWithoutCustomerOrderInputSchemaObject),
  employee: Joi.object().keys(EmployeeCreateNestedOneWithoutCustomerOrderInputSchemaObject),
  purchase: Joi.object().keys(PurchaseCreateNestedManyWithoutCustomerOrderInputSchemaObject)
}