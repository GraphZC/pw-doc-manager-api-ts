// @ts-nocheck
import Joi from 'joi';
import { ServiceDayUncheckedCreateNestedOneWithoutPoolInputSchemaObject } from './ServiceDayUncheckedCreateNestedOneWithoutPoolInput.schema'

export const PoolUncheckedCreateWithoutPurchaseInputSchemaObject = {
    id: Joi.string(),
  customerId: Joi.string().required(),
  address: Joi.string().required(),
  price: Joi.number().required(),
  chemicalIncluded: Joi.boolean().required(),
  inService: Joi.boolean().required(),
  createdAt: Joi.date(),
  updatedAt: Joi.date(),
  serviceDay: Joi.object().keys(ServiceDayUncheckedCreateNestedOneWithoutPoolInputSchemaObject)
}