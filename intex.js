// CharAt
let str="JavaScript"
console.log(str.charAt(0));

// charcodeAt
console.log(str.charCodeAt(3))

// Case Converstion 

// Upper case
console.log(str.toUpperCase())

// Lover case 
console.log(str.toLowerCase())

// Searching  
var str1="Hello World "
console.log(str1.indexOf("e"))
console.log(str1.lastIndexOf("o"))
console.log(str1.includes("Hello"))
console.log(str1.startsWith("Hell"))
console.log(str1.endsWith("rld "))

// Extracting Substrings

console.log(str1.slice(-6))
console.log(str1.substring(0,5))

// Replacing

var str2="I love Program"
console.log(str2.replace("Program","Python"))
console.log(str2.replaceAll("o", "O"))

// Trimming Spaces
let str3= "   Hello   ";

console.log(str3.trim());      // "Hello"
console.log(str3.trimStart()); // "Hello   "
console.log(str3.trimEnd());   // "   Hello"

// Splitting & Joining

let Furit= "apple,banana,orange";


let f= console.log(Furit.split(","))

let Fruits = ["Apple", "Mango", "Orange"];
console.log(Fruits.join("-"))

// Repeating

console.log(str3.repeat(3))

// Template Literals (backticks `)

console.log(`Hello ${str2}!`)
console.log(str.concat(" ",str2))
console.log(str3.padStart(10,"#"))
console.log(str3.padEnd(10,"*"))
