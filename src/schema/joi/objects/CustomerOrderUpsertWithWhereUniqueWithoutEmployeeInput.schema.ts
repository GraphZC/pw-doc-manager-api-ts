// @ts-nocheck
import Joi from 'joi';
import { CustomerOrderWhereUniqueInputSchemaObject } from './CustomerOrderWhereUniqueInput.schema';
import { CustomerOrderUpdateWithoutEmployeeInputSchemaObject } from './CustomerOrderUpdateWithoutEmployeeInput.schema';
import { CustomerOrderUncheckedUpdateWithoutEmployeeInputSchemaObject } from './CustomerOrderUncheckedUpdateWithoutEmployeeInput.schema';
import { CustomerOrderCreateWithoutEmployeeInputSchemaObject } from './CustomerOrderCreateWithoutEmployeeInput.schema';
import { CustomerOrderUncheckedCreateWithoutEmployeeInputSchemaObject } from './CustomerOrderUncheckedCreateWithoutEmployeeInput.schema'

export const CustomerOrderUpsertWithWhereUniqueWithoutEmployeeInputSchemaObject = {
    where: Joi.object().keys(CustomerOrderWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(CustomerOrderUpdateWithoutEmployeeInputSchemaObject),
Joi.object().keys(CustomerOrderUncheckedUpdateWithoutEmployeeInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(CustomerOrderCreateWithoutEmployeeInputSchemaObject),
Joi.object().keys(CustomerOrderUncheckedCreateWithoutEmployeeInputSchemaObject))
}