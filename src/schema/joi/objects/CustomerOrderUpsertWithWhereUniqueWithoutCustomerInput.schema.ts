// @ts-nocheck
import Joi from 'joi';
import { CustomerOrderWhereUniqueInputSchemaObject } from './CustomerOrderWhereUniqueInput.schema';
import { CustomerOrderUpdateWithoutCustomerInputSchemaObject } from './CustomerOrderUpdateWithoutCustomerInput.schema';
import { CustomerOrderUncheckedUpdateWithoutCustomerInputSchemaObject } from './CustomerOrderUncheckedUpdateWithoutCustomerInput.schema';
import { CustomerOrderCreateWithoutCustomerInputSchemaObject } from './CustomerOrderCreateWithoutCustomerInput.schema';
import { CustomerOrderUncheckedCreateWithoutCustomerInputSchemaObject } from './CustomerOrderUncheckedCreateWithoutCustomerInput.schema'

export const CustomerOrderUpsertWithWhereUniqueWithoutCustomerInputSchemaObject = {
    where: Joi.object().keys(CustomerOrderWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(CustomerOrderUpdateWithoutCustomerInputSchemaObject),
Joi.object().keys(CustomerOrderUncheckedUpdateWithoutCustomerInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(CustomerOrderCreateWithoutCustomerInputSchemaObject),
Joi.object().keys(CustomerOrderUncheckedCreateWithoutCustomerInputSchemaObject))
}