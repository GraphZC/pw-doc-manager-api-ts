import employeeService from "@/services/employeeService";
import { Request, Response } from "express";
import { EmployeeRole } from "@prisma/client";
import { EmployeeCreateSchema, EmployeeUpdateOneSchema } from "@/schema/joi";

export const createEmployee = async (req: Request, res: Response) => {
    const { body } = req;
    const { value, error } = EmployeeCreateSchema.unknown(true).validate(body);

    if (error) {
        return res.status(400).json({
            message: error.message
        });
    }

    if (await employeeService.isEmployeeExist(value.username)) {
        return res.status(400).json({
            message: "Username already exist"
        });
    }

    const employee = await employeeService.createEmployee(value);

    if (!employee) {
        return res.status(500).json({
            message: "Cannot create employee"
        });
    }

    return res.status(200).json(employee);
}

export const getAllEmployees = async (req: Request, res: Response) => {
    const employees = await employeeService.getAllEmployees();

    return res.status(200).json(employees);
}

export const getEmployeeById = async (req: Request, res: Response) => {
    const { id } = req.params;

    const employee = await employeeService.findEmployeeById(id);

    if (!employee) {
        return res.status(404).json({
            message: "Employee not found"
        });
    }

    return res.status(200).json(employee);
}

export const updateEmployeeById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;

    const { value, error } = EmployeeUpdateOneSchema.unknown(true).validate(body);

    if (error) {
        return res.status(400).json({
            message: error.message
        });
    }

    const employee = await employeeService.updateEmployeeById(id, value);

    if (!employee) {
        return res.status(404).json({
            message: "Employee not found"
        });
    }

    return res.status(200).json(employee);
}

export const deleteEmployeeById = async (req: Request, res: Response) => {
    const { id } = req.params;

    const employee = await employeeService.deleteEmployeeById(id);

    if (!employee) {
        return res.status(404).json({
            message: "Employee not found"
        });
    }

    return res.status(200).json(employee);
}