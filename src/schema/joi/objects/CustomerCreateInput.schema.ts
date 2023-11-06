// @ts-nocheck
import Joi from 'joi';
import { PoolCreateNestedManyWithoutCustomerInputSchemaObject } from './PoolCreateNestedManyWithoutCustomerInput.schema';
import { CustomerOrderCreateNestedManyWithoutCustomerInputSchemaObject } from './CustomerOrderCreateNestedManyWithoutCustomerInput.schema'

export const CustomerCreateInputSchemaObject = {
    id: Joi.string(),
  name: Joi.string().required(),
  address: Joi.alternatives().try(Joi.string()),
  telephone: Joi.alternatives().try(Joi.string()),
  taxId: Joi.alternatives().try(Joi.string()),
  createdAt: Joi.date(),
  updatedAt: Joi.date(),
  pool: Joi.object().keys(PoolCreateNestedManyWithoutCustomerInputSchemaObject),
  customerOrder: Joi.object().keys(CustomerOrderCreateNestedManyWithoutCustomerInputSchemaObject)
}