import { Item } from "./item";
import { Currency } from "./currency";

export class ItemRepository {
    items: Array<Item>;

    constructor() {
        this.items = [];
        this.initialise();
    }

    private initialise() {
        this.items.push({id: 10001, name: "Lord of the Rings", price: 10, currency: Currency.GBP},
            {id: 10002, name: "The Hobbit", price: 5, currency: Currency.GBP},
            {id: 20002, name: "Game of Thrones", price: 9, currency: Currency.GBP},
            {id: 20110, name: "Breaking Bad", price: 7, currency: Currency.GBP}
        )
    }

    getItemByName(itemName: string): Item | undefined {
        return this.items.find(item => item.name === itemName);
    }
}