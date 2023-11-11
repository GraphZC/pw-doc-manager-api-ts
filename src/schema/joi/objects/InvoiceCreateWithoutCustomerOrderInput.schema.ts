// @ts-nocheck
import Joi from 'joi';


export const InvoiceCreateWithoutCustomerOrderInputSchemaObject = {
    id: Joi.string(),
  vatIncluded: Joi.boolean(),
  createdAt: Joi.date(),
  updatedAt: Joi.date()
}