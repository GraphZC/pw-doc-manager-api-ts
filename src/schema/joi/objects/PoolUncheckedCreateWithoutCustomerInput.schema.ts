// @ts-nocheck
import Joi from 'joi';
import { PurchaseUncheckedCreateNestedManyWithoutPoolInputSchemaObject } from './PurchaseUncheckedCreateNestedManyWithoutPoolInput.schema'

export const PoolUncheckedCreateWithoutCustomerInputSchemaObject = {
    id: Joi.string(),
  address: Joi.string().required(),
  price: Joi.number().required(),
  chemicalIncluded: Joi.boolean().required(),
  inService: Joi.boolean().required(),
  serviceDayId: Joi.string().required(),
  createdAt: Joi.date(),
  updatedAt: Joi.date(),
  purchase: Joi.object().keys(PurchaseUncheckedCreateNestedManyWithoutPoolInputSchemaObject)
}