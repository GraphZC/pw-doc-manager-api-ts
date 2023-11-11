import Joi from 'joi';

export const EmployeeRoleSchema = Joi.string().valid(...["ADMIN","EMPLOYEE"])