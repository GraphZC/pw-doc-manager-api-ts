// @ts-nocheck
import Joi from 'joi';
import { CustomerCreateWithoutPoolInputSchemaObject } from './CustomerCreateWithoutPoolInput.schema';
import { CustomerUncheckedCreateWithoutPoolInputSchemaObject } from './CustomerUncheckedCreateWithoutPoolInput.schema';
import { CustomerCreateOrConnectWithoutPoolInputSchemaObject } from './CustomerCreateOrConnectWithoutPoolInput.schema';
import { CustomerUpsertWithoutPoolInputSchemaObject } from './CustomerUpsertWithoutPoolInput.schema';
import { CustomerWhereUniqueInputSchemaObject } from './CustomerWhereUniqueInput.schema';
import { CustomerUpdateWithoutPoolInputSchemaObject } from './CustomerUpdateWithoutPoolInput.schema';
import { CustomerUncheckedUpdateWithoutPoolInputSchemaObject } from './CustomerUncheckedUpdateWithoutPoolInput.schema'

export const CustomerUpdateOneRequiredWithoutPoolNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(CustomerCreateWithoutPoolInputSchemaObject),
Joi.object().keys(CustomerUncheckedCreateWithoutPoolInputSchemaObject)),
  connectOrCreate: Joi.object().keys(CustomerCreateOrConnectWithoutPoolInputSchemaObject),
  upsert: Joi.object().keys(CustomerUpsertWithoutPoolInputSchemaObject),
  connect: Joi.object().keys(CustomerWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(CustomerUpdateWithoutPoolInputSchemaObject),
Joi.object().keys(CustomerUncheckedUpdateWithoutPoolInputSchemaObject))
}