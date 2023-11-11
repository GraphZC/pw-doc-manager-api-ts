import Joi from 'joi';
import { ServiceDayWhereInputSchemaObject } from './objects'

export const ServiceDayDeleteManySchema = Joi.object().keys({ where: Joi.object().keys(ServiceDayWhereInputSchemaObject)  }).required()