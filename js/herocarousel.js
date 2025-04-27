'use strict'

// CARRUSEL SIMPLE PARA LA SECCIÓN HERO
// Este código crea un carrusel simple para la sección hero de una página web. El carrusel cambia automáticamente entre diferentes slides (diapositivas) cada 6 segundos.
// Cada slide tiene una clase 'hero__slide' y el slide activo tiene una clase adicional 'hero__slide--active'.
// El carrusel se inicializa al cargar el DOM y comienza a cambiar entre los slides automáticamente.
// El carrusel se basa en la función 'showSlide' que muestra el slide correspondiente al índice dado y oculta los demás slides.
// La función 'nextSlide' se encarga de avanzar al siguiente slide, y se llama cada 6 segundos mediante 'setInterval'.

document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelectorAll('.hero__slide');
  let currentSlide = 0;
  const slideInterval = 6000;

  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('hero__slide--active'));
    slides[index].classList.add('hero__slide--active');
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  setInterval(nextSlide, slideInterval);
});
