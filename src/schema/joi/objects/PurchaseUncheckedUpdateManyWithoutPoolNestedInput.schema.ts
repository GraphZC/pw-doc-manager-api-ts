// @ts-nocheck
import Joi from 'joi';
import { PurchaseCreateWithoutPoolInputSchemaObject } from './PurchaseCreateWithoutPoolInput.schema';
import { PurchaseUncheckedCreateWithoutPoolInputSchemaObject } from './PurchaseUncheckedCreateWithoutPoolInput.schema';
import { PurchaseCreateOrConnectWithoutPoolInputSchemaObject } from './PurchaseCreateOrConnectWithoutPoolInput.schema';
import { PurchaseUpsertWithWhereUniqueWithoutPoolInputSchemaObject } from './PurchaseUpsertWithWhereUniqueWithoutPoolInput.schema';
import { PurchaseCreateManyPoolInputEnvelopeSchemaObject } from './PurchaseCreateManyPoolInputEnvelope.schema';
import { PurchaseWhereUniqueInputSchemaObject } from './PurchaseWhereUniqueInput.schema';
import { PurchaseUpdateWithWhereUniqueWithoutPoolInputSchemaObject } from './PurchaseUpdateWithWhereUniqueWithoutPoolInput.schema';
import { PurchaseUpdateManyWithWhereWithoutPoolInputSchemaObject } from './PurchaseUpdateManyWithWhereWithoutPoolInput.schema';
import { PurchaseScalarWhereInputSchemaObject } from './PurchaseScalarWhereInput.schema'

export const PurchaseUncheckedUpdateManyWithoutPoolNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(PurchaseCreateWithoutPoolInputSchemaObject),
Joi.array().items(Joi.object().keys(PurchaseCreateWithoutPoolInputSchemaObject)),
Joi.object().keys(PurchaseUncheckedCreateWithoutPoolInputSchemaObject),
Joi.array().items(Joi.object().keys(PurchaseUncheckedCreateWithoutPoolInputSchemaObject))),
  connectOrCreate: Joi.alternatives().try(Joi.object().keys(PurchaseCreateOrConnectWithoutPoolInputSchemaObject),
Joi.array().items(Joi.object().keys(PurchaseCreateOrConnectWithoutPoolInputSchemaObject))),
  upsert: Joi.alternatives().try(Joi.object().keys(PurchaseUpsertWithWhereUniqueWithoutPoolInputSchemaObject),
Joi.array().items(Joi.object().keys(PurchaseUpsertWithWhereUniqueWithoutPoolInputSchemaObject))),
  createMany: Joi.object().keys(PurchaseCreateManyPoolInputEnvelopeSchemaObject),
  set: Joi.alternatives().try(Joi.object().keys(PurchaseWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(PurchaseWhereUniqueInputSchemaObject))),
  disconnect: Joi.alternatives().try(Joi.object().keys(PurchaseWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(PurchaseWhereUniqueInputSchemaObject))),
  delete: Joi.alternatives().try(Joi.object().keys(PurchaseWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(PurchaseWhereUniqueInputSchemaObject))),
  connect: Joi.alternatives().try(Joi.object().keys(PurchaseWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(PurchaseWhereUniqueInputSchemaObject))),
  update: Joi.alternatives().try(Joi.object().keys(PurchaseUpdateWithWhereUniqueWithoutPoolInputSchemaObject),
Joi.array().items(Joi.object().keys(PurchaseUpdateWithWhereUniqueWithoutPoolInputSchemaObject))),
  updateMany: Joi.alternatives().try(Joi.object().keys(PurchaseUpdateManyWithWhereWithoutPoolInputSchemaObject),
Joi.array().items(Joi.object().keys(PurchaseUpdateManyWithWhereWithoutPoolInputSchemaObject))),
  deleteMany: Joi.alternatives().try(Joi.object().keys(PurchaseScalarWhereInputSchemaObject),
Joi.array().items(Joi.object().keys(PurchaseScalarWhereInputSchemaObject)))
}