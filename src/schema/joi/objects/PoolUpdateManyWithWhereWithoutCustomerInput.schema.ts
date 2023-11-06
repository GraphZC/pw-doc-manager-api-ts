// @ts-nocheck
import Joi from 'joi';
import { PoolScalarWhereInputSchemaObject } from './PoolScalarWhereInput.schema';
import { PoolUpdateManyMutationInputSchemaObject } from './PoolUpdateManyMutationInput.schema';
import { PoolUncheckedUpdateManyWithoutPoolInputSchemaObject } from './PoolUncheckedUpdateManyWithoutPoolInput.schema'

export const PoolUpdateManyWithWhereWithoutCustomerInputSchemaObject = {
    where: Joi.object().keys(PoolScalarWhereInputSchemaObject),
  data: Joi.alternatives().try(Joi.object().keys(PoolUpdateManyMutationInputSchemaObject),
Joi.object().keys(PoolUncheckedUpdateManyWithoutPoolInputSchemaObject))
}