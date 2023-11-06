// @ts-nocheck
import Joi from 'joi';
import { ServiceDayWhereUniqueInputSchemaObject } from './ServiceDayWhereUniqueInput.schema';
import { ServiceDayCreateWithoutPoolInputSchemaObject } from './ServiceDayCreateWithoutPoolInput.schema';
import { ServiceDayUncheckedCreateWithoutPoolInputSchemaObject } from './ServiceDayUncheckedCreateWithoutPoolInput.schema'

export const ServiceDayCreateOrConnectWithoutPoolInputSchemaObject = {
    where: Joi.object().keys(ServiceDayWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(Joi.object().keys(ServiceDayCreateWithoutPoolInputSchemaObject),
Joi.object().keys(ServiceDayUncheckedCreateWithoutPoolInputSchemaObject))
}