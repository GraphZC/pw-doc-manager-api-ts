// @ts-nocheck
import Joi from 'joi';
import { UuidFilterSchemaObject } from './UuidFilter.schema';
import { DateTimeFilterSchemaObject } from './DateTimeFilter.schema';
import { CustomerRelationFilterSchemaObject } from './CustomerRelationFilter.schema';
import { CustomerWhereInputSchemaObject } from './CustomerWhereInput.schema';
import { EmployeeRelationFilterSchemaObject } from './EmployeeRelationFilter.schema';
import { EmployeeWhereInputSchemaObject } from './EmployeeWhereInput.schema';
import { InvoiceRelationFilterSchemaObject } from './InvoiceRelationFilter.schema';
import { InvoiceWhereInputSchemaObject } from './InvoiceWhereInput.schema';
import { PurchaseListRelationFilterSchemaObject } from './PurchaseListRelationFilter.schema'

export const CustomerOrderWhereInputSchemaObject = {
    AND: Joi.alternatives().try(Joi.link('#CustomerOrderWhereInput'),
Joi.array().items(Joi.link('#CustomerOrderWhereInput'))),
  OR: Joi.array().items(Joi.link('#CustomerOrderWhereInput')),
  NOT: Joi.alternatives().try(Joi.link('#CustomerOrderWhereInput'),
Joi.array().items(Joi.link('#CustomerOrderWhereInput'))),
  id: Joi.alternatives().try(Joi.object().keys(UuidFilterSchemaObject),
Joi.string()),
  customerId: Joi.alternatives().try(Joi.object().keys(UuidFilterSchemaObject),
Joi.string()),
  employeeId: Joi.alternatives().try(Joi.object().keys(UuidFilterSchemaObject),
Joi.string()),
  invoiceId: Joi.alternatives().try(Joi.object().keys(UuidFilterSchemaObject),
Joi.string()),
  createdAt: Joi.alternatives().try(Joi.object().keys(DateTimeFilterSchemaObject)),
  updatedAt: Joi.alternatives().try(Joi.object().keys(DateTimeFilterSchemaObject)),
  customer: Joi.alternatives().try(Joi.object().keys(CustomerRelationFilterSchemaObject),
Joi.object().keys(CustomerWhereInputSchemaObject)),
  employee: Joi.alternatives().try(Joi.object().keys(EmployeeRelationFilterSchemaObject),
Joi.object().keys(EmployeeWhereInputSchemaObject)),
  invoice: Joi.alternatives().try(Joi.object().keys(InvoiceRelationFilterSchemaObject),
Joi.object().keys(InvoiceWhereInputSchemaObject)),
  purchase: Joi.object().keys(PurchaseListRelationFilterSchemaObject)
}