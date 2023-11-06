// @ts-nocheck
import Joi from 'joi';
import { CustomerOrderUpdateWithoutInvoiceInputSchemaObject } from './CustomerOrderUpdateWithoutInvoiceInput.schema';
import { CustomerOrderUncheckedUpdateWithoutInvoiceInputSchemaObject } from './CustomerOrderUncheckedUpdateWithoutInvoiceInput.schema';
import { CustomerOrderCreateWithoutInvoiceInputSchemaObject } from './CustomerOrderCreateWithoutInvoiceInput.schema';
import { CustomerOrderUncheckedCreateWithoutInvoiceInputSchemaObject } from './CustomerOrderUncheckedCreateWithoutInvoiceInput.schema'

export const CustomerOrderUpsertWithoutInvoiceInputSchemaObject = {
    update: Joi.alternatives().try(Joi.object().keys(CustomerOrderUpdateWithoutInvoiceInputSchemaObject),
Joi.object().keys(CustomerOrderUncheckedUpdateWithoutInvoiceInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(CustomerOrderCreateWithoutInvoiceInputSchemaObject),
Joi.object().keys(CustomerOrderUncheckedCreateWithoutInvoiceInputSchemaObject))
}