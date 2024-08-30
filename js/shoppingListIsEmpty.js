const emptyListMessage = document.getElementById('empty-list-message');
const purchasedListContainer = document.getElementById('purchased-list-container');

export function shoppingListIsEmpty(list) {
    if(list.querySelectorAll('li').length === 0) {
        emptyListMessage.style.display = 'block';
    } else {
        emptyListMessage.style.display = 'none';
    }
}