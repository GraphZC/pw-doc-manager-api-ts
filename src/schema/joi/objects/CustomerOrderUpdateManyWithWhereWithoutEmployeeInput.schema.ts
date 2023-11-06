// @ts-nocheck
import Joi from 'joi';
import { CustomerOrderScalarWhereInputSchemaObject } from './CustomerOrderScalarWhereInput.schema';
import { CustomerOrderUpdateManyMutationInputSchemaObject } from './CustomerOrderUpdateManyMutationInput.schema';
import { CustomerOrderUncheckedUpdateManyWithoutCustomerOrderInputSchemaObject } from './CustomerOrderUncheckedUpdateManyWithoutCustomerOrderInput.schema'

export const CustomerOrderUpdateManyWithWhereWithoutEmployeeInputSchemaObject = {
    where: Joi.object().keys(CustomerOrderScalarWhereInputSchemaObject),
  data: Joi.alternatives().try(Joi.object().keys(CustomerOrderUpdateManyMutationInputSchemaObject),
Joi.object().keys(CustomerOrderUncheckedUpdateManyWithoutCustomerOrderInputSchemaObject))
}