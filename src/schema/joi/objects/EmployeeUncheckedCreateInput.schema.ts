// @ts-nocheck
import Joi from 'joi';
import { CustomerOrderUncheckedCreateNestedManyWithoutEmployeeInputSchemaObject } from './CustomerOrderUncheckedCreateNestedManyWithoutEmployeeInput.schema'

export const EmployeeUncheckedCreateInputSchemaObject = {
    id: Joi.string(),
  username: Joi.string().required(),
  password: Joi.string().required(),
  name: Joi.string().required(),
  createdAt: Joi.date(),
  updatedAt: Joi.date(),
  customerOrder: Joi.object().keys(CustomerOrderUncheckedCreateNestedManyWithoutEmployeeInputSchemaObject)
}