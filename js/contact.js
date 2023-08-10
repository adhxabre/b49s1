// console.log("Hello World!");
// alert("Swlsmat oagi");
// document.write("Hello world!");

// variable
// memungkinkan kita untuk menyimpan sebuah data

// var
// let
// const

// var bisa di ubah valuenya dan bisa di deklarasikan ulang
// var gelas = "Air Putih";
// var gelas = "Kopi";
// console.log(gelas);

// let bisa di ubah valuenya, tetapi tidak bisa di deklarasikan ulang
// let mangkok = "Bakso";
// mangkok = "Mie ayam";
// console.log(mangkok);

// const sama sekali tidak bisa di ubah valuenya dan tidak bisa di deklarasikan ulang
// const piring = "Nasi Goreng";
// console.log(piring);

// data type
// let nama = "Abel Dustin"; // string
// let umur = 17; // number
// let isTua = true; // boolean

// nama saya Abel Dustin saya 17 tahun
// console.log("nama saya Abel Dustin saya 17 tahun");
// console.log(`nama saya ${nama} saya ${umur} tahun`); // cara 1 (menggunakan template string)
// console.log("nama saya", nama, "saya", umur, "tahun"); // cara 2 (menggunakan koma)
// console.log("nama saya " + nama + " saya " + umur + " tahun"); // cara 3 (menggunakan plus)

// operator
// let x = 50;
// let y = 20;

// let result = x + y;
// console.log(result);

// condition
// jika nilai 75 atau keatas maka lulus

// let nilai = 75;

// if (nilai >= 75) {
//   console.log("lulus");
// } else {
//   console.log("tidak lulus");
// }

// function
// function atau fungsi adalah suatu rangkaian perintah atau kode
// yang dijalankan ketika fungsinya dipanggil
// function hello() {
//   let bilanganSatu = 50;
//   let bilanganDua = 20;

//   let result = bilanganSatu + bilanganDua;

//   console.log(result);
// }

// pemanggilan fungsi
// hello();

// parameter adalah data yang tidak tetap yang dimasukkan dan diolah dalam suatu fungsi

// function Hello memiliki parameter ()
// dengan parameter yang dimiliki adalah:
// - bilanganSatu
// - bilanganDua
// function Hello(bilanganSatu, bilanganDua) {
//   let result = bilanganSatu + bilanganDua;

//   console.log(result);
//   console.log(bilanganSatu);
//   console.log(bilanganDua);
// }

// Hello(50, 20);

// function dengan nama namaSaya, dengan parameter name
// function namaSaya(name) {
//   console.log(name);
// }

// namaSaya("Abel Dustin");

function submitData() {
  let name = document.getElementById("input-name").value;
  let email = document.getElementById("input-email").value;
  let phone = document.getElementById("input-phone").value;
  let subject = document.getElementById("input-subject").value;
  let message = document.getElementById("input-message").value;

  if (name == "") {
    return alert("Nama harus diisi!");
  } else if (email == "") {
    return alert("Email harus diisi!");
  } else if (phone == "") {
    return alert("Phone harus diisi!");
  } else if (subject == "") {
    return alert("Subject harus dipilih!");
  } else if (message == "") {
    return alert("Message harus diisi!");
  }

  //   console.log(name);
  //   console.log(email);
  //   console.log(phone);
  //   console.log(subject);
  //   console.log(message);

  let emailReceiver = "abeldustin06@gmail.com";

  // <a href="mailto:abeldustin06@gmail.com?subject=Frontend&body=Bebas aja">Send Mail</a>

  let a = document.createElement("a");
  a.href = `mailto:${emailReceiver}?subject=${subject}&body=Halo, nama saya ${name}, ${message}, silakan kontak saya pada nomor ${phone}`;
  a.click();

  // https://mail.google.com/mail/?view=cm&fs=1&to=${emailReceiver}&su=${subject}&body=${message}

  let data = { name, email, phone, subject, message };

  console.log(data);
}
