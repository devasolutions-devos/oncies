import { db } from "../db/db.ts";
import type { Product } from "../types/Product.ts";

export class ProductModel {
    static getAll(): Promise<Product[]> {
        return new Promise((resolve, reject) => {
            db.all(
                "SELECT * FROM products WHERE active = 1",
                [],
                (err, rows) => {
                    if(err) {
                        return reject(err);
                    }

                    resolve(rows as Product[]);
                }
            );
        });
    }

    static create(product: Product): Promise<number> {
        return new Promise((resolve, reject) => {
            db.run(
                `
                INSERT INTO products
                (name, description, category, size, style, color, price, stock, image_url, active)
                VALUES (?,?,?,?,?,?,?,?,?,?)
                `,
                [
                    product.name,
                    product.description,
                    product.category,
                    product.size,
                    product.style,
                    product.color,
                    product.price,
                    product.stock,
                    product.image_url,
                    product.active,
                ],
                function (err) {
                    if(err) {
                        console.error(err);
                        console.error(err.message);
                        return reject(err);
                    }

                    resolve(this.lastID);
                }
            )
        });
    }
}