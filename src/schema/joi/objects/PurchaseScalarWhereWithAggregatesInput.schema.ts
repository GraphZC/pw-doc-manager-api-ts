// @ts-nocheck
import Joi from 'joi';
import { UuidWithAggregatesFilterSchemaObject } from './UuidWithAggregatesFilter.schema';
import { UuidNullableWithAggregatesFilterSchemaObject } from './UuidNullableWithAggregatesFilter.schema';
import { IntWithAggregatesFilterSchemaObject } from './IntWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterSchemaObject } from './DateTimeWithAggregatesFilter.schema'

export const PurchaseScalarWhereWithAggregatesInputSchemaObject = {
    AND: Joi.alternatives().try(Joi.link('#PurchaseScalarWhereWithAggregatesInput'),
Joi.array().items(Joi.link('#PurchaseScalarWhereWithAggregatesInput'))),
  OR: Joi.array().items(Joi.link('#PurchaseScalarWhereWithAggregatesInput')),
  NOT: Joi.alternatives().try(Joi.link('#PurchaseScalarWhereWithAggregatesInput'),
Joi.array().items(Joi.link('#PurchaseScalarWhereWithAggregatesInput'))),
  id: Joi.alternatives().try(Joi.object().keys(UuidWithAggregatesFilterSchemaObject),
Joi.string()),
  poolId: Joi.alternatives().try(Joi.object().keys(UuidNullableWithAggregatesFilterSchemaObject),
Joi.string()),
  productId: Joi.alternatives().try(Joi.object().keys(UuidNullableWithAggregatesFilterSchemaObject),
Joi.string()),
  customerOrderId: Joi.alternatives().try(Joi.object().keys(UuidWithAggregatesFilterSchemaObject),
Joi.string()),
  quantity: Joi.alternatives().try(Joi.object().keys(IntWithAggregatesFilterSchemaObject),
Joi.number()),
  createdAt: Joi.alternatives().try(Joi.object().keys(DateTimeWithAggregatesFilterSchemaObject)),
  updatedAt: Joi.alternatives().try(Joi.object().keys(DateTimeWithAggregatesFilterSchemaObject))
}