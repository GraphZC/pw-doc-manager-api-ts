import Joi from 'joi';
import { ServiceDayWhereInputSchemaObject, ServiceDayOrderByWithAggregationInputSchemaObject, ServiceDayScalarWhereWithAggregatesInputSchemaObject } from './objects';
import { ServiceDayScalarFieldEnumSchema } from './enums'

export const ServiceDayGroupBySchema = Joi.object().keys({ where: Joi.object().keys(ServiceDayWhereInputSchemaObject), orderBy: Joi.object().keys(ServiceDayOrderByWithAggregationInputSchemaObject), having: Joi.object().keys(ServiceDayScalarWhereWithAggregatesInputSchemaObject), take: Joi.number(), skip: Joi.number(), by: Joi.array().items(ServiceDayScalarFieldEnumSchema).required()  }).required()