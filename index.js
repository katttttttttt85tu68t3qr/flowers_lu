// Suaviza el scroll si hay enlaces internos con "#"
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Mensaje de consola (opcional)
console.log("🌹 Bienvenido a Flowers_lu – Sitio web elegante en HTML ✨");

// En el futuro puedes usar esta base para filtros de productos, carrito, etc.
