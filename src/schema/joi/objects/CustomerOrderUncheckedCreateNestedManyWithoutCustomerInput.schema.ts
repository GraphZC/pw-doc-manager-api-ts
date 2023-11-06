// @ts-nocheck
import Joi from 'joi';
import { CustomerOrderCreateWithoutCustomerInputSchemaObject } from './CustomerOrderCreateWithoutCustomerInput.schema';
import { CustomerOrderUncheckedCreateWithoutCustomerInputSchemaObject } from './CustomerOrderUncheckedCreateWithoutCustomerInput.schema';
import { CustomerOrderCreateOrConnectWithoutCustomerInputSchemaObject } from './CustomerOrderCreateOrConnectWithoutCustomerInput.schema';
import { CustomerOrderCreateManyCustomerInputEnvelopeSchemaObject } from './CustomerOrderCreateManyCustomerInputEnvelope.schema';
import { CustomerOrderWhereUniqueInputSchemaObject } from './CustomerOrderWhereUniqueInput.schema'

export const CustomerOrderUncheckedCreateNestedManyWithoutCustomerInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(CustomerOrderCreateWithoutCustomerInputSchemaObject),
Joi.array().items(Joi.object().keys(CustomerOrderCreateWithoutCustomerInputSchemaObject)),
Joi.object().keys(CustomerOrderUncheckedCreateWithoutCustomerInputSchemaObject),
Joi.array().items(Joi.object().keys(CustomerOrderUncheckedCreateWithoutCustomerInputSchemaObject))),
  connectOrCreate: Joi.alternatives().try(Joi.object().keys(CustomerOrderCreateOrConnectWithoutCustomerInputSchemaObject),
Joi.array().items(Joi.object().keys(CustomerOrderCreateOrConnectWithoutCustomerInputSchemaObject))),
  createMany: Joi.object().keys(CustomerOrderCreateManyCustomerInputEnvelopeSchemaObject),
  connect: Joi.alternatives().try(Joi.object().keys(CustomerOrderWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(CustomerOrderWhereUniqueInputSchemaObject)))
}