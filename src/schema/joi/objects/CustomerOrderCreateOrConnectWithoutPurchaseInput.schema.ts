// @ts-nocheck
import Joi from 'joi';
import { CustomerOrderWhereUniqueInputSchemaObject } from './CustomerOrderWhereUniqueInput.schema';
import { CustomerOrderCreateWithoutPurchaseInputSchemaObject } from './CustomerOrderCreateWithoutPurchaseInput.schema';
import { CustomerOrderUncheckedCreateWithoutPurchaseInputSchemaObject } from './CustomerOrderUncheckedCreateWithoutPurchaseInput.schema'

export const CustomerOrderCreateOrConnectWithoutPurchaseInputSchemaObject = {
    where: Joi.object().keys(CustomerOrderWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(Joi.object().keys(CustomerOrderCreateWithoutPurchaseInputSchemaObject),
Joi.object().keys(CustomerOrderUncheckedCreateWithoutPurchaseInputSchemaObject))
}