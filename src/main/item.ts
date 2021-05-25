import { Currency } from "./currency";

export interface Item {
    id: number;
    name: string;
    price: number;
    currency: Currency
}