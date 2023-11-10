import { Router } from "express"
import { healthCheck } from "@/controller/controller";
import { login, refreshToken } from "@/controller/authController";
import { getAllEmployees, updateEmployeeById, createEmployee , getEmployeeById, deleteEmployeeById } from "@/controller/employeeController";
import { getCustomerById, getAllCustomers, createCustomer, updateCustomerById, deleteCustomerById } from "@/controller/customerController";
import authMiddleware from "@/middleware/authMiddleware";
import { createProduct, deleteProductById, getAllProducts, getProductById, updateProduct } from "@/controller/productController";
import { getAllPools, getPoolById, createPool, updatePoolById, deletePoolById,  } from "@/controller/poolController";
import { createBill, deleteBillById, getAllBills, getBillById, issueReceipt } from "@/controller/billController";

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

    // Product
    api.get('/product', authMiddleware, getAllProducts);
    api.get('/product/:id', authMiddleware, getProductById);
    api.post('/product', authMiddleware, createProduct);
    api.put('/product/:id', authMiddleware, updateProduct);
    api.delete('/product/:id', authMiddleware, deleteProductById);

    // Poolcare
    api.get('/pool', authMiddleware, getAllPools);
    api.get('/pool/:id', authMiddleware, getPoolById);
    api.post('/pool', authMiddleware, createPool);
    api.put('/pool/:id', authMiddleware, updatePoolById);
    api.delete('/pool/:id', authMiddleware, deletePoolById);

    // Bill
    api.get('/bill', authMiddleware, getAllBills);
    api.get('/bill/:id', authMiddleware, getBillById);
    api.post('/bill', authMiddleware, createBill);
    api.delete('/bill/:id', authMiddleware, deleteBillById);
    api.post('/bill/:id/receipt', authMiddleware, issueReceipt);
    return api;
}

export default apiRouter;