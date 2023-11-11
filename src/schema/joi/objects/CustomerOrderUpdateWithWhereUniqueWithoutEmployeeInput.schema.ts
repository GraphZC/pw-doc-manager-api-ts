// @ts-nocheck
import Joi from 'joi';
import { CustomerOrderWhereUniqueInputSchemaObject } from './CustomerOrderWhereUniqueInput.schema';
import { CustomerOrderUpdateWithoutEmployeeInputSchemaObject } from './CustomerOrderUpdateWithoutEmployeeInput.schema';
import { CustomerOrderUncheckedUpdateWithoutEmployeeInputSchemaObject } from './CustomerOrderUncheckedUpdateWithoutEmployeeInput.schema'

export const CustomerOrderUpdateWithWhereUniqueWithoutEmployeeInputSchemaObject = {
    where: Joi.object().keys(CustomerOrderWhereUniqueInputSchemaObject),
  data: Joi.alternatives().try(Joi.object().keys(CustomerOrderUpdateWithoutEmployeeInputSchemaObject),
Joi.object().keys(CustomerOrderUncheckedUpdateWithoutEmployeeInputSchemaObject))
}