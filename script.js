const myName = "Zhangir";
const age = 18;
let isStudent = true;
let favoriteColor = 'blue';
console.log('My name is', myName, typeof myName);
console.log(age, typeof age);
console.log(isStudent, typeof isStudent);
favoriteColor = 'darkblue';
console.log("New favorite color:", favoriteColor);

let userName = prompt("What's your name?");
alert('Hello, ' + userName + '!');

const group = 'MT2504';
let greeting = `Hello, My name is ${myName} my group ${group}.`;
console.log(greeting);

let n1 = prompt("Please! Write first number");
let n2 = prompt("Please! Write second number (not to write 0)");
console.log(n1 + n2);

const firstNum = Number(n1);
const secondNum = Number(n2);
console.log("Sum:", firstNum + secondNum);
console.log("Diffrence:", firstNum - secondNum);
console.log("Product:", firstNum * secondNum);
console.log("Quotient:", firstNum / secondNum );
console.log("Reminder:", firstNum % secondNum );

const fullName = 'Zhangir Kadralin';
console.log(fullName.length);
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
console.log(fullName.slice(0, 3));

let counter = 10;
counter++;
counter--;
counter+=5;
counter-=3;
counter*=2;
counter/=4;
console.log(counter);

let dogAge = 2;
let humanAge = ((dogAge - 2) * 4) + 21;
console.log('You doggy age is ' + dogAge,',', humanAge + ' in human age.');

dogAge = 5
humanAge = ((dogAge - 2) * 4) + 21;
console.log('You doggy age is ' + dogAge,',', humanAge + ' in human age.');

function greetUser(name) {
    console.log(`Hello, ${name}!`);

}
greetUser("Tamerlan");
greetUser("Ali");

function calculateSum(a, b) {
    return a + b;

}
console.log('Sum(9,6)=', calculateSum(9, 6));   

function calculateRectangleArea(width, height) {
    return width * height;
}
console.log('Rectagle(4, 6)=', calculateRectangleArea(4, 6));   




