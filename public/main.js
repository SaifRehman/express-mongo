// alert("HI");
var x = 0;

function increment() {
    x = x + 1;
    return x;
}

function add() {
    var top;
    var input = document.createElement("input");
    input.setAttribute("placeholder", "Item");
    input.setAttribute("class", "list_item");
    input.setAttribute("name", "listItem");
    document.getElementById('list-container').appendChild(input);
    increment();
    // if (x == 1) {
    top = document.getElementById('add-button-wrapper').style.top;
    top = parseFloat(top.substring(0, 6));
    top = top + 52;
    //hao make submit moof? cause it part of the form, the other one aint
    document.getElementById('add-button-wrapper').style.top = String(top) + "px";
    // } else if (x > 1) {
    // top = document.getElementById('add-button-wrapper').style.top;
    // top = parseInt(top.substring(0, 2));
    // top = top + 3;
    // document.getElementById('add-button-wrapper').style.top = String(top) + "px";
    // } else {
    //     return;
    // }
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