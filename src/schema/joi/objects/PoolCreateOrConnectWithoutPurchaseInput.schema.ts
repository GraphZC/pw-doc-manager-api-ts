// @ts-nocheck
import Joi from 'joi';
import { PoolWhereUniqueInputSchemaObject } from './PoolWhereUniqueInput.schema';
import { PoolCreateWithoutPurchaseInputSchemaObject } from './PoolCreateWithoutPurchaseInput.schema';
import { PoolUncheckedCreateWithoutPurchaseInputSchemaObject } from './PoolUncheckedCreateWithoutPurchaseInput.schema'

export const PoolCreateOrConnectWithoutPurchaseInputSchemaObject = {
    where: Joi.object().keys(PoolWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(Joi.object().keys(PoolCreateWithoutPurchaseInputSchemaObject),
Joi.object().keys(PoolUncheckedCreateWithoutPurchaseInputSchemaObject))
}