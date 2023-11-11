// @ts-nocheck
import Joi from 'joi';


export const EmployeeCreateWithoutCustomerOrderInputSchemaObject = {
    id: Joi.string(),
  username: Joi.string().required(),
  password: Joi.string().required(),
  name: Joi.string().required(),
  createdAt: Joi.date(),
  updatedAt: Joi.date()
}