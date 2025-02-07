// 🎶 Reproducir música al cargar la página
document.addEventListener("DOMContentLoaded", function() {
    let audio = document.getElementById("music");
    audio.volume = 0.5; // Ajustar volumen
    audio.play().catch(error => {
        console.log("Autoplay bloqueado, esperando interacción...");
    });
});

// 🎡 Slideshow de imágenes
let images = [
    "assets/kuromi_01.gif",
    "assets/kuromi_02.gif",
    "assets/kuromi_03.gif",
    "assets/kuromi_04.gif",
    "assets/kuromi_06.gif",
    "assets/kuromi_05.gif"
];

let currentIndex = 0;
let slideImg = document.getElementById("slide-img");

function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    slideImg.style.opacity = 0; // Desvanecer antes de cambiar
    setTimeout(() => {
        slideImg.src = images[currentIndex];
        slideImg.style.opacity = 1; // Aparecer nueva imagen
    }, 500);
}

setInterval(changeImage, 3000); // Cambiar cada 3 segundos

// ⏳ Cuenta regresiva hasta el 20 de febrero
function actualizarCuentaRegresiva() {
    let fechaEvento = new Date("February 20, 2025 13:30:00").getTime();
    let ahora = new Date().getTime();
    let diferencia = fechaEvento - ahora;

    if (diferencia > 0) {
        let dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        let horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
        let segundos = Math.floor((diferencia % (1000 * 60)) / 1000);
        
        document.getElementById("countdown").innerHTML = 
            `${dias} días, ${horas}h ${minutos}m ${segundos}s`;
    } else {
        document.getElementById("countdown").innerHTML = "¡La fiesta ha comenzado! 🎉";
    }
}

setInterval(actualizarCuentaRegresiva, 1000);
actualizarCuentaRegresiva();
