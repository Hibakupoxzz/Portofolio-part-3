# Portfolio (Nuxt 3) — mengikuti struktur notsatria.page

Ciri khas visual yang membedakan dari referensi:

- **Hero 2 kolom**: teks di kiri, foto di kanan (bukan tumpuk-tengah seperti referensi)
- **Bingkai foto & kartu bersudut asimetris** (besar di kiri-atas & kanan-bawah, kecil di
  sisi lainnya) — dipakai konsisten di foto, kartu proyek, kartu pengalaman, kartu
  sertifikasi, kartu kontak, dan tombol
- **Pola dot-grid + blob warna** di belakang foto profil sebagai elemen dekoratif
- **Badge status mengambang** ("Available for work") dengan indikator berdenyut di foto
- **Heading rata-kiri** dengan penanda kotak kecil, bukan judul rata-tengah seperti referensi

Warna (putih + navy slate-900 + aksen violet) tetap diambil dari sampling screenshot
referensi.

## Menambahkan foto profil (slideshow 2 foto)

Foto kamu tampil bulat di Hero, bergantian otomatis antara 2 foto dengan animasi crossfade
(fade + sedikit zoom), tanpa perlu JavaScript timer — murni CSS animation. Caranya:

1. Siapkan 2 foto persegi (disarankan minimal 300x300px), format `.jpg` atau `.png`.
2. Simpan ke `public/images/profile-1.jpg` dan `public/images/profile-2.jpg`.
3. Kalau kamu pakai nama file lain / jumlah foto beda, update array `profile.photos` di
   `composables/usePortfolioData.ts`.

Selama foto belum ada, otomatis akan muncul lingkaran berisi inisial nama kamu sebagai
fallback — jadi tidak akan tampil ikon gambar rusak. Kalau cuma salah satu foto yang gagal
dimuat, foto itu akan disembunyikan dan yang lain tetap tampil normal.

## Menjalankan di lokal

```bash
npm install
npm run dev
```

Buka http://localhost:3000

## Build production

```bash
npm run build
node .output/server/index.mjs
```

## Yang perlu kamu ganti

Semua konten (nama, role, proyek, pengalaman, sertifikasi, link sosial) ada di satu file:

```
composables/usePortfolioData.ts
```

Ganti isi objek `profile`, dan array `projects`, `experience`, `certifications` sesuai data
kamu. Tidak perlu menyentuh komponen lain.

## Struktur

- `app.vue` — merangkai semua section
- `components/TheNav.vue` — navbar
- `components/TheHero.vue`
- `components/TheProjects.vue`
- `components/TheExperience.vue`
- `components/TheCertifications.vue`
- `components/TheContact.vue`
- `components/TheFooter.vue`
- `composables/usePortfolioData.ts` — semua data/konten
- `assets/css/main.css` — base styles
- `tailwind.config.ts` — palet warna & font

## Palet warna (di-sample dari screenshot notsatria.page)

| Token | Hex | Peran |
|---|---|---|
| base | #FFFFFF | Background utama |
| base.surface | #FAFBFD | Section alternatif |
| base.raised | #F1F5F9 | Pill / tag background |
| base.line | #E5E7EB | Border/garis |
| ink | #0F172A | Judul & tombol solid (slate-900) |
| ink.muted | #64748B | Teks sekunder (slate-500) |
| ember | #6C4FCA | Aksen violet |

Font: Inter (satu font untuk semua, sesuai referensi).
