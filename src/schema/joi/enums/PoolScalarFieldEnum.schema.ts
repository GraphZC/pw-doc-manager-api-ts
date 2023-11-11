import Joi from 'joi';

export const PoolScalarFieldEnumSchema = Joi.string().valid(...["id","customerId","address","price","chemicalIncluded","type","inService","serviceDayId","createdAt","updatedAt"])