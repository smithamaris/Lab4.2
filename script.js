//Task 1: Array Manipulation Basics

// Create an empty array called shoppingList.
// Write a function called addItem that takes an item as a parameter and adds it to the shoppingList array.
// Write a function called removeLastItem that removes the last item from the shoppingList array.
// Write a function called displayList that logs all items in the shoppingList array to the console.

const shoppingList = [];

shoppingList.push("Tissue");
shoppingList.push("Cereal");
shoppingList.push("Cookies");
shoppingList.push("Oatmeal");
shoppingList.push("Yogurt");
shoppingList.push("Kool-aid");


function addItem(item) {
    shoppingList.push(item);
}

function removeLastItem() {
    if (shoppingList.length > 0) {
        return "The shopping list is empty.";
    }
    return shoppingList.pop();
}

console.log(removeLastItem()); 
console.log(shoppingList);   

function displayList() {
    if (shoppingList.length == 0) {
        console.log("Shopping List:");
        shoppingList.forEach((item, index) => {
            console.log(`${index + 1}`);            
        });
    }    
}

//Task 2: Filter and Search an Array
// Modify the addItem function to only add the item if it is not already in the shoppingList array.
// Write a function called filterItems that takes a search term as a parameter and returns all items in the shoppingList that contain that search term (case-insensitive).

function addItem(item) {
  if (!shoppingList.includes(item)) {
    shoppingList.push(item);
    console.log(`${item} added to the shopping list.`);
  } else {
    console.log(`${item} is already in the shopping list.`);
  }
}

function addItem(item) {
const lowerCaseItem = item.toLowerCase();
const exists = shoppingList.some(i => i.toLowerCase() == lowerCaseItem);

if (!exists) {
    shoppingList.push(item);
    console.log(`${item} added to the shopping list.`);
} else {
    console.log(`${item} is already in the shopping list.`);   
}    
}

function filterItems(searchTerm) {
    const result = shoppingList.filter((item) => item.includes(searchTerm))
    console.log(result);   
}
filterItems("Oatmeal")


//Task 3: Render the List in the Browser
// Create an HTML page with an input field, an “Add Item” button, and an unordered list to display the items.
// Write a JavaScript function that adds items to the array and updates the displayed list dynamically when the button is clicked.
// Write another function that removes the last item and updates the displayed list when a “Remove Last Item” button is clicked.

const input = document.getElementById("itemInput");
const addButton = document.getElementById("add-button");
const itemsUl = document.getElementById("shoppingList");
const removeBtn = document.getElementById("remove-btn");

console.log(input);
console.log(addButton);
console.log(itemsUl);


function addAndDisplayItems () {
    // add the item to the array
    shoppingList.push(input.value);
    // console.log(input.value);

    //create a new element,
    let li = document.createElement('li')
    
    //update the element with the text
    li.textContent = input.value;

    //append the new element to the ul
    itemsUl.appendChild(li);

    input.value = " ";   
}

function removeLastItemAndUpdate() {
    // console.log('clicked');
    //remove the last item in the array
    shoppingList.pop();
        console.log(shoppingList)

        itemsUl.lastElementChild.remove();    
}

addButton.addEventListener('click', addAndDisplayItems);
removeBtn.addEventListener('click', removeLastItemAndUpdate);

