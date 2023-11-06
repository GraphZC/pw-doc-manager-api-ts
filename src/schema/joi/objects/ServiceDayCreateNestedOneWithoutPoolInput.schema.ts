// @ts-nocheck
import Joi from 'joi';
import { ServiceDayCreateWithoutPoolInputSchemaObject } from './ServiceDayCreateWithoutPoolInput.schema';
import { ServiceDayUncheckedCreateWithoutPoolInputSchemaObject } from './ServiceDayUncheckedCreateWithoutPoolInput.schema';
import { ServiceDayCreateOrConnectWithoutPoolInputSchemaObject } from './ServiceDayCreateOrConnectWithoutPoolInput.schema';
import { ServiceDayWhereUniqueInputSchemaObject } from './ServiceDayWhereUniqueInput.schema'

export const ServiceDayCreateNestedOneWithoutPoolInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(ServiceDayCreateWithoutPoolInputSchemaObject),
Joi.object().keys(ServiceDayUncheckedCreateWithoutPoolInputSchemaObject)),
  connectOrCreate: Joi.object().keys(ServiceDayCreateOrConnectWithoutPoolInputSchemaObject),
  connect: Joi.object().keys(ServiceDayWhereUniqueInputSchemaObject)
}