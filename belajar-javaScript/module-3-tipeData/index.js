/* Tipe-tipe data primitif*/
// String
const nama = "kiki";
const negara = "indonesia";
const paragraf = `nama saya ${nama} dan saya dari ${negara}`;

// Number
const angka = 10;

// Boolean
const benar = true;
const salah = false;

// Undefined
let tidakDiketahui;

// Null
const kosong = null;

// Symbol
const simbol = Symbol("simbol: 1");

// BigInt
const bigInteger = 348258340689534608049568504689045n;

/* Tipe-tipe data reference*/
// Object
const orang = {
  nama: "Kiki",
  umur: 20,
  pekerjaan: "developer",
};

// Array
const hobby = ["membaca", "menulis", "menggambar"];

// Function
function sayHello() {
  return "Hello World!";
}

// const output = sayHello;
// console.log(output, typeof output);

/* Perbedaan tipe data primitive dan tipe data reference */
// Tipe data primitive
let a = 10;
let b = a; // menyimpan salinan dari nilai a, b = 10

a = 20;
/*console.log(b);*/ // b tetap 10

// Tipe data reference
let name = { nama: "Kiki" };
let name1 = name;
name.nama = "Rizki";
console.log(name1);
