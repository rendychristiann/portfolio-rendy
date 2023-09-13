// Navbar Fixed
// Saat window di-scroll, akan menjalankan suatu function
window.onscroll = function(){
    // Mengambil element header
    const header = document.querySelector('header');
    // Mengambil posisi header terhadap ujung atas halaman
    // Kalau page di-scroll, value dari fixedNav akan bertambah
    const fixedNav = header.offsetTop;

    // Jika scroll yang sekarang dilakukan lebih besar dari fixedNav
    if(window.pageYOffset > fixedNav){
        // Tambahkan class ke header
        header.classList.add('navbar-fixed');
    } 
    // Kalau sudah kembali ke posisi awal
    else {
        header.classList.remove('navbar-fixed')
    }
}

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');
hamburger.addEventListener('click', function(){
    // Untuk menambahkan class jika belum ada, untuk menghilangkan class jika sudah ada
    hamburger.classList.toggle('hamburger-active');
    // Munculkan nav-menu
    navMenu.classList.toggle('hidden');
});