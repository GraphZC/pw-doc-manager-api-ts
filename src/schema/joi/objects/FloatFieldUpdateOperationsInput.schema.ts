// @ts-nocheck
import Joi from 'joi';


export const FloatFieldUpdateOperationsInputSchemaObject = {
    set: Joi.number(),
  increment: Joi.number(),
  decrement: Joi.number(),
  multiply: Joi.number(),
  divide: Joi.number()
}