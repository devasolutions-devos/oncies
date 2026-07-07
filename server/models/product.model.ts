import { db } from "../db/db";
import { Product } from "../types/Product";

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
                INSERT INTO
                (name, description, category, size, style, color, price, stock, image, active)
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
                    product.image,
                    product.active,
                ],
                function (err) {
                    if(err) {
                        return reject(err);
                    }

                    resolve(this.lastID);
                }
            )
        });
    }
}