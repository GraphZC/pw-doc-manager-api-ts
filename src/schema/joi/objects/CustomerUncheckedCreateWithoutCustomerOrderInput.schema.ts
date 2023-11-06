// @ts-nocheck
import Joi from 'joi';
import { PoolUncheckedCreateNestedManyWithoutCustomerInputSchemaObject } from './PoolUncheckedCreateNestedManyWithoutCustomerInput.schema'

export const CustomerUncheckedCreateWithoutCustomerOrderInputSchemaObject = {
    id: Joi.string(),
  name: Joi.string().required(),
  address: Joi.alternatives().try(Joi.string()),
  telephone: Joi.alternatives().try(Joi.string()),
  taxId: Joi.alternatives().try(Joi.string()),
  createdAt: Joi.date(),
  updatedAt: Joi.date(),
  pool: Joi.object().keys(PoolUncheckedCreateNestedManyWithoutCustomerInputSchemaObject)
}