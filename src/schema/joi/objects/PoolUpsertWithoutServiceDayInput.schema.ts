// @ts-nocheck
import Joi from 'joi';
import { PoolUpdateWithoutServiceDayInputSchemaObject } from './PoolUpdateWithoutServiceDayInput.schema';
import { PoolUncheckedUpdateWithoutServiceDayInputSchemaObject } from './PoolUncheckedUpdateWithoutServiceDayInput.schema';
import { PoolCreateWithoutServiceDayInputSchemaObject } from './PoolCreateWithoutServiceDayInput.schema';
import { PoolUncheckedCreateWithoutServiceDayInputSchemaObject } from './PoolUncheckedCreateWithoutServiceDayInput.schema'

export const PoolUpsertWithoutServiceDayInputSchemaObject = {
    update: Joi.alternatives().try(Joi.object().keys(PoolUpdateWithoutServiceDayInputSchemaObject),
Joi.object().keys(PoolUncheckedUpdateWithoutServiceDayInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(PoolCreateWithoutServiceDayInputSchemaObject),
Joi.object().keys(PoolUncheckedCreateWithoutServiceDayInputSchemaObject))
}