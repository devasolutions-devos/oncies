import type { Request, Response } from "express";
import { CartModel } from "../models/cart.model.ts";

export class CartController {
    static async getAll(req: Request, res: Response) {

        try {

            const carts = await CartModel.getAll();

            res.json(carts);
        } catch {

            res.sendStatus(500);

        }
    }

    static async create(req: Request, res: Response) {

        try {
            
            const id = await CartModel.create(req.body)
            res.status(201).json({id});
        } catch (err){

            console.error(err);
            res.status(500).json({
                message: "Internal Server Error",
                error: err
            });
            
        }
    }
}