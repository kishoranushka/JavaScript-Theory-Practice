// const profile = {
//   name: "Anushka Kishor",
//   posts: 195,
//   followers: "569k",
//   following: 4,
// };

// console.log(profile);

// Get user to input a number using prompt("Enter a number : "). Check if the number is a multiple of 5 or not

// let num = prompt("Enter a number : ");
// if (num % 5 == 0) {
//   console.log("Yes, the number is a multiple of 5");
// } else {
//   console.log("Not multiple of 5");
// }

// Qs2. Write a code which can give grades to students according to their scores:
// 80-100, A
// 70-79, B
// 60-69, c
// 50-59, D
// 0-49, F

// let score = prompt("Enter the score of the student:  ");

// if (score >= 90 && score <= 100) {
//   console.log("A");
// } else if (score >= 70 && score <= 89) {
//   console.log("B");
// } else if (score >= 60 && score <= 69) {
//   console.log("C");
// } else if (score >= 50 && score <= 59) {
//   console.log("D");
// } else {
//   console.log("F");
// }

// Qsl. Print all numbers from 0 to 100.

// for (i = 0; i <= 100; i++) {
//   console.log(i);
// }

// let i = 0;
// while (i <= 100) {
//   console.log(i);
//   i++;
// }

// Qsl. Print all numbers from 0 to 100.

// for (let i = 0; i < 100; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

// Qs2.
// Create a game where you start with any random game number. Ask the user to keep
// guessing the game number until the user enters correct value.

// let game_no = 25;
// let guess = prompt("enter any no. to guess : ");

// while (guess != game_no) {
//   prompt("wrong guess! Enter another no. : ");
//   guess = prompt("enter any no. to guess : ");
// }

// if (guess == game_no) {
//   console.log("Well Done!!");
// }

// String
// --------------------------
// Qsl. Prompt the user to enter their full name. Generate a username for them based on the input.
// Start username with @, followed by their full name and ending with the fullname length.
// eg: user name = "shradhakhaprta" , username should be "@shradhakhapra13"

// let name = prompt("Enter your name : ");
// let username = "@" + name + name.length;
// console.log(username);

// Arrays
// -----------
// a = [1, 5, 3, 4];
// console.log(a);
// console.log(a.length);
// console.log(a[2]);

// heroes = ["ironman", "hulk", "spiderman", "captain America"];

// for (let hero of heroes) {
//   console.log(hero);
// }

// Qs. For a given array with marks of students -> [85, 97, 44, 37, 76, 60]
// Find the average marks of the entire class.

// let marks = [1, 2, 3, 4, 5, 6];

// let sum = 0;
// for (i = 0; i < marks.length; i++) {
//   sum = sum + marks[i];
// }

// let avg = sum / marks.length;

// console.log(avg);

// Qs. For a given array with prices of 5 items -> [250, 645, 300, 900, 50].
//  All items have an offer of 10 % OFF on them.Change the array to store final price after applying offer.

// price = [250, 645, 300, 900, 50];

// for (i = 0; i < price.length; i++) {
//   let new_price = price[i] - (10 / 100) * price[i];
//   console.log(`The price of item ${i} = ${new_price}`);

// }

// Array Methods
// ----------------
// push(), pop(),concat(),tostring(),shift(),unshift(),slice(),splice()

// ary = [1, 2, 3, 4];
// ary.push("Anushka");
// console.log(ary);

// ary.push("Kishor");
// console.log(ary);

// ary.pop();
// console.log(ary);
// ary.pop();
// console.log(ary);

// ary2 = ["anushka", "kishor", "brahpuria"];

// new_ary = ary.concat(ary2);
// console.log(new_ary);

// ary = [1, 2, 3, 4];
// console.log(ary.tostring());
// console.log(ary);

// ary.unshift("Anushka");
// console.log(ary);

// ary.shift();
// console.log(ary);

// new_ary = ary.slice(1, 2);
// console.log(new_ary);

// new_ary = ary.slice(1);
// console.log(new_ary);

// new_ary = ary.slice();
// console.log(new_ary);

// ary.splice(1, 1, 101, 102);
// console.log(ary);

// ary.splice(2, 0, 1011);
// console.log(ary);

// ary.splice(1, 1);
// console.log(ary);

// ary.splice(2, 1, 1000);
// console.log(ary);

// Practice Question
// --------------------------
// Qs. Create an array to store companies "Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"
// a.Remove the first company from the array
// b. Remove Uber & Add Ola in its place
// c. Add Amazon at the end

// companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// companies.shift();
// console.log(companies);

// companies.splice(2, 1, "Ola");
// console.log(companies);

// companies.push("Amazon");
// console.log(companies);

// Functions
// ----------------

// function add() {
//   console.log(3 + 4);
// }
// add();

// function add(x, y) {
//   const sum = x + y;
//   return sum;
// }

// let first = Number(prompt("Enter first no.: "));
// console.log(typeof first);
// let second = Number(prompt("Enter second no.: "));
// result = add(first, second);
// console.log(result);

// Arrow Function
// ------------------
// Function to add two numbers using arrow function

// const arrowSum = (a, b) => {
//   console.log(a + b);
// };

// arrowSum(3, 4);

// Function to multiply two numbers using arrow function
// const arrowMul = (a, b) => {
//   console.log(a * b);
// };

// first = prompt("Enter first number : ");
// console.log(typeof first);
// second = prompt("Enter second number : ");
// arrowMul(first, second);

// Practice Question
// ---------------------
// Qs. Create a function using the "function" keyword that takes a String as an argument &
// returns the number of vowels in the string.
// function countVowels(str) {
//   let flag = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (
//       str[i] == "a" ||
//       str[i] == "e" ||
//       str[i] == "i" ||
//       str[i] == "o" ||
//       str[i] == "u"
//     ) {
//       flag++;
//     }
//   }
//   return flag;
// }

// name = prompt("Enter any string : ");
// console.log(countVowels(name));

//Qs. Create an arrow function to perform the same task.
// const countVowels = (str) => {
//   let flag = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (
//       str[i] == "a" ||
//       str[i] == "e" ||
//       str[i] == "i" ||
//       str[i] == "o" ||
//       str[i] == "u"
//     ) {
//       flag++;
//     }
//   }
//   return flag;
// };
// name = prompt("Enter any string : ");
// console.log(countVowels(name));

// forEach loop in JS
// ------------------------

// arr = [1, 2, 3, 4, 5];
// arr.forEach(function printVal(val) {
//   console.log(val);
// });

// arr = [1, 2, 3, 4, 5];
// arr.forEach((val) => {
//   console.log(val);
// });

// arr = [1, 2, 3, 4, 5];
// arr.forEach((val, idx, arr) => {
//   console.log(`The value at ${idx} index is: ${val}`);
//   console.log(arr);
// });

// Practice Question
// -----------------------
// Qs. For a given array of numbers, print the square of each value using the forEach loop.

arr = [1, 2, 3, , 4, 5];
arr.forEach((val) => {
  console.log(`The square of ${val} is ${val ** 2}`);
});
