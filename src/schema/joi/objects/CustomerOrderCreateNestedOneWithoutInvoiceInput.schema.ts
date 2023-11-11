// @ts-nocheck
import Joi from 'joi';
import { CustomerOrderCreateWithoutInvoiceInputSchemaObject } from './CustomerOrderCreateWithoutInvoiceInput.schema';
import { CustomerOrderUncheckedCreateWithoutInvoiceInputSchemaObject } from './CustomerOrderUncheckedCreateWithoutInvoiceInput.schema';
import { CustomerOrderCreateOrConnectWithoutInvoiceInputSchemaObject } from './CustomerOrderCreateOrConnectWithoutInvoiceInput.schema';
import { CustomerOrderWhereUniqueInputSchemaObject } from './CustomerOrderWhereUniqueInput.schema'

export const CustomerOrderCreateNestedOneWithoutInvoiceInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(CustomerOrderCreateWithoutInvoiceInputSchemaObject),
Joi.object().keys(CustomerOrderUncheckedCreateWithoutInvoiceInputSchemaObject)),
  connectOrCreate: Joi.object().keys(CustomerOrderCreateOrConnectWithoutInvoiceInputSchemaObject),
  connect: Joi.object().keys(CustomerOrderWhereUniqueInputSchemaObject)
}