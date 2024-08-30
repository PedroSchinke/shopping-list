import { createItem } from "./createItem.js";
import { shoppingListIsEmpty } from "./shoppingListIsEmpty.js";
import { purchasedListIsEmpty } from "./purchasedListIsEmpty.js";

export const shoppingList = document.getElementById('shopping-list');
const item = document.getElementById('item-input');

export function addItem(event) {
    event.preventDefault();

    if (item.value.trim() !== '' && item.value !== null) {
        const listItem = createItem(item.value);
        
        shoppingList.appendChild(listItem);
    
        shoppingListIsEmpty(shoppingList);
        purchasedListIsEmpty();
    }

    item.value = '';
}
