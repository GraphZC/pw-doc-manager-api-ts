// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputSchemaObject } from './SortOrderInput.schema';
import { InvoiceCountOrderByAggregateInputSchemaObject } from './InvoiceCountOrderByAggregateInput.schema';
import { InvoiceMaxOrderByAggregateInputSchemaObject } from './InvoiceMaxOrderByAggregateInput.schema';
import { InvoiceMinOrderByAggregateInputSchemaObject } from './InvoiceMinOrderByAggregateInput.schema'

export const InvoiceOrderByWithAggregationInputSchemaObject = {
    id: SortOrderSchema,
  paidAt: Joi.alternatives().try(SortOrderSchema,
Joi.object().keys(SortOrderInputSchemaObject)),
  createdAt: SortOrderSchema,
  updatedAt: SortOrderSchema,
  _count: Joi.object().keys(InvoiceCountOrderByAggregateInputSchemaObject),
  _max: Joi.object().keys(InvoiceMaxOrderByAggregateInputSchemaObject),
  _min: Joi.object().keys(InvoiceMinOrderByAggregateInputSchemaObject)
}