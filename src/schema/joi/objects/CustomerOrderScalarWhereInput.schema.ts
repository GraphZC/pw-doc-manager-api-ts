// @ts-nocheck
import Joi from 'joi';
import { UuidFilterSchemaObject } from './UuidFilter.schema';
import { DateTimeFilterSchemaObject } from './DateTimeFilter.schema'

export const CustomerOrderScalarWhereInputSchemaObject = {
    AND: Joi.alternatives().try(Joi.link('#CustomerOrderScalarWhereInput'),
Joi.array().items(Joi.link('#CustomerOrderScalarWhereInput'))),
  OR: Joi.array().items(Joi.link('#CustomerOrderScalarWhereInput')),
  NOT: Joi.alternatives().try(Joi.link('#CustomerOrderScalarWhereInput'),
Joi.array().items(Joi.link('#CustomerOrderScalarWhereInput'))),
  id: Joi.alternatives().try(Joi.object().keys(UuidFilterSchemaObject),
Joi.string()),
  customerId: Joi.alternatives().try(Joi.object().keys(UuidFilterSchemaObject),
Joi.string()),
  employeeId: Joi.alternatives().try(Joi.object().keys(UuidFilterSchemaObject),
Joi.string()),
  invoiceId: Joi.alternatives().try(Joi.object().keys(UuidFilterSchemaObject),
Joi.string()),
  createdAt: Joi.alternatives().try(Joi.object().keys(DateTimeFilterSchemaObject)),
  updatedAt: Joi.alternatives().try(Joi.object().keys(DateTimeFilterSchemaObject))
}