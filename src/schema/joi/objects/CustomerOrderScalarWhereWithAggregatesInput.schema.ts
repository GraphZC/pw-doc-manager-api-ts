// @ts-nocheck
import Joi from 'joi';
import { UuidWithAggregatesFilterSchemaObject } from './UuidWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterSchemaObject } from './DateTimeWithAggregatesFilter.schema'

export const CustomerOrderScalarWhereWithAggregatesInputSchemaObject = {
    AND: Joi.alternatives().try(Joi.link('#CustomerOrderScalarWhereWithAggregatesInput'),
Joi.array().items(Joi.link('#CustomerOrderScalarWhereWithAggregatesInput'))),
  OR: Joi.array().items(Joi.link('#CustomerOrderScalarWhereWithAggregatesInput')),
  NOT: Joi.alternatives().try(Joi.link('#CustomerOrderScalarWhereWithAggregatesInput'),
Joi.array().items(Joi.link('#CustomerOrderScalarWhereWithAggregatesInput'))),
  id: Joi.alternatives().try(Joi.object().keys(UuidWithAggregatesFilterSchemaObject),
Joi.string()),
  customerId: Joi.alternatives().try(Joi.object().keys(UuidWithAggregatesFilterSchemaObject),
Joi.string()),
  employeeId: Joi.alternatives().try(Joi.object().keys(UuidWithAggregatesFilterSchemaObject),
Joi.string()),
  invoiceId: Joi.alternatives().try(Joi.object().keys(UuidWithAggregatesFilterSchemaObject),
Joi.string()),
  createdAt: Joi.alternatives().try(Joi.object().keys(DateTimeWithAggregatesFilterSchemaObject)),
  updatedAt: Joi.alternatives().try(Joi.object().keys(DateTimeWithAggregatesFilterSchemaObject))
}