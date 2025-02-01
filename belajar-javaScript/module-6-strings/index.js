/* Strings di javascript */
// membuat strings
let doubleQuote = "single quote"; // or 'single quote'
let backtick = `hello world`;

// ⁡⁢⁢Mengakses karakter dalam string
let str = "javascript";
// console.log(str[4]);

// Property dan method dalam string
let str1 = "javaSCRIPT";
// console.log(str1.length); // mengetahui panjang string
// console.log(str1.toUpperCase()); // mengubah string menjadi huruf besar
// console.log(str1.toLowerCase()); // mengubah string menjadi huruf kecil
let testTrim = "     hello world               ";
// console.log(testTrim.trim());

/* Memanipulasi string */
// Concat
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
// console.log(fullName);

// Concat template literals
let fullName1 = `${firstName} ${lastName}`;
// console.log(fullName1);

// Mengambil bagian dalam string
let name = "JohnDoe";
// console.log(name.slice(0, 4));
// console.log(name.substring(4, 7));

// Mengganti bagian dari string
let sayHello = "Hello World";
let replacement = sayHello.replace("World", "Dunia");
// console.log(replacement);

const arr = ["satu", "dua", "tiga", "empat"];
// console.log(arr.join("-"));

const str2 = "satu-dua-tiga-empat";
// console.log(str2.split("-", 3));

/* Pencarian dalam string */
// IndexOf
const loremIpsum =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id aut quibusdam dignissimos nam dolore fugit doloremque facere quis laborum ut.";
let index = loremIpsum.indexOf("sit");
console.log(index);
let lastIndex = loremIpsum.lastIndexOf("dolor");
console.log(lastIndex);
let exists = loremIpsum.includes("consectetur");
console.log(exists);

/* Capitalize first letter challange */
let sayHelloWorld = "hello world";
let capitalH = sayHelloWorld[0].toUpperCase();
let theRest = sayHelloWorld.slice(1);
console.log(capitalH + theRest);
