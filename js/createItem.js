import { shoppingList } from './addItem.js';
import { editItem } from './editItem.js';
import { getDateTime } from './getDateTime.js';
import { handleClickOutside } from './handleClickOutside.js';
import { purchasedListIsEmpty } from './purchasedListIsEmpty.js';
import { removeItem } from './removeItem.js';

const purchasedItemlist = document.getElementById('purchased-item-list');
let count = 0;

export function createItem(item) {
    const listItem = document.createElement('li');
    const listItemContainer = document.createElement('div');
    listItemContainer.classList.add('list-item-container');

    const itemNameContainer = document.createElement('div');
    itemNameContainer.classList.add('item-name-container');

    const checkboxContainer = document.createElement('div');
    checkboxContainer.classList.add('checkbox-container');

    const checkboxInput = document.createElement('input');
    checkboxInput.type = 'checkbox';
    checkboxInput.classList.add('checkbox-input');
    checkboxInput.id = 'checkbox-' + count++;

    const checkboxLabel = document.createElement('label');
    checkboxLabel.setAttribute('for', checkboxInput.id);

    const itemName = document.createElement('p');
    itemName.textContent = item;
    itemName.id = 'item-title';

    const editNameinput = document.createElement('input');
    editNameinput.type = 'text';
    editNameinput.id = 'edit-name-input';
    editNameinput.value = item;
    editNameinput.style.display = 'none';

    const saveEditName = document.createElement('button');
    saveEditName.classList.add('save-edit-name-button');
    saveEditName.textContent = 'save';
    saveEditName.style.display = 'none';

    saveEditName.addEventListener('click', function() {
        editItem(itemName, editNameinput);
        itemName.style.display = 'block';
        saveEditName.style.display = 'none';
        editNameinput.style.display = 'none';
    });

    checkboxLabel.addEventListener('click', function(event) {
        const checkboxInput = event.currentTarget.querySelector('.checkbox-input');
        const customCheckbox = event.currentTarget.querySelector('.custom-checkbox');
        const itemTitle = event.currentTarget.closest('li').querySelector('#item-title');

        if (checkboxInput.checked) {
            customCheckbox.classList.add('checked');
            itemTitle.style.textDecoration = 'line-through';
            purchasedItemlist.appendChild(listItem);
            purchasedListIsEmpty();
        } else {
            customCheckbox.classList.remove('checked');
            itemTitle.style.textDecoration = 'none';
            shoppingList.appendChild(listItem);
            purchasedListIsEmpty();
        }
    });

    const customCheckbox = document.createElement('div');
    customCheckbox.classList.add('custom-checkbox');
    
    checkboxLabel.appendChild(checkboxInput);
    checkboxLabel.appendChild(customCheckbox);
    checkboxContainer.appendChild(checkboxLabel);

    itemNameContainer.appendChild(checkboxContainer);
    itemNameContainer.appendChild(itemName);
    itemNameContainer.appendChild(editNameinput);
    itemNameContainer.appendChild(saveEditName);
    
    const buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('buttons-container')

    const removeButton = document.createElement('button');
    removeButton.classList.add('action-button');

    const removeImage = document.createElement('img');
    removeImage.src = 'img/delete.svg';
    removeImage.alt = 'Remove';

    removeButton.addEventListener('click', function() {
        removeItem(listItem);
    });

    removeButton.appendChild(removeImage);
    
    const editButton = document.createElement('button');
    editButton.classList.add('action-button');

    const editImage = document.createElement('img');
    editImage.src = 'img/edit.svg';
    editImage.alt = 'Edit';
    editButton.appendChild(editImage);

    const dateText = document.createElement('p');
    dateText.classList.add('list-item-text');
    dateText.innerText = getDateTime();
    dateText.classList.add('list-item-text');

    editButton.addEventListener('click', function(event) {
        event.stopPropagation();

        itemName.style.display = 'none';

        editNameinput.style.display = 'block';
        editNameinput.focus();

        saveEditName.style.display = 'block';

        handleClickOutside(editNameinput, () => {
            editItem(itemName, editNameinput, dateText);
            itemName.style.display = 'block';
            saveEditName.style.display = 'none';
            editNameinput.style.display = 'none';
        });
    });

    buttonsContainer.appendChild(removeButton);
    buttonsContainer.appendChild(editButton);
    
    listItem.appendChild(dateText);
    
    listItemContainer.appendChild(itemNameContainer);
    listItemContainer.appendChild(buttonsContainer);
    listItem.appendChild(listItemContainer);
    listItem.appendChild(dateText);

    return listItem;
}