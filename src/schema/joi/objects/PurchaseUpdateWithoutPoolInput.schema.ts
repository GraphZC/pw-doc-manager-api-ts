// @ts-nocheck
import Joi from 'joi';
import { StringFieldUpdateOperationsInputSchemaObject } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputSchemaObject } from './IntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputSchemaObject } from './DateTimeFieldUpdateOperationsInput.schema';
import { ProductUpdateOneWithoutPurchaseNestedInputSchemaObject } from './ProductUpdateOneWithoutPurchaseNestedInput.schema';
import { CustomerOrderUpdateOneRequiredWithoutPurchaseNestedInputSchemaObject } from './CustomerOrderUpdateOneRequiredWithoutPurchaseNestedInput.schema'

export const PurchaseUpdateWithoutPoolInputSchemaObject = {
    id: Joi.alternatives().try(Joi.string(),
Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
  quantity: Joi.alternatives().try(Joi.number(),
Joi.object().keys(IntFieldUpdateOperationsInputSchemaObject)),
  createdAt: Joi.alternatives().try(Joi.object().keys(DateTimeFieldUpdateOperationsInputSchemaObject)),
  updatedAt: Joi.alternatives().try(Joi.object().keys(DateTimeFieldUpdateOperationsInputSchemaObject)),
  product: Joi.object().keys(ProductUpdateOneWithoutPurchaseNestedInputSchemaObject),
  customerOrder: Joi.object().keys(CustomerOrderUpdateOneRequiredWithoutPurchaseNestedInputSchemaObject)
}