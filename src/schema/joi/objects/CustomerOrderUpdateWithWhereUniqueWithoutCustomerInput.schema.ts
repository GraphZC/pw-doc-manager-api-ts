// @ts-nocheck
import Joi from 'joi';
import { CustomerOrderWhereUniqueInputSchemaObject } from './CustomerOrderWhereUniqueInput.schema';
import { CustomerOrderUpdateWithoutCustomerInputSchemaObject } from './CustomerOrderUpdateWithoutCustomerInput.schema';
import { CustomerOrderUncheckedUpdateWithoutCustomerInputSchemaObject } from './CustomerOrderUncheckedUpdateWithoutCustomerInput.schema'

export const CustomerOrderUpdateWithWhereUniqueWithoutCustomerInputSchemaObject = {
    where: Joi.object().keys(CustomerOrderWhereUniqueInputSchemaObject),
  data: Joi.alternatives().try(Joi.object().keys(CustomerOrderUpdateWithoutCustomerInputSchemaObject),
Joi.object().keys(CustomerOrderUncheckedUpdateWithoutCustomerInputSchemaObject))
}