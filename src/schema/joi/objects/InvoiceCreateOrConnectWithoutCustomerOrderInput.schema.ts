// @ts-nocheck
import Joi from 'joi';
import { InvoiceWhereUniqueInputSchemaObject } from './InvoiceWhereUniqueInput.schema';
import { InvoiceCreateWithoutCustomerOrderInputSchemaObject } from './InvoiceCreateWithoutCustomerOrderInput.schema';
import { InvoiceUncheckedCreateWithoutCustomerOrderInputSchemaObject } from './InvoiceUncheckedCreateWithoutCustomerOrderInput.schema'

export const InvoiceCreateOrConnectWithoutCustomerOrderInputSchemaObject = {
    where: Joi.object().keys(InvoiceWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(Joi.object().keys(InvoiceCreateWithoutCustomerOrderInputSchemaObject),
Joi.object().keys(InvoiceUncheckedCreateWithoutCustomerOrderInputSchemaObject))
}