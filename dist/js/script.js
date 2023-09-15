// Navbar Fixed
// Saat window di-scroll, akan menjalankan suatu function
window.onscroll = function(){
    // Mengambil element header
    const header = document.querySelector('header');
    // Mengambil posisi header terhadap ujung atas halaman
    // Kalau page di-scroll, value dari fixedNav akan bertambah
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector('#to-top');

    // Jika scroll yang sekarang dilakukan lebih besar dari fixedNav
    if(window.pageYOffset > fixedNav){
        // Tambahkan class ke header
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    } 
    // Kalau sudah kembali ke posisi awal
    else {
        header.classList.remove('navbar-fixed');
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
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

// Klik di luar hamburger -> Menu hilang
window.addEventListener('click', function(e){
    if(e.target != hamburger && e.target != navMenu){
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
    }
});

// Dark mode toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');
darkToggle.addEventListener('click', function(){
    if (darkToggle.checked){
        html.classList.add('dark');
    }
    else{
        html.classList.remove('dark');
    }
});

// Send email
function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "rendyportfolio@gmail.com",
        Password : "askingalexandria123",
        To : 'rendychristiann@gmail.com',
        From : document.getElementById("email").value,
        Subject : "Portfolio Form Message",
        Body : "Name: " + document.getElementById("name").value + "<br> Email: " + document.getElementById("email") + "<br> Message: " + document.getElementById("message")   
    }).then(
      message => alert("Message Sent Succesfully!")
    );
}

document.addEventListener("DOMContentLoaded", function(){
    new TypeIt('#thumbnail_typeit', {
     speed: 60,
     waitUntilVisible: true
    })
    .pause(1000)
    .type("This is my porefol", {delay: 500})
    .move(-3)
    .delete(1)
    .type("t")
    .move(null, {to: "END"})
    .type("io wens", {delay: 500})
    .move(-1)
    .delete(1)
    .type("b")
    .move(null, {to: "END"})
    .type("ite.")
    .go();
 });

// Scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else {
            entry.target.classList.remove('show');
        }
    });
});
const hiddenElements = document.querySelectorAll(".moving");
hiddenElements.forEach((el) => observer.observe(el));