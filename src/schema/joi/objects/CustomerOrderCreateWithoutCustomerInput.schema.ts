// @ts-nocheck
import Joi from 'joi';
import { EmployeeCreateNestedOneWithoutCustomerOrderInputSchemaObject } from './EmployeeCreateNestedOneWithoutCustomerOrderInput.schema';
import { InvoiceCreateNestedOneWithoutCustomerOrderInputSchemaObject } from './InvoiceCreateNestedOneWithoutCustomerOrderInput.schema';
import { PurchaseCreateNestedManyWithoutCustomerOrderInputSchemaObject } from './PurchaseCreateNestedManyWithoutCustomerOrderInput.schema'

export const CustomerOrderCreateWithoutCustomerInputSchemaObject = {
    id: Joi.string(),
  createdAt: Joi.date(),
  updatedAt: Joi.date(),
  employee: Joi.object().keys(EmployeeCreateNestedOneWithoutCustomerOrderInputSchemaObject),
  invoice: Joi.object().keys(InvoiceCreateNestedOneWithoutCustomerOrderInputSchemaObject),
  purchase: Joi.object().keys(PurchaseCreateNestedManyWithoutCustomerOrderInputSchemaObject)
}