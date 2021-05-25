import { mock } from "jest-mock-extended";
import { ShoppingBasket } from "../main/shoppingBasket";
import { ItemRepository } from "../main/itemRepository";
import { Currency } from "../main/currency";
import { Item } from "../main/item";

describe("Shopping basket", () => {
    const itemRepository = mock<ItemRepository>();

    const item: Item = {
        id: 1,
        name: "Foo Bar",
        currency: Currency.GBP,
        price: 1
    }
    itemRepository.getItemByName.mockReturnValue(item);

    it("should create a shopping basket with one item in it", () => {
        const shoppingBasket = new ShoppingBasket();
        const item = itemRepository.getItemByName("Foo Bar")
        if (item ) shoppingBasket.add(1, item);
        expect(shoppingBasket.getItems()).toContain(item)
    });
})