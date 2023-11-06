// @ts-nocheck
import Joi from 'joi';


export const InvoiceCreateWithoutCustomerOrderInputSchemaObject = {
    id: Joi.string(),
  createdAt: Joi.date(),
  updatedAt: Joi.date()
}