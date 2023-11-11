// @ts-nocheck
import Joi from 'joi';
import { PurchaseUncheckedCreateNestedManyWithoutCustomerOrderInputSchemaObject } from './PurchaseUncheckedCreateNestedManyWithoutCustomerOrderInput.schema'

export const CustomerOrderUncheckedCreateWithoutInvoiceInputSchemaObject = {
    id: Joi.string(),
  customerId: Joi.string().required(),
  employeeId: Joi.string().required(),
  createdAt: Joi.date(),
  updatedAt: Joi.date(),
  purchase: Joi.object().keys(PurchaseUncheckedCreateNestedManyWithoutCustomerOrderInputSchemaObject)
}