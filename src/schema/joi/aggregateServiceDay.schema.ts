import Joi from 'joi';
import { ServiceDayWhereInputSchemaObject, ServiceDayOrderByWithRelationInputSchemaObject, ServiceDayWhereUniqueInputSchemaObject } from './objects'

export const ServiceDayAggregateSchema = Joi.object().keys({ where: Joi.object().keys(ServiceDayWhereInputSchemaObject), orderBy: Joi.object().keys(ServiceDayOrderByWithRelationInputSchemaObject), cursor: Joi.object().keys(ServiceDayWhereUniqueInputSchemaObject), take: Joi.number(), skip: Joi.number()  }).required()