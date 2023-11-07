import { PoolCreateSchema, PoolUpdateOneSchema, ServiceDayUpdateOneSchema } from '@/schema/joi';
import poolService from '@/services/poolService';
import type { Request, Response } from 'express';

export const getAllPools = async (req: Request, res: Response) => {
    const pools = await poolService.getAllPools();

    return res.status(200).json(pools);
}

export const getPoolById = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const pool = await poolService.findPoolById(id);

        if (!pool) {
            return res.status(404).json({
                message: 'Pool not found',
            });
        }

        return res.status(200).json(pool);
    } catch (error) {
        return res.status(400).json({
            message: 'Invalid id',
        });
    }
}

export const createPool = async (req: Request, res: Response) => {
    const { body } = req;

    const { value: pool, error: dayError } = PoolCreateSchema.unknown(true).validate({
        address: body.address,
        price: Number(body.price),
        chemicalIncluded: body.chemicalIncluded.toString().toLowerCase() === 'true',
        inService: body.inService.toString().toLowerCase() === 'true',
        customerId: body.customerId,
        type: body.type,
    });

    const { value: serviceDay, error: serviceError } = ServiceDayUpdateOneSchema.unknown(true).validate({
        monday: body.serviceDay.monday.toString().toLowerCase() === 'true',
        tuesday: body.serviceDay.tuesday.toString().toLowerCase() === 'true',
        wednesday: body.serviceDay.wednesday.toString().toLowerCase() === 'true',
        thursday: body.serviceDay.thursday.toString().toLowerCase() === 'true',
        friday: body.serviceDay.friday.toString().toLowerCase() === 'true',
        saturday: body.serviceDay.saturday.toString().toLowerCase() === 'true',
        sunday: body.serviceDay.sunday.toString().toLowerCase() === 'true',
    });

    if (dayError || serviceError) {
        return res.status(400).json({
            message: dayError?.message || serviceError?.message,
        });
    }

    const newPool = await poolService.createPool(pool, serviceDay);

    if (!newPool) {
        return res.status(404).json({
            message: 'Fail to create pool',
        });
    }

    return res.status(201).json(pool);
}

export const updatePoolById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;

    const { value: pool, error: dayError } = PoolUpdateOneSchema.unknown(true).validate(body);
    const { value: serviceDay, error: serviceError } = ServiceDayUpdateOneSchema.unknown(true).validate(body.serviceDay);

    if (dayError || serviceError) {
        return res.status(400).json({
            message: dayError?.message || serviceError?.message,
        });
    }

    const updatedPool = await poolService.updatePool(id, pool, serviceDay);

    if (!updatedPool) {
        return res.status(404).json({
            message: 'Fail to update pool',
        });
    }

    return res.status(200).json(updatedPool);
}

export const deletePoolById = async (req: Request, res: Response) => {
    const { id } = req.params;

    const deletedPool = await poolService.deletePoolById(id);

    if (!deletedPool) {
        return res.status(404).json({
            message: 'Fail to delete pool',
        });
    }

    return res.status(200).json(deletedPool);
}
 