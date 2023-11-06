// @ts-nocheck
import Joi from 'joi';
import { UuidFilterSchemaObject } from './UuidFilter.schema';
import { StringNullableFilterSchemaObject } from './StringNullableFilter.schema';
import { StringFilterSchemaObject } from './StringFilter.schema';
import { FloatFilterSchemaObject } from './FloatFilter.schema';
import { DateTimeFilterSchemaObject } from './DateTimeFilter.schema';
import { PurchaseListRelationFilterSchemaObject } from './PurchaseListRelationFilter.schema'

export const ProductWhereInputSchemaObject = {
    AND: Joi.alternatives().try(Joi.link('#ProductWhereInput'),
Joi.array().items(Joi.link('#ProductWhereInput'))),
  OR: Joi.array().items(Joi.link('#ProductWhereInput')),
  NOT: Joi.alternatives().try(Joi.link('#ProductWhereInput'),
Joi.array().items(Joi.link('#ProductWhereInput'))),
  id: Joi.alternatives().try(Joi.object().keys(UuidFilterSchemaObject),
Joi.string()),
  code: Joi.alternatives().try(Joi.object().keys(StringNullableFilterSchemaObject),
Joi.string()),
  name: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  description: Joi.alternatives().try(Joi.object().keys(StringNullableFilterSchemaObject),
Joi.string()),
  price: Joi.alternatives().try(Joi.object().keys(FloatFilterSchemaObject),
Joi.number()),
  createdAt: Joi.alternatives().try(Joi.object().keys(DateTimeFilterSchemaObject)),
  updatedAt: Joi.alternatives().try(Joi.object().keys(DateTimeFilterSchemaObject)),
  purchase: Joi.object().keys(PurchaseListRelationFilterSchemaObject)
}