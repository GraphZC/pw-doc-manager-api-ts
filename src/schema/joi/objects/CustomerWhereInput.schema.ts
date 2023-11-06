// @ts-nocheck
import Joi from 'joi';
import { UuidFilterSchemaObject } from './UuidFilter.schema';
import { StringFilterSchemaObject } from './StringFilter.schema';
import { StringNullableFilterSchemaObject } from './StringNullableFilter.schema';
import { DateTimeFilterSchemaObject } from './DateTimeFilter.schema';
import { PoolListRelationFilterSchemaObject } from './PoolListRelationFilter.schema';
import { CustomerOrderListRelationFilterSchemaObject } from './CustomerOrderListRelationFilter.schema'

export const CustomerWhereInputSchemaObject = {
    AND: Joi.alternatives().try(Joi.link('#CustomerWhereInput'),
Joi.array().items(Joi.link('#CustomerWhereInput'))),
  OR: Joi.array().items(Joi.link('#CustomerWhereInput')),
  NOT: Joi.alternatives().try(Joi.link('#CustomerWhereInput'),
Joi.array().items(Joi.link('#CustomerWhereInput'))),
  id: Joi.alternatives().try(Joi.object().keys(UuidFilterSchemaObject),
Joi.string()),
  name: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  address: Joi.alternatives().try(Joi.object().keys(StringNullableFilterSchemaObject),
Joi.string()),
  telephone: Joi.alternatives().try(Joi.object().keys(StringNullableFilterSchemaObject),
Joi.string()),
  taxId: Joi.alternatives().try(Joi.object().keys(StringNullableFilterSchemaObject),
Joi.string()),
  createdAt: Joi.alternatives().try(Joi.object().keys(DateTimeFilterSchemaObject)),
  updatedAt: Joi.alternatives().try(Joi.object().keys(DateTimeFilterSchemaObject)),
  pool: Joi.object().keys(PoolListRelationFilterSchemaObject),
  customerOrder: Joi.object().keys(CustomerOrderListRelationFilterSchemaObject)
}