import { EmployeeRole } from "@prisma/client";
import Joi from "joi";

export const createQueueValidation = (body: { 
    username: string;
    password: string;
    name: string;
    role: EmployeeRole;
}) : Joi.ValidationResult => {
    const schema = Joi.object({
        username: Joi.string().required(),
        password: Joi.string().required(),
        name: Joi.string().required(),
        role: Joi.string().valid(EmployeeRole.ADMIN, EmployeeRole.EMPLOYEE).required()
    });

    return schema.validate(body);
};