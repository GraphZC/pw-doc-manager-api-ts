import { Router } from "express"
import { healthCheck } from "@/controller/controller";
import { login, refreshToken } from "@/controller/authController";
import { getAllEmployees, createEmployee, updateEmployeeById } from "@/controller/employeeController";

const apiRouter = (): Router => {
    const api = Router();

    api.get('/', healthCheck);
    
    // Authentication
    api.post('/auth/login', login);
    api.post('/auth/refresh', refreshToken)

    // Employee
    api.get('/employee', getAllEmployees);
    api.get('/employee/:id', );

    return api;
}

export default apiRouter;