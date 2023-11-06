// @ts-nocheck
import Joi from 'joi';
import { StringFieldUpdateOperationsInputSchemaObject } from './StringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputSchemaObject } from './BoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputSchemaObject } from './DateTimeFieldUpdateOperationsInput.schema';
import { PoolUpdateOneRequiredWithoutServiceDayNestedInputSchemaObject } from './PoolUpdateOneRequiredWithoutServiceDayNestedInput.schema'

export const ServiceDayUpdateInputSchemaObject = {
    id: Joi.alternatives().try(Joi.string(),
Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
  monday: Joi.alternatives().try(Joi.boolean(),
Joi.object().keys(BoolFieldUpdateOperationsInputSchemaObject)),
  tuesday: Joi.alternatives().try(Joi.boolean(),
Joi.object().keys(BoolFieldUpdateOperationsInputSchemaObject)),
  wednesday: Joi.alternatives().try(Joi.boolean(),
Joi.object().keys(BoolFieldUpdateOperationsInputSchemaObject)),
  thursday: Joi.alternatives().try(Joi.boolean(),
Joi.object().keys(BoolFieldUpdateOperationsInputSchemaObject)),
  friday: Joi.alternatives().try(Joi.boolean(),
Joi.object().keys(BoolFieldUpdateOperationsInputSchemaObject)),
  saturday: Joi.alternatives().try(Joi.boolean(),
Joi.object().keys(BoolFieldUpdateOperationsInputSchemaObject)),
  sunday: Joi.alternatives().try(Joi.boolean(),
Joi.object().keys(BoolFieldUpdateOperationsInputSchemaObject)),
  createdAt: Joi.alternatives().try(Joi.object().keys(DateTimeFieldUpdateOperationsInputSchemaObject)),
  updatedAt: Joi.alternatives().try(Joi.object().keys(DateTimeFieldUpdateOperationsInputSchemaObject)),
  pool: Joi.object().keys(PoolUpdateOneRequiredWithoutServiceDayNestedInputSchemaObject)
}