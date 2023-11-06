// @ts-nocheck
import Joi from 'joi';


export const CustomerOrderUncheckedCreateWithoutPurchaseInputSchemaObject = {
    id: Joi.string(),
  customerId: Joi.string().required(),
  employeeId: Joi.string().required(),
  invoiceId: Joi.string().required(),
  createdAt: Joi.date(),
  updatedAt: Joi.date()
}