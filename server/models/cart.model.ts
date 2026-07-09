import { db } from "../db/db.ts";
import type { Cart } from "../types/Cart.ts";

export class CartModel {
    static getAll(): Promise<Cart[]> {
        return new Promise((resolve, reject) => {
            db.all(
                "SELECT * FROM carts",
                [],
                (err, rows) => {
                    if(err) {
                        return reject(err);
                    }

                    resolve(rows as Cart[]);
                }
            )
        })
    }

    static create(cart: Cart): Promise<number> {
        return new Promise((resolve, reject) => {
            db.run(
                `
                INSERT INTO carts
                (session_id)
                VALUES(?)
                `,
                [
                    cart.session_id,
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
        })
    }
}