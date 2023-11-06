// @ts-nocheck
import Joi from 'joi';
import { ProductUpdateWithoutPurchaseInputSchemaObject } from './ProductUpdateWithoutPurchaseInput.schema';
import { ProductUncheckedUpdateWithoutPurchaseInputSchemaObject } from './ProductUncheckedUpdateWithoutPurchaseInput.schema';
import { ProductCreateWithoutPurchaseInputSchemaObject } from './ProductCreateWithoutPurchaseInput.schema';
import { ProductUncheckedCreateWithoutPurchaseInputSchemaObject } from './ProductUncheckedCreateWithoutPurchaseInput.schema'

export const ProductUpsertWithoutPurchaseInputSchemaObject = {
    update: Joi.alternatives().try(Joi.object().keys(ProductUpdateWithoutPurchaseInputSchemaObject),
Joi.object().keys(ProductUncheckedUpdateWithoutPurchaseInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(ProductCreateWithoutPurchaseInputSchemaObject),
Joi.object().keys(ProductUncheckedCreateWithoutPurchaseInputSchemaObject))
}