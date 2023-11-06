// @ts-nocheck
import Joi from 'joi';
import { CustomerOrderWhereUniqueInputSchemaObject } from './CustomerOrderWhereUniqueInput.schema';
import { CustomerOrderCreateWithoutCustomerInputSchemaObject } from './CustomerOrderCreateWithoutCustomerInput.schema';
import { CustomerOrderUncheckedCreateWithoutCustomerInputSchemaObject } from './CustomerOrderUncheckedCreateWithoutCustomerInput.schema'

export const CustomerOrderCreateOrConnectWithoutCustomerInputSchemaObject = {
    where: Joi.object().keys(CustomerOrderWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(Joi.object().keys(CustomerOrderCreateWithoutCustomerInputSchemaObject),
Joi.object().keys(CustomerOrderUncheckedCreateWithoutCustomerInputSchemaObject))
}