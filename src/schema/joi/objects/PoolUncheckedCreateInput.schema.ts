// @ts-nocheck
import Joi from 'joi';
import { PurchaseUncheckedCreateNestedManyWithoutPoolInputSchemaObject } from './PurchaseUncheckedCreateNestedManyWithoutPoolInput.schema'

export const PoolUncheckedCreateInputSchemaObject = {
    id: Joi.string(),
  customerId: Joi.string().required(),
  address: Joi.string().required(),
  price: Joi.number().required(),
  chemicalIncluded: Joi.boolean().required(),
  inService: Joi.boolean().required(),
  serviceDayId: Joi.string().required(),
  createdAt: Joi.date(),
  updatedAt: Joi.date(),
  purchase: Joi.object().keys(PurchaseUncheckedCreateNestedManyWithoutPoolInputSchemaObject)
}