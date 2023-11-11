// @ts-nocheck
import Joi from 'joi';
import { PurchaseCreateNestedManyWithoutPoolInputSchemaObject } from './PurchaseCreateNestedManyWithoutPoolInput.schema';
import { ServiceDayCreateNestedOneWithoutPoolInputSchemaObject } from './ServiceDayCreateNestedOneWithoutPoolInput.schema'

export const PoolCreateWithoutCustomerInputSchemaObject = {
    id: Joi.string(),
  address: Joi.string().required(),
  price: Joi.number().required(),
  chemicalIncluded: Joi.boolean().required(),
  inService: Joi.boolean().required(),
  createdAt: Joi.date(),
  updatedAt: Joi.date(),
  purchase: Joi.object().keys(PurchaseCreateNestedManyWithoutPoolInputSchemaObject),
  serviceDay: Joi.object().keys(ServiceDayCreateNestedOneWithoutPoolInputSchemaObject)
}