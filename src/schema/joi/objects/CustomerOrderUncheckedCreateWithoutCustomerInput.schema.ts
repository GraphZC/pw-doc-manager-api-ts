// @ts-nocheck
import Joi from 'joi';
import { PurchaseUncheckedCreateNestedManyWithoutCustomerOrderInputSchemaObject } from './PurchaseUncheckedCreateNestedManyWithoutCustomerOrderInput.schema'

export const CustomerOrderUncheckedCreateWithoutCustomerInputSchemaObject = {
    id: Joi.string(),
  employeeId: Joi.string().required(),
  invoiceId: Joi.string().required(),
  createdAt: Joi.date(),
  updatedAt: Joi.date(),
  purchase: Joi.object().keys(PurchaseUncheckedCreateNestedManyWithoutCustomerOrderInputSchemaObject)
}