// @ts-nocheck
import Joi from 'joi';
import { StringFieldUpdateOperationsInputSchemaObject } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputSchemaObject } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputSchemaObject } from './DateTimeFieldUpdateOperationsInput.schema';
import { CustomerOrderUncheckedUpdateManyWithoutCustomerNestedInputSchemaObject } from './CustomerOrderUncheckedUpdateManyWithoutCustomerNestedInput.schema'

export const CustomerUncheckedUpdateWithoutPoolInputSchemaObject = {
    id: Joi.alternatives().try(Joi.string(),
Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
  name: Joi.alternatives().try(Joi.string(),
Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
  address: Joi.alternatives().try(Joi.string(),
Joi.object().keys(NullableStringFieldUpdateOperationsInputSchemaObject)),
  telephone: Joi.alternatives().try(Joi.string(),
Joi.object().keys(NullableStringFieldUpdateOperationsInputSchemaObject)),
  taxId: Joi.alternatives().try(Joi.string(),
Joi.object().keys(NullableStringFieldUpdateOperationsInputSchemaObject)),
  createdAt: Joi.alternatives().try(Joi.object().keys(DateTimeFieldUpdateOperationsInputSchemaObject)),
  updatedAt: Joi.alternatives().try(Joi.object().keys(DateTimeFieldUpdateOperationsInputSchemaObject)),
  customerOrder: Joi.object().keys(CustomerOrderUncheckedUpdateManyWithoutCustomerNestedInputSchemaObject)
}