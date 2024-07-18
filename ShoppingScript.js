const shoppingList = document.getElementById('list');
const newItemInput = document.getElementById('new-item');
const addItemButton = document.getElementById('add-item');

let items = [];

addItemButton.addEventListener('click', () => {
    const newItem = newItemInput.value.trim();
    if (newItem) {
        items.push({ text: newItem, completed: false });
        renderItem(newItem);
        newItemInput.value = '';
    }
});

function renderItem(item) {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <span>${item}</span>
        <button class="delete">x</button>
    `;
    listItem.querySelector('.delete').addEventListener('click', () => {
        const index = items.findIndex((i) => i.text === item);
        if (index!== -1) {
            items.splice(index, 1);
            shoppingList.removeChild(listItem);
        }
    });
    shoppingList.appendChild(listItem);
}

// render initial list
items.forEach(renderItem);