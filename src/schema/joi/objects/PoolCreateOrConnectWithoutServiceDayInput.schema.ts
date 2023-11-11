// @ts-nocheck
import Joi from 'joi';
import { PoolWhereUniqueInputSchemaObject } from './PoolWhereUniqueInput.schema';
import { PoolCreateWithoutServiceDayInputSchemaObject } from './PoolCreateWithoutServiceDayInput.schema';
import { PoolUncheckedCreateWithoutServiceDayInputSchemaObject } from './PoolUncheckedCreateWithoutServiceDayInput.schema'

export const PoolCreateOrConnectWithoutServiceDayInputSchemaObject = {
    where: Joi.object().keys(PoolWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(Joi.object().keys(PoolCreateWithoutServiceDayInputSchemaObject),
Joi.object().keys(PoolUncheckedCreateWithoutServiceDayInputSchemaObject))
}