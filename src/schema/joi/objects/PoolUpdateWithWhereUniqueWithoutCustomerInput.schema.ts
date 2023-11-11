// @ts-nocheck
import Joi from 'joi';
import { PoolWhereUniqueInputSchemaObject } from './PoolWhereUniqueInput.schema';
import { PoolUpdateWithoutCustomerInputSchemaObject } from './PoolUpdateWithoutCustomerInput.schema';
import { PoolUncheckedUpdateWithoutCustomerInputSchemaObject } from './PoolUncheckedUpdateWithoutCustomerInput.schema'

export const PoolUpdateWithWhereUniqueWithoutCustomerInputSchemaObject = {
    where: Joi.object().keys(PoolWhereUniqueInputSchemaObject),
  data: Joi.alternatives().try(Joi.object().keys(PoolUpdateWithoutCustomerInputSchemaObject),
Joi.object().keys(PoolUncheckedUpdateWithoutCustomerInputSchemaObject))
}