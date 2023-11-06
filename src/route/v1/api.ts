import { Router } from "express"
import { healthCheck } from "@/controller/controller";
import { login, refreshToken } from "@/controller/authController";
import { getAllEmployees, updateEmployeeById, createEmployee , getEmployeeById, deleteEmployeeById } from "@/controller/employeeController";
import { getCustomerById, getAllCustomers, createCustomer, updateCustomerById, deleteCustomerById } from "@/controller/customerController";
import authMiddleware from "@/middleware/authMiddleware";

const apiRouter = (): Router => {
    const api = Router();

    api.get('/', healthCheck);
    
    // Authentication
    api.post('/auth/login', login);
    api.post('/auth/refresh', refreshToken)

    // Employee
    api.get('/employee', authMiddleware, getAllEmployees);
    api.get('/employee/:id', authMiddleware, getEmployeeById);
    api.post('/employee', authMiddleware, createEmployee);
    api.put('/employee/:id', authMiddleware, updateEmployeeById);
    api.delete('/employee/:id', authMiddleware, deleteEmployeeById);

    // Customer
    api.get('/customer', authMiddleware, getAllCustomers);
    api.get('/customer/:id', authMiddleware, getCustomerById);
    api.post('/customer', authMiddleware, createCustomer);
    api.put('/customer/:id', authMiddleware, updateCustomerById);
    api.delete('/customer/:id', authMiddleware, deleteCustomerById);


    return api;
}

export default apiRouter;