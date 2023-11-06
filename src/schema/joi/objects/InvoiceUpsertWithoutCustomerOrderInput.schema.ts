// @ts-nocheck
import Joi from 'joi';
import { InvoiceUpdateWithoutCustomerOrderInputSchemaObject } from './InvoiceUpdateWithoutCustomerOrderInput.schema';
import { InvoiceUncheckedUpdateWithoutCustomerOrderInputSchemaObject } from './InvoiceUncheckedUpdateWithoutCustomerOrderInput.schema';
import { InvoiceCreateWithoutCustomerOrderInputSchemaObject } from './InvoiceCreateWithoutCustomerOrderInput.schema';
import { InvoiceUncheckedCreateWithoutCustomerOrderInputSchemaObject } from './InvoiceUncheckedCreateWithoutCustomerOrderInput.schema'

export const InvoiceUpsertWithoutCustomerOrderInputSchemaObject = {
    update: Joi.alternatives().try(Joi.object().keys(InvoiceUpdateWithoutCustomerOrderInputSchemaObject),
Joi.object().keys(InvoiceUncheckedUpdateWithoutCustomerOrderInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(InvoiceCreateWithoutCustomerOrderInputSchemaObject),
Joi.object().keys(InvoiceUncheckedCreateWithoutCustomerOrderInputSchemaObject))
}