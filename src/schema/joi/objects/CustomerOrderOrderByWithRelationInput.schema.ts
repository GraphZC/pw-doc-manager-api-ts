// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { CustomerOrderByWithRelationInputSchemaObject } from './CustomerOrderByWithRelationInput.schema';
import { EmployeeOrderByWithRelationInputSchemaObject } from './EmployeeOrderByWithRelationInput.schema';
import { InvoiceOrderByWithRelationInputSchemaObject } from './InvoiceOrderByWithRelationInput.schema';
import { PurchaseOrderByRelationAggregateInputSchemaObject } from './PurchaseOrderByRelationAggregateInput.schema'

export const CustomerOrderOrderByWithRelationInputSchemaObject = {
    id: SortOrderSchema,
  customerId: SortOrderSchema,
  employeeId: SortOrderSchema,
  invoiceId: SortOrderSchema,
  createdAt: SortOrderSchema,
  updatedAt: SortOrderSchema,
  customer: Joi.object().keys(CustomerOrderByWithRelationInputSchemaObject),
  employee: Joi.object().keys(EmployeeOrderByWithRelationInputSchemaObject),
  invoice: Joi.object().keys(InvoiceOrderByWithRelationInputSchemaObject),
  purchase: Joi.object().keys(PurchaseOrderByRelationAggregateInputSchemaObject)
}