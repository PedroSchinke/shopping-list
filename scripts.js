const item = document.getElementById('item-input');
const botaoSalvarItem = document.getElementById('add-button');
const shoppingList = document.getElementById('shopping-list');
let count = 0;

botaoSalvarItem.addEventListener('click', addItem);

function addItem(event) {
    event.preventDefault();
    
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

    checkboxLabel.addEventListener('click', function(event) {
        const checkboxInput = event.currentTarget.querySelector('.checkbox-input');
        const customCheckbox = event.currentTarget.querySelector('.custom-checkbox');

        if (checkboxInput.checked) {
            customCheckbox.classList.add('checked');
        } else {
            customCheckbox.classList.remove('checked');
        }
    });

    const customCheckbox = document.createElement('div');
    customCheckbox.classList.add('custom-checkbox');
    
    checkboxLabel.appendChild(checkboxInput);
    checkboxLabel.appendChild(customCheckbox);
    checkboxContainer.appendChild(checkboxLabel);
    
    const itemName = document.createElement('p');
    itemName.textContent = item.value;

    itemNameContainer.appendChild(checkboxContainer);
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