// @ts-nocheck
import Joi from 'joi';
import { CustomerCreateNestedOneWithoutCustomerOrderInputSchemaObject } from './CustomerCreateNestedOneWithoutCustomerOrderInput.schema';
import { InvoiceCreateNestedOneWithoutCustomerOrderInputSchemaObject } from './InvoiceCreateNestedOneWithoutCustomerOrderInput.schema';
import { PurchaseCreateNestedManyWithoutCustomerOrderInputSchemaObject } from './PurchaseCreateNestedManyWithoutCustomerOrderInput.schema'

export const CustomerOrderCreateWithoutEmployeeInputSchemaObject = {
    id: Joi.string(),
  createdAt: Joi.date(),
  updatedAt: Joi.date(),
  customer: Joi.object().keys(CustomerCreateNestedOneWithoutCustomerOrderInputSchemaObject),
  invoice: Joi.object().keys(InvoiceCreateNestedOneWithoutCustomerOrderInputSchemaObject),
  purchase: Joi.object().keys(PurchaseCreateNestedManyWithoutCustomerOrderInputSchemaObject)
}