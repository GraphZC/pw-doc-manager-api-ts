// @ts-nocheck
import Joi from 'joi';
import { CustomerOrderCreateWithoutInvoiceInputSchemaObject } from './CustomerOrderCreateWithoutInvoiceInput.schema';
import { CustomerOrderUncheckedCreateWithoutInvoiceInputSchemaObject } from './CustomerOrderUncheckedCreateWithoutInvoiceInput.schema';
import { CustomerOrderCreateOrConnectWithoutInvoiceInputSchemaObject } from './CustomerOrderCreateOrConnectWithoutInvoiceInput.schema';
import { CustomerOrderUpsertWithoutInvoiceInputSchemaObject } from './CustomerOrderUpsertWithoutInvoiceInput.schema';
import { CustomerOrderWhereUniqueInputSchemaObject } from './CustomerOrderWhereUniqueInput.schema';
import { CustomerOrderUpdateWithoutInvoiceInputSchemaObject } from './CustomerOrderUpdateWithoutInvoiceInput.schema';
import { CustomerOrderUncheckedUpdateWithoutInvoiceInputSchemaObject } from './CustomerOrderUncheckedUpdateWithoutInvoiceInput.schema'

export const CustomerOrderUpdateOneWithoutInvoiceNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(CustomerOrderCreateWithoutInvoiceInputSchemaObject),
Joi.object().keys(CustomerOrderUncheckedCreateWithoutInvoiceInputSchemaObject)),
  connectOrCreate: Joi.object().keys(CustomerOrderCreateOrConnectWithoutInvoiceInputSchemaObject),
  upsert: Joi.object().keys(CustomerOrderUpsertWithoutInvoiceInputSchemaObject),
  disconnect: Joi.boolean(),
  delete: Joi.boolean(),
  connect: Joi.object().keys(CustomerOrderWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(CustomerOrderUpdateWithoutInvoiceInputSchemaObject),
Joi.object().keys(CustomerOrderUncheckedUpdateWithoutInvoiceInputSchemaObject))
}