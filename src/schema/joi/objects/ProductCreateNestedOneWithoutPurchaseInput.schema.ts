// @ts-nocheck
import Joi from 'joi';
import { ProductCreateWithoutPurchaseInputSchemaObject } from './ProductCreateWithoutPurchaseInput.schema';
import { ProductUncheckedCreateWithoutPurchaseInputSchemaObject } from './ProductUncheckedCreateWithoutPurchaseInput.schema';
import { ProductCreateOrConnectWithoutPurchaseInputSchemaObject } from './ProductCreateOrConnectWithoutPurchaseInput.schema';
import { ProductWhereUniqueInputSchemaObject } from './ProductWhereUniqueInput.schema'

export const ProductCreateNestedOneWithoutPurchaseInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(ProductCreateWithoutPurchaseInputSchemaObject),
Joi.object().keys(ProductUncheckedCreateWithoutPurchaseInputSchemaObject)),
  connectOrCreate: Joi.object().keys(ProductCreateOrConnectWithoutPurchaseInputSchemaObject),
  connect: Joi.object().keys(ProductWhereUniqueInputSchemaObject)
}