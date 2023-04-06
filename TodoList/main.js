const addButton = document.querySelector('.addButton');
var inputValue  = document.querySelector('.input');
const cantainer = document.querySelector('.cantainer');

class item{
    constructor(itemName){
        // create the item div
        this.createDiv(itemName)
    }
    createDiv(itemName){
        let input =  document.createElement('input');
        input.Value = itemName;
        input.disabled = true;
        input.classList.add('item_input');
        input.type = "text";

        let itemBox = document.createElement('div')
        itemBox.classList.add('item')

        let editButton = document.createElement('button');
        editButton.classList.add('editButton');


        let removeButton = document.createElement('button');
        editButton.classList.add('removeButton');

        container.appendChild('itembox')

        itemBox.appendChild(input);
        itemBox.appendChild(editButton);
        itemBox.appendChild(removeButton);

        }
}

new item("sport");
