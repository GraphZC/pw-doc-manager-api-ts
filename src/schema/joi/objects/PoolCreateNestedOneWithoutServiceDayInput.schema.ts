// @ts-nocheck
import Joi from 'joi';
import { PoolCreateWithoutServiceDayInputSchemaObject } from './PoolCreateWithoutServiceDayInput.schema';
import { PoolUncheckedCreateWithoutServiceDayInputSchemaObject } from './PoolUncheckedCreateWithoutServiceDayInput.schema';
import { PoolCreateOrConnectWithoutServiceDayInputSchemaObject } from './PoolCreateOrConnectWithoutServiceDayInput.schema';
import { PoolWhereUniqueInputSchemaObject } from './PoolWhereUniqueInput.schema'

export const PoolCreateNestedOneWithoutServiceDayInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(PoolCreateWithoutServiceDayInputSchemaObject),
Joi.object().keys(PoolUncheckedCreateWithoutServiceDayInputSchemaObject)),
  connectOrCreate: Joi.object().keys(PoolCreateOrConnectWithoutServiceDayInputSchemaObject),
  connect: Joi.object().keys(PoolWhereUniqueInputSchemaObject)
}