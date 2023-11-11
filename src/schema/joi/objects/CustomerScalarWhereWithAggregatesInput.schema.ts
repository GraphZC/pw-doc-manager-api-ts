// @ts-nocheck
import Joi from 'joi';
import { UuidWithAggregatesFilterSchemaObject } from './UuidWithAggregatesFilter.schema';
import { StringWithAggregatesFilterSchemaObject } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterSchemaObject } from './StringNullableWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterSchemaObject } from './DateTimeWithAggregatesFilter.schema'

export const CustomerScalarWhereWithAggregatesInputSchemaObject = {
    AND: Joi.alternatives().try(Joi.link('#CustomerScalarWhereWithAggregatesInput'),
Joi.array().items(Joi.link('#CustomerScalarWhereWithAggregatesInput'))),
  OR: Joi.array().items(Joi.link('#CustomerScalarWhereWithAggregatesInput')),
  NOT: Joi.alternatives().try(Joi.link('#CustomerScalarWhereWithAggregatesInput'),
Joi.array().items(Joi.link('#CustomerScalarWhereWithAggregatesInput'))),
  id: Joi.alternatives().try(Joi.object().keys(UuidWithAggregatesFilterSchemaObject),
Joi.string()),
  name: Joi.alternatives().try(Joi.object().keys(StringWithAggregatesFilterSchemaObject),
Joi.string()),
  address: Joi.alternatives().try(Joi.object().keys(StringNullableWithAggregatesFilterSchemaObject),
Joi.string()),
  telephone: Joi.alternatives().try(Joi.object().keys(StringNullableWithAggregatesFilterSchemaObject),
Joi.string()),
  taxId: Joi.alternatives().try(Joi.object().keys(StringNullableWithAggregatesFilterSchemaObject),
Joi.string()),
  createdAt: Joi.alternatives().try(Joi.object().keys(DateTimeWithAggregatesFilterSchemaObject)),
  updatedAt: Joi.alternatives().try(Joi.object().keys(DateTimeWithAggregatesFilterSchemaObject))
}