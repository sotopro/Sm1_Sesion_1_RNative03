// console.log('Hello World!')
// let d = new Date();
// console.log("Today's date is " + d);
// document.body.innerHTML = "<h1>Today's date is" + d + "</h1>";
// document.body.style.backgroundColor = 'lightblue';
// document.body.style.color = 'white';

// let p = document.createElement('p');
// let t = document.createTextNode("this is a Text");
// p.appendChild(t)

// ejecuta caja de texto y retorna en un pop up el saludo y el nombre

/**
 * 
 */

// let name = prompt("What's your name?")
// alert('Hello, ' + name + '!');
const threeLines = "This is a string\nthat spans across\nthree lines."
console.log('threeLines length', threeLines.length);
console.log('threeLines upper Case', threeLines.toUpperCase());
const threeLineUpperCase = threeLines.toUpperCase();
console.log('threeLines upper Case', threeLineUpperCase.toLowerCase());


const stringObject = new String("A new string");
// typeof stringObject;
console.log('threeLines', typeof threeLines);
console.log('stringObject', typeof stringObject);

const tooMuchWhitespace = "          How are you?     ";
console.log('tooMuchWhitespace', tooMuchWhitespace.trim())
const originalString = "How are you?"
console.log('newString', originalString.replace('How', 'Where'))
String(true); // "true";
(false).toString(); // "false"
let blows = 600;
blows.toString(); // "600"
Number("1999") // 1999
Number("5 - 4 + Hola") // Not a Number (NaN)
Number("") // return 0
Number(false) // return 0
Number(true) // return 1
Boolean(0) // false
Boolean("") // false
Boolean(undefined) // false
Boolean(NaN) // false
Boolean(null) // false
Boolean([]) // false
Boolean({}) // true
Boolean(200) // true
Boolean("  ") // true;
Boolean("Hello") // true
Boolean("0") // true

// alert(`Hello ${name}`);
// alert(threeLines)

let cash = 987e8; // t is a number
let time = 16; // t is a number
// let name = 'Teresa' // name is a string

let isStudent = true; // isStudent is a Boolean

// 500 > 100 // true
// 4 < 2 // false
// 500 = 400 // false
let myBool = 5 > 8 // false;
let t; // t is undefined

let x = 20 / "Shark" // x will be NaN
let fish = ["shark", 'cuttlefish', "eel", "clowfish"]; // array


let data = {
    firstName: 'Daniel',
    lastName: 'Soto',
    age: 28,
    color: 'blue',
    isStudent: false,
    hobbies: ["soccer", "basketball", "gaming"]
}

let o = "Ocean" + 5 + 3;
let c = "Ocean" + "Blue";
let oc = 5 + 3 + "Ocean";
console.log('o', o);
console.log('c', c);
console.log('oc', oc)
