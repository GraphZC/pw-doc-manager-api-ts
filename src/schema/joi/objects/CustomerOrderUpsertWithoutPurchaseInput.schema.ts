// @ts-nocheck
import Joi from 'joi';
import { CustomerOrderUpdateWithoutPurchaseInputSchemaObject } from './CustomerOrderUpdateWithoutPurchaseInput.schema';
import { CustomerOrderUncheckedUpdateWithoutPurchaseInputSchemaObject } from './CustomerOrderUncheckedUpdateWithoutPurchaseInput.schema';
import { CustomerOrderCreateWithoutPurchaseInputSchemaObject } from './CustomerOrderCreateWithoutPurchaseInput.schema';
import { CustomerOrderUncheckedCreateWithoutPurchaseInputSchemaObject } from './CustomerOrderUncheckedCreateWithoutPurchaseInput.schema'

export const CustomerOrderUpsertWithoutPurchaseInputSchemaObject = {
    update: Joi.alternatives().try(Joi.object().keys(CustomerOrderUpdateWithoutPurchaseInputSchemaObject),
Joi.object().keys(CustomerOrderUncheckedUpdateWithoutPurchaseInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(CustomerOrderCreateWithoutPurchaseInputSchemaObject),
Joi.object().keys(CustomerOrderUncheckedCreateWithoutPurchaseInputSchemaObject))
}