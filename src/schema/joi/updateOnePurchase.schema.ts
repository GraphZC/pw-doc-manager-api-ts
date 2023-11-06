import Joi from 'joi';
import { PurchaseUpdateInputSchemaObject, PurchaseWhereUniqueInputSchemaObject } from './objects'

export const PurchaseUpdateOneSchema = Joi.object().keys({ data: Joi.object().keys(PurchaseUpdateInputSchemaObject), where: Joi.object().keys(PurchaseWhereUniqueInputSchemaObject)  }).required()