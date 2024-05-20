// Pendahuluan JQuery
// JQUERY adalah:
// kumpulan fungsi" JS yg memudahkan penuliskan kode JS

// JQUERY mempunyai fitur seperti menyederhanakan document transverting,event handling,animating,dan interaksi
// ajax utk pengembangan web secara cepat

//apa gunanya JQUERY
// 1.menemukan elemen dalam dokumen html
// 2.mengubah konten html
// 3.mendegarkan apa yg dilakukan pengguna dan lakukan tindakan yg sesuai(event listener)
// 4.membuat animasi konten dihalaman
// 5.berbicara melalui jaringan untuk mengambil konten baru

$(document).ready(function(){
    console.log('Sudah siap')
})

// Jenis Fitur Effect di jQuery
// Tanpa Animasi
// hide(kecepatan)

// Digunakan untuk menyembunyikan elemen yang dipilih.

// show(kecepatan)

// Digunakan untuk memunculkan elemen yang dipilih.

// toggle(kecepatan)

// Beralih antarahide dan show, yaitu ketika elemen dalam keadaan muncul/ show maka akan disembunyikan / dihide, sedangkan ketika dalam keadaan sembunyi /hide maka akan dimuculkan /show.

// Animasi Fade
// fadeIn(kecepatan)

// Digunakan untuk memunculkan elemen yang dipilih dengan efek transisi yaitu muncul secara perlahan.

// fadeOut(kecepatan)

// Kebalikan dari fadeIn yaitu digunakan untuk menyembunyikan dengan efek transisi yaitu disembunyikan secara perlahan.

// fadeToggle(kecepatan)

// Beralih antara metode fadeIn() dan fadeOut().

// fadeTo(kecepatan)

// Memberikan efek opacity / transparansi suatu elemen.

// Animasi Slide
// slideDown(kecepatan)

// Memunculkan elemen yang dipilih dengan efek slide ke bawah.

// slideUp(kecepatan)

// Menyembunyikan elemen yang dipilih dengan efek slide ke atas.

// slideToggle(kecepatan)

// Gabungan antara metode slideDown() dan slideUp().

// Animasi via CSS
// animate(parameter css, kecepatan)

// Menjalankan animasi pada elemen yang dipilih.