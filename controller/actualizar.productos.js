import { clienteServicios } from "./conexion.server.js"
//cards producto de pagina principal
const crearProducto = (src, nombre, precio, id) => {
  const producto = document.createElement("div")
  const contenido =
    `
      <a href="../editarProducto/index.html?id=${id}"><i class="fa-solid fa-pen-to-square editar"></i></a>
      <i class="fa-solid fa-circle-xmark eliminar" id="${id}"></i>
      <img src="${src}" alt="${nombre}" />
      <p>${nombre}</p>
      <strong>$${precio}</strong>
      <a href="../pages/descripcionProducto/index.html?id=">ver producto</a>
    `;
  producto.innerHTML = contenido;
  producto.classList.add("card")
  const btnEliminar = producto.querySelector(".eliminar")
  btnEliminar.addEventListener('click', () => {
    const id = btnEliminar.id
    eliminarItem(id)
    // clienteServicios.eliminarProducto(id).then(respuesta => console.log(respuesta)).catch(error => console.log(error))
  })

  const eliminarItem = async (id) => {
    try {
      const respuesta = await clienteServicios.eliminarProducto(id)
      console.log(respuesta);

    } catch (error) {
      console.log(error);
    }
  }
  return producto
}

//seleccionar donde agregamos la tarjeta
const contenedorCard = document.querySelector('[data-card]')

const cargarProducto = async () => {
  try {
    const data = await clienteServicios.obtenerProductos()
    data.forEach(({ src, nombre, precio, id }) => {
      const nuevoProducto = crearProducto(src, nombre, precio, id)
      contenedorCard.appendChild(nuevoProducto)
    })
  } catch (error) {
    console.log(error);
  }
}
cargarProducto()