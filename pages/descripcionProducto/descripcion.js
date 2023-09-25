import { clienteServicios } from "../../controller/conexion.servidor.js";

const crearDescripcion = (src, nombre, precio, descripcion) => {
  const contentDescripcion = document.createElement('section')
  const contenido =
    `
    <div class="contenedor-img">
      <img src="${src}" alt="${nombre}" />
    </div>
    <div class="textos-producto">
      <h1 class="titulo-producto">${nombre}</h1>
      <p class="precio-producto">$ ${precio}</p>
      <p class="descripcion-producto">
        ${descripcion}
      </p>
    </div>
    `;
  contentDescripcion.innerHTML = contenido;
  contentDescripcion.classList.add("ver-producto")
  return contentDescripcion
}
const url = new URL(window.location)
const id = url.searchParams.get("id")
const contenedor = document.querySelector("[data-description]")
const cargarDescripcion = async () => {
  try {
    const respuesta = await clienteServicios.obtenerProductos()
    const datos = respuesta.find(e => e.id === id);
    const { src, nombre, precio, descripcion } = datos
    const nuevaDescripcion = crearDescripcion(src, nombre, precio, descripcion)
    contenedor.appendChild(nuevaDescripcion)
    const similares = document.querySelector(".similares")
    contenedor.insertBefore(nuevaDescripcion, similares)
  } catch (error) {
    console.log(error);
  }
}
cargarDescripcion()