// @ts-nocheck
import Joi from 'joi';
import { CustomerOrderCreateNestedManyWithoutEmployeeInputSchemaObject } from './CustomerOrderCreateNestedManyWithoutEmployeeInput.schema'

export const EmployeeCreateInputSchemaObject = {
  id: Joi.string(),
  username: Joi.string().required(),
  password: Joi.string().required(),
  name: Joi.string().required(),
  createdAt: Joi.date(),
  updatedAt: Joi.date(),
  customerOrder: Joi.object().keys(CustomerOrderCreateNestedManyWithoutEmployeeInputSchemaObject)
}