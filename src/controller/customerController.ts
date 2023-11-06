import { CustomerCreateSchema } from "@/schema/joi";
import customerService from "@/services/customerService";
import { Request, Response } from "express";

export const getAllCustomers = async (req: Request, res: Response) => {
    const customers = await customerService.getAllCustomers();

    return res.status(200).json(customers);
}

export const getCustomerById = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const customer = await customerService.findCustomerById(id);

        if (!customer) {
            return res.status(404).json({
                message: "Customer not found"
            });
        }
    
        return res.status(200).json(customer);
    } catch (error) {
        return res.status(400).json({
            message: "Invalid id"
        });
    }
    
}

export const createCustomer = async (req: Request, res: Response) => {
    const { body } = req;

    const { value, error } = CustomerCreateSchema.unknown(true).validate(body);

    if (error) {
        return res.status(400).json({
            message: error.message
        });
    }

    try {
        const customer = await customerService.createCustomer(value);
    
        return res.status(201).json(customer);
    } catch (error) {
        return res.status(400).json({
            message: "Fail to create customer"
        });
    }
}

export const updateCustomerById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;

    const { value, error } = CustomerCreateSchema.unknown(true).validate(body);

    if (error) {
        return res.status(400).json({
            message: error.message
        });
    }

    try {
        const customer = await customerService.updateCustomer(id, value);

        if (!customer) {
            return res.status(404).json({
                message: "Customer not found"
            });
        }
    
        return res.status(200).json(customer);
    } catch (error) {
        return res.status(400).json({
            message: "Invalid id"
        });
    }    
}

export const deleteCustomerById = async (req: Request, res: Response) => {
    const { id } = req.params;

    if (await customerService.isCustomerExist(id) === false) {
        return res.status(404).json({
            message: "Customer not found"
        });
    }
    
    try {
        const customer = await customerService.deleteCustomer(id);

        if (!customer) {
            return res.status(404).json({
                message: "Customer not found"
            });
        }

        return res.status(200).json(customer);

    } catch (error) {
        return res.status(400).json({
            message: "Invalid id"
        });
    }
}