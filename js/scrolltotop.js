'use strict'

// BOTÓN DE SCROLL TO TOP
// Este código crea un botón que aparece cuando el usuario se desplaza hacia abajo en la página y al hacer clic en él, lleva al usuario de vuelta a la parte superior de la página.
// El botón se oculta cuando el usuario está en la parte superior de la página y aparece cuando el usuario se desplaza hacia abajo más de 300 píxeles.
// Al hacer clic en el botón, la página se desplaza suavemente hacia la parte superior.

const button = document.getElementById("goToTop");

button.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    button.style.opacity = "1";
    button.style.visibility = "visible";
  } else {
    button.style.opacity = "0";
    button.style.visibility = "hidden";
  }
});