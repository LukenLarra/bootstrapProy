function main() {
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  // Mostrar el botón al desplazarse hacia abajo
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  });

  // Comportamiento del botón al hacer clic
  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Desplazamiento suave
    });
  });
}

window.onload = main;
