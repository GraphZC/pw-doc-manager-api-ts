// @ts-nocheck
import Joi from 'joi';
import { CustomerWhereUniqueInputSchemaObject } from './CustomerWhereUniqueInput.schema';
import { CustomerCreateWithoutCustomerOrderInputSchemaObject } from './CustomerCreateWithoutCustomerOrderInput.schema';
import { CustomerUncheckedCreateWithoutCustomerOrderInputSchemaObject } from './CustomerUncheckedCreateWithoutCustomerOrderInput.schema'

export const CustomerCreateOrConnectWithoutCustomerOrderInputSchemaObject = {
    where: Joi.object().keys(CustomerWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(Joi.object().keys(CustomerCreateWithoutCustomerOrderInputSchemaObject),
Joi.object().keys(CustomerUncheckedCreateWithoutCustomerOrderInputSchemaObject))
}