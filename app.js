// console.log("hello world");
// alert(1 + 1);
// const angka = Math.random();
// console.log(angka);

// if (angka >= 0.5) {
//     console.log("angka lebih besar dari 0.5");
// }

// if (angka <= 0.5) {
//     console.log("angka lebih kecil dari 0.5");
// }

// const iniHari = prompt("Tuliskan hari!!").toLowerCase();

// if (iniHari === "senin") {
//     console.log("Selamat bekerja kawan");
// } else if (iniHari === "sabtu") {
//     console.log("Semoga hari menyenangkan");
// } else{
//     console.log("Yah biasa saja");
// }

// const nilai = 10;

// if (nilai < 50) {
//     console.log("E");
// } else if (nilai < 70) {
//     console.log("D");
// } else if (nilai < 80) {
//     console.log("C");
// } else if (nilai < 90) {
//     console.log("B");
// } else if (nilai < 100) {
//     console.log("A");
// }

// 

// const age = 19;
// const gender = 'male';

// if(gender === 'male' && age === 19) {
//     console.log("Legal");
// }

// const password = prompt('Buat password');

// if(password.length >= 6 && password.indexOf(' ') === -1){
//     console.log("password valid");
// } else {
//     console.log('password tidak valid');
// }

// const barang = {
//     sepatu:  "Addidas",
//     jenis:  "Samba",
//     size:   [31, 32, 33, 38, 40, 41, 43, 44,],
//     lokasiToko: {
//         indonesia: 11,
//         malaysia: 23,
//         singapure: 19
//     }

// }

// const pilihan = 'abcd';

// for ( let i = 1; i <= 10; i++ ){
//     console.log(`${i}. Soal nomor${i}:` );
//     for (let j = 0; j < pilihan.length; j++){
//         console.log(`    ${pilihan[j]}. Pilih jawaban`);
//     }
// }

// const dataSiswa = [
//     ['cimit', 'dolping', 'leo', 'hitam'],
//     ['dolping', 'leo', 'cimit', 'hitam'],
//     ['hitam', 'cimit', 'leo', 'dolping'],
// ]

// for(let i = 0; i < dataSiswa.length; i++){
//     const row = dataSiswa[i];
//     console.log(`seat row ${i + 1}`);
//     for (let j = 0; j < row.length; j++){
//         console.log(`    ${row[j]}`);
//     }
    
// }

// const password = '123456'; 

// let guess = prompt('enter the password!')
// while (guess !== password) {
//     guess = prompt('enter the password!');


// }
// alert('password anda benar!');

let maximum = parseInt(prompt('masukkan nilai!'));
while(!maximum) {
    maximum = parseInt(prompt('masukkan nilai maksimal!'));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = parseInt(prompt('isi tebakan pertama kamu!'));
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    attempts++;
    if (guess > targetNum){
        guess = parseInt(prompt('angka terlalu tinggi, coba lagi'));
    } else{
        guess = parseInt(prompt('angka terlalu kecil, coba lagi !'));
    }
}

alert(`selamat tebakan anda benar!  dengan pecobaan ${attempts} kali`);