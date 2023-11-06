// @ts-nocheck
import Joi from 'joi';


export const CustomerOrderCreateManyEmployeeInputSchemaObject = {
    id: Joi.string(),
  customerId: Joi.string().required(),
  invoiceId: Joi.string().required(),
  createdAt: Joi.date(),
  updatedAt: Joi.date()
}