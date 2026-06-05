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
