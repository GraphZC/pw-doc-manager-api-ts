import Joi from 'joi';

export const CustomerOrderScalarFieldEnumSchema = Joi.string().valid(...["id","customerId","employeeId","invoiceId","createdAt","updatedAt"])