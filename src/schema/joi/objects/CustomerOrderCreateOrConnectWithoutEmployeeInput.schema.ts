// @ts-nocheck
import Joi from 'joi';
import { CustomerOrderWhereUniqueInputSchemaObject } from './CustomerOrderWhereUniqueInput.schema';
import { CustomerOrderCreateWithoutEmployeeInputSchemaObject } from './CustomerOrderCreateWithoutEmployeeInput.schema';
import { CustomerOrderUncheckedCreateWithoutEmployeeInputSchemaObject } from './CustomerOrderUncheckedCreateWithoutEmployeeInput.schema'

export const CustomerOrderCreateOrConnectWithoutEmployeeInputSchemaObject = {
    where: Joi.object().keys(CustomerOrderWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(Joi.object().keys(CustomerOrderCreateWithoutEmployeeInputSchemaObject),
Joi.object().keys(CustomerOrderUncheckedCreateWithoutEmployeeInputSchemaObject))
}