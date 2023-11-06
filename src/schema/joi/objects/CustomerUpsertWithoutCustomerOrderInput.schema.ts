// @ts-nocheck
import Joi from 'joi';
import { CustomerUpdateWithoutCustomerOrderInputSchemaObject } from './CustomerUpdateWithoutCustomerOrderInput.schema';
import { CustomerUncheckedUpdateWithoutCustomerOrderInputSchemaObject } from './CustomerUncheckedUpdateWithoutCustomerOrderInput.schema';
import { CustomerCreateWithoutCustomerOrderInputSchemaObject } from './CustomerCreateWithoutCustomerOrderInput.schema';
import { CustomerUncheckedCreateWithoutCustomerOrderInputSchemaObject } from './CustomerUncheckedCreateWithoutCustomerOrderInput.schema'

export const CustomerUpsertWithoutCustomerOrderInputSchemaObject = {
    update: Joi.alternatives().try(Joi.object().keys(CustomerUpdateWithoutCustomerOrderInputSchemaObject),
Joi.object().keys(CustomerUncheckedUpdateWithoutCustomerOrderInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(CustomerCreateWithoutCustomerOrderInputSchemaObject),
Joi.object().keys(CustomerUncheckedCreateWithoutCustomerOrderInputSchemaObject))
}