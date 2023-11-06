// @ts-nocheck
import Joi from 'joi';
import { PurchaseCreateWithoutProductInputSchemaObject } from './PurchaseCreateWithoutProductInput.schema';
import { PurchaseUncheckedCreateWithoutProductInputSchemaObject } from './PurchaseUncheckedCreateWithoutProductInput.schema';
import { PurchaseCreateOrConnectWithoutProductInputSchemaObject } from './PurchaseCreateOrConnectWithoutProductInput.schema';
import { PurchaseUpsertWithWhereUniqueWithoutProductInputSchemaObject } from './PurchaseUpsertWithWhereUniqueWithoutProductInput.schema';
import { PurchaseCreateManyProductInputEnvelopeSchemaObject } from './PurchaseCreateManyProductInputEnvelope.schema';
import { PurchaseWhereUniqueInputSchemaObject } from './PurchaseWhereUniqueInput.schema';
import { PurchaseUpdateWithWhereUniqueWithoutProductInputSchemaObject } from './PurchaseUpdateWithWhereUniqueWithoutProductInput.schema';
import { PurchaseUpdateManyWithWhereWithoutProductInputSchemaObject } from './PurchaseUpdateManyWithWhereWithoutProductInput.schema';
import { PurchaseScalarWhereInputSchemaObject } from './PurchaseScalarWhereInput.schema'

export const PurchaseUpdateManyWithoutProductNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(PurchaseCreateWithoutProductInputSchemaObject),
Joi.array().items(Joi.object().keys(PurchaseCreateWithoutProductInputSchemaObject)),
Joi.object().keys(PurchaseUncheckedCreateWithoutProductInputSchemaObject),
Joi.array().items(Joi.object().keys(PurchaseUncheckedCreateWithoutProductInputSchemaObject))),
  connectOrCreate: Joi.alternatives().try(Joi.object().keys(PurchaseCreateOrConnectWithoutProductInputSchemaObject),
Joi.array().items(Joi.object().keys(PurchaseCreateOrConnectWithoutProductInputSchemaObject))),
  upsert: Joi.alternatives().try(Joi.object().keys(PurchaseUpsertWithWhereUniqueWithoutProductInputSchemaObject),
Joi.array().items(Joi.object().keys(PurchaseUpsertWithWhereUniqueWithoutProductInputSchemaObject))),
  createMany: Joi.object().keys(PurchaseCreateManyProductInputEnvelopeSchemaObject),
  set: Joi.alternatives().try(Joi.object().keys(PurchaseWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(PurchaseWhereUniqueInputSchemaObject))),
  disconnect: Joi.alternatives().try(Joi.object().keys(PurchaseWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(PurchaseWhereUniqueInputSchemaObject))),
  delete: Joi.alternatives().try(Joi.object().keys(PurchaseWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(PurchaseWhereUniqueInputSchemaObject))),
  connect: Joi.alternatives().try(Joi.object().keys(PurchaseWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(PurchaseWhereUniqueInputSchemaObject))),
  update: Joi.alternatives().try(Joi.object().keys(PurchaseUpdateWithWhereUniqueWithoutProductInputSchemaObject),
Joi.array().items(Joi.object().keys(PurchaseUpdateWithWhereUniqueWithoutProductInputSchemaObject))),
  updateMany: Joi.alternatives().try(Joi.object().keys(PurchaseUpdateManyWithWhereWithoutProductInputSchemaObject),
Joi.array().items(Joi.object().keys(PurchaseUpdateManyWithWhereWithoutProductInputSchemaObject))),
  deleteMany: Joi.alternatives().try(Joi.object().keys(PurchaseScalarWhereInputSchemaObject),
Joi.array().items(Joi.object().keys(PurchaseScalarWhereInputSchemaObject)))
}