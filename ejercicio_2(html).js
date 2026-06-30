const texto = document.getElementById("textarea");

const contar = document.getElementById("contar");

console.log(texto,contar);

texto.addEventListener('keyup' , function() {
    contar.innerText = texto.value.length
}) 