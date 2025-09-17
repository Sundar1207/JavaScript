//  Spread Operatore and Rest Operatore
// spread operatoe - Used to expand/unpack elements of an array, string, or object into individual elements.
// Rest Operatore - Used to collect/pack multiple arguments into a single array or object.

let name= "Sundar";
let name1="Moorthy"
let fullname=[...name," ",...name1]
console.log(fullname);

let arr=[1,2,3,4,5]
let arr1=[...arr,...name]

console.log(arr1)

let Emp = {
    Name :fullname,
    Reg:192324228,
    Dep:"AI-DS"
}

let id={...Emp, Phone : 9783276324};
console.log(id)
// Rest Operatore 

function SumOf(arr2){

    let sum=arr2.reduce((a,b)=>a+b,0)
    console.log(sum)
}

let arr2 =[1,2,3,4,5,6]
SumOf(arr2)