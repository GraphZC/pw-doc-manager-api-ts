// @ts-nocheck
import Joi from 'joi';
import { PoolWhereUniqueInputSchemaObject } from './PoolWhereUniqueInput.schema';
import { PoolCreateWithoutCustomerInputSchemaObject } from './PoolCreateWithoutCustomerInput.schema';
import { PoolUncheckedCreateWithoutCustomerInputSchemaObject } from './PoolUncheckedCreateWithoutCustomerInput.schema'

export const PoolCreateOrConnectWithoutCustomerInputSchemaObject = {
    where: Joi.object().keys(PoolWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(Joi.object().keys(PoolCreateWithoutCustomerInputSchemaObject),
Joi.object().keys(PoolUncheckedCreateWithoutCustomerInputSchemaObject))
}