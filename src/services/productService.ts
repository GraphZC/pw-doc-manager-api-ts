import Prisma from "./prisma";

const prisma = Prisma.client();

const getAllProducts = async () => {
    const products = await prisma.product.findMany({
        orderBy: {
            createdAt: 'desc',
        }
    });
    return products;
}

const findProductById = async (id: string) => {
    const product = await prisma.product.findUnique({
        where: {
            id,
        }
    });

    return product;
}

const createProduct = async (data: {
    code?: string
    name: string;
    description?: string;
    price: number;
    stock: number;
    unit: string;
}) => {
    const product = await prisma.product.create({
        data: {
            ...data
        }
    });

    return product;
}

const updateProduct = async (id: string, data: {
    code?: string
    name?: string;
    description?: string;
    price?: number;
    stock?: number;
    unit?: string;
}) => {
    const product = await prisma.product.update({
        where: {
            id,
        },
        data: {
            ...data
        }
    });

    return product;
}

const deleteProduct = async (id: string) => {
    const product = await prisma.product.delete({
        where: {
            id,
        }
    });

    return product;
}

export default {
    getAllProducts,
    findProductById,
    createProduct,
    updateProduct,
    deleteProduct
}