const item = document.getElementById('item-input');
const botaoSalvarItem = document.getElementById('add-button');
const shoppingList = document.getElementById('shopping-list')

botaoSalvarItem.addEventListener('click', addItem);

function addItem(event) {
    event.preventDefault();
    
    const listItem = document.createElement('li');
    const listItemContainer = document.createElement('div');
    listItemContainer.classList.add('list-item-container');

    const itemNameContainer = document.createElement('div');
    const itemName = document.createElement('p');
    itemName.textContent = item.value;
    itemNameContainer.appendChild(itemName);

    const buttonsContainer = document.createElement('div');

    const removeButton = document.createElement('button');
    removeButton.classList.add('action-button');

    const removeImage = document.createElement('img');
    removeImage.src = 'img/delete.svg';
    removeImage.alt = 'Remove';
    removeButton.appendChild(removeImage);
    
    const editButton = document.createElement('button');
    editButton.classList.add('action-button');

    const editImage = document.createElement('img');
    editImage.src = 'img/edit.svg';
    editImage.alt = 'Edit';
    editButton.appendChild(editImage);

    buttonsContainer.appendChild(removeButton);
    buttonsContainer.appendChild(editImage);

    listItemContainer.appendChild(itemNameContainer);
    listItemContainer.appendChild(buttonsContainer);
    listItem.appendChild(listItemContainer);
    
    shoppingList.appendChild(listItem);
}