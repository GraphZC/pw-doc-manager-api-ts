// @ts-nocheck
import Joi from 'joi';
import { CustomerOrderCreateWithoutCustomerInputSchemaObject } from './CustomerOrderCreateWithoutCustomerInput.schema';
import { CustomerOrderUncheckedCreateWithoutCustomerInputSchemaObject } from './CustomerOrderUncheckedCreateWithoutCustomerInput.schema';
import { CustomerOrderCreateOrConnectWithoutCustomerInputSchemaObject } from './CustomerOrderCreateOrConnectWithoutCustomerInput.schema';
import { CustomerOrderUpsertWithWhereUniqueWithoutCustomerInputSchemaObject } from './CustomerOrderUpsertWithWhereUniqueWithoutCustomerInput.schema';
import { CustomerOrderCreateManyCustomerInputEnvelopeSchemaObject } from './CustomerOrderCreateManyCustomerInputEnvelope.schema';
import { CustomerOrderWhereUniqueInputSchemaObject } from './CustomerOrderWhereUniqueInput.schema';
import { CustomerOrderUpdateWithWhereUniqueWithoutCustomerInputSchemaObject } from './CustomerOrderUpdateWithWhereUniqueWithoutCustomerInput.schema';
import { CustomerOrderUpdateManyWithWhereWithoutCustomerInputSchemaObject } from './CustomerOrderUpdateManyWithWhereWithoutCustomerInput.schema';
import { CustomerOrderScalarWhereInputSchemaObject } from './CustomerOrderScalarWhereInput.schema'

export const CustomerOrderUncheckedUpdateManyWithoutCustomerNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(CustomerOrderCreateWithoutCustomerInputSchemaObject),
Joi.array().items(Joi.object().keys(CustomerOrderCreateWithoutCustomerInputSchemaObject)),
Joi.object().keys(CustomerOrderUncheckedCreateWithoutCustomerInputSchemaObject),
Joi.array().items(Joi.object().keys(CustomerOrderUncheckedCreateWithoutCustomerInputSchemaObject))),
  connectOrCreate: Joi.alternatives().try(Joi.object().keys(CustomerOrderCreateOrConnectWithoutCustomerInputSchemaObject),
Joi.array().items(Joi.object().keys(CustomerOrderCreateOrConnectWithoutCustomerInputSchemaObject))),
  upsert: Joi.alternatives().try(Joi.object().keys(CustomerOrderUpsertWithWhereUniqueWithoutCustomerInputSchemaObject),
Joi.array().items(Joi.object().keys(CustomerOrderUpsertWithWhereUniqueWithoutCustomerInputSchemaObject))),
  createMany: Joi.object().keys(CustomerOrderCreateManyCustomerInputEnvelopeSchemaObject),
  set: Joi.alternatives().try(Joi.object().keys(CustomerOrderWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(CustomerOrderWhereUniqueInputSchemaObject))),
  disconnect: Joi.alternatives().try(Joi.object().keys(CustomerOrderWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(CustomerOrderWhereUniqueInputSchemaObject))),
  delete: Joi.alternatives().try(Joi.object().keys(CustomerOrderWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(CustomerOrderWhereUniqueInputSchemaObject))),
  connect: Joi.alternatives().try(Joi.object().keys(CustomerOrderWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(CustomerOrderWhereUniqueInputSchemaObject))),
  update: Joi.alternatives().try(Joi.object().keys(CustomerOrderUpdateWithWhereUniqueWithoutCustomerInputSchemaObject),
Joi.array().items(Joi.object().keys(CustomerOrderUpdateWithWhereUniqueWithoutCustomerInputSchemaObject))),
  updateMany: Joi.alternatives().try(Joi.object().keys(CustomerOrderUpdateManyWithWhereWithoutCustomerInputSchemaObject),
Joi.array().items(Joi.object().keys(CustomerOrderUpdateManyWithWhereWithoutCustomerInputSchemaObject))),
  deleteMany: Joi.alternatives().try(Joi.object().keys(CustomerOrderScalarWhereInputSchemaObject),
Joi.array().items(Joi.object().keys(CustomerOrderScalarWhereInputSchemaObject)))
}