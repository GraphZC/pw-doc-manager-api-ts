// @ts-nocheck
import Joi from 'joi';
import { CustomerOrderCreateWithoutPurchaseInputSchemaObject } from './CustomerOrderCreateWithoutPurchaseInput.schema';
import { CustomerOrderUncheckedCreateWithoutPurchaseInputSchemaObject } from './CustomerOrderUncheckedCreateWithoutPurchaseInput.schema';
import { CustomerOrderCreateOrConnectWithoutPurchaseInputSchemaObject } from './CustomerOrderCreateOrConnectWithoutPurchaseInput.schema';
import { CustomerOrderWhereUniqueInputSchemaObject } from './CustomerOrderWhereUniqueInput.schema'

export const CustomerOrderCreateNestedOneWithoutPurchaseInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(CustomerOrderCreateWithoutPurchaseInputSchemaObject),
Joi.object().keys(CustomerOrderUncheckedCreateWithoutPurchaseInputSchemaObject)),
  connectOrCreate: Joi.object().keys(CustomerOrderCreateOrConnectWithoutPurchaseInputSchemaObject),
  connect: Joi.object().keys(CustomerOrderWhereUniqueInputSchemaObject)
}