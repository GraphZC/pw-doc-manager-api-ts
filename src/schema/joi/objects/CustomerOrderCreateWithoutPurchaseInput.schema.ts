// @ts-nocheck
import Joi from 'joi';
import { CustomerCreateNestedOneWithoutCustomerOrderInputSchemaObject } from './CustomerCreateNestedOneWithoutCustomerOrderInput.schema';
import { EmployeeCreateNestedOneWithoutCustomerOrderInputSchemaObject } from './EmployeeCreateNestedOneWithoutCustomerOrderInput.schema';
import { InvoiceCreateNestedOneWithoutCustomerOrderInputSchemaObject } from './InvoiceCreateNestedOneWithoutCustomerOrderInput.schema'

export const CustomerOrderCreateWithoutPurchaseInputSchemaObject = {
    id: Joi.string(),
  createdAt: Joi.date(),
  updatedAt: Joi.date(),
  customer: Joi.object().keys(CustomerCreateNestedOneWithoutCustomerOrderInputSchemaObject),
  employee: Joi.object().keys(EmployeeCreateNestedOneWithoutCustomerOrderInputSchemaObject),
  invoice: Joi.object().keys(InvoiceCreateNestedOneWithoutCustomerOrderInputSchemaObject)
}