// @ts-nocheck
import Joi from 'joi';
import { InvoiceCreateWithoutCustomerOrderInputSchemaObject } from './InvoiceCreateWithoutCustomerOrderInput.schema';
import { InvoiceUncheckedCreateWithoutCustomerOrderInputSchemaObject } from './InvoiceUncheckedCreateWithoutCustomerOrderInput.schema';
import { InvoiceCreateOrConnectWithoutCustomerOrderInputSchemaObject } from './InvoiceCreateOrConnectWithoutCustomerOrderInput.schema';
import { InvoiceWhereUniqueInputSchemaObject } from './InvoiceWhereUniqueInput.schema'

export const InvoiceCreateNestedOneWithoutCustomerOrderInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(InvoiceCreateWithoutCustomerOrderInputSchemaObject),
Joi.object().keys(InvoiceUncheckedCreateWithoutCustomerOrderInputSchemaObject)),
  connectOrCreate: Joi.object().keys(InvoiceCreateOrConnectWithoutCustomerOrderInputSchemaObject),
  connect: Joi.object().keys(InvoiceWhereUniqueInputSchemaObject)
}