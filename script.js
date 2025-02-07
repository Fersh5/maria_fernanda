// 🎶 Reproducir música al cargar la página
document.addEventListener("DOMContentLoaded", function() {
    let audio = document.getElementById("music");
    let playButton = document.getElementById("play-audio");

    // Mostrar botón si autoplay está bloqueado
    setTimeout(() => {
        if (audio.paused) {
            playButton.style.display = "block";
        }
    }, 500);

    // Iniciar audio al tocar cualquier parte de la pantalla
    document.addEventListener("click", function() {
        audio.play();
        playButton.style.display = "none"; // Ocultar botón al reproducir
    }, { once: true });
});

// button audio 
let audio = document.getElementById("music");
let audioButton = document.getElementById("toggle-audio");

audioButton.addEventListener("click", function() {
    if (audio.paused) {
        audio.play();
        audioButton.textContent = "🔊";
    } else {
        audio.pause();
        audioButton.textContent = "🔇";
    }
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
