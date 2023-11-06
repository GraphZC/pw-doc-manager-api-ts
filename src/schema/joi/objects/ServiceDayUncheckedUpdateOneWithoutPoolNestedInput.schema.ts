// @ts-nocheck
import Joi from 'joi';
import { ServiceDayCreateWithoutPoolInputSchemaObject } from './ServiceDayCreateWithoutPoolInput.schema';
import { ServiceDayUncheckedCreateWithoutPoolInputSchemaObject } from './ServiceDayUncheckedCreateWithoutPoolInput.schema';
import { ServiceDayCreateOrConnectWithoutPoolInputSchemaObject } from './ServiceDayCreateOrConnectWithoutPoolInput.schema';
import { ServiceDayUpsertWithoutPoolInputSchemaObject } from './ServiceDayUpsertWithoutPoolInput.schema';
import { ServiceDayWhereUniqueInputSchemaObject } from './ServiceDayWhereUniqueInput.schema';
import { ServiceDayUpdateWithoutPoolInputSchemaObject } from './ServiceDayUpdateWithoutPoolInput.schema';
import { ServiceDayUncheckedUpdateWithoutPoolInputSchemaObject } from './ServiceDayUncheckedUpdateWithoutPoolInput.schema'

export const ServiceDayUncheckedUpdateOneWithoutPoolNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(ServiceDayCreateWithoutPoolInputSchemaObject),
Joi.object().keys(ServiceDayUncheckedCreateWithoutPoolInputSchemaObject)),
  connectOrCreate: Joi.object().keys(ServiceDayCreateOrConnectWithoutPoolInputSchemaObject),
  upsert: Joi.object().keys(ServiceDayUpsertWithoutPoolInputSchemaObject),
  disconnect: Joi.boolean(),
  delete: Joi.boolean(),
  connect: Joi.object().keys(ServiceDayWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(ServiceDayUpdateWithoutPoolInputSchemaObject),
Joi.object().keys(ServiceDayUncheckedUpdateWithoutPoolInputSchemaObject))
}