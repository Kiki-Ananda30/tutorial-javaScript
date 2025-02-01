// ⁡⁢⁣⁣Date Object di javascript⁡

// ⁡⁣⁣⁢⁡⁢⁣⁣Apa itu Date Object,⁡ ⁡⁣⁣⁢Date Object di javascript digunakan untuk bekerja dengan tanggal dan waktu. Object ini memungkinkan kita untuk, mendapatkan, mengatur,dan memanipulasi tanggal dan waktu.⁡⁡

// ⁡⁣⁣⁢Membuat Date Object⁡
// ⁡⁣⁢⁣Tanggal dan waktu sekarang⁡
let now = new Date();
// console.log(now);

// ⁡⁣⁢⁣Menggunakan string⁡
let specificDate = new Date("January, 27 2025 13:45:00");
// console.log(specificDate);

// ⁡⁣⁣⁡⁣⁢⁣Menggunakan parameter (tahun, bulan, hari, jam, menit, detik, milidetik)⁡⁡
let customDate = new Date(2025, 0, 30, 14, 30); // ⁡⁢⁢⁢bulan dihitung dari nol jadi bulan januari 0⁡
// console.log(customDate);

// ⁡⁣⁣⁡⁣⁢⁣Mengambil informasi tanggal dan waktu⁡
let today = new Date();
// console.log(today.getFullYear());
// console.log(today.getMonth());
// console.log(today.getDate());
// console.log(today.getDay());
// console.log(today.getHours());
// console.log(today.getMinutes());
// console.log(today.getSeconds());
// console.log(today.getMilliseconds());
// console.log(today.getTime()); // ⁡⁢⁢⁢getTime() mengembalikan jumlah milidetik sejak 1 Januari 1970 00:00:00.⁡

// ⁡⁣⁣⁢Mengatur tanggal dan waktu⁡
let date = new Date();

// ⁡⁣⁢⁣Mengatur tahun menjadi 2030⁡
date.setFullYear(2030);

// ⁡⁣⁢⁣Mengatur bulan menjadi desember (11, karena bulan dihitung dari 0)⁡
date.setMonth(11);

// ⁡⁣⁢⁣Mengatur hari menjadi 25⁡
date.setDate(25);
// console.log(date);

// ⁡⁣⁣⁢Perhitungan waktu dengan Date Object⁡
let startDate = new Date(2025, 0, 6, 10, 30);
let endDate = new Date(2025, 1, 2, 10, 30);

let diffTimes = endDate - startDate;
// console.log(diffTimes); // ⁡⁢⁢⁢Hasilnya dalam milliseconds⁡
let diffTimesInDays = diffTimes / (1000 * 3600 * 24);
console.log(diffTimesInDays); // ⁡⁢⁢⁢Hasilnya dalam jumlah hari⁡
