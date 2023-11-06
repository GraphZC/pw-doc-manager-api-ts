// @ts-nocheck
import Joi from 'joi';
import { PurchaseCreateWithoutProductInputSchemaObject } from './PurchaseCreateWithoutProductInput.schema';
import { PurchaseUncheckedCreateWithoutProductInputSchemaObject } from './PurchaseUncheckedCreateWithoutProductInput.schema';
import { PurchaseCreateOrConnectWithoutProductInputSchemaObject } from './PurchaseCreateOrConnectWithoutProductInput.schema';
import { PurchaseCreateManyProductInputEnvelopeSchemaObject } from './PurchaseCreateManyProductInputEnvelope.schema';
import { PurchaseWhereUniqueInputSchemaObject } from './PurchaseWhereUniqueInput.schema'

export const PurchaseCreateNestedManyWithoutProductInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(PurchaseCreateWithoutProductInputSchemaObject),
Joi.array().items(Joi.object().keys(PurchaseCreateWithoutProductInputSchemaObject)),
Joi.object().keys(PurchaseUncheckedCreateWithoutProductInputSchemaObject),
Joi.array().items(Joi.object().keys(PurchaseUncheckedCreateWithoutProductInputSchemaObject))),
  connectOrCreate: Joi.alternatives().try(Joi.object().keys(PurchaseCreateOrConnectWithoutProductInputSchemaObject),
Joi.array().items(Joi.object().keys(PurchaseCreateOrConnectWithoutProductInputSchemaObject))),
  createMany: Joi.object().keys(PurchaseCreateManyProductInputEnvelopeSchemaObject),
  connect: Joi.alternatives().try(Joi.object().keys(PurchaseWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(PurchaseWhereUniqueInputSchemaObject)))
}