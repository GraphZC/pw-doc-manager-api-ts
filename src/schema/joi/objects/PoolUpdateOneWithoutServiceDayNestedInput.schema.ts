// @ts-nocheck
import Joi from 'joi';
import { PoolCreateWithoutServiceDayInputSchemaObject } from './PoolCreateWithoutServiceDayInput.schema';
import { PoolUncheckedCreateWithoutServiceDayInputSchemaObject } from './PoolUncheckedCreateWithoutServiceDayInput.schema';
import { PoolCreateOrConnectWithoutServiceDayInputSchemaObject } from './PoolCreateOrConnectWithoutServiceDayInput.schema';
import { PoolUpsertWithoutServiceDayInputSchemaObject } from './PoolUpsertWithoutServiceDayInput.schema';
import { PoolWhereUniqueInputSchemaObject } from './PoolWhereUniqueInput.schema';
import { PoolUpdateWithoutServiceDayInputSchemaObject } from './PoolUpdateWithoutServiceDayInput.schema';
import { PoolUncheckedUpdateWithoutServiceDayInputSchemaObject } from './PoolUncheckedUpdateWithoutServiceDayInput.schema'

export const PoolUpdateOneWithoutServiceDayNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(PoolCreateWithoutServiceDayInputSchemaObject),
Joi.object().keys(PoolUncheckedCreateWithoutServiceDayInputSchemaObject)),
  connectOrCreate: Joi.object().keys(PoolCreateOrConnectWithoutServiceDayInputSchemaObject),
  upsert: Joi.object().keys(PoolUpsertWithoutServiceDayInputSchemaObject),
  disconnect: Joi.boolean(),
  delete: Joi.boolean(),
  connect: Joi.object().keys(PoolWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(PoolUpdateWithoutServiceDayInputSchemaObject),
Joi.object().keys(PoolUncheckedUpdateWithoutServiceDayInputSchemaObject))
}