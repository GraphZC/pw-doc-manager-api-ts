// @ts-nocheck
import Joi from 'joi';
import { PurchaseWhereUniqueInputSchemaObject } from './PurchaseWhereUniqueInput.schema';
import { PurchaseUpdateWithoutCustomerOrderInputSchemaObject } from './PurchaseUpdateWithoutCustomerOrderInput.schema';
import { PurchaseUncheckedUpdateWithoutCustomerOrderInputSchemaObject } from './PurchaseUncheckedUpdateWithoutCustomerOrderInput.schema'

export const PurchaseUpdateWithWhereUniqueWithoutCustomerOrderInputSchemaObject = {
    where: Joi.object().keys(PurchaseWhereUniqueInputSchemaObject),
  data: Joi.alternatives().try(Joi.object().keys(PurchaseUpdateWithoutCustomerOrderInputSchemaObject),
Joi.object().keys(PurchaseUncheckedUpdateWithoutCustomerOrderInputSchemaObject))
}