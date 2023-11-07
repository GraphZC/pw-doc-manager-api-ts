// @ts-nocheck
import Joi from 'joi';
import { StringFieldUpdateOperationsInputSchemaObject } from './StringFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputSchemaObject } from './FloatFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputSchemaObject } from './BoolFieldUpdateOperationsInput.schema';
import { EnumPoolTypeFieldUpdateOperationsInputSchemaObject } from './EnumPoolTypeFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputSchemaObject } from './DateTimeFieldUpdateOperationsInput.schema';
import { CustomerUpdateOneRequiredWithoutPoolNestedInputSchemaObject } from './CustomerUpdateOneRequiredWithoutPoolNestedInput.schema';
import { PurchaseUpdateManyWithoutPoolNestedInputSchemaObject } from './PurchaseUpdateManyWithoutPoolNestedInput.schema';
import { ServiceDayUpdateOneRequiredWithoutPoolNestedInputSchemaObject } from './ServiceDayUpdateOneRequiredWithoutPoolNestedInput.schema'

export const PoolUpdateInputSchemaObject = {
    id: Joi.alternatives().try(Joi.string(),
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
  createdAt: Joi.alternatives().try(Joi.object().keys(DateTimeFieldUpdateOperationsInputSchemaObject)),
  updatedAt: Joi.alternatives().try(Joi.object().keys(DateTimeFieldUpdateOperationsInputSchemaObject)),
  customer: Joi.object().keys(CustomerUpdateOneRequiredWithoutPoolNestedInputSchemaObject),
  purchase: Joi.object().keys(PurchaseUpdateManyWithoutPoolNestedInputSchemaObject),
  serviceDay: Joi.object().keys(ServiceDayUpdateOneRequiredWithoutPoolNestedInputSchemaObject)
}