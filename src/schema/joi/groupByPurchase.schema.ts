import Joi from 'joi';
import { PurchaseWhereInputSchemaObject, PurchaseOrderByWithAggregationInputSchemaObject, PurchaseScalarWhereWithAggregatesInputSchemaObject } from './objects';
import { PurchaseScalarFieldEnumSchema } from './enums'

export const PurchaseGroupBySchema = Joi.object().keys({ where: Joi.object().keys(PurchaseWhereInputSchemaObject), orderBy: Joi.object().keys(PurchaseOrderByWithAggregationInputSchemaObject), having: Joi.object().keys(PurchaseScalarWhereWithAggregatesInputSchemaObject), take: Joi.number(), skip: Joi.number(), by: Joi.array().items(PurchaseScalarFieldEnumSchema).required()  }).required()