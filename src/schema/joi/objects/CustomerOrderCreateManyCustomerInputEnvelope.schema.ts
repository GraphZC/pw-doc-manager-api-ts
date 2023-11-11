// @ts-nocheck
import Joi from 'joi';
import { CustomerOrderCreateManyCustomerInputSchemaObject } from './CustomerOrderCreateManyCustomerInput.schema'

export const CustomerOrderCreateManyCustomerInputEnvelopeSchemaObject = {
    data: Joi.alternatives().try(Joi.object().keys(CustomerOrderCreateManyCustomerInputSchemaObject),
Joi.array().items(Joi.object().keys(CustomerOrderCreateManyCustomerInputSchemaObject))),
  skipDuplicates: Joi.boolean()
}