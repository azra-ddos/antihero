/* ============================================================
   ANTIHERO — Data Proyek / Karya
   ============================================================
   File ini yang dibaca oleh index.html untuk menampilkan daftar
   proyek di bagian "Karya Kami". TIDAK perlu edit HTML sama sekali.

   CARA TAMBAH PROYEK BARU:
   - Copy salah satu blok { ... } di bawah, paste di atas atau
     bawahnya, lalu ganti isinya. Jangan lupa koma (,) antar blok.

   CARA HAPUS PROYEK:
   - Hapus saja blok { ... } miliknya (termasuk koma setelahnya).

   FIELD:
   - title : nama proyek (wajib diisi)
   - url   : link ke website-nya (boleh dikosongkan "" kalau belum ada)
   - image : path/URL screenshot (boleh dikosongkan "" kalau belum ada;
             taruh file gambar di folder yang sama lalu tulis nama
             filenya, contoh: "karya/proyek1.jpg")
   ============================================================ */

const ANTIHERO_PROJECTS = [
  {
    title: "Azra Bot",
    url: "",
    image: "karya/azra-bot.jpg"
  },
  {
    title: "Code Obfuscator",
    url: "",
    image: "karya/obfuscator.jpg"
  },
  {
    title: "Proyek Baru",
    url: "",
    image: ""
  }
];
