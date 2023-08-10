// let namaSiswa1 = "Bagus";
// let namaSiswa2 = "Guswandi";
// let namaSiswa3 = "Arsya";

// console.log(namaSiswa1);
// console.log(namaSiswa2);
// console.log(namaSiswa3);

// Array
// tabungan value kalian, dimana kalian bisa memiliki lebih dari satu value dalam satu variabel
// let namaSiswa = ["Bagus", "Guswandi", "Arsya", 2023, true];
// console.log(namaSiswa);
// console.log(namaSiswa[1]);
// console.log(namaSiswa[2]);

// let nama = "Bagus";
// let alamat = "Tangerang";
// let umur = 24;

// console.log(nama);
// console.log(alamat);
// console.log(umur);

// Object
// tabungan variabel kalian, dimana kalian bisa memiliki lebih dari satu key-value dalam satu variabel
// contoh = nama: "Bagus", alamat: "Tangerang"
// dimana nama sebagai key dan "Bagus" sebagai value
// let dataPersonal1 = {
//   nama: "Bagus",
//   alamat: "Tangerang",
//   umur: 24,
// };

// let dataPersonal2 = {
//   nama: "Guswandi",
//   alamat: "Padang",
//   umur: 20,
// };

// let dataPersonal3 = {
//   nama: "Arsya",
//   alamat: "Karawang",
//   umur: 17,
// };

// console.log(dataPersonal1);
// console.log(dataPersonal2.nama);
// console.log(dataPersonal3.umur);

// Array of object
// Memperbolehkan kita menyimpan lebih dari satu object dalam satu variabel
// let dataPersonal = [
//   {
//     nama: "Bagus",
//     alamat: "Tangerang",
//     umur: 24,
//   },
//   {
//     nama: "Guswandi",
//     alamat: "Padang",
//     umur: 20,
//   },
//   {
//     nama: "Arsya",
//     alamat: "Karawang",
//     umur: 17,
//   },
// ];

// console.log(dataPersonal);
// console.log(dataPersonal[1]);
// console.log(dataPersonal[2].nama);

// let data = [];

// function addData(event) {
//   // preventDefault
//   // untuk menghindari html menjalankan fungsi yang ia bawa, sebagai contoh refresh page
//   event.preventDefault();

//   let person = {
//     nama: "Maulana",
//     alamat: "Bandung",
//     umur: 24,
//   };

//   // fungsi push adalah memasukkan data baru di dalam sebuah array
//   // sebagai contoh, data person akan dimasukkan ke dalam array data
//   data.push(person, person);

//   console.log(data);
// }

// let data = [];

// function addData(event) {
//   event.preventDefault();

//   let blog = {
//     title: document.getElementById("input-blog-title").value,
//     content: document.getElementById("input-blog-content").value,
//   };

//   data.push(blog);
//   console.log(data);
// }

let dataBlog = [];

function addBlog(event) {
  event.preventDefault();

  let title = document.getElementById("input-blog-title").value;
  let content = document.getElementById("input-blog-content").value;
  let image = document.getElementById("input-blog-image").files;

  image = URL.createObjectURL(image[0]);
  console.log(image);

  let blog = {
    title,
    content,
    image,
    postAt: "10 August 2023",
    author: "Abel Dustiin",
  };

  dataBlog.push(blog);
  console.log(dataBlog);

  renderBlog();
}

function renderBlog() {
  document.getElementById("contents").innerHTML = "";

  for (let index = 0; index < dataBlog.length; index++) {
    console.log(dataBlog[index]);

    document.getElementById("contents").innerHTML += `
      <div class="blog-list-item">
        <div class="blog-image">
          <img src="${dataBlog[index].image}" alt="" />
        </div>
        <div class="blog-content">
          <div class="btn-group">
            <button class="btn-edit">Edit Post</button>
            <button class="btn-post">Delete Post</button>
          </div>
          <h1>
            <a href="blog-detail.html" target="_blank"
              >${dataBlog[index].title}</a
            >
          </h1>
          <div class="detail-blog-content">
            ${dataBlog[index].postAt} | ${dataBlog[index].author}
          </div>
          <p>
            ${dataBlog[index].content}
          </p>
        </div>
      </div>
    `;
  }
}

// looping menggunakan for
// pada () for, value pertama adalah default value
// value kedua merupakan kondisi
// value ketiga akan berjalan ketika kondisi value kedua true
// for (let index = 0; index < dataBlog.length; index++) {
//   console.log(dataBlog[index]);
// }
