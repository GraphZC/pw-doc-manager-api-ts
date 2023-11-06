// @ts-nocheck
import Joi from 'joi';
import { PoolCreateWithoutPurchaseInputSchemaObject } from './PoolCreateWithoutPurchaseInput.schema';
import { PoolUncheckedCreateWithoutPurchaseInputSchemaObject } from './PoolUncheckedCreateWithoutPurchaseInput.schema';
import { PoolCreateOrConnectWithoutPurchaseInputSchemaObject } from './PoolCreateOrConnectWithoutPurchaseInput.schema';
import { PoolUpsertWithoutPurchaseInputSchemaObject } from './PoolUpsertWithoutPurchaseInput.schema';
import { PoolWhereUniqueInputSchemaObject } from './PoolWhereUniqueInput.schema';
import { PoolUpdateWithoutPurchaseInputSchemaObject } from './PoolUpdateWithoutPurchaseInput.schema';
import { PoolUncheckedUpdateWithoutPurchaseInputSchemaObject } from './PoolUncheckedUpdateWithoutPurchaseInput.schema'

export const PoolUpdateOneWithoutPurchaseNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(PoolCreateWithoutPurchaseInputSchemaObject),
Joi.object().keys(PoolUncheckedCreateWithoutPurchaseInputSchemaObject)),
  connectOrCreate: Joi.object().keys(PoolCreateOrConnectWithoutPurchaseInputSchemaObject),
  upsert: Joi.object().keys(PoolUpsertWithoutPurchaseInputSchemaObject),
  disconnect: Joi.boolean(),
  delete: Joi.boolean(),
  connect: Joi.object().keys(PoolWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(PoolUpdateWithoutPurchaseInputSchemaObject),
Joi.object().keys(PoolUncheckedUpdateWithoutPurchaseInputSchemaObject))
}