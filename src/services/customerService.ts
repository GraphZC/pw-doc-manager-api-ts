import { Customer } from "@prisma/client";
import Prisma from "./prisma";

const prisma = Prisma.client();

const getAllCustomers = async (): Promise<Customer[]> => {
    const customers = await prisma.customer.findMany({});
        console.log(customers);
    return customers;
};

const findCustomerById = async (id: string): Promise<Customer | null> => {
    const customer = await prisma.customer.findUnique({
        where: {
        id,
        },
    });
    return customer;
};

const createCustomer = async (
    data
: {
    name: string;
    address?: string;
    telephone?: string;
    taxId?: string;
}): Promise<Customer> => {
    const customer = await prisma.customer.create({
        data: {
            ...data
        },
    });

    return customer;
}

const updateCustomer = async (
    id: string,
    data
: {
    name?: string;
    address?: string;
    telephone?: string;
    taxId?: string;
}): Promise<Customer> => {
    const customer = await prisma.customer.update({
        where: {
            id,
        },
        data: {
            ...data
        },
    });

    return customer;
}

const deleteCustomer = async (id: string): Promise<Customer> => {
    const customer = await prisma.customer.delete({
        where: {
            id,
        },
    });

    return customer;
}

const isCustomerExist = async (id: string): Promise<boolean> => {
    const customer = await findCustomerById(id);
    return !!customer;
}

export default {
    getAllCustomers,
    findCustomerById,
    createCustomer,
    updateCustomer,
    deleteCustomer,
    isCustomerExist
};