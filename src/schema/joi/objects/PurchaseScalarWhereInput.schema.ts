// @ts-nocheck
import Joi from 'joi';
import { UuidFilterSchemaObject } from './UuidFilter.schema';
import { UuidNullableFilterSchemaObject } from './UuidNullableFilter.schema';
import { IntFilterSchemaObject } from './IntFilter.schema';
import { DateTimeFilterSchemaObject } from './DateTimeFilter.schema'

export const PurchaseScalarWhereInputSchemaObject = {
    AND: Joi.alternatives().try(Joi.link('#PurchaseScalarWhereInput'),
Joi.array().items(Joi.link('#PurchaseScalarWhereInput'))),
  OR: Joi.array().items(Joi.link('#PurchaseScalarWhereInput')),
  NOT: Joi.alternatives().try(Joi.link('#PurchaseScalarWhereInput'),
Joi.array().items(Joi.link('#PurchaseScalarWhereInput'))),
  id: Joi.alternatives().try(Joi.object().keys(UuidFilterSchemaObject),
Joi.string()),
  poolId: Joi.alternatives().try(Joi.object().keys(UuidNullableFilterSchemaObject),
Joi.string()),
  productId: Joi.alternatives().try(Joi.object().keys(UuidNullableFilterSchemaObject),
Joi.string()),
  customerOrderId: Joi.alternatives().try(Joi.object().keys(UuidFilterSchemaObject),
Joi.string()),
  quantity: Joi.alternatives().try(Joi.object().keys(IntFilterSchemaObject),
Joi.number()),
  createdAt: Joi.alternatives().try(Joi.object().keys(DateTimeFilterSchemaObject)),
  updatedAt: Joi.alternatives().try(Joi.object().keys(DateTimeFilterSchemaObject))
}