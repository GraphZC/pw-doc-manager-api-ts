// @ts-nocheck
import Joi from 'joi';
import { PurchaseCreateManyProductInputSchemaObject } from './PurchaseCreateManyProductInput.schema'

export const PurchaseCreateManyProductInputEnvelopeSchemaObject = {
    data: Joi.alternatives().try(Joi.object().keys(PurchaseCreateManyProductInputSchemaObject),
Joi.array().items(Joi.object().keys(PurchaseCreateManyProductInputSchemaObject))),
  skipDuplicates: Joi.boolean()
}