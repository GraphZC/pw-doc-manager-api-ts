// @ts-nocheck
import Joi from 'joi';
import { PurchaseCreateManyPoolInputSchemaObject } from './PurchaseCreateManyPoolInput.schema'

export const PurchaseCreateManyPoolInputEnvelopeSchemaObject = {
    data: Joi.alternatives().try(Joi.object().keys(PurchaseCreateManyPoolInputSchemaObject),
Joi.array().items(Joi.object().keys(PurchaseCreateManyPoolInputSchemaObject))),
  skipDuplicates: Joi.boolean()
}