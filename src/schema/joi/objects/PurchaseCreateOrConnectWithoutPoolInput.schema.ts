// @ts-nocheck
import Joi from 'joi';
import { PurchaseWhereUniqueInputSchemaObject } from './PurchaseWhereUniqueInput.schema';
import { PurchaseCreateWithoutPoolInputSchemaObject } from './PurchaseCreateWithoutPoolInput.schema';
import { PurchaseUncheckedCreateWithoutPoolInputSchemaObject } from './PurchaseUncheckedCreateWithoutPoolInput.schema'

export const PurchaseCreateOrConnectWithoutPoolInputSchemaObject = {
    where: Joi.object().keys(PurchaseWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(Joi.object().keys(PurchaseCreateWithoutPoolInputSchemaObject),
Joi.object().keys(PurchaseUncheckedCreateWithoutPoolInputSchemaObject))
}