//  Arrayb methods 
let arr=[100,200,300,400]

arr.pop()    // Pop()- Remove the last element in array , No arrgument passing 
arr.push(500,600)  //push() - insert the value at last index in array , can feat argument 
console.log(arr)

arr.unshift(0); //unshift can inset the value at index 0 or first elements 
console.log(arr) 
arr.shift();   //shift only caling function no arguments , remove the value  at index 0 or first elements
console.log(arr)

arr.splice(2,1)  // splice(x,y,z)- x: start position , y - no of deleting elements , insert elemnts 
console.log(arr);
arr.splice(2, 0, [300,400])
console.log(arr);
