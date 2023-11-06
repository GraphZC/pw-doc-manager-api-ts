// @ts-nocheck
import Joi from 'joi';
import { PoolWhereUniqueInputSchemaObject } from './PoolWhereUniqueInput.schema';
import { PoolUpdateWithoutCustomerInputSchemaObject } from './PoolUpdateWithoutCustomerInput.schema';
import { PoolUncheckedUpdateWithoutCustomerInputSchemaObject } from './PoolUncheckedUpdateWithoutCustomerInput.schema';
import { PoolCreateWithoutCustomerInputSchemaObject } from './PoolCreateWithoutCustomerInput.schema';
import { PoolUncheckedCreateWithoutCustomerInputSchemaObject } from './PoolUncheckedCreateWithoutCustomerInput.schema'

export const PoolUpsertWithWhereUniqueWithoutCustomerInputSchemaObject = {
    where: Joi.object().keys(PoolWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(PoolUpdateWithoutCustomerInputSchemaObject),
Joi.object().keys(PoolUncheckedUpdateWithoutCustomerInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(PoolCreateWithoutCustomerInputSchemaObject),
Joi.object().keys(PoolUncheckedCreateWithoutCustomerInputSchemaObject))
}