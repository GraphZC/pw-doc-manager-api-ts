// @ts-nocheck
import Joi from 'joi';
import { StringFieldUpdateOperationsInputSchemaObject } from './StringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputSchemaObject } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputSchemaObject } from './BoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputSchemaObject } from './DateTimeFieldUpdateOperationsInput.schema'

export const InvoiceUncheckedUpdateWithoutCustomerOrderInputSchemaObject = {
    id: Joi.alternatives().try(Joi.string(),
Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
  paidAt: Joi.alternatives().try(Joi.object().keys(NullableDateTimeFieldUpdateOperationsInputSchemaObject)),
  vatIncluded: Joi.alternatives().try(Joi.boolean(),
Joi.object().keys(BoolFieldUpdateOperationsInputSchemaObject)),
  createdAt: Joi.alternatives().try(Joi.object().keys(DateTimeFieldUpdateOperationsInputSchemaObject)),
  updatedAt: Joi.alternatives().try(Joi.object().keys(DateTimeFieldUpdateOperationsInputSchemaObject))
}