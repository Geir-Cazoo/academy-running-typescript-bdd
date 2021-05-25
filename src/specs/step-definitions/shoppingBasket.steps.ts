import { defineFeature, loadFeature } from "jest-cucumber";
import { ShoppingBasket } from "../../main/shoppingBasket";
import { ItemRepository } from "../../main/itemRepository";

const feature = loadFeature('./src/specs/features/shoppingBasket.feature')

defineFeature(feature, test => {

    const itemRepository = new ItemRepository();

    test('Client checks the contents of shopping basket', ({ given, and, when, then }) => {
        given(/^customer adds (\d+) units of "(.*)" to the shopping basket$/, (units: number, itemName: string) => {
            const shoppingBasket = new ShoppingBasket();
            shoppingBasket.add(units, itemRepository.getItemByName(itemName));
        });

        and(/^customer add (\d+) units of "(.*)" to the shopping basket$/, (arg0, arg1) => {
            throw new Error("Not Implemented");
        });

        when('customer checks the shopping basket', () => {
            throw new Error("Not Implemented");
        });

        then('the shopping basket should contain', (table) => {
            throw new Error("Not Implemented");
        });
    });


})