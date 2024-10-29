function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

function makeOrder(sabor) {
    // Número de teléfono en formato internacional, sin el '+' ni espacios.
    const phoneNumber = "543794884299"; // Cambia esto por el número real.
    const message = encodeURIComponent("¡Hola Sabor Natural de Misiones! Me gustaría hacer un pedido de helado de " + sabor + ".");
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;

    // Abrir WhatsApp en una nueva ventana.
    window.open(whatsappUrl, '_blank');

    alert("¡Agradecemos su confianza! Estamos aquí para ayudarle y responderemos su mensaje a la brevedad."); // Mensaje de éxito.
    closeModal('modal-' + sabor); // Cerrar el modal después de hacer el pedido.
}
