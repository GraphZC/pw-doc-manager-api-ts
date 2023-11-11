import Prisma from "./prisma";

const prisma = Prisma.client();

const getAllBills = async () => {
    const bills = await prisma.customerOrder.findMany({
        include: {
            customer: true,
            employee: true,
            invoice: true,
            purchase: {
                include: {
                    product: true,
                    pool: true,
                }
            }
        },
        orderBy: {
            createdAt: 'desc',
        }
    });

    return bills;
}

const findBillById = async (id: string) => {
    const bill = await prisma.customerOrder.findUnique({
        where: {
            id,
        },
        include: {
            customer: true,
            employee: true,
            invoice: true,
            purchase: {
                include: {
                    product: true,
                    pool: true,
                }
            }
        }
    });

    return bill;
}

const createBill = async (data: {
    customerId: string;
    employeeId: string;
    invoice: {
        vatIncluded?: boolean;
    }
    purchase: {
        productId?: string;
        poolId?: string;
        quantity: number;
    }[];
    
}) => {
    const invoice = await prisma.invoice.create({
        data: {
            vatIncluded: data.invoice.vatIncluded,
        }
    });

    const customerOrder = await prisma.customerOrder.create({
        data: {
            customerId: data.customerId,
            employeeId: data.employeeId,
            invoiceId: invoice.id,
        }
    });

    await Promise.all(data.purchase.map(async (item) => {
        item.productId ? await prisma.product.findUnique({
            where: {
                id: item.productId,
            }
        }) : null;

        item.poolId ? await prisma.pool.findUnique({
            where: {
                id: item.poolId,
            }
        }) : null;

        const purchase = await prisma.purchase.create({
            data: {
                customerOrderId: customerOrder.id,
                productId: item.productId,
                poolId: item.poolId,
                quantity: Number(item.quantity),
            }
        });

        return purchase;
    }));

    return await findBillById(customerOrder.id);
}

const deleteBill = async (id: string) => {
    const customerOrder = await prisma.customerOrder.findUnique({
        where: {
            id,
        }
    });

    await prisma.purchase.deleteMany({
        where: {
            customerOrderId: id,
        }
    });

    const deletedCustomerOrder = await prisma.customerOrder.delete({
        where: {
            id,
        }
    });

    await prisma.invoice.delete({
        where: {
            id: customerOrder?.invoiceId,
        }
    });

    return deletedCustomerOrder;
}

const issueReceipt = async (id: string) => {
    const customerOrder = await prisma.customerOrder.update({
        where: {
            id,
        },
        data: {
            invoice: {
                update: {
                    paidAt: new Date(),
                }
            }
        },
        include: {
            customer: true,
            employee: true,
            invoice: true,
            purchase: {
                include: {
                    product: true,
                    pool: true,
                }
            }
        }
    });

    return customerOrder;
}

export default {
    getAllBills,
    findBillById,
    createBill,
    deleteBill,
    issueReceipt,
}