// @ts-nocheck
import Joi from 'joi';
import { StringFieldUpdateOperationsInputSchemaObject } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputSchemaObject } from './DateTimeFieldUpdateOperationsInput.schema';
import { CustomerUpdateOneRequiredWithoutCustomerOrderNestedInputSchemaObject } from './CustomerUpdateOneRequiredWithoutCustomerOrderNestedInput.schema';
import { InvoiceUpdateOneRequiredWithoutCustomerOrderNestedInputSchemaObject } from './InvoiceUpdateOneRequiredWithoutCustomerOrderNestedInput.schema';
import { PurchaseUpdateManyWithoutCustomerOrderNestedInputSchemaObject } from './PurchaseUpdateManyWithoutCustomerOrderNestedInput.schema'

export const CustomerOrderUpdateWithoutEmployeeInputSchemaObject = {
    id: Joi.alternatives().try(Joi.string(),
Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
  createdAt: Joi.alternatives().try(Joi.object().keys(DateTimeFieldUpdateOperationsInputSchemaObject)),
  updatedAt: Joi.alternatives().try(Joi.object().keys(DateTimeFieldUpdateOperationsInputSchemaObject)),
  customer: Joi.object().keys(CustomerUpdateOneRequiredWithoutCustomerOrderNestedInputSchemaObject),
  invoice: Joi.object().keys(InvoiceUpdateOneRequiredWithoutCustomerOrderNestedInputSchemaObject),
  purchase: Joi.object().keys(PurchaseUpdateManyWithoutCustomerOrderNestedInputSchemaObject)
}