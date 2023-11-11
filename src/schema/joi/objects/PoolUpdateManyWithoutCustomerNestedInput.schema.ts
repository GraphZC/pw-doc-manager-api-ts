// @ts-nocheck
import Joi from 'joi';
import { PoolCreateWithoutCustomerInputSchemaObject } from './PoolCreateWithoutCustomerInput.schema';
import { PoolUncheckedCreateWithoutCustomerInputSchemaObject } from './PoolUncheckedCreateWithoutCustomerInput.schema';
import { PoolCreateOrConnectWithoutCustomerInputSchemaObject } from './PoolCreateOrConnectWithoutCustomerInput.schema';
import { PoolUpsertWithWhereUniqueWithoutCustomerInputSchemaObject } from './PoolUpsertWithWhereUniqueWithoutCustomerInput.schema';
import { PoolCreateManyCustomerInputEnvelopeSchemaObject } from './PoolCreateManyCustomerInputEnvelope.schema';
import { PoolWhereUniqueInputSchemaObject } from './PoolWhereUniqueInput.schema';
import { PoolUpdateWithWhereUniqueWithoutCustomerInputSchemaObject } from './PoolUpdateWithWhereUniqueWithoutCustomerInput.schema';
import { PoolUpdateManyWithWhereWithoutCustomerInputSchemaObject } from './PoolUpdateManyWithWhereWithoutCustomerInput.schema';
import { PoolScalarWhereInputSchemaObject } from './PoolScalarWhereInput.schema'

export const PoolUpdateManyWithoutCustomerNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(PoolCreateWithoutCustomerInputSchemaObject),
Joi.array().items(Joi.object().keys(PoolCreateWithoutCustomerInputSchemaObject)),
Joi.object().keys(PoolUncheckedCreateWithoutCustomerInputSchemaObject),
Joi.array().items(Joi.object().keys(PoolUncheckedCreateWithoutCustomerInputSchemaObject))),
  connectOrCreate: Joi.alternatives().try(Joi.object().keys(PoolCreateOrConnectWithoutCustomerInputSchemaObject),
Joi.array().items(Joi.object().keys(PoolCreateOrConnectWithoutCustomerInputSchemaObject))),
  upsert: Joi.alternatives().try(Joi.object().keys(PoolUpsertWithWhereUniqueWithoutCustomerInputSchemaObject),
Joi.array().items(Joi.object().keys(PoolUpsertWithWhereUniqueWithoutCustomerInputSchemaObject))),
  createMany: Joi.object().keys(PoolCreateManyCustomerInputEnvelopeSchemaObject),
  set: Joi.alternatives().try(Joi.object().keys(PoolWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(PoolWhereUniqueInputSchemaObject))),
  disconnect: Joi.alternatives().try(Joi.object().keys(PoolWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(PoolWhereUniqueInputSchemaObject))),
  delete: Joi.alternatives().try(Joi.object().keys(PoolWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(PoolWhereUniqueInputSchemaObject))),
  connect: Joi.alternatives().try(Joi.object().keys(PoolWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(PoolWhereUniqueInputSchemaObject))),
  update: Joi.alternatives().try(Joi.object().keys(PoolUpdateWithWhereUniqueWithoutCustomerInputSchemaObject),
Joi.array().items(Joi.object().keys(PoolUpdateWithWhereUniqueWithoutCustomerInputSchemaObject))),
  updateMany: Joi.alternatives().try(Joi.object().keys(PoolUpdateManyWithWhereWithoutCustomerInputSchemaObject),
Joi.array().items(Joi.object().keys(PoolUpdateManyWithWhereWithoutCustomerInputSchemaObject))),
  deleteMany: Joi.alternatives().try(Joi.object().keys(PoolScalarWhereInputSchemaObject),
Joi.array().items(Joi.object().keys(PoolScalarWhereInputSchemaObject)))
}