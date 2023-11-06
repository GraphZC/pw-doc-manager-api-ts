// @ts-nocheck
import Joi from 'joi';
import { CustomerOrderUncheckedCreateNestedOneWithoutInvoiceInputSchemaObject } from './CustomerOrderUncheckedCreateNestedOneWithoutInvoiceInput.schema'

export const InvoiceUncheckedCreateInputSchemaObject = {
    id: Joi.string(),
  createdAt: Joi.date(),
  updatedAt: Joi.date(),
  customerOrder: Joi.object().keys(CustomerOrderUncheckedCreateNestedOneWithoutInvoiceInputSchemaObject)
}