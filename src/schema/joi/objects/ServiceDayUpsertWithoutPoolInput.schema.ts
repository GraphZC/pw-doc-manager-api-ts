// @ts-nocheck
import Joi from 'joi';
import { ServiceDayUpdateWithoutPoolInputSchemaObject } from './ServiceDayUpdateWithoutPoolInput.schema';
import { ServiceDayUncheckedUpdateWithoutPoolInputSchemaObject } from './ServiceDayUncheckedUpdateWithoutPoolInput.schema';
import { ServiceDayCreateWithoutPoolInputSchemaObject } from './ServiceDayCreateWithoutPoolInput.schema';
import { ServiceDayUncheckedCreateWithoutPoolInputSchemaObject } from './ServiceDayUncheckedCreateWithoutPoolInput.schema'

export const ServiceDayUpsertWithoutPoolInputSchemaObject = {
    update: Joi.alternatives().try(Joi.object().keys(ServiceDayUpdateWithoutPoolInputSchemaObject),
Joi.object().keys(ServiceDayUncheckedUpdateWithoutPoolInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(ServiceDayCreateWithoutPoolInputSchemaObject),
Joi.object().keys(ServiceDayUncheckedCreateWithoutPoolInputSchemaObject))
}