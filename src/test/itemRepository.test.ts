import { ItemRepository } from "../main/itemRepository";
import { Currency } from "../main/currency";
import { Item } from "../main/item";

describe("Item Repository", () => {
    const item: Item = { id: 10002, name: "The Hobbit", price: 5, currency: Currency.GBP }

    it("Should get an item from the repository by its name", () => {
        const itemRepository = new ItemRepository();
        expect(itemRepository.getItemByName("The Hobbit")).toEqual(item);
    })
})