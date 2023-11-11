// @ts-nocheck
import Joi from 'joi';
import { UuidWithAggregatesFilterSchemaObject } from './UuidWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterSchemaObject } from './DateTimeNullableWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterSchemaObject } from './BoolWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterSchemaObject } from './DateTimeWithAggregatesFilter.schema'

export const InvoiceScalarWhereWithAggregatesInputSchemaObject = {
    AND: Joi.alternatives().try(Joi.link('#InvoiceScalarWhereWithAggregatesInput'),
Joi.array().items(Joi.link('#InvoiceScalarWhereWithAggregatesInput'))),
  OR: Joi.array().items(Joi.link('#InvoiceScalarWhereWithAggregatesInput')),
  NOT: Joi.alternatives().try(Joi.link('#InvoiceScalarWhereWithAggregatesInput'),
Joi.array().items(Joi.link('#InvoiceScalarWhereWithAggregatesInput'))),
  id: Joi.alternatives().try(Joi.object().keys(UuidWithAggregatesFilterSchemaObject),
Joi.string()),
  paidAt: Joi.alternatives().try(Joi.object().keys(DateTimeNullableWithAggregatesFilterSchemaObject)),
  vatIncluded: Joi.alternatives().try(Joi.object().keys(BoolWithAggregatesFilterSchemaObject),
Joi.boolean()),
  createdAt: Joi.alternatives().try(Joi.object().keys(DateTimeWithAggregatesFilterSchemaObject)),
  updatedAt: Joi.alternatives().try(Joi.object().keys(DateTimeWithAggregatesFilterSchemaObject))
}