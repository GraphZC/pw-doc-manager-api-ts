// @ts-nocheck
import Joi from 'joi';
import { ProductWhereUniqueInputSchemaObject } from './ProductWhereUniqueInput.schema';
import { ProductCreateWithoutPurchaseInputSchemaObject } from './ProductCreateWithoutPurchaseInput.schema';
import { ProductUncheckedCreateWithoutPurchaseInputSchemaObject } from './ProductUncheckedCreateWithoutPurchaseInput.schema'

export const ProductCreateOrConnectWithoutPurchaseInputSchemaObject = {
    where: Joi.object().keys(ProductWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(Joi.object().keys(ProductCreateWithoutPurchaseInputSchemaObject),
Joi.object().keys(ProductUncheckedCreateWithoutPurchaseInputSchemaObject))
}