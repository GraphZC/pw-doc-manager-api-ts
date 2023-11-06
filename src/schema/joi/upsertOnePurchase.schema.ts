import Joi from 'joi';
import { PurchaseWhereUniqueInputSchemaObject, PurchaseCreateInputSchemaObject, PurchaseUpdateInputSchemaObject } from './objects'

export const PurchaseUpsertSchema = Joi.object().keys({ where: Joi.object().keys(PurchaseWhereUniqueInputSchemaObject), data: Joi.object().keys(PurchaseCreateInputSchemaObject), update: Joi.object().keys(PurchaseUpdateInputSchemaObject)  }).required()