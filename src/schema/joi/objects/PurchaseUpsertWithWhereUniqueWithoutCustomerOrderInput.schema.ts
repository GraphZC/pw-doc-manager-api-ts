// @ts-nocheck
import Joi from 'joi';
import { PurchaseWhereUniqueInputSchemaObject } from './PurchaseWhereUniqueInput.schema';
import { PurchaseUpdateWithoutCustomerOrderInputSchemaObject } from './PurchaseUpdateWithoutCustomerOrderInput.schema';
import { PurchaseUncheckedUpdateWithoutCustomerOrderInputSchemaObject } from './PurchaseUncheckedUpdateWithoutCustomerOrderInput.schema';
import { PurchaseCreateWithoutCustomerOrderInputSchemaObject } from './PurchaseCreateWithoutCustomerOrderInput.schema';
import { PurchaseUncheckedCreateWithoutCustomerOrderInputSchemaObject } from './PurchaseUncheckedCreateWithoutCustomerOrderInput.schema'

export const PurchaseUpsertWithWhereUniqueWithoutCustomerOrderInputSchemaObject = {
    where: Joi.object().keys(PurchaseWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(PurchaseUpdateWithoutCustomerOrderInputSchemaObject),
Joi.object().keys(PurchaseUncheckedUpdateWithoutCustomerOrderInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(PurchaseCreateWithoutCustomerOrderInputSchemaObject),
Joi.object().keys(PurchaseUncheckedCreateWithoutCustomerOrderInputSchemaObject))
}