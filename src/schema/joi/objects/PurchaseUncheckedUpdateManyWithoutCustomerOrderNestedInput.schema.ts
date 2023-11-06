// @ts-nocheck
import Joi from 'joi';
import { PurchaseCreateWithoutCustomerOrderInputSchemaObject } from './PurchaseCreateWithoutCustomerOrderInput.schema';
import { PurchaseUncheckedCreateWithoutCustomerOrderInputSchemaObject } from './PurchaseUncheckedCreateWithoutCustomerOrderInput.schema';
import { PurchaseCreateOrConnectWithoutCustomerOrderInputSchemaObject } from './PurchaseCreateOrConnectWithoutCustomerOrderInput.schema';
import { PurchaseUpsertWithWhereUniqueWithoutCustomerOrderInputSchemaObject } from './PurchaseUpsertWithWhereUniqueWithoutCustomerOrderInput.schema';
import { PurchaseCreateManyCustomerOrderInputEnvelopeSchemaObject } from './PurchaseCreateManyCustomerOrderInputEnvelope.schema';
import { PurchaseWhereUniqueInputSchemaObject } from './PurchaseWhereUniqueInput.schema';
import { PurchaseUpdateWithWhereUniqueWithoutCustomerOrderInputSchemaObject } from './PurchaseUpdateWithWhereUniqueWithoutCustomerOrderInput.schema';
import { PurchaseUpdateManyWithWhereWithoutCustomerOrderInputSchemaObject } from './PurchaseUpdateManyWithWhereWithoutCustomerOrderInput.schema';
import { PurchaseScalarWhereInputSchemaObject } from './PurchaseScalarWhereInput.schema'

export const PurchaseUncheckedUpdateManyWithoutCustomerOrderNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(PurchaseCreateWithoutCustomerOrderInputSchemaObject),
Joi.array().items(Joi.object().keys(PurchaseCreateWithoutCustomerOrderInputSchemaObject)),
Joi.object().keys(PurchaseUncheckedCreateWithoutCustomerOrderInputSchemaObject),
Joi.array().items(Joi.object().keys(PurchaseUncheckedCreateWithoutCustomerOrderInputSchemaObject))),
  connectOrCreate: Joi.alternatives().try(Joi.object().keys(PurchaseCreateOrConnectWithoutCustomerOrderInputSchemaObject),
Joi.array().items(Joi.object().keys(PurchaseCreateOrConnectWithoutCustomerOrderInputSchemaObject))),
  upsert: Joi.alternatives().try(Joi.object().keys(PurchaseUpsertWithWhereUniqueWithoutCustomerOrderInputSchemaObject),
Joi.array().items(Joi.object().keys(PurchaseUpsertWithWhereUniqueWithoutCustomerOrderInputSchemaObject))),
  createMany: Joi.object().keys(PurchaseCreateManyCustomerOrderInputEnvelopeSchemaObject),
  set: Joi.alternatives().try(Joi.object().keys(PurchaseWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(PurchaseWhereUniqueInputSchemaObject))),
  disconnect: Joi.alternatives().try(Joi.object().keys(PurchaseWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(PurchaseWhereUniqueInputSchemaObject))),
  delete: Joi.alternatives().try(Joi.object().keys(PurchaseWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(PurchaseWhereUniqueInputSchemaObject))),
  connect: Joi.alternatives().try(Joi.object().keys(PurchaseWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(PurchaseWhereUniqueInputSchemaObject))),
  update: Joi.alternatives().try(Joi.object().keys(PurchaseUpdateWithWhereUniqueWithoutCustomerOrderInputSchemaObject),
Joi.array().items(Joi.object().keys(PurchaseUpdateWithWhereUniqueWithoutCustomerOrderInputSchemaObject))),
  updateMany: Joi.alternatives().try(Joi.object().keys(PurchaseUpdateManyWithWhereWithoutCustomerOrderInputSchemaObject),
Joi.array().items(Joi.object().keys(PurchaseUpdateManyWithWhereWithoutCustomerOrderInputSchemaObject))),
  deleteMany: Joi.alternatives().try(Joi.object().keys(PurchaseScalarWhereInputSchemaObject),
Joi.array().items(Joi.object().keys(PurchaseScalarWhereInputSchemaObject)))
}