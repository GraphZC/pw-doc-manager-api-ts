// @ts-nocheck
import Joi from 'joi';
import { PurchaseCreateManyCustomerOrderInputSchemaObject } from './PurchaseCreateManyCustomerOrderInput.schema'

export const PurchaseCreateManyCustomerOrderInputEnvelopeSchemaObject = {
    data: Joi.alternatives().try(Joi.object().keys(PurchaseCreateManyCustomerOrderInputSchemaObject),
Joi.array().items(Joi.object().keys(PurchaseCreateManyCustomerOrderInputSchemaObject))),
  skipDuplicates: Joi.boolean()
}