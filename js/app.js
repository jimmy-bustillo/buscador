// variables
const resultado = document.querySelector("#resultado");
const year = document.querySelector("#year");

const maxYear = new Date().getFullYear();
const minYear = maxYear - 10;

// eventos
document.addEventListener("DOMContentLoaded", () => {
  mostrarAutos(); // Muestra los autos al cargar

  // Llena las opciones de años
  llenarSelect();
});

// funciones
function mostrarAutos() {
  autos.forEach((auto) => {
    const { marca, modelo, year, puertas, transmision, precio, color } = auto;
    const autoHTML = document.createElement("p");

    autoHTML.textContent = `
      ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmisión: ${transmision} - Precio: ${precio} - Color: ${color}
    `;

    // insertar en el html
    resultado.appendChild(autoHTML);
  });
}

// Genera los años del select
function llenarSelect() {
  for (let i = maxYear; i >= minYear; i--) {
    const opcion = document.createElement("option");
    opcion.value = i;
    opcion.textContent = i;
    year.appendChild(opcion); // Agrega las opciones de año al select
  }
}
