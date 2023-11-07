// @ts-nocheck
import Joi from 'joi';
import { StringFieldUpdateOperationsInputSchemaObject } from './StringFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputSchemaObject } from './FloatFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputSchemaObject } from './BoolFieldUpdateOperationsInput.schema';
import { EnumPoolTypeFieldUpdateOperationsInputSchemaObject } from './EnumPoolTypeFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputSchemaObject } from './DateTimeFieldUpdateOperationsInput.schema';
import { PurchaseUncheckedUpdateManyWithoutPoolNestedInputSchemaObject } from './PurchaseUncheckedUpdateManyWithoutPoolNestedInput.schema'

export const PoolUncheckedUpdateInputSchemaObject = {
    id: Joi.alternatives().try(Joi.string(),
Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
  customerId: Joi.alternatives().try(Joi.string(),
Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
  address: Joi.alternatives().try(Joi.string(),
Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
  price: Joi.alternatives().try(Joi.number(),
Joi.object().keys(FloatFieldUpdateOperationsInputSchemaObject)),
  chemicalIncluded: Joi.alternatives().try(Joi.boolean(),
Joi.object().keys(BoolFieldUpdateOperationsInputSchemaObject)),
  type: Joi.alternatives().try(Joi.object().keys(EnumPoolTypeFieldUpdateOperationsInputSchemaObject)),
  inService: Joi.alternatives().try(Joi.boolean(),
Joi.object().keys(BoolFieldUpdateOperationsInputSchemaObject)),
  serviceDayId: Joi.alternatives().try(Joi.string(),
Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
  createdAt: Joi.alternatives().try(Joi.object().keys(DateTimeFieldUpdateOperationsInputSchemaObject)),
  updatedAt: Joi.alternatives().try(Joi.object().keys(DateTimeFieldUpdateOperationsInputSchemaObject)),
  purchase: Joi.object().keys(PurchaseUncheckedUpdateManyWithoutPoolNestedInputSchemaObject)
}