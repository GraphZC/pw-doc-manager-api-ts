// @ts-nocheck
import Joi from 'joi';
import { PurchaseUncheckedCreateNestedManyWithoutCustomerOrderInputSchemaObject } from './PurchaseUncheckedCreateNestedManyWithoutCustomerOrderInput.schema'

export const CustomerOrderUncheckedCreateInputSchemaObject = {
    id: Joi.string(),
  customerId: Joi.string().required(),
  employeeId: Joi.string().required(),
  invoiceId: Joi.string().required(),
  createdAt: Joi.date(),
  updatedAt: Joi.date(),
  purchase: Joi.object().keys(PurchaseUncheckedCreateNestedManyWithoutCustomerOrderInputSchemaObject)
}