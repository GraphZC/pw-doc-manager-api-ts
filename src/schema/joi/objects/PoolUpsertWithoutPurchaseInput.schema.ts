// @ts-nocheck
import Joi from 'joi';
import { PoolUpdateWithoutPurchaseInputSchemaObject } from './PoolUpdateWithoutPurchaseInput.schema';
import { PoolUncheckedUpdateWithoutPurchaseInputSchemaObject } from './PoolUncheckedUpdateWithoutPurchaseInput.schema';
import { PoolCreateWithoutPurchaseInputSchemaObject } from './PoolCreateWithoutPurchaseInput.schema';
import { PoolUncheckedCreateWithoutPurchaseInputSchemaObject } from './PoolUncheckedCreateWithoutPurchaseInput.schema'

export const PoolUpsertWithoutPurchaseInputSchemaObject = {
    update: Joi.alternatives().try(Joi.object().keys(PoolUpdateWithoutPurchaseInputSchemaObject),
Joi.object().keys(PoolUncheckedUpdateWithoutPurchaseInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(PoolCreateWithoutPurchaseInputSchemaObject),
Joi.object().keys(PoolUncheckedCreateWithoutPurchaseInputSchemaObject))
}