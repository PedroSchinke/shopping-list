const purchasedListContainer = document.getElementById('purchased-list-container');
const purchasedList = document.getElementById('purchased-item-list')

export function purchasedListIsEmpty() {
    if (purchasedList.childElementCount === 0) {
        purchasedListContainer.style.display = 'none';
    } else {
        purchasedListContainer.style.display = 'block';
    }
}