// @ts-nocheck
import Joi from 'joi';
import { PoolCreateWithoutServiceDayInputSchemaObject } from './PoolCreateWithoutServiceDayInput.schema';
import { PoolUncheckedCreateWithoutServiceDayInputSchemaObject } from './PoolUncheckedCreateWithoutServiceDayInput.schema';
import { PoolCreateOrConnectWithoutServiceDayInputSchemaObject } from './PoolCreateOrConnectWithoutServiceDayInput.schema';
import { PoolUpsertWithoutServiceDayInputSchemaObject } from './PoolUpsertWithoutServiceDayInput.schema';
import { PoolWhereUniqueInputSchemaObject } from './PoolWhereUniqueInput.schema';
import { PoolUpdateWithoutServiceDayInputSchemaObject } from './PoolUpdateWithoutServiceDayInput.schema';
import { PoolUncheckedUpdateWithoutServiceDayInputSchemaObject } from './PoolUncheckedUpdateWithoutServiceDayInput.schema'

export const PoolUpdateOneRequiredWithoutServiceDayNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(PoolCreateWithoutServiceDayInputSchemaObject),
Joi.object().keys(PoolUncheckedCreateWithoutServiceDayInputSchemaObject)),
  connectOrCreate: Joi.object().keys(PoolCreateOrConnectWithoutServiceDayInputSchemaObject),
  upsert: Joi.object().keys(PoolUpsertWithoutServiceDayInputSchemaObject),
  connect: Joi.object().keys(PoolWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(PoolUpdateWithoutServiceDayInputSchemaObject),
Joi.object().keys(PoolUncheckedUpdateWithoutServiceDayInputSchemaObject))
}