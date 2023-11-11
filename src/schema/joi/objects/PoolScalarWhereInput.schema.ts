// @ts-nocheck
import Joi from 'joi';
import { UuidFilterSchemaObject } from './UuidFilter.schema';
import { StringFilterSchemaObject } from './StringFilter.schema';
import { FloatFilterSchemaObject } from './FloatFilter.schema';
import { BoolFilterSchemaObject } from './BoolFilter.schema';
import { EnumPoolTypeFilterSchemaObject } from './EnumPoolTypeFilter.schema';
import { DateTimeFilterSchemaObject } from './DateTimeFilter.schema'

export const PoolScalarWhereInputSchemaObject = {
    AND: Joi.alternatives().try(Joi.link('#PoolScalarWhereInput'),
Joi.array().items(Joi.link('#PoolScalarWhereInput'))),
  OR: Joi.array().items(Joi.link('#PoolScalarWhereInput')),
  NOT: Joi.alternatives().try(Joi.link('#PoolScalarWhereInput'),
Joi.array().items(Joi.link('#PoolScalarWhereInput'))),
  id: Joi.alternatives().try(Joi.object().keys(UuidFilterSchemaObject),
Joi.string()),
  customerId: Joi.alternatives().try(Joi.object().keys(UuidFilterSchemaObject),
Joi.string()),
  address: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  price: Joi.alternatives().try(Joi.object().keys(FloatFilterSchemaObject),
Joi.number()),
  chemicalIncluded: Joi.alternatives().try(Joi.object().keys(BoolFilterSchemaObject),
Joi.boolean()),
  type: Joi.alternatives().try(Joi.object().keys(EnumPoolTypeFilterSchemaObject)),
  inService: Joi.alternatives().try(Joi.object().keys(BoolFilterSchemaObject),
Joi.boolean()),
  serviceDayId: Joi.alternatives().try(Joi.object().keys(UuidFilterSchemaObject),
Joi.string()),
  createdAt: Joi.alternatives().try(Joi.object().keys(DateTimeFilterSchemaObject)),
  updatedAt: Joi.alternatives().try(Joi.object().keys(DateTimeFilterSchemaObject))
}