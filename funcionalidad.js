function change_order() {
  const contenedor = document.getElementById("contenedor");
  contenedor.classList.toggle("filas");
}

function change_title() {
  const titulo = document.getElementById("page-title");
  if (titulo.textContent == "University Demo") {
    titulo.textContent = "HTML & CSS: Curso práctico avanzado";
  } else {
    titulo.textContent = "University Demo";
  }
}
