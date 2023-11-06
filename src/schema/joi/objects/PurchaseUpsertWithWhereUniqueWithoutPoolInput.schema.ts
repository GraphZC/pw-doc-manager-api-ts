// @ts-nocheck
import Joi from 'joi';
import { PurchaseWhereUniqueInputSchemaObject } from './PurchaseWhereUniqueInput.schema';
import { PurchaseUpdateWithoutPoolInputSchemaObject } from './PurchaseUpdateWithoutPoolInput.schema';
import { PurchaseUncheckedUpdateWithoutPoolInputSchemaObject } from './PurchaseUncheckedUpdateWithoutPoolInput.schema';
import { PurchaseCreateWithoutPoolInputSchemaObject } from './PurchaseCreateWithoutPoolInput.schema';
import { PurchaseUncheckedCreateWithoutPoolInputSchemaObject } from './PurchaseUncheckedCreateWithoutPoolInput.schema'

export const PurchaseUpsertWithWhereUniqueWithoutPoolInputSchemaObject = {
    where: Joi.object().keys(PurchaseWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(PurchaseUpdateWithoutPoolInputSchemaObject),
Joi.object().keys(PurchaseUncheckedUpdateWithoutPoolInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(PurchaseCreateWithoutPoolInputSchemaObject),
Joi.object().keys(PurchaseUncheckedCreateWithoutPoolInputSchemaObject))
}