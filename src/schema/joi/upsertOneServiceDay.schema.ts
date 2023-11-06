import Joi from 'joi';
import { ServiceDayWhereUniqueInputSchemaObject, ServiceDayCreateInputSchemaObject, ServiceDayUpdateInputSchemaObject } from './objects'

export const ServiceDayUpsertSchema = Joi.object().keys({ where: Joi.object().keys(ServiceDayWhereUniqueInputSchemaObject), data: Joi.object().keys(ServiceDayCreateInputSchemaObject), update: Joi.object().keys(ServiceDayUpdateInputSchemaObject)  }).required()