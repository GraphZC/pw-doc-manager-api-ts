
import { Employee, EmployeeRole } from "@prisma/client";
import Prisma from "./prisma";
import passwordEncoder from "@/utils/passwordEncoder";

const prisma = Prisma.client()

const getAllEmployees = async (): Promise<Employee[]> => {
    const employees = await prisma.employee.findMany({
        orderBy: {
            createdAt: 'desc',
        }
    });

    return employees;
}

const findEmployeeByUsername = async (username: string): Promise<Employee | null> => {
    const employee = await prisma.employee.findUnique({
        where: {
            username,
        }
    });

    return employee;
}

const isEmployeeExist = async (username: string): Promise<boolean> => {
    const employee = await findEmployeeByUsername(username);
    return !!employee;
};

const findEmployeeById = async (id: string): Promise<Employee | null> => {
    const employee = await prisma.employee.findUnique({
        where: {
            id,
        }
    });

    return employee;
}

const createEmployee = async ({
    username,
    password,
    name,
    role
}: {
    username: string;
    password: string;
    name: string;
    role: EmployeeRole;
}) : Promise<Employee> => {
    const employee = await prisma.employee.create({
        data: {
            username,
            password: passwordEncoder(password),
            name,
            role
        }
    });

    return employee;
}

const deleteEmployeeById = async (id: string): Promise<Employee> => {
    const employee = await prisma.employee.delete({
        where: {
            id,
        }
    });

    return employee;
}

const updateEmployeeById = async (id: string, {
    password,
    name,
    role
}: {
    password?: string;
    name?: string;
    role?: EmployeeRole;
}): Promise<Employee> => {
    if (password) {
        password = passwordEncoder(password);
    }
    const employee = await prisma.employee.update({
        where: {
            id,
        },
        data: {
            password,
            name,
            role
        }
    });

    return employee;
}

export default {
    getAllEmployees,
    findEmployeeByUsername,
    isEmployeeExist,
    findEmployeeById,
    createEmployee,
    deleteEmployeeById,
    updateEmployeeById,
}