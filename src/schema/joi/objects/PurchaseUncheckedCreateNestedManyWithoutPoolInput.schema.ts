// @ts-nocheck
import Joi from 'joi';
import { PurchaseCreateWithoutPoolInputSchemaObject } from './PurchaseCreateWithoutPoolInput.schema';
import { PurchaseUncheckedCreateWithoutPoolInputSchemaObject } from './PurchaseUncheckedCreateWithoutPoolInput.schema';
import { PurchaseCreateOrConnectWithoutPoolInputSchemaObject } from './PurchaseCreateOrConnectWithoutPoolInput.schema';
import { PurchaseCreateManyPoolInputEnvelopeSchemaObject } from './PurchaseCreateManyPoolInputEnvelope.schema';
import { PurchaseWhereUniqueInputSchemaObject } from './PurchaseWhereUniqueInput.schema'

export const PurchaseUncheckedCreateNestedManyWithoutPoolInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(PurchaseCreateWithoutPoolInputSchemaObject),
Joi.array().items(Joi.object().keys(PurchaseCreateWithoutPoolInputSchemaObject)),
Joi.object().keys(PurchaseUncheckedCreateWithoutPoolInputSchemaObject),
Joi.array().items(Joi.object().keys(PurchaseUncheckedCreateWithoutPoolInputSchemaObject))),
  connectOrCreate: Joi.alternatives().try(Joi.object().keys(PurchaseCreateOrConnectWithoutPoolInputSchemaObject),
Joi.array().items(Joi.object().keys(PurchaseCreateOrConnectWithoutPoolInputSchemaObject))),
  createMany: Joi.object().keys(PurchaseCreateManyPoolInputEnvelopeSchemaObject),
  connect: Joi.alternatives().try(Joi.object().keys(PurchaseWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(PurchaseWhereUniqueInputSchemaObject)))
}