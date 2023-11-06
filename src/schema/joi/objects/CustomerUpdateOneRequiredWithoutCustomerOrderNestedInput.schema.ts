// @ts-nocheck
import Joi from 'joi';
import { CustomerCreateWithoutCustomerOrderInputSchemaObject } from './CustomerCreateWithoutCustomerOrderInput.schema';
import { CustomerUncheckedCreateWithoutCustomerOrderInputSchemaObject } from './CustomerUncheckedCreateWithoutCustomerOrderInput.schema';
import { CustomerCreateOrConnectWithoutCustomerOrderInputSchemaObject } from './CustomerCreateOrConnectWithoutCustomerOrderInput.schema';
import { CustomerUpsertWithoutCustomerOrderInputSchemaObject } from './CustomerUpsertWithoutCustomerOrderInput.schema';
import { CustomerWhereUniqueInputSchemaObject } from './CustomerWhereUniqueInput.schema';
import { CustomerUpdateWithoutCustomerOrderInputSchemaObject } from './CustomerUpdateWithoutCustomerOrderInput.schema';
import { CustomerUncheckedUpdateWithoutCustomerOrderInputSchemaObject } from './CustomerUncheckedUpdateWithoutCustomerOrderInput.schema'

export const CustomerUpdateOneRequiredWithoutCustomerOrderNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(CustomerCreateWithoutCustomerOrderInputSchemaObject),
Joi.object().keys(CustomerUncheckedCreateWithoutCustomerOrderInputSchemaObject)),
  connectOrCreate: Joi.object().keys(CustomerCreateOrConnectWithoutCustomerOrderInputSchemaObject),
  upsert: Joi.object().keys(CustomerUpsertWithoutCustomerOrderInputSchemaObject),
  connect: Joi.object().keys(CustomerWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(CustomerUpdateWithoutCustomerOrderInputSchemaObject),
Joi.object().keys(CustomerUncheckedUpdateWithoutCustomerOrderInputSchemaObject))
}