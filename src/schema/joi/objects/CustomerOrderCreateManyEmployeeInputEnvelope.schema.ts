// @ts-nocheck
import Joi from 'joi';
import { CustomerOrderCreateManyEmployeeInputSchemaObject } from './CustomerOrderCreateManyEmployeeInput.schema'

export const CustomerOrderCreateManyEmployeeInputEnvelopeSchemaObject = {
    data: Joi.alternatives().try(Joi.object().keys(CustomerOrderCreateManyEmployeeInputSchemaObject),
Joi.array().items(Joi.object().keys(CustomerOrderCreateManyEmployeeInputSchemaObject))),
  skipDuplicates: Joi.boolean()
}