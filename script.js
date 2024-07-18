document.getElementById('addButton').addEventListener('click', addItem);

function addItem() {
    const itemInput = document.getElementById('newItem');
    const itemText = itemInput.value.trim();
    if (itemText !== '') {
        const li = document.createElement('li');
        li.innerHTML = `${itemText} <button onclick="markAsPurchased(this)">Purchased</button>`;
        document.getElementById('shoppingList').appendChild(li);
        itemInput.value = '';
    }
}

function markAsPurchased(button) {
    const li = button.parentElement;
    li.classList.toggle('purchased');
}

function clearList() {
    document.getElementById('shoppingList').innerHTML = '';
}
