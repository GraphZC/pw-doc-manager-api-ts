// @ts-nocheck
import Joi from 'joi';
import { StringFieldUpdateOperationsInputSchemaObject } from './StringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputSchemaObject } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputSchemaObject } from './DateTimeFieldUpdateOperationsInput.schema';
import { CustomerOrderUncheckedUpdateOneWithoutInvoiceNestedInputSchemaObject } from './CustomerOrderUncheckedUpdateOneWithoutInvoiceNestedInput.schema'

export const InvoiceUncheckedUpdateInputSchemaObject = {
    id: Joi.alternatives().try(Joi.string(),
Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
  paidAt: Joi.alternatives().try(Joi.object().keys(NullableDateTimeFieldUpdateOperationsInputSchemaObject)),
  createdAt: Joi.alternatives().try(Joi.object().keys(DateTimeFieldUpdateOperationsInputSchemaObject)),
  updatedAt: Joi.alternatives().try(Joi.object().keys(DateTimeFieldUpdateOperationsInputSchemaObject)),
  customerOrder: Joi.object().keys(CustomerOrderUncheckedUpdateOneWithoutInvoiceNestedInputSchemaObject)
}