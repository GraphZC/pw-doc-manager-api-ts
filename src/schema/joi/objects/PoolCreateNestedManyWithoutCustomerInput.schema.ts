// @ts-nocheck
import Joi from 'joi';
import { PoolCreateWithoutCustomerInputSchemaObject } from './PoolCreateWithoutCustomerInput.schema';
import { PoolUncheckedCreateWithoutCustomerInputSchemaObject } from './PoolUncheckedCreateWithoutCustomerInput.schema';
import { PoolCreateOrConnectWithoutCustomerInputSchemaObject } from './PoolCreateOrConnectWithoutCustomerInput.schema';
import { PoolCreateManyCustomerInputEnvelopeSchemaObject } from './PoolCreateManyCustomerInputEnvelope.schema';
import { PoolWhereUniqueInputSchemaObject } from './PoolWhereUniqueInput.schema'

export const PoolCreateNestedManyWithoutCustomerInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(PoolCreateWithoutCustomerInputSchemaObject),
Joi.array().items(Joi.object().keys(PoolCreateWithoutCustomerInputSchemaObject)),
Joi.object().keys(PoolUncheckedCreateWithoutCustomerInputSchemaObject),
Joi.array().items(Joi.object().keys(PoolUncheckedCreateWithoutCustomerInputSchemaObject))),
  connectOrCreate: Joi.alternatives().try(Joi.object().keys(PoolCreateOrConnectWithoutCustomerInputSchemaObject),
Joi.array().items(Joi.object().keys(PoolCreateOrConnectWithoutCustomerInputSchemaObject))),
  createMany: Joi.object().keys(PoolCreateManyCustomerInputEnvelopeSchemaObject),
  connect: Joi.alternatives().try(Joi.object().keys(PoolWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(PoolWhereUniqueInputSchemaObject)))
}