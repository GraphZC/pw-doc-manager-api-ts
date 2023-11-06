import Joi from 'joi';
import { PurchaseCreateInputSchemaObject } from './objects'

export const PurchaseCreateSchema = Joi.object().keys({ data: Joi.object().keys(PurchaseCreateInputSchemaObject)  }).required()