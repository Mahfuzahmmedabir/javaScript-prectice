let array = [1, 2, 46, 57, 6, 57, 4]
array[3] = 4444;
console.log(array)

let country = 'Bangladesh';
country[0] = 'x'
console.log(country[2])



const drink = "coke";
const drin =  "  coke ";

if (drink.trim() === drin.trim()) {
  console.log("ok all right");
}
else {
  console.log("not ok")
}

let  fristP = "Software";
let   lastP = "Appliction";

let fullp = fristP.concat(" , ").concat(lastP);
console.log(fullp);

let dev = "web development"

let reverse = ''
for (const letter of dev) {
  console.log(letter)
  reverse = letter + reverse;

}

  console.log(reverse);

recap javaseript

// data type
let str = 'string';
let array = ['bmw', 'reang rover', 'vlov'];

let number = (12, 435, 54, 67, 12, 44);

// loop for loop while loop

let num = 1;
for (let i = 0; i < 10; i++){
   console.log(i)

}

const obj = {
  brand: 'apple',
  price: 50,
  color: "cyan",
  isClean: false,
}

obj.brand = "Bmw";
obj["price"] = 100;
obj.price = 200;

const Prices = "price";
obj[Prices] = 3000

console.log(Prices);
console.log(obj)

const techProduct = {
  brand: "apple",
  softwareType: "application",
  sotfName: "vscode",
  number: 34,
  isNew: true,
  computer: {
    name: "windows",
    color: "malti",
    monitor: "mi",
  },
  array: ["Mango", "banana", "apple"]

}

let keysName = Object.values(techProduct);
console.log(keysName)
let y = techProduct.computer.name = "apple1";

let x = techProduct.array[1] = "kiwi"
console.log(x);
console.log(y);
console.log(techProduct.isNew)

const person = {};

person.name = "abir";
person.age = 30;

console.log(person)
let Str = "software";fdfdfgdfgdfgdffdgdfgdffdfdfddddd

Str[0] = "H";
console.log(Str)

const x = "6565";
if (!x.length) {
  console.log("Hey")
} else {
  console.log("Hi")
}

const myObject = {
  a: 1,
  b: 2,
  c: 3
};
for (let prop in myObject) {
  console.log(myObject[prop])
}

let stre = "Mississippi";
console.log(str.indexOf("i", 0));

const colors = {

  red: "#ff0000",
  green: "#00ff00",
  blue: "#0000ff",
  "golden rod": "#daa520"
}
let color = colors["golden rod"];
console.log(color)

const student = {
  name: 'Mahfuz Ahmed',
  id: 9042,
  author: 'Jankar mahbub',
  marks: 60,

};

const x = Object.keys(student).length;
console.log(x)
console.log('softwa');

const object = { a: 1, b: 2, c: 3 };

Object.keys(object).forEach(key => {
  const value = object[key];
  console.log(`Key: ${key}, Value: ${value}`);
});

const scores = { math: 95, science: 88, english: 92 };

Object.values(scores).forEach(value => {
  console.log( Object.keys(scores), value);
});

let friends = ['Elon','Bill','Mark','Warene'];
for (let friend of friends) {
  console.log(friend.length);
}

const numbers = [1, 2, 3, 4, 5, 6, 7,];
const revNumber = []
for (const num of numbers) {
  revNumber.unshift(num)
}
console.log(revNumber)

const numbers = ["mark","elon","bill"];

const reversedNumber = []
for (let i = 0; i < numbers.length; i++){
  const num = numbers[i];
  reversedNumber.unshift(num);

}
console.log(reversedNumber)



console.log(x);

const x  = [];
console.log

