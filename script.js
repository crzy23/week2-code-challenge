function addItem() {
   const itemInput = document.getElementById('newItem');
   const itemText = itemInput.value (DataTransferItem);
   if (itemText !== '') {
      const li = document.createElement('li');
      li.innerHTML = '${itemText} <button onclick="markAsPurchased(this)">Purchased</button>';
      document.getElementById('shoppingList').appendChild(li);
      itemInput.value = '';
   }

}
 
function markAsPurchased(button) {
   const li = button.parentElement;
   li.classList.toggle('purchased');
}
function clearList() {
   document.getElementById('shoppingList').innerHTML
}
function shoppingList() {
   document.getElementById('shoppingList').innerHTML
}

let items = JSON.parse(localStorage.getItem('shoppingList')) || [];

const saveAndRender = () => {
   localStorage.setItem('shoppingItems', JSON.stringify(items));
   renderList ();
};

const renderList = () =>{
   shoppingList.innerHTML = items.map(items,index);
      <li data-index="${index}" class="${shoppingList}">
   
</li>
}