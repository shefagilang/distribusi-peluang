const btnJawab = document.getElementById("btnJawab");
const jawaban = document.getElementById("jawaban");

btnJawab.addEventListener("click", () => {

    if(jawaban.classList.contains("hidden")){
        jawaban.classList.remove("hidden");
        btnJawab.innerHTML = "Sembunyikan Jawaban";
    }else{
        jawaban.classList.add("hidden");
        btnJawab.innerHTML = "Tampilkan Jawaban";
    }

});

const btnMateri = document.getElementById("btnMateri");

btnMateri.addEventListener("click", () => {

    document
        .getElementById("materi")
        .scrollIntoView({
            behavior:"smooth"
        });

});
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});
const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});
const observer = new IntersectionObserver((entries) => {
  entries.forEach(({ target, isIntersecting }) => {
    if (isIntersecting) {
      target.classList.add('visible');
      observer.unobserve(target);
    }
  });
}, { threshold: 0.1 });

// Otomatis observe semua elemen dengan class .lazy
document.querySelectorAll('.lazy')
  .forEach((el, i) => {
    // Stagger dinamis berdasarkan index
    el.style.transitionDelay = `${i * 0.08}s`;
    observer.observe(el);
  });
