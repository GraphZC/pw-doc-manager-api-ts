// @ts-nocheck
import Joi from 'joi';
import { UuidWithAggregatesFilterSchemaObject } from './UuidWithAggregatesFilter.schema';
import { StringWithAggregatesFilterSchemaObject } from './StringWithAggregatesFilter.schema';
import { EnumEmployeeRoleWithAggregatesFilterSchemaObject } from './EnumEmployeeRoleWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterSchemaObject } from './DateTimeWithAggregatesFilter.schema'

export const EmployeeScalarWhereWithAggregatesInputSchemaObject = {
    AND: Joi.alternatives().try(Joi.link('#EmployeeScalarWhereWithAggregatesInput'),
Joi.array().items(Joi.link('#EmployeeScalarWhereWithAggregatesInput'))),
  OR: Joi.array().items(Joi.link('#EmployeeScalarWhereWithAggregatesInput')),
  NOT: Joi.alternatives().try(Joi.link('#EmployeeScalarWhereWithAggregatesInput'),
Joi.array().items(Joi.link('#EmployeeScalarWhereWithAggregatesInput'))),
  id: Joi.alternatives().try(Joi.object().keys(UuidWithAggregatesFilterSchemaObject),
Joi.string()),
  username: Joi.alternatives().try(Joi.object().keys(StringWithAggregatesFilterSchemaObject),
Joi.string()),
  password: Joi.alternatives().try(Joi.object().keys(StringWithAggregatesFilterSchemaObject),
Joi.string()),
  name: Joi.alternatives().try(Joi.object().keys(StringWithAggregatesFilterSchemaObject),
Joi.string()),
  role: Joi.alternatives().try(Joi.object().keys(EnumEmployeeRoleWithAggregatesFilterSchemaObject)),
  createdAt: Joi.alternatives().try(Joi.object().keys(DateTimeWithAggregatesFilterSchemaObject)),
  updatedAt: Joi.alternatives().try(Joi.object().keys(DateTimeWithAggregatesFilterSchemaObject))
}