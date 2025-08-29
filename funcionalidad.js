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

function change_h1Color() {
  const secciones = document.querySelectorAll(".box h2");
  secciones.forEach(element => { 
    element.style.color = element.style.color === "red" ? "black" : "red";
  });
}

function footer_image(){
    document.getElementById('input-img').click();
  }

  document.getElementById("input-img").addEventListener("change", function(){
    const footer = document.getElementById("footer");

    if(this.files.length > 0){
      const file = this.files[0];
      const imgURL = URL.createObjectURL(file);

      let oldImg = document.getElementById("footer-img");
      if(oldImg) oldImg.remove();

      const img = document.createElement("img");
      img.id = "footer-img";
      img.src = imgURL;
      img.alt = "Imagen de pie de página";
      img.style.width = "80px";
      img.style.marginTop = "10px";
      footer.appendChild(img);
    }
  });


