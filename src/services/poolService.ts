import { Pool, ServiceDay } from '@prisma/client';
import Prisma from './prisma';

const prisma = Prisma.client();

const createPool = async (pool: Pool, serviceDay :ServiceDay ) => {
    const newServiceDay = await prisma.serviceDay.create({
        data: {
            monday: serviceDay.monday,
            tuesday: serviceDay.tuesday,
            wednesday: serviceDay.wednesday,
            thursday: serviceDay.thursday,
            friday: serviceDay.friday,
            saturday: serviceDay.saturday,
            sunday: serviceDay.sunday,
        }
    });

    const newPool = await prisma.pool.create({
        data: {
            serviceDayId: newServiceDay.id,
            address: pool.address,
            price: pool.price,
            chemicalIncluded: pool.chemicalIncluded,
            inService: pool.inService,
            type: pool.type,
            customerId: pool.customerId,
        }, 
    });

    const createdPool = await prisma.pool.findUnique({
        where: {
            id: newPool.id,
        },
        include: {
            serviceDay: true,
            customer: true
        }
    });

    return createdPool;
}

const getAllPools = async (): Promise<Pool[]> => {
    const pools = await prisma.pool.findMany({
        include: {
            serviceDay: true,
            customer: true
        },
        orderBy: {
            createdAt: 'desc',
        }
    });

    return pools;
}

const findPoolById = async (id: string): Promise<Pool | null> => {
    const pool = await prisma.pool.findUnique({
        where: {
            id,
        },
        include: {
            serviceDay: true,
            customer: true
        }
    });

    return pool;
}

const updatePool = async (id: string, pool: Pool, serviceDay: ServiceDay): Promise<Pool> => {
    const updatedPool = await prisma.pool.update({
        where: {
            id,
        },
        data: {
            address: pool.address,
            price: pool.price,
            chemicalIncluded: pool.chemicalIncluded,
            inService: pool.inService,
            type: pool.type,
            serviceDay: {
                update: {
                    monday: serviceDay.monday,
                    tuesday: serviceDay.tuesday,
                    wednesday: serviceDay.wednesday,
                    thursday: serviceDay.thursday,
                    friday: serviceDay.friday,
                    saturday: serviceDay.saturday,
                    sunday: serviceDay.sunday,
                }
            }
        },
        include: {
            serviceDay: true,
            customer: true
        }
    });

    return updatedPool;
}

const deletePoolById = async (id: string): Promise<Pool> => {
    const pool = await prisma.pool.delete({
        where: {
            id,
        },
        include: {
            serviceDay: true,
            customer: true
        }
    });

    await prisma.serviceDay.delete({
        where: {
            id: pool.serviceDay!.id
        }
    });

    return pool;
}

export default {
    getAllPools,
    findPoolById,
    createPool,
    updatePool,
    deletePoolById
}