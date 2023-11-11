import Joi from 'joi';
import { ServiceDayCreateInputSchemaObject } from './objects'

export const ServiceDayCreateSchema = Joi.object().keys({ data: Joi.object().keys(ServiceDayCreateInputSchemaObject)  }).required()