// @ts-nocheck
import Joi from 'joi';
import { PurchaseWhereUniqueInputSchemaObject } from './PurchaseWhereUniqueInput.schema';
import { PurchaseCreateWithoutProductInputSchemaObject } from './PurchaseCreateWithoutProductInput.schema';
import { PurchaseUncheckedCreateWithoutProductInputSchemaObject } from './PurchaseUncheckedCreateWithoutProductInput.schema'

export const PurchaseCreateOrConnectWithoutProductInputSchemaObject = {
    where: Joi.object().keys(PurchaseWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(Joi.object().keys(PurchaseCreateWithoutProductInputSchemaObject),
Joi.object().keys(PurchaseUncheckedCreateWithoutProductInputSchemaObject))
}