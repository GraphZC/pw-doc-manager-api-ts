// @ts-nocheck
import Joi from 'joi';
import { UuidWithAggregatesFilterSchemaObject } from './UuidWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterSchemaObject } from './StringNullableWithAggregatesFilter.schema';
import { StringWithAggregatesFilterSchemaObject } from './StringWithAggregatesFilter.schema';
import { FloatWithAggregatesFilterSchemaObject } from './FloatWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterSchemaObject } from './DateTimeWithAggregatesFilter.schema'

export const ProductScalarWhereWithAggregatesInputSchemaObject = {
    AND: Joi.alternatives().try(Joi.link('#ProductScalarWhereWithAggregatesInput'),
Joi.array().items(Joi.link('#ProductScalarWhereWithAggregatesInput'))),
  OR: Joi.array().items(Joi.link('#ProductScalarWhereWithAggregatesInput')),
  NOT: Joi.alternatives().try(Joi.link('#ProductScalarWhereWithAggregatesInput'),
Joi.array().items(Joi.link('#ProductScalarWhereWithAggregatesInput'))),
  id: Joi.alternatives().try(Joi.object().keys(UuidWithAggregatesFilterSchemaObject),
Joi.string()),
  code: Joi.alternatives().try(Joi.object().keys(StringNullableWithAggregatesFilterSchemaObject),
Joi.string()),
  name: Joi.alternatives().try(Joi.object().keys(StringWithAggregatesFilterSchemaObject),
Joi.string()),
  description: Joi.alternatives().try(Joi.object().keys(StringNullableWithAggregatesFilterSchemaObject),
Joi.string()),
  price: Joi.alternatives().try(Joi.object().keys(FloatWithAggregatesFilterSchemaObject),
Joi.number()),
  createdAt: Joi.alternatives().try(Joi.object().keys(DateTimeWithAggregatesFilterSchemaObject)),
  updatedAt: Joi.alternatives().try(Joi.object().keys(DateTimeWithAggregatesFilterSchemaObject))
}