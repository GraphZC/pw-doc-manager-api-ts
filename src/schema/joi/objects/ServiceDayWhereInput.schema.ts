// @ts-nocheck
import Joi from 'joi';
import { UuidFilterSchemaObject } from './UuidFilter.schema';
import { BoolFilterSchemaObject } from './BoolFilter.schema';
import { DateTimeFilterSchemaObject } from './DateTimeFilter.schema';
import { PoolRelationFilterSchemaObject } from './PoolRelationFilter.schema';
import { PoolWhereInputSchemaObject } from './PoolWhereInput.schema'

export const ServiceDayWhereInputSchemaObject = {
    AND: Joi.alternatives().try(Joi.link('#ServiceDayWhereInput'),
Joi.array().items(Joi.link('#ServiceDayWhereInput'))),
  OR: Joi.array().items(Joi.link('#ServiceDayWhereInput')),
  NOT: Joi.alternatives().try(Joi.link('#ServiceDayWhereInput'),
Joi.array().items(Joi.link('#ServiceDayWhereInput'))),
  id: Joi.alternatives().try(Joi.object().keys(UuidFilterSchemaObject),
Joi.string()),
  poolId: Joi.alternatives().try(Joi.object().keys(UuidFilterSchemaObject),
Joi.string()),
  monday: Joi.alternatives().try(Joi.object().keys(BoolFilterSchemaObject),
Joi.boolean()),
  tuesday: Joi.alternatives().try(Joi.object().keys(BoolFilterSchemaObject),
Joi.boolean()),
  wednesday: Joi.alternatives().try(Joi.object().keys(BoolFilterSchemaObject),
Joi.boolean()),
  thursday: Joi.alternatives().try(Joi.object().keys(BoolFilterSchemaObject),
Joi.boolean()),
  friday: Joi.alternatives().try(Joi.object().keys(BoolFilterSchemaObject),
Joi.boolean()),
  saturday: Joi.alternatives().try(Joi.object().keys(BoolFilterSchemaObject),
Joi.boolean()),
  sunday: Joi.alternatives().try(Joi.object().keys(BoolFilterSchemaObject),
Joi.boolean()),
  createdAt: Joi.alternatives().try(Joi.object().keys(DateTimeFilterSchemaObject)),
  updatedAt: Joi.alternatives().try(Joi.object().keys(DateTimeFilterSchemaObject)),
  pool: Joi.alternatives().try(Joi.object().keys(PoolRelationFilterSchemaObject),
Joi.object().keys(PoolWhereInputSchemaObject))
}