// @ts-nocheck
import Joi from 'joi';
import { PurchaseWhereUniqueInputSchemaObject } from './PurchaseWhereUniqueInput.schema';
import { PurchaseUpdateWithoutProductInputSchemaObject } from './PurchaseUpdateWithoutProductInput.schema';
import { PurchaseUncheckedUpdateWithoutProductInputSchemaObject } from './PurchaseUncheckedUpdateWithoutProductInput.schema'

export const PurchaseUpdateWithWhereUniqueWithoutProductInputSchemaObject = {
    where: Joi.object().keys(PurchaseWhereUniqueInputSchemaObject),
  data: Joi.alternatives().try(Joi.object().keys(PurchaseUpdateWithoutProductInputSchemaObject),
Joi.object().keys(PurchaseUncheckedUpdateWithoutProductInputSchemaObject))
}