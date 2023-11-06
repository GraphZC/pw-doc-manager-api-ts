// @ts-nocheck
import Joi from 'joi';
import { CustomerCreateWithoutCustomerOrderInputSchemaObject } from './CustomerCreateWithoutCustomerOrderInput.schema';
import { CustomerUncheckedCreateWithoutCustomerOrderInputSchemaObject } from './CustomerUncheckedCreateWithoutCustomerOrderInput.schema';
import { CustomerCreateOrConnectWithoutCustomerOrderInputSchemaObject } from './CustomerCreateOrConnectWithoutCustomerOrderInput.schema';
import { CustomerWhereUniqueInputSchemaObject } from './CustomerWhereUniqueInput.schema'

export const CustomerCreateNestedOneWithoutCustomerOrderInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(CustomerCreateWithoutCustomerOrderInputSchemaObject),
Joi.object().keys(CustomerUncheckedCreateWithoutCustomerOrderInputSchemaObject)),
  connectOrCreate: Joi.object().keys(CustomerCreateOrConnectWithoutCustomerOrderInputSchemaObject),
  connect: Joi.object().keys(CustomerWhereUniqueInputSchemaObject)
}