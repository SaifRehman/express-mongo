// alert("HI");
var x = 0;

function increment() {
    x = x + 1;
    return x;
}

function add(id) {
    var top;
    parent = document.getElementById(id).parentNode;
    form = parent.previousElementSibling;
    container = form.childNodes[3];
    if (container.id == "add-list-container") {
        container = form.childNodes[3];
    } else {
        container = form.childNodes[5];
    }
    var input = document.createElement("input");
    input.setAttribute("placeholder", "Item");
    input.setAttribute("class", "list_item");
    input.setAttribute("name", "listItem");
    container.appendChild(input);
    increment();
    // console.log(form);
    top = parent.style.top;
    top = parseFloat(top.substring(0, 6));
    top = top + 52;
    parent.style.top = String(top) + "px";
}

// ----- If I want to display the data(not storing it in the database right now) ------ //


/*
var item = [];
var list = [];
var display;

function insert() {
    var name = document.getElementById('name').value;
    var listInput = document.getElementsByClassName('list-item');
    item = [].map.call(listInput, function(listInput) {
        return listInput.value;
    });
    // clearAndShow();
    var list_item = {
        name: name,
        item: item
    };
    list.push(list_item);
    displayData(list);
}

function displayData(list) {
    document.getElementById('load-data').innerHTML += list[0].name + list[0].item;
    return false;
}

*/

// ------------------------------------------------------------------------------------ //