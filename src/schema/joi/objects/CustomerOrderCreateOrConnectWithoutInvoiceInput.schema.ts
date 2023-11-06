// @ts-nocheck
import Joi from 'joi';
import { CustomerOrderWhereUniqueInputSchemaObject } from './CustomerOrderWhereUniqueInput.schema';
import { CustomerOrderCreateWithoutInvoiceInputSchemaObject } from './CustomerOrderCreateWithoutInvoiceInput.schema';
import { CustomerOrderUncheckedCreateWithoutInvoiceInputSchemaObject } from './CustomerOrderUncheckedCreateWithoutInvoiceInput.schema'

export const CustomerOrderCreateOrConnectWithoutInvoiceInputSchemaObject = {
    where: Joi.object().keys(CustomerOrderWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(Joi.object().keys(CustomerOrderCreateWithoutInvoiceInputSchemaObject),
Joi.object().keys(CustomerOrderUncheckedCreateWithoutInvoiceInputSchemaObject))
}