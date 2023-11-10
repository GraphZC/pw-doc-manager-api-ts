// @ts-nocheck
import Joi from 'joi';


export const InvoiceUncheckedCreateWithoutCustomerOrderInputSchemaObject = {
    id: Joi.string(),
  vatIncluded: Joi.boolean().default(false),
  createdAt: Joi.date(),
  updatedAt: Joi.date()
}