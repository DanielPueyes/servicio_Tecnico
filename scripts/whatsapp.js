document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("whatsapp-link").addEventListener("click", function (event) {
        event.preventDefault(); // Evita que el enlace se siga como URL normal

        const numeroWhatsApp = "56979840361"; // Número de contacto sin "+"
        const mensaje = encodeURIComponent("Hola, necesito información sobre tus servicios.");
        const url = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;

        window.open(url, "_blank"); // Abre WhatsApp en una nueva pestaña
    });
});
