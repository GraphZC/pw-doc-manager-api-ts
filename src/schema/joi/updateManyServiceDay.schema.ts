import Joi from 'joi';
import { ServiceDayUpdateManyMutationInputSchemaObject, ServiceDayWhereInputSchemaObject } from './objects'

export const ServiceDayUpdateManySchema = Joi.object().keys({ data: Joi.object().keys(ServiceDayUpdateManyMutationInputSchemaObject), where: Joi.object().keys(ServiceDayWhereInputSchemaObject)  }).required()