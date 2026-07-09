import type { Request, Response } from "express";
import { CartItemModel } from "../models/cart_item.model.ts";

export class CartItemController {
    static async getAll(req: Request, res: Response) {
        try {
            const cartItems = await CartItemModel.getAll();

            res.json(cartItems);
        } catch {
            res.sendStatus(500);
        }
    }

    static async create(req: Request, res: Response) {
        try {
            const id = await CartItemModel.create(req.body);
            res.status(201).json({id});
        } catch(err) {
            console.error(err);
            res.status(500).json({
                message: "Internal Server Error",
                error: err,
            });
        }
    }
}