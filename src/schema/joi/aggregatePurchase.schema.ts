import Joi from 'joi';
import { PurchaseWhereInputSchemaObject, PurchaseOrderByWithRelationInputSchemaObject, PurchaseWhereUniqueInputSchemaObject } from './objects'

export const PurchaseAggregateSchema = Joi.object().keys({ where: Joi.object().keys(PurchaseWhereInputSchemaObject), orderBy: Joi.object().keys(PurchaseOrderByWithRelationInputSchemaObject), cursor: Joi.object().keys(PurchaseWhereUniqueInputSchemaObject), take: Joi.number(), skip: Joi.number()  }).required()