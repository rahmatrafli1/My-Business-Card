# Business Card

Kartu profil digital sederhana yang dibuat menggunakan React dan Webpack. Kartu menampilkan foto, informasi profil, tombol email, deskripsi, minat, dan tautan media sosial.

## Menjalankan proyek

Pastikan Node.js sudah terpasang. Buka terminal di folder proyek, lalu jalankan:

```bash
npm install
npm run watch
```

Untuk membuat build satu kali tanpa mode watch:

```bash
npm run build
```

## Struktur komponen

Komponen kartu berada di folder `components/`:

- `Info.jsx` — foto, nama, jabatan, situs, dan tombol email.
- `About.jsx` — deskripsi singkat profil.
- `Interests.jsx` — daftar minat.
- `SocialLinks.jsx` — tautan media sosial.
- `BusinessCard.jsx` — menyusun komponen-komponen kartu.

Ubah informasi profil dan tautan di komponen yang sesuai. Atur tampilan kartu melalui `style.css`, dan ganti foto atau ikon melalui folder `images/`.

## Catatan

Proyek ini menggunakan Webpack untuk membangun aplikasi. Font Inter dimuat dari Google Fonts, sehingga memerlukan koneksi internet. Jangan mengedit `index.pack.js` secara langsung karena file tersebut dihasilkan oleh Webpack.
