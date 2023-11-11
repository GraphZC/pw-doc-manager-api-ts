import Joi from 'joi';
import { ServiceDayWhereUniqueInputSchemaObject } from './objects'

export const ServiceDayFindUniqueSchema = Joi.object().keys({ where: Joi.object().keys(ServiceDayWhereUniqueInputSchemaObject) }).required()