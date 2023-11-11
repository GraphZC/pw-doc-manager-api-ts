import billService from "@/services/billService";
import { CustomerOrderCreateSchema } from "@/schema/joi";
import { Request, Response } from "express";

export const getAllBills = async (req: Request, res: Response) => {
    const bills = await billService.getAllBills();

    return res.status(200).json(bills);
}

export const getBillById = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const bill = await billService.findBillById(id);

        if (!bill) {
            return res.status(404).json({
                message: "Bill not found"
            });
        }
    
        return res.status(200).json(bill);
    } catch (error) {
        return res.status(400).json({
            message: "Invalid id"
        });
    }    
}

export const createBill = async (req: Request, res: Response) => {
    const { body } = req;

    const { value, error } = CustomerOrderCreateSchema.unknown(true).validate(body);

    if (error) {
        return res.status(400).json({
            message: error.message
        });
    }

    try {
        const bill = await billService.createBill({ ...value, invoice: { vatIncluded: value.invoice.vatIncluded ?? false }  });
    
        return res.status(201).json(bill);
    } catch (error) {
        return res.status(400).json({
            message: "Fail to create bill"
        });
    }
};

export const deleteBillById = async (req: Request, res: Response) => {
    const { id } = req.params;

    const bill = await billService.deleteBill(id);

    if (!bill) {
        return res.status(404).json({
            message: "Bill not found"
        });
    }

    return res.status(200).json(bill);
}

export const issueReceipt = async (req: Request, res: Response) => {
    const { id } = req.params;

    const bill = await billService.issueReceipt(id);

    if (!bill) {
        return res.status(404).json({
            message: "Bill not found"
        });
    }

    return res.status(200).json(bill);
}