// @ts-nocheck
import Joi from 'joi';
import { PurchaseScalarWhereInputSchemaObject } from './PurchaseScalarWhereInput.schema';
import { PurchaseUpdateManyMutationInputSchemaObject } from './PurchaseUpdateManyMutationInput.schema';
import { PurchaseUncheckedUpdateManyWithoutPurchaseInputSchemaObject } from './PurchaseUncheckedUpdateManyWithoutPurchaseInput.schema'

export const PurchaseUpdateManyWithWhereWithoutPoolInputSchemaObject = {
    where: Joi.object().keys(PurchaseScalarWhereInputSchemaObject),
  data: Joi.alternatives().try(Joi.object().keys(PurchaseUpdateManyMutationInputSchemaObject),
Joi.object().keys(PurchaseUncheckedUpdateManyWithoutPurchaseInputSchemaObject))
}