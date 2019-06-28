function dies() {
    return (Math.random() * 10) > 4;
}

function flip() {
    var number = document.getElementById("number").value;
    var div = document.getElementById("flips");	
    div.innerHTML = "";	
    
    var list = document.createElement("ul");
    list.setAttribute("class", "list-group");
    
    var header = document.createElement("li");
    header.setAttribute("class", "list-group-item");
    header.appendChild(document.createTextNode("Results:"));
    list.appendChild(header);

    var i;
    for(i=1; i<=number; i++) {
        var item = document.createElement("li");

        var text;
        if(dies()) {
            item.setAttribute("class", "list-group-item list-group-item-danger");
            text = document.createTextNode(i + ". Dies!");
        }
        else {
            item.setAttribute("class", "list-group-item list-group-item-success");
            text = document.createTextNode(i + ". Survives!");

        }

        item.appendChild(text);
        list.appendChild(item);
    }
    div.appendChild(list);
}