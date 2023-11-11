// @ts-nocheck
import Joi from 'joi';


export const CustomerOrderCreateManyCustomerInputSchemaObject = {
    id: Joi.string(),
  employeeId: Joi.string().required(),
  invoiceId: Joi.string().required(),
  createdAt: Joi.date(),
  updatedAt: Joi.date()
}