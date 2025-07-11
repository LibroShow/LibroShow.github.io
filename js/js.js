const secciones = {
  "nuevos-libros": [
    {
      titulo: "1984",
      imagen: "./img/1984_george-orwell.jpg",
      sinopsisCorta: "Un mundo mágico bajo el mar...",
      pagina: "./libros/1984_george-orwell.html"
    },
    {
      titulo: "La Gente Más Feliz de la Tierra",
      imagen: "./img/la_gente_mas_felis_de_la_tierra.png",
      sinopsisCorta: "Una historia de fe, esperanza y milagros reales contada por su protagonista.",
      pagina: "./libros/la_gente_mas_felis_de_la_tierra.html"
    },
    {
      titulo: "Crimen y castigo",
      imagen: "./img/Crimen y castigo.jpg",
      sinopsisCorta: "Una historia de esperanza en tiempos oscuros...",
      pagina: "./libros/Crimen y castigo.html"
    },

        {
      titulo: "Rebelión en la Granja",
      imagen: "/img/Rebelión en la Granja.jpg",
      sinopsisCorta: "Un mundo mágico bajo el mar...",
      pagina: "/libros/Rebelión en la Granja.html"
    },
    {
      titulo: "El día que el cielo se caiga",
      imagen: "/img/El día que el cielo se caiga.jpg",
      sinopsisCorta: "Una historia de fe, esperanza y milagros reales contada por su protagonista.",
      pagina: "/libros/El día que el cielo se caiga.html"
    },
    {
      titulo: "Divina comedia",
      imagen: "/img/Divina comedia.jpg",
      sinopsisCorta: "Una historia de esperanza en tiempos oscuros...",
      pagina: "/libros/Divina comedia.html"
    },

    {
      titulo: "El crimen casi perfecto",
      imagen: "./img/El crimen casi perfecto.jpg",
      sinopsisCorta: "Un mundo mágico bajo el mar...",
      pagina: "./libros/El crimen casi perfecto.html"
    },
    {
      titulo: "Padre Rico, Padre Pobre",
      imagen: "/img/Padre Rico, Padre Pobre.jpg",
      sinopsisCorta: "Una historia de fe, esperanza y milagros reales contada por su protagonista.",
      pagina: "/libros/Padre Rico, Padre Pobre.html"
    },
    {
      titulo: "Hábitos Atómicos",
      imagen: "/img/Hábitos Atómicos.jpg",
      sinopsisCorta: "Una historia de esperanza en tiempos oscuros...",
      pagina: "/libros/Hábitos Atómicos.html"
    }
  ],


  "ficcion-libros": [
    {
      titulo: "Rebelión en la Granja",
      imagen: "./img/Rebelión en la Granja.jpg",
      sinopsisCorta: "Una sátira política con animales.",
      pagina: "./libros/Rebelión en la Granja.html"
    },
    {
      titulo: "Divina comedia",
      imagen: "./img/Divina comedia.jpg",
      sinopsisCorta: "Un viaje por el infierno, purgatorio y paraíso.",
      pagina: "./libros/Divina comedia.html"
    },
    {
      titulo: "El día que el cielo se caiga",
      imagen: "./img/El día que el cielo se caiga.jpg",
      sinopsisCorta: "Un homenaje al amor incondicional.",
      pagina: "./libros/El día que el cielo se caiga.html"
    },
    {
      titulo: "1984",
      imagen: "./img/1984_george-orwell.jpg",
      sinopsisCorta: "Un futuro distópico dominado por el Gran Hermano.",
      pagina: "./libros/1984_george-orwell.html"
    }
  ],
  "misterio-libros": [
    {
      titulo: "El crimen casi perfecto",
      imagen: "./img/El crimen casi perfecto.jpg",
      sinopsisCorta: "Una investigación intrigante.",
      pagina: "./libros/El crimen casi perfecto.html"
    },
    {
      titulo: "Crimen y castigo",
      imagen: "./img/Crimen y castigo.jpg",
      sinopsisCorta: "La culpa y la redención de un asesino.",
      pagina: "./libros/Crimen y castigo.html"
    }
  ],
  "proximamente-libros": [
    {
      titulo: "Padre Rico, Padre Pobre",
      imagen: "./img/Padre Rico, Padre Pobre.jpg",
      sinopsisCorta: "Lecciones sobre dinero y mentalidad.",
      pagina: "./libros/Padre Rico, Padre Pobre.html"
    },
    {
      titulo: "Hábitos Atómicos",
      imagen: "./img/Hábitos Atómicos.jpg",
      sinopsisCorta: "Pequeños cambios que transforman tu vida.",
      pagina: "./libros/Hábitos Atómicos.html"
    },
    {
      titulo: "La Gente Más Feliz de la Tierra",
      imagen: "./img/la_gente_mas_felis_de_la_tierra.png",
      sinopsisCorta: "Testimonio de fe y transformación real.",
      pagina: "./libros/la_gente_mas_felis_de_la_tierra.html"
    }
  ],
  "romance-libros": [
    {
      titulo: "1984",
      imagen: "./img/1984_george-orwell.jpg",
      sinopsisCorta: "Un futuro distópico dominado por el Gran Hermano.",
      pagina: "./libros/1984_george-orwell.html"
    },
    {
      titulo: "La Gente Más Feliz de la Tierra",
      imagen: "./img/la_gente_mas_felis_de_la_tierra.png",
      sinopsisCorta: "Testimonio de fe y transformación real.",
      pagina: "./libros/la_gente_mas_felis_de_la_tierra.html"
    },
    {
      titulo: "Crimen y castigo",
      imagen: "./img/Crimen y castigo.jpg",
      sinopsisCorta: "La culpa y la redención de un asesino.",
      pagina: "./libros/Crimen y castigo.html"
    }
  ],
};

function renderLibros(lista, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = "";

  lista.forEach((libro) => {
    const div = document.createElement("div");
    div.className = "libro";
    div.innerHTML = `
      <a href="${libro.pagina}">
        <img src="${libro.imagen}" alt="${libro.titulo}" />
        <h4>${libro.titulo}</h4>
        <div class="tooltip">${libro.sinopsisCorta}</div>
      </a>
    `;
    container.appendChild(div);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  for (const seccion in secciones) {
    renderLibros(secciones[seccion], seccion);
  }
});

function moverCircular(boton, direccion) {
  const carrusel = boton.parentElement.querySelector('.carrusel');
  const items = carrusel.querySelectorAll('.libro');
  if (items.length === 0) return;
  if (direccion === 1) {
    carrusel.appendChild(items[0]);
  } else {
    carrusel.insertBefore(items[items.length - 1], items[0]);
  }
} 
