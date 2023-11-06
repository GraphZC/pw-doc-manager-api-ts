// @ts-nocheck
import Joi from 'joi';
import { PurchaseWhereUniqueInputSchemaObject } from './PurchaseWhereUniqueInput.schema';
import { PurchaseCreateWithoutCustomerOrderInputSchemaObject } from './PurchaseCreateWithoutCustomerOrderInput.schema';
import { PurchaseUncheckedCreateWithoutCustomerOrderInputSchemaObject } from './PurchaseUncheckedCreateWithoutCustomerOrderInput.schema'

export const PurchaseCreateOrConnectWithoutCustomerOrderInputSchemaObject = {
    where: Joi.object().keys(PurchaseWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(Joi.object().keys(PurchaseCreateWithoutCustomerOrderInputSchemaObject),
Joi.object().keys(PurchaseUncheckedCreateWithoutCustomerOrderInputSchemaObject))
}