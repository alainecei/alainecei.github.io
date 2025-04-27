"use strict";

// ACORDEÓN SIMPLE PARA LA SECCIÓN DE SERVICIOS
// Este código permite que al hacer clic en el subtítulo de un bloque de servicios, se expanda o colapse el contenido del bloque.
// Se utiliza la clase 'open' para indicar si el bloque está expandido o colapsado.
// Al hacer clic en el subtítulo, se alterna la clase 'open' en el bloque correspondiente.
// Esto permite que el usuario vea más información sobre el servicio al que se refiere el subtítulo.

const blocks = document.querySelectorAll('.services__block');

blocks.forEach(block => {
  const subtitle = block.querySelector('.services__subtitle');
  subtitle.addEventListener('click', () => {
    block.classList.toggle('open');
  });
});
