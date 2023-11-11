// @ts-nocheck
import Joi from 'joi';
import { UuidFilterSchemaObject } from './UuidFilter.schema';
import { StringFilterSchemaObject } from './StringFilter.schema';
import { EnumEmployeeRoleFilterSchemaObject } from './EnumEmployeeRoleFilter.schema';
import { DateTimeFilterSchemaObject } from './DateTimeFilter.schema';
import { CustomerOrderListRelationFilterSchemaObject } from './CustomerOrderListRelationFilter.schema'

export const EmployeeWhereInputSchemaObject = {
    AND: Joi.alternatives().try(Joi.link('#EmployeeWhereInput'),
Joi.array().items(Joi.link('#EmployeeWhereInput'))),
  OR: Joi.array().items(Joi.link('#EmployeeWhereInput')),
  NOT: Joi.alternatives().try(Joi.link('#EmployeeWhereInput'),
Joi.array().items(Joi.link('#EmployeeWhereInput'))),
  id: Joi.alternatives().try(Joi.object().keys(UuidFilterSchemaObject),
Joi.string()),
  username: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  password: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  name: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  role: Joi.alternatives().try(Joi.object().keys(EnumEmployeeRoleFilterSchemaObject)),
  createdAt: Joi.alternatives().try(Joi.object().keys(DateTimeFilterSchemaObject)),
  updatedAt: Joi.alternatives().try(Joi.object().keys(DateTimeFilterSchemaObject)),
  customerOrder: Joi.object().keys(CustomerOrderListRelationFilterSchemaObject)
}