// @ts-nocheck
import Joi from 'joi';
import { PurchaseCreateWithoutCustomerOrderInputSchemaObject } from './PurchaseCreateWithoutCustomerOrderInput.schema';
import { PurchaseUncheckedCreateWithoutCustomerOrderInputSchemaObject } from './PurchaseUncheckedCreateWithoutCustomerOrderInput.schema';
import { PurchaseCreateOrConnectWithoutCustomerOrderInputSchemaObject } from './PurchaseCreateOrConnectWithoutCustomerOrderInput.schema';
import { PurchaseCreateManyCustomerOrderInputEnvelopeSchemaObject } from './PurchaseCreateManyCustomerOrderInputEnvelope.schema';
import { PurchaseWhereUniqueInputSchemaObject } from './PurchaseWhereUniqueInput.schema'

export const PurchaseCreateNestedManyWithoutCustomerOrderInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(PurchaseCreateWithoutCustomerOrderInputSchemaObject),
Joi.array().items(Joi.object().keys(PurchaseCreateWithoutCustomerOrderInputSchemaObject)),
Joi.object().keys(PurchaseUncheckedCreateWithoutCustomerOrderInputSchemaObject),
Joi.array().items(Joi.object().keys(PurchaseUncheckedCreateWithoutCustomerOrderInputSchemaObject))),
  connectOrCreate: Joi.alternatives().try(Joi.object().keys(PurchaseCreateOrConnectWithoutCustomerOrderInputSchemaObject),
Joi.array().items(Joi.object().keys(PurchaseCreateOrConnectWithoutCustomerOrderInputSchemaObject))),
  createMany: Joi.object().keys(PurchaseCreateManyCustomerOrderInputEnvelopeSchemaObject),
  connect: Joi.alternatives().try(Joi.object().keys(PurchaseWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(PurchaseWhereUniqueInputSchemaObject)))
}