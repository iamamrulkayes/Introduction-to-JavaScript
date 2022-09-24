var price = 100;
console.log(typeof price);
// Result: number

var price = '100';
console.log(typeof price);
// Result: string

var isHappy = true;
console.log(typeof isHappy);
// Result: boolean

var romantic;
console.log(typeof romantic);
// Result: undefined

// Advanced
var num1 = 0.1;
var num2 = 0.2;
var sum = num1 + num2;
console.log(sum);
// Result: 0.30000000000000004

// Fixed Result
var num1 = 0.1;
var num2 = 0.2;
var sum = num1 + num2;
sum = sum.toFixed(1);
sum = parseFloat(sum);
console.log(sum);
//Result: 0.3