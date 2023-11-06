import Joi from 'joi';
import { ServiceDayWhereInputSchemaObject, ServiceDayOrderByWithRelationInputSchemaObject, ServiceDayWhereUniqueInputSchemaObject } from './objects';
import { ServiceDayScalarFieldEnumSchema } from './enums'

export const ServiceDayFindFirstSchema = Joi.object().keys({ where: Joi.object().keys(ServiceDayWhereInputSchemaObject), orderBy: Joi.object().keys(ServiceDayOrderByWithRelationInputSchemaObject), cursor: Joi.object().keys(ServiceDayWhereUniqueInputSchemaObject), take: Joi.number(), skip: Joi.number(), distinct: Joi.array().items(ServiceDayScalarFieldEnumSchema) }).required()