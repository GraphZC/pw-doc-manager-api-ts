// @ts-nocheck
import Joi from 'joi';
import { CustomerOrderUncheckedCreateNestedManyWithoutCustomerInputSchemaObject } from './CustomerOrderUncheckedCreateNestedManyWithoutCustomerInput.schema'

export const CustomerUncheckedCreateWithoutPoolInputSchemaObject = {
    id: Joi.string(),
  name: Joi.string().required(),
  address: Joi.alternatives().try(Joi.string()),
  telephone: Joi.alternatives().try(Joi.string()),
  taxId: Joi.alternatives().try(Joi.string()),
  createdAt: Joi.date(),
  updatedAt: Joi.date(),
  customerOrder: Joi.object().keys(CustomerOrderUncheckedCreateNestedManyWithoutCustomerInputSchemaObject)
}