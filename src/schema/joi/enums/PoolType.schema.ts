import Joi from 'joi';

export const PoolTypeSchema = Joi.string().valid(...["CHLORINE","SALT"])