function pre(){

    let perants= document.getElementById("list")

    console.log(perants.childNodes)
    console.log(perants.children)
    console.log(parent.firstChild);
    console.log(parent.lastChild);

    console.log(parent.firstElementChild);
    console.log(parent.lastElementChild);
}
let child = document.getElementById("item1");
console.log(child.parentNode);       // parent (could be any node)
console.log(child.parentElement);    // only parent element

let container = document.getElementById("container");
console.log(container.firstElementChild); // <ul id="list">...</ul>

let mango = document.getElementById("item2");
console.log(mango.previousElementSibling.innerText); // Apple
console.log(mango.nextElementSibling.innerText);     // Orange
console.log(mango.parentElement.id);                 // list
