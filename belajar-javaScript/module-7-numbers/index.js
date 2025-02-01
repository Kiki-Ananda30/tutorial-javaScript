let bilanganBulat = 10;
// ⁡⁣⁣console.log(bilanganBulat);

let bilanganPecahan = 27.5;
// ⁡⁣⁣console.log(bilanganPecahan);

bilanganNegatif = -11;
// console.log(bilanganNegatif);

let infinityValue = Infinity;
// ⁡⁣⁣console.log(infinityValue);
let infinityValueNegative = -Infinity;
// ⁡⁣⁣console.log(infinityValueNegative);

let notANumber = NaN;
// ⁡⁣⁣console.log(notANumber, typeof notANumber);

/* ⁡⁢⁢⁢Javascript menyediakan beberapa property pada object number yang berguna:⁡⁡ */
// ⁡⁣⁢⁣1. Number.MAX_VALUE⁡
// console.log(Number.MAX_VALUE);

// ⁡⁢⁢⁡⁣⁢⁣2. Number.MIN_VALUE⁡
// console.log(Number.MIN_VALUE);

// ⁡⁣⁢⁣3. Number.POSITIVE_INFINITY⁡
// console.log(Number.POSITIVE_INFINITY);

// 4. Number.NEGATIVE_INFINITY
// console.log(Number.NEGATIVE_INFINITY);

// 5. Number.NaN
console.log(0 / 0); // or
console.log(Number.NaN); // or
console.log("abc" / 1);

/* ⁡⁢⁢⁢Metode bawaan Number⁡ */
// ⁡⁣⁡⁣⁢⁡⁣⁢⁣1. toString(), mengubah angka menjadi string⁡
let num = 237.3;
console.log(num.toString(), typeof num.toString());

// ⁡⁣⁢⁣2. toFixed(digits), mengubah angka menjadi string dengan jumlah digit desimal yang ditentukan⁡
let decimal = 11.124457;
console.log(decimal.toFixed(2), typeof decimal.toFixed(2));

// ⁡⁣⁢⁣3. toPrecision(digits), mengubah angka menjadi string dengan panjang total yang ditentukan⁡
let number = 5.1234;
console.log(number.toPrecision(4));

// ⁡⁣⁢⁣4. parseInt() dan parseFloat(), mengubah string menjadi angka integer atau floating point⁡
let str = 157;
console.log(parseInt(str), typeof parseInt(str));
let float = 125.7;
console.log(parseFloat(float), typeof parseFloat(float));
