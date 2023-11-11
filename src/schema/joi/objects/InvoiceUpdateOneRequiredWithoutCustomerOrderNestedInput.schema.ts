// @ts-nocheck
import Joi from 'joi';
import { InvoiceCreateWithoutCustomerOrderInputSchemaObject } from './InvoiceCreateWithoutCustomerOrderInput.schema';
import { InvoiceUncheckedCreateWithoutCustomerOrderInputSchemaObject } from './InvoiceUncheckedCreateWithoutCustomerOrderInput.schema';
import { InvoiceCreateOrConnectWithoutCustomerOrderInputSchemaObject } from './InvoiceCreateOrConnectWithoutCustomerOrderInput.schema';
import { InvoiceUpsertWithoutCustomerOrderInputSchemaObject } from './InvoiceUpsertWithoutCustomerOrderInput.schema';
import { InvoiceWhereUniqueInputSchemaObject } from './InvoiceWhereUniqueInput.schema';
import { InvoiceUpdateWithoutCustomerOrderInputSchemaObject } from './InvoiceUpdateWithoutCustomerOrderInput.schema';
import { InvoiceUncheckedUpdateWithoutCustomerOrderInputSchemaObject } from './InvoiceUncheckedUpdateWithoutCustomerOrderInput.schema'

export const InvoiceUpdateOneRequiredWithoutCustomerOrderNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(InvoiceCreateWithoutCustomerOrderInputSchemaObject),
Joi.object().keys(InvoiceUncheckedCreateWithoutCustomerOrderInputSchemaObject)),
  connectOrCreate: Joi.object().keys(InvoiceCreateOrConnectWithoutCustomerOrderInputSchemaObject),
  upsert: Joi.object().keys(InvoiceUpsertWithoutCustomerOrderInputSchemaObject),
  connect: Joi.object().keys(InvoiceWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(InvoiceUpdateWithoutCustomerOrderInputSchemaObject),
Joi.object().keys(InvoiceUncheckedUpdateWithoutCustomerOrderInputSchemaObject))
}