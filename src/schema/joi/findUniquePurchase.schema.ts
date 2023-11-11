import Joi from 'joi';
import { PurchaseWhereUniqueInputSchemaObject } from './objects'

export const PurchaseFindUniqueSchema = Joi.object().keys({ where: Joi.object().keys(PurchaseWhereUniqueInputSchemaObject) }).required()