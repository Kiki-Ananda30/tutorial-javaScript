/* ⁡⁢⁣⁣MATH OBJECT⁡ */

// ⁡⁣⁣⁢Apa itu Math Object, Math Object di javascript adalah objek bawaan yang berisi berbagai properti dan metode untuk melakukan operasi matematika⁡

// * ⁡⁣⁢⁣Math.PI: Mengembalikan nilai π (3.14159...).⁡
console.log(Math.PI); // ⁡⁢⁢⁢output: 3.141592653589793⁡
// * ⁡⁣⁢⁣Math.E: Mengembalikan nilai konstanta Euler (2.718...)⁡
console.log(Math.E); // ⁡⁢⁢⁢output: 2.718281828459045⁡

// ⁡⁣⁢⁡⁣⁣⁢Metode Math⁡
// ⁡⁣⁢⁣Nilai absolute⁡
console.log(Math.abs(-8)); // ⁡⁢⁢⁢output: 8

// ⁡⁣⁢⁣Nilai perpangkatan⁡
console.log(Math.pow(3, 3)); // ⁡⁢⁢⁢output: 27

// ⁡⁣⁢⁣Nilai akar⁡
console.log(Math.sqrt(16)); // ⁡⁢⁢⁢output: 4

// ⁡⁣⁢⁣Nilai pangkat dari sebuah angka⁡
console.log(Math.cbrt(1000)); // ⁡⁢⁢⁢output: 10

//  ⁡⁣⁢⁣Mencari nilai maximum⁡
console.log(Math.max(10, 3, 24, 6, 18, 13)); // ⁡⁢⁢⁢output: 24

// ⁡⁣⁢⁣Mencari nilai minimum⁡
console.log(Math.min(10, 3, 24, 6, 18, 13)); // ⁡⁢⁢⁢output: 3

// ⁡⁣⁣⁢Pembulatan angka⁡
// ⁡⁣⁢⁣Membulatkan angka ke atas atau yang paling mendekati⁡
// console.log(Math.round(27.3)); // ⁡⁢⁢⁢output: 27⁡
// console.log(Math.round(27.7)); // ⁡⁢⁢⁢output: 28⁡
// console.log(Math.round(3.49)); // ⁡⁢⁢⁢output: 3⁡

// ⁡⁣⁢⁣membulatkan angka ke ATAS ke bilangan bulat terdekat⁡
console.log(Math.ceil(6.0001)); // ⁡⁢⁢⁢output: 7⁡
console.log(Math.ceil(6.0)); // ⁡⁢⁢⁢output: 6⁡

// ⁡⁣⁢⁣metode membulatkan angka KE BAWAH ke bilangan bulat terdekat⁡
console.log(Math.floor(13.007)); // ⁡⁢⁢⁢output: 13⁡
console.log(Math.floor(13.0)); // ⁡⁢⁢⁢output: 13⁡

// ⁡⁣⁢⁣metode menghapus desimal (TIDAK membulatkan angka)⁡
console.log(Math.trunc(4.999)); //

// ⁡⁣⁣⁢Random number⁡

console.log(Math.random());
console.log(Math.round(Math.random() * 100));
