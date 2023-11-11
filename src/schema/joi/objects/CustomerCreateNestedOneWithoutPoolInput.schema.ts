// @ts-nocheck
import Joi from 'joi';
import { CustomerCreateWithoutPoolInputSchemaObject } from './CustomerCreateWithoutPoolInput.schema';
import { CustomerUncheckedCreateWithoutPoolInputSchemaObject } from './CustomerUncheckedCreateWithoutPoolInput.schema';
import { CustomerCreateOrConnectWithoutPoolInputSchemaObject } from './CustomerCreateOrConnectWithoutPoolInput.schema';
import { CustomerWhereUniqueInputSchemaObject } from './CustomerWhereUniqueInput.schema'

export const CustomerCreateNestedOneWithoutPoolInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(CustomerCreateWithoutPoolInputSchemaObject),
Joi.object().keys(CustomerUncheckedCreateWithoutPoolInputSchemaObject)),
  connectOrCreate: Joi.object().keys(CustomerCreateOrConnectWithoutPoolInputSchemaObject),
  connect: Joi.object().keys(CustomerWhereUniqueInputSchemaObject)
}