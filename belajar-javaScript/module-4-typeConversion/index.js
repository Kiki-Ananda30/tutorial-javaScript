/* Implicit conversion */
let x = "5" - 10;

// Falsy values : 0, "", null, undefined, truthy value : 1
let bool = !0;
let bool1 = !1;

/* Explicit conversion */
let number = 100;
let kutip = number.toString();

let number1 = "200.88";
let numeric = parseFloat(number1);
// let numeric = parseInt(number1);

let bool2 = Boolean(0);

console.log(numeric, typeof numeric);
