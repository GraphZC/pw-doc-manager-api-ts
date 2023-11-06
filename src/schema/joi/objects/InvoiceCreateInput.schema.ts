// @ts-nocheck
import Joi from 'joi';
import { CustomerOrderCreateNestedOneWithoutInvoiceInputSchemaObject } from './CustomerOrderCreateNestedOneWithoutInvoiceInput.schema'

export const InvoiceCreateInputSchemaObject = {
    id: Joi.string(),
  createdAt: Joi.date(),
  updatedAt: Joi.date(),
  customerOrder: Joi.object().keys(CustomerOrderCreateNestedOneWithoutInvoiceInputSchemaObject)
}