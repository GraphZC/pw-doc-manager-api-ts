// @ts-nocheck
import Joi from 'joi';
import { CustomerWhereUniqueInputSchemaObject } from './CustomerWhereUniqueInput.schema';
import { CustomerCreateWithoutPoolInputSchemaObject } from './CustomerCreateWithoutPoolInput.schema';
import { CustomerUncheckedCreateWithoutPoolInputSchemaObject } from './CustomerUncheckedCreateWithoutPoolInput.schema'

export const CustomerCreateOrConnectWithoutPoolInputSchemaObject = {
    where: Joi.object().keys(CustomerWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(Joi.object().keys(CustomerCreateWithoutPoolInputSchemaObject),
Joi.object().keys(CustomerUncheckedCreateWithoutPoolInputSchemaObject))
}