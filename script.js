function sairRapidamente() {
    window.location.replace("https://www.google.com");
}

// Clique no botão
document.getElementById("btn-sair").addEventListener("click", sairRapidamente);

// Tecla ESC
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        sairRapidamente();
    }
});
