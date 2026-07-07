import {Request, Response} from "express";
import { ProductModel } from "../models/product.model";

export class ProductController {

    static async getAll(req: Request, res: Response) {

        try {

            const products = await ProductModel.getAll();

            res.json(products);

        } catch {

            res.sendStatus(500);

        }

    }

    static async create(req: Request, res: Response) {

        try {

            const id = await ProductModel.create(req.body);

            res.status(201).json({ id });

        } catch {

            res.sendStatus(500);

        }

    }

}