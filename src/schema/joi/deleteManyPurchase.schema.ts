import Joi from 'joi';
import { PurchaseWhereInputSchemaObject } from './objects'

export const PurchaseDeleteManySchema = Joi.object().keys({ where: Joi.object().keys(PurchaseWhereInputSchemaObject)  }).required()