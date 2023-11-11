// @ts-nocheck
import Joi from 'joi';
import { UuidFilterSchemaObject } from './UuidFilter.schema';
import { DateTimeNullableFilterSchemaObject } from './DateTimeNullableFilter.schema';
import { BoolFilterSchemaObject } from './BoolFilter.schema';
import { DateTimeFilterSchemaObject } from './DateTimeFilter.schema';
import { CustomerOrderRelationFilterSchemaObject } from './CustomerOrderRelationFilter.schema';
import { CustomerOrderWhereInputSchemaObject } from './CustomerOrderWhereInput.schema'

export const InvoiceWhereInputSchemaObject = {
    AND: Joi.alternatives().try(Joi.link('#InvoiceWhereInput'),
Joi.array().items(Joi.link('#InvoiceWhereInput'))),
  OR: Joi.array().items(Joi.link('#InvoiceWhereInput')),
  NOT: Joi.alternatives().try(Joi.link('#InvoiceWhereInput'),
Joi.array().items(Joi.link('#InvoiceWhereInput'))),
  id: Joi.alternatives().try(Joi.object().keys(UuidFilterSchemaObject),
Joi.string()),
  paidAt: Joi.alternatives().try(Joi.object().keys(DateTimeNullableFilterSchemaObject)),
  vatIncluded: Joi.alternatives().try(Joi.object().keys(BoolFilterSchemaObject),
Joi.boolean()),
  createdAt: Joi.alternatives().try(Joi.object().keys(DateTimeFilterSchemaObject)),
  updatedAt: Joi.alternatives().try(Joi.object().keys(DateTimeFilterSchemaObject)),
  customerOrder: Joi.alternatives().try(Joi.object().keys(CustomerOrderRelationFilterSchemaObject),
Joi.object().keys(CustomerOrderWhereInputSchemaObject))
}