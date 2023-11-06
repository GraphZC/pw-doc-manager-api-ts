// @ts-nocheck
import Joi from 'joi';
import { CustomerOrderCreateWithoutPurchaseInputSchemaObject } from './CustomerOrderCreateWithoutPurchaseInput.schema';
import { CustomerOrderUncheckedCreateWithoutPurchaseInputSchemaObject } from './CustomerOrderUncheckedCreateWithoutPurchaseInput.schema';
import { CustomerOrderCreateOrConnectWithoutPurchaseInputSchemaObject } from './CustomerOrderCreateOrConnectWithoutPurchaseInput.schema';
import { CustomerOrderUpsertWithoutPurchaseInputSchemaObject } from './CustomerOrderUpsertWithoutPurchaseInput.schema';
import { CustomerOrderWhereUniqueInputSchemaObject } from './CustomerOrderWhereUniqueInput.schema';
import { CustomerOrderUpdateWithoutPurchaseInputSchemaObject } from './CustomerOrderUpdateWithoutPurchaseInput.schema';
import { CustomerOrderUncheckedUpdateWithoutPurchaseInputSchemaObject } from './CustomerOrderUncheckedUpdateWithoutPurchaseInput.schema'

export const CustomerOrderUpdateOneRequiredWithoutPurchaseNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(CustomerOrderCreateWithoutPurchaseInputSchemaObject),
Joi.object().keys(CustomerOrderUncheckedCreateWithoutPurchaseInputSchemaObject)),
  connectOrCreate: Joi.object().keys(CustomerOrderCreateOrConnectWithoutPurchaseInputSchemaObject),
  upsert: Joi.object().keys(CustomerOrderUpsertWithoutPurchaseInputSchemaObject),
  connect: Joi.object().keys(CustomerOrderWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(CustomerOrderUpdateWithoutPurchaseInputSchemaObject),
Joi.object().keys(CustomerOrderUncheckedUpdateWithoutPurchaseInputSchemaObject))
}