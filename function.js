function myfunctio(number) {
   const num = number + 5
   console.log(num)
   return num;
};

myfunctio()
myfunctio()

function tenTime(number) {

   const num = number * 3
   return num
}

let x = tenTime(4)
console.log(x)

let bigNumber = tenTime(45);
console.log(bigNumber)

function add(a, b) {
   c = a + b;
   return c;
};
const x = add(20, 12);
console.log(x)

function isEven(number) {
   if (number % 2 === 0) {
      return true;
   }
   else {
      return false
   }
}

let even = isEven(5)
let even1 = isEven(50)
console.log(even)
console.log(even1)

function stringEven(str) {

   const size = str.length;
   console.log(str, size);

   if (size % 2 === 0) {
      return true;
   }
   return false

}
let x = stringEven("Dhakap")
console.log(x)

function dort(number, double) {
   if (double === true) {
      let x = number * 2
      return x
   }
   else {
      let y = number * 3;
      return y
   }
}

let a = dort(5, true);
let t = dort(5, false);
console.log(a)
console.log(t)

function sumNUmber(number) {
     let sum = 0
   for (let numbers of number) {
      sum = sum + numbers;
   }
      return sum
}
let sumArray = [12, 10, 10, 50];
let sum = sumNUmber(sumArray);
console.log(sum)

function evenNumber(numbers) {
   for (const number of numbers) {
      const even = []
      if (number % 2 === 0) {
         console.log("This is even number:", number)
         even.push(number)
      }

      return number
   }
}
let numberse = [12, 13, 52, 15];
 evenNumber(numberse);

function getMenu() {
  console.log('Burger, Pizza, Pasta');
}

getMenu()

Prectic Task

function malti(a ) {
  let x = a  ;
  return x
}
let array = [2, 10, 2, 3];
let result = malti(array  );
console.log(result);

function isOddnumber(numbers) {
  const odds = [];
  for (const number of numbers) {
    if (number % 2 !== 0) {
      odds.push(number);
    }
  }
  console.log(odds);
  let sum = 0;
  for (const number of odds) {
  sum = sum + number
  }
  let count = odds.length;
  console.log(sum, count);
  let avg = sum / count;
  return avg;
}
const array = [42, 13, 58, 65, 81, 96,7,5];
const avg = isOddnumber(array);
console.log(avg);

      


