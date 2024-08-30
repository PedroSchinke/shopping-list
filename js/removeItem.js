import { purchasedListIsEmpty } from "./purchasedListIsEmpty.js";
import { shoppingListIsEmpty } from "./shoppingListIsEmpty.js";
import { shoppingList } from "./addItem.js";

export const removeItem = (element) => {
    element.remove();

    shoppingListIsEmpty(shoppingList);
    purchasedListIsEmpty();
}