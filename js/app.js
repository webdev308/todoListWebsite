function enterTodoBTN() {
    var todo = prompt("Enter Your Todo");

    var parent = document.querySelector("#todoWrapper");
    var paraChild = document.createElement("div");
    var child = document.createElement("p");
    var deleteBTN = document.createElement("button");
    deleteBTN.append(document.createTextNode("X"));
    deleteBTN.classList.add("crossBTN");
    var text = document.createTextNode(todo);

    deleteBTN.addEventListener('click', function() {
        child.classList.add("delete");
    })

    child.appendChild(text);
    child.appendChild(deleteBTN);
    paraChild.appendChild(child);
    parent.appendChild(paraChild);
}