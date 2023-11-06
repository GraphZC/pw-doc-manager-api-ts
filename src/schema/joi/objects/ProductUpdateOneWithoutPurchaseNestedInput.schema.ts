// @ts-nocheck
import Joi from 'joi';
import { ProductCreateWithoutPurchaseInputSchemaObject } from './ProductCreateWithoutPurchaseInput.schema';
import { ProductUncheckedCreateWithoutPurchaseInputSchemaObject } from './ProductUncheckedCreateWithoutPurchaseInput.schema';
import { ProductCreateOrConnectWithoutPurchaseInputSchemaObject } from './ProductCreateOrConnectWithoutPurchaseInput.schema';
import { ProductUpsertWithoutPurchaseInputSchemaObject } from './ProductUpsertWithoutPurchaseInput.schema';
import { ProductWhereUniqueInputSchemaObject } from './ProductWhereUniqueInput.schema';
import { ProductUpdateWithoutPurchaseInputSchemaObject } from './ProductUpdateWithoutPurchaseInput.schema';
import { ProductUncheckedUpdateWithoutPurchaseInputSchemaObject } from './ProductUncheckedUpdateWithoutPurchaseInput.schema'

export const ProductUpdateOneWithoutPurchaseNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(ProductCreateWithoutPurchaseInputSchemaObject),
Joi.object().keys(ProductUncheckedCreateWithoutPurchaseInputSchemaObject)),
  connectOrCreate: Joi.object().keys(ProductCreateOrConnectWithoutPurchaseInputSchemaObject),
  upsert: Joi.object().keys(ProductUpsertWithoutPurchaseInputSchemaObject),
  disconnect: Joi.boolean(),
  delete: Joi.boolean(),
  connect: Joi.object().keys(ProductWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(ProductUpdateWithoutPurchaseInputSchemaObject),
Joi.object().keys(ProductUncheckedUpdateWithoutPurchaseInputSchemaObject))
}