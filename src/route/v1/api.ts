import { Router } from "express"
import { healthCheck } from "@/controller/controller";
import { login, refreshToken } from "@/controller/authController";
import { getAllEmployees, updateEmployeeById, createEmployee , getEmployeeById, deleteEmployeeById } from "@/controller/employeeController";

const apiRouter = (): Router => {
    const api = Router();

    api.get('/', healthCheck);
    
    // Authentication
    api.post('/auth/login', login);
    api.post('/auth/refresh', refreshToken)

    // Employee
    api.get('/employee', getAllEmployees);
    api.get('/employee/:id', getEmployeeById);
    api.post('/employee', createEmployee);
    api.put('/employee/:id', updateEmployeeById);
    api.delete('/employee/:id', deleteEmployeeById);

    return api;
}

export default apiRouter;