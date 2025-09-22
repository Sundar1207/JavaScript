// Seletction Elemts 6 Type 

// selceting with teg names
let heading = document.getElementsByTagName("h1")
console.log(heading);

// Selecting with class 
let paras= document.getElementsByClassName("para")
console.log(paras);

// Seletct with id 
let uniq_para= document.getElementById("uniq-para")
console.log(uniq_para);

// selecting With Name 
let names=document.getElementsByName("input-1")
console.log(names);

// with quary  
let quary= document.querySelector("h1")
console.log(quary);
// with quary -class and id , 
let allquary=document.querySelectorAll("uniq-para")
console.log(allquary);

let newelement=document.createElement("h2").innerText="Complete Selecting"
document.body.append(newelement)