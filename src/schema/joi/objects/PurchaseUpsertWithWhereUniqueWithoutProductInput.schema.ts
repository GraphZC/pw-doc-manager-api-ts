// @ts-nocheck
import Joi from 'joi';
import { PurchaseWhereUniqueInputSchemaObject } from './PurchaseWhereUniqueInput.schema';
import { PurchaseUpdateWithoutProductInputSchemaObject } from './PurchaseUpdateWithoutProductInput.schema';
import { PurchaseUncheckedUpdateWithoutProductInputSchemaObject } from './PurchaseUncheckedUpdateWithoutProductInput.schema';
import { PurchaseCreateWithoutProductInputSchemaObject } from './PurchaseCreateWithoutProductInput.schema';
import { PurchaseUncheckedCreateWithoutProductInputSchemaObject } from './PurchaseUncheckedCreateWithoutProductInput.schema'

export const PurchaseUpsertWithWhereUniqueWithoutProductInputSchemaObject = {
    where: Joi.object().keys(PurchaseWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(PurchaseUpdateWithoutProductInputSchemaObject),
Joi.object().keys(PurchaseUncheckedUpdateWithoutProductInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(PurchaseCreateWithoutProductInputSchemaObject),
Joi.object().keys(PurchaseUncheckedCreateWithoutProductInputSchemaObject))
}