import Joi from 'joi';
import { PurchaseUpdateManyMutationInputSchemaObject, PurchaseWhereInputSchemaObject } from './objects'

export const PurchaseUpdateManySchema = Joi.object().keys({ data: Joi.object().keys(PurchaseUpdateManyMutationInputSchemaObject), where: Joi.object().keys(PurchaseWhereInputSchemaObject)  }).required()