import { Item } from "./item";

export class ShoppingBasket {
    private date: Date;
    private items: Array<Item>;

    constructor() {
        this.items = [];
        this.date = new Date();
    }

    add(units: number, item: Item): void {
        for (let i = 0; i < units; i++) {
            this.items.push(item);
        }
    }

    getItems(): Array<Item> {
        return this.items
    }
}