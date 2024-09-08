function getMat(num1, num2) {
   if (num1 > num2) {
    return num1
  } else {
    return num2
  }
}

let z = getMat(590,602)
console.log(z)
const jim = 99;
const tim = 96;
const kim =52;

if (jim > tim && jim > kim) {
  console.log("jim is boos",jim);
}
else if (tim > jim && tim > kim) {
  console.log("tim is boos then jim", tim);
}
else {
  console.log("kim is most boos",kim);
}

function getMax(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return num1;
  }
  else if (num2 > num3 && num2 > num3) {
    return num2;
  }
  return num3
}
const x = getMax(12,66,505,)
console.log(x)

const height  = [6, 46, 76, 88, 46, 606];

function getMax(number) {
  let max = number[0];
  for (const num of number) {
    if (num < max) {
      max = num;
    }
  }
  return max;
}
 let x = getMax(height);
 console.log(x)

const phones = [
  { name: 'iPhone', price: 100000, camera: '12px' },
  { name: 'sumsung', price: 20000, camera: '12px' },
  { name: 'wolton', price: 30000, camera: '12px' },
  { name: 'xomi', price: 4000, camera: '12px' },
  { name: 'oppos', price: 50000, camera: '12px' },
];

function getMax(phones) {
  let min = phones[0];
  for (let phone of phones) {
    if (phone.price < min.price) {
      min = phone;
    }
  }
  return min;
}

let y = getMax(phones);

console.log(y);

const fruise = [
  { name: "mango", price: 200 , quantity: 5},
  { name: "banana", price: 100, quantity: 2 },
  { name: "orange", price: 350, quantity: 3 },
  { name: "apple", price: 250, quantity: 4 }
];

function fruitsPrice(Price) {
  
  let total = 0
  for (let fprice of Price) {
    total = total + fprice.price
    
  }
  return total

}

let result = fruitsPrice(fruise);
console.log(result);

const fruise = [
   { name: "mango", price: 200 , quantity: 5},
   { name: "banana", price: 100, quantity: 2 },
  { name: "orange", price: 350, quantity: 3 },
   { name: "apple", price: 250, quantity: 4 }
 ];

function getPrice(price) {
  let total = 0;
  for (const product of price) {
    const thisProduct = product.price * product.quantity;
    total = total + thisProduct
  }
  return total
}


let totalPrice = getPrice(fruise)
console.log(totalPrice);

// discount ######

function discountPrice(quantity) { 
  if (quantity <= 100) {
    const total = quantity * 100;
    return total;
  }

}

function add() { }