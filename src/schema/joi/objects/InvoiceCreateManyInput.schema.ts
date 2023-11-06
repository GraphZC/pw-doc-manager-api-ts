// @ts-nocheck
import Joi from 'joi';


export const InvoiceCreateManyInputSchemaObject = {
    id: Joi.string(),
  createdAt: Joi.date(),
  updatedAt: Joi.date()
}