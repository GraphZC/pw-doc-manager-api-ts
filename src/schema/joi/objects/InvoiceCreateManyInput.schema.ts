// @ts-nocheck
import Joi from 'joi';


export const InvoiceCreateManyInputSchemaObject = {
    id: Joi.string(),
  vatIncluded: Joi.boolean(),
  createdAt: Joi.date(),
  updatedAt: Joi.date()
}