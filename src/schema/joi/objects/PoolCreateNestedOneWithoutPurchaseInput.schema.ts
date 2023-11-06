// @ts-nocheck
import Joi from 'joi';
import { PoolCreateWithoutPurchaseInputSchemaObject } from './PoolCreateWithoutPurchaseInput.schema';
import { PoolUncheckedCreateWithoutPurchaseInputSchemaObject } from './PoolUncheckedCreateWithoutPurchaseInput.schema';
import { PoolCreateOrConnectWithoutPurchaseInputSchemaObject } from './PoolCreateOrConnectWithoutPurchaseInput.schema';
import { PoolWhereUniqueInputSchemaObject } from './PoolWhereUniqueInput.schema'

export const PoolCreateNestedOneWithoutPurchaseInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(PoolCreateWithoutPurchaseInputSchemaObject),
Joi.object().keys(PoolUncheckedCreateWithoutPurchaseInputSchemaObject)),
  connectOrCreate: Joi.object().keys(PoolCreateOrConnectWithoutPurchaseInputSchemaObject),
  connect: Joi.object().keys(PoolWhereUniqueInputSchemaObject)
}