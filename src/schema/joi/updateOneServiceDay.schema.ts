import Joi from 'joi';
import { ServiceDayUpdateInputSchemaObject, ServiceDayWhereUniqueInputSchemaObject } from './objects'

export const ServiceDayUpdateOneSchema = Joi.object().keys({ data: Joi.object().keys(ServiceDayUpdateInputSchemaObject), where: Joi.object().keys(ServiceDayWhereUniqueInputSchemaObject)  }).required()