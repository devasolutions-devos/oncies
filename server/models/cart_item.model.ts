import { db } from "../db/db.ts";
import type { CartItem } from "../types/CartItem.ts";

export class CartItemModel {
    static getAll(): Promise<CartItem[]> {
        return new Promise((resolve, reject) => {
            db.all(
                "SELECT * FROM cart_items",
                [],
                (err, rows) => {
                    if(err) {
                        return reject(err);
                    }

                    resolve(rows as CartItem[])
                }
            )
        })
    }

    static create(cartItem: CartItem): Promise<number> {
        return new Promise((resolve, reject) => {
            db.run(
                `
                INSERT INTO cart_items
                (cart_id, product_id, quantity)
                VALUES (?,?,?)
                `,
                [
                    cartItem.cart_id,
                    cartItem.product_id,
                    cartItem.quantity,
                ],
                function(err) {
                    if(err){
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