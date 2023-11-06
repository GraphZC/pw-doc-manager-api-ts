// @ts-nocheck
import Joi from 'joi';
import { PurchaseWhereUniqueInputSchemaObject } from './PurchaseWhereUniqueInput.schema';
import { PurchaseUpdateWithoutPoolInputSchemaObject } from './PurchaseUpdateWithoutPoolInput.schema';
import { PurchaseUncheckedUpdateWithoutPoolInputSchemaObject } from './PurchaseUncheckedUpdateWithoutPoolInput.schema'

export const PurchaseUpdateWithWhereUniqueWithoutPoolInputSchemaObject = {
    where: Joi.object().keys(PurchaseWhereUniqueInputSchemaObject),
  data: Joi.alternatives().try(Joi.object().keys(PurchaseUpdateWithoutPoolInputSchemaObject),
Joi.object().keys(PurchaseUncheckedUpdateWithoutPoolInputSchemaObject))
}