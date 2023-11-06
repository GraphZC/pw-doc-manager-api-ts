// @ts-nocheck
import Joi from 'joi';
import { UuidFilterSchemaObject } from './UuidFilter.schema';
import { StringFilterSchemaObject } from './StringFilter.schema';
import { FloatFilterSchemaObject } from './FloatFilter.schema';
import { BoolFilterSchemaObject } from './BoolFilter.schema';
import { EnumPoolTypeFilterSchemaObject } from './EnumPoolTypeFilter.schema';
import { DateTimeFilterSchemaObject } from './DateTimeFilter.schema';
import { CustomerRelationFilterSchemaObject } from './CustomerRelationFilter.schema';
import { CustomerWhereInputSchemaObject } from './CustomerWhereInput.schema';
import { PurchaseListRelationFilterSchemaObject } from './PurchaseListRelationFilter.schema';
import { ServiceDayRelationFilterSchemaObject } from './ServiceDayRelationFilter.schema';
import { ServiceDayWhereInputSchemaObject } from './ServiceDayWhereInput.schema'

export const PoolWhereInputSchemaObject = {
    AND: Joi.alternatives().try(Joi.link('#PoolWhereInput'),
Joi.array().items(Joi.link('#PoolWhereInput'))),
  OR: Joi.array().items(Joi.link('#PoolWhereInput')),
  NOT: Joi.alternatives().try(Joi.link('#PoolWhereInput'),
Joi.array().items(Joi.link('#PoolWhereInput'))),
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
  createdAt: Joi.alternatives().try(Joi.object().keys(DateTimeFilterSchemaObject)),
  updatedAt: Joi.alternatives().try(Joi.object().keys(DateTimeFilterSchemaObject)),
  customer: Joi.alternatives().try(Joi.object().keys(CustomerRelationFilterSchemaObject),
Joi.object().keys(CustomerWhereInputSchemaObject)),
  purchase: Joi.object().keys(PurchaseListRelationFilterSchemaObject),
  serviceDay: Joi.alternatives().try(Joi.object().keys(ServiceDayRelationFilterSchemaObject),
Joi.object().keys(ServiceDayWhereInputSchemaObject))
}