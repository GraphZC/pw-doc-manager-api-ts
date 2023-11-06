// @ts-nocheck
import Joi from 'joi';
import { CustomerUpdateWithoutPoolInputSchemaObject } from './CustomerUpdateWithoutPoolInput.schema';
import { CustomerUncheckedUpdateWithoutPoolInputSchemaObject } from './CustomerUncheckedUpdateWithoutPoolInput.schema';
import { CustomerCreateWithoutPoolInputSchemaObject } from './CustomerCreateWithoutPoolInput.schema';
import { CustomerUncheckedCreateWithoutPoolInputSchemaObject } from './CustomerUncheckedCreateWithoutPoolInput.schema'

export const CustomerUpsertWithoutPoolInputSchemaObject = {
    update: Joi.alternatives().try(Joi.object().keys(CustomerUpdateWithoutPoolInputSchemaObject),
Joi.object().keys(CustomerUncheckedUpdateWithoutPoolInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(CustomerCreateWithoutPoolInputSchemaObject),
Joi.object().keys(CustomerUncheckedCreateWithoutPoolInputSchemaObject))
}