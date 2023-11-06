// @ts-nocheck
import Joi from 'joi';
import { CustomerCreateNestedOneWithoutPoolInputSchemaObject } from './CustomerCreateNestedOneWithoutPoolInput.schema';
import { PurchaseCreateNestedManyWithoutPoolInputSchemaObject } from './PurchaseCreateNestedManyWithoutPoolInput.schema';
import { ServiceDayCreateNestedOneWithoutPoolInputSchemaObject } from './ServiceDayCreateNestedOneWithoutPoolInput.schema'

export const PoolCreateInputSchemaObject = {
    id: Joi.string(),
  address: Joi.string().required(),
  price: Joi.number().required(),
  chemicalIncluded: Joi.boolean().required(),
  inService: Joi.boolean().required(),
  createdAt: Joi.date(),
  updatedAt: Joi.date(),
  customer: Joi.object().keys(CustomerCreateNestedOneWithoutPoolInputSchemaObject),
  purchase: Joi.object().keys(PurchaseCreateNestedManyWithoutPoolInputSchemaObject),
  serviceDay: Joi.object().keys(ServiceDayCreateNestedOneWithoutPoolInputSchemaObject)
}