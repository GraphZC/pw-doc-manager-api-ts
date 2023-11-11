// @ts-nocheck
import Joi from 'joi';
import { PoolCreateManyCustomerInputSchemaObject } from './PoolCreateManyCustomerInput.schema'

export const PoolCreateManyCustomerInputEnvelopeSchemaObject = {
    data: Joi.alternatives().try(Joi.object().keys(PoolCreateManyCustomerInputSchemaObject),
Joi.array().items(Joi.object().keys(PoolCreateManyCustomerInputSchemaObject))),
  skipDuplicates: Joi.boolean()
}