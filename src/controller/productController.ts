import { ProductCreateSchema, ProductUpdateOneSchema } from "@/schema/joi";
import productService from "@/services/productService";
import { Request, Response } from "express";

export const getAllProducts = async (req: Request, res: Response) => {
    const products = await productService.getAllProducts();

    if (!products) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    return res.status(200).json(products);
}

export const getProductById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;

    try {
        const product = await productService.findProductById(id);

        if (!product) {
            return res.status(404).json({
                message: "Product not found"
            });
        }
    
        return res.status(200).json(product);
    } catch (error) {
        return res.status(400).json({
            message: "Invalid id"
        });
    }
}

export const createProduct = async (req: Request, res: Response) => {
    const { body } = req;

    const { value, error } = ProductCreateSchema.unknown(true).validate(body, { convert: true });

    if (error) {
        return res.status(400).json({
            message: error.message
        });
    }

    try {
        const product = await productService.createProduct(value);
    
        return res.status(201).json(product);
    } catch (error) {
        return res.status(400).json({
            message: "Fail to create product"
        });
    }
}

export const updateProduct = async (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;

    const { value, error } = ProductUpdateOneSchema.unknown(true).validate(body, { convert: true });
    console.log(value);
    if (error) {
        return res.status(400).json({
            message: error.message
        });
    }

    try {
        const product = await productService.updateProduct(id, value);

        if (!product) {
            return res.status(404).json({
                message: "Product not found"
            });
        }
    
        return res.status(200).json(product);
    } catch (error) {
        return res.status(400).json({
            message: "Fail to update product"
        });
    }
}

export const deleteProductById = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        if (await productService.findProductById(id) === null) {
            return res.status(404).json({
                message: "Product not found"
            });
        }
        const product = await productService.deleteProduct(id);
    
        if (!product) {
            return res.status(404).json({
                message: "Product not found"
            });
        }
    
        return res.status(200).json(product);
    } catch {
        return res.status(400).json({
            message: "Fail to delete product"
        });
    }
}