"use client";

import { FloatingWhatsApp } from "react-floating-whatsapp";

function WhatsApp() {
  return (
    <FloatingWhatsApp
      phoneNumber="668 232 4356"
      accountName="Temazcal Los Mochis"
      avatar="/img/logo.jpg"
      chatMessage="Hola, ¿Cómo podemos ayudarte?"
      allowEsc
      placeholder="Escribe tu mensaje"
      statusMessage="Normalmente contesta en 1 hora"
    />
  );
}

export default WhatsApp;
