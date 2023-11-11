// @ts-nocheck
import Joi from 'joi';
import { UuidWithAggregatesFilterSchemaObject } from './UuidWithAggregatesFilter.schema';
import { StringWithAggregatesFilterSchemaObject } from './StringWithAggregatesFilter.schema';
import { FloatWithAggregatesFilterSchemaObject } from './FloatWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterSchemaObject } from './BoolWithAggregatesFilter.schema';
import { EnumPoolTypeWithAggregatesFilterSchemaObject } from './EnumPoolTypeWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterSchemaObject } from './DateTimeWithAggregatesFilter.schema'

export const PoolScalarWhereWithAggregatesInputSchemaObject = {
    AND: Joi.alternatives().try(Joi.link('#PoolScalarWhereWithAggregatesInput'),
Joi.array().items(Joi.link('#PoolScalarWhereWithAggregatesInput'))),
  OR: Joi.array().items(Joi.link('#PoolScalarWhereWithAggregatesInput')),
  NOT: Joi.alternatives().try(Joi.link('#PoolScalarWhereWithAggregatesInput'),
Joi.array().items(Joi.link('#PoolScalarWhereWithAggregatesInput'))),
  id: Joi.alternatives().try(Joi.object().keys(UuidWithAggregatesFilterSchemaObject),
Joi.string()),
  customerId: Joi.alternatives().try(Joi.object().keys(UuidWithAggregatesFilterSchemaObject),
Joi.string()),
  address: Joi.alternatives().try(Joi.object().keys(StringWithAggregatesFilterSchemaObject),
Joi.string()),
  price: Joi.alternatives().try(Joi.object().keys(FloatWithAggregatesFilterSchemaObject),
Joi.number()),
  chemicalIncluded: Joi.alternatives().try(Joi.object().keys(BoolWithAggregatesFilterSchemaObject),
Joi.boolean()),
  type: Joi.alternatives().try(Joi.object().keys(EnumPoolTypeWithAggregatesFilterSchemaObject)),
  inService: Joi.alternatives().try(Joi.object().keys(BoolWithAggregatesFilterSchemaObject),
Joi.boolean()),
  serviceDayId: Joi.alternatives().try(Joi.object().keys(UuidWithAggregatesFilterSchemaObject),
Joi.string()),
  createdAt: Joi.alternatives().try(Joi.object().keys(DateTimeWithAggregatesFilterSchemaObject)),
  updatedAt: Joi.alternatives().try(Joi.object().keys(DateTimeWithAggregatesFilterSchemaObject))
}