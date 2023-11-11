// @ts-nocheck
import Joi from 'joi';
import { CustomerOrderCreateWithoutEmployeeInputSchemaObject } from './CustomerOrderCreateWithoutEmployeeInput.schema';
import { CustomerOrderUncheckedCreateWithoutEmployeeInputSchemaObject } from './CustomerOrderUncheckedCreateWithoutEmployeeInput.schema';
import { CustomerOrderCreateOrConnectWithoutEmployeeInputSchemaObject } from './CustomerOrderCreateOrConnectWithoutEmployeeInput.schema';
import { CustomerOrderUpsertWithWhereUniqueWithoutEmployeeInputSchemaObject } from './CustomerOrderUpsertWithWhereUniqueWithoutEmployeeInput.schema';
import { CustomerOrderCreateManyEmployeeInputEnvelopeSchemaObject } from './CustomerOrderCreateManyEmployeeInputEnvelope.schema';
import { CustomerOrderWhereUniqueInputSchemaObject } from './CustomerOrderWhereUniqueInput.schema';
import { CustomerOrderUpdateWithWhereUniqueWithoutEmployeeInputSchemaObject } from './CustomerOrderUpdateWithWhereUniqueWithoutEmployeeInput.schema';
import { CustomerOrderUpdateManyWithWhereWithoutEmployeeInputSchemaObject } from './CustomerOrderUpdateManyWithWhereWithoutEmployeeInput.schema';
import { CustomerOrderScalarWhereInputSchemaObject } from './CustomerOrderScalarWhereInput.schema'

export const CustomerOrderUpdateManyWithoutEmployeeNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(CustomerOrderCreateWithoutEmployeeInputSchemaObject),
Joi.array().items(Joi.object().keys(CustomerOrderCreateWithoutEmployeeInputSchemaObject)),
Joi.object().keys(CustomerOrderUncheckedCreateWithoutEmployeeInputSchemaObject),
Joi.array().items(Joi.object().keys(CustomerOrderUncheckedCreateWithoutEmployeeInputSchemaObject))),
  connectOrCreate: Joi.alternatives().try(Joi.object().keys(CustomerOrderCreateOrConnectWithoutEmployeeInputSchemaObject),
Joi.array().items(Joi.object().keys(CustomerOrderCreateOrConnectWithoutEmployeeInputSchemaObject))),
  upsert: Joi.alternatives().try(Joi.object().keys(CustomerOrderUpsertWithWhereUniqueWithoutEmployeeInputSchemaObject),
Joi.array().items(Joi.object().keys(CustomerOrderUpsertWithWhereUniqueWithoutEmployeeInputSchemaObject))),
  createMany: Joi.object().keys(CustomerOrderCreateManyEmployeeInputEnvelopeSchemaObject),
  set: Joi.alternatives().try(Joi.object().keys(CustomerOrderWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(CustomerOrderWhereUniqueInputSchemaObject))),
  disconnect: Joi.alternatives().try(Joi.object().keys(CustomerOrderWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(CustomerOrderWhereUniqueInputSchemaObject))),
  delete: Joi.alternatives().try(Joi.object().keys(CustomerOrderWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(CustomerOrderWhereUniqueInputSchemaObject))),
  connect: Joi.alternatives().try(Joi.object().keys(CustomerOrderWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(CustomerOrderWhereUniqueInputSchemaObject))),
  update: Joi.alternatives().try(Joi.object().keys(CustomerOrderUpdateWithWhereUniqueWithoutEmployeeInputSchemaObject),
Joi.array().items(Joi.object().keys(CustomerOrderUpdateWithWhereUniqueWithoutEmployeeInputSchemaObject))),
  updateMany: Joi.alternatives().try(Joi.object().keys(CustomerOrderUpdateManyWithWhereWithoutEmployeeInputSchemaObject),
Joi.array().items(Joi.object().keys(CustomerOrderUpdateManyWithWhereWithoutEmployeeInputSchemaObject))),
  deleteMany: Joi.alternatives().try(Joi.object().keys(CustomerOrderScalarWhereInputSchemaObject),
Joi.array().items(Joi.object().keys(CustomerOrderScalarWhereInputSchemaObject)))
}