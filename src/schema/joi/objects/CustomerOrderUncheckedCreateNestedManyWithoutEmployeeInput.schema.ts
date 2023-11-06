// @ts-nocheck
import Joi from 'joi';
import { CustomerOrderCreateWithoutEmployeeInputSchemaObject } from './CustomerOrderCreateWithoutEmployeeInput.schema';
import { CustomerOrderUncheckedCreateWithoutEmployeeInputSchemaObject } from './CustomerOrderUncheckedCreateWithoutEmployeeInput.schema';
import { CustomerOrderCreateOrConnectWithoutEmployeeInputSchemaObject } from './CustomerOrderCreateOrConnectWithoutEmployeeInput.schema';
import { CustomerOrderCreateManyEmployeeInputEnvelopeSchemaObject } from './CustomerOrderCreateManyEmployeeInputEnvelope.schema';
import { CustomerOrderWhereUniqueInputSchemaObject } from './CustomerOrderWhereUniqueInput.schema'

export const CustomerOrderUncheckedCreateNestedManyWithoutEmployeeInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(CustomerOrderCreateWithoutEmployeeInputSchemaObject),
Joi.array().items(Joi.object().keys(CustomerOrderCreateWithoutEmployeeInputSchemaObject)),
Joi.object().keys(CustomerOrderUncheckedCreateWithoutEmployeeInputSchemaObject),
Joi.array().items(Joi.object().keys(CustomerOrderUncheckedCreateWithoutEmployeeInputSchemaObject))),
  connectOrCreate: Joi.alternatives().try(Joi.object().keys(CustomerOrderCreateOrConnectWithoutEmployeeInputSchemaObject),
Joi.array().items(Joi.object().keys(CustomerOrderCreateOrConnectWithoutEmployeeInputSchemaObject))),
  createMany: Joi.object().keys(CustomerOrderCreateManyEmployeeInputEnvelopeSchemaObject),
  connect: Joi.alternatives().try(Joi.object().keys(CustomerOrderWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(CustomerOrderWhereUniqueInputSchemaObject)))
}