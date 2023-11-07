// @ts-nocheck
import Joi from 'joi';
import { UuidWithAggregatesFilterSchemaObject } from './UuidWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterSchemaObject } from './BoolWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterSchemaObject } from './DateTimeWithAggregatesFilter.schema'

export const ServiceDayScalarWhereWithAggregatesInputSchemaObject = {
    AND: Joi.alternatives().try(Joi.link('#ServiceDayScalarWhereWithAggregatesInput'),
Joi.array().items(Joi.link('#ServiceDayScalarWhereWithAggregatesInput'))),
  OR: Joi.array().items(Joi.link('#ServiceDayScalarWhereWithAggregatesInput')),
  NOT: Joi.alternatives().try(Joi.link('#ServiceDayScalarWhereWithAggregatesInput'),
Joi.array().items(Joi.link('#ServiceDayScalarWhereWithAggregatesInput'))),
  id: Joi.alternatives().try(Joi.object().keys(UuidWithAggregatesFilterSchemaObject),
Joi.string()),
  monday: Joi.alternatives().try(Joi.object().keys(BoolWithAggregatesFilterSchemaObject),
Joi.boolean()),
  tuesday: Joi.alternatives().try(Joi.object().keys(BoolWithAggregatesFilterSchemaObject),
Joi.boolean()),
  wednesday: Joi.alternatives().try(Joi.object().keys(BoolWithAggregatesFilterSchemaObject),
Joi.boolean()),
  thursday: Joi.alternatives().try(Joi.object().keys(BoolWithAggregatesFilterSchemaObject),
Joi.boolean()),
  friday: Joi.alternatives().try(Joi.object().keys(BoolWithAggregatesFilterSchemaObject),
Joi.boolean()),
  saturday: Joi.alternatives().try(Joi.object().keys(BoolWithAggregatesFilterSchemaObject),
Joi.boolean()),
  sunday: Joi.alternatives().try(Joi.object().keys(BoolWithAggregatesFilterSchemaObject),
Joi.boolean()),
  createdAt: Joi.alternatives().try(Joi.object().keys(DateTimeWithAggregatesFilterSchemaObject)),
  updatedAt: Joi.alternatives().try(Joi.object().keys(DateTimeWithAggregatesFilterSchemaObject))
}