import { clienteServicios } from './conexion.servidor.js'

//traer información actual para editarla

const url = new URL(window.location)
const id = url.searchParams.get("id")
const obtenerInfo = async () => {
  const url = new URL(window.location)
  const id = url.searchParams.get("id")
  //seleccionamos los inputs del archivo editarProducto
  const src = document.querySelector('[data-src]')
  const categoria = document.querySelector('[data-categoria]')
  const nombre = document.querySelector('[data-nombre]')
  const precio = document.querySelector('[data-precio]')
  const descripcion = document.querySelector('[data-descripcion]')
  //creamos la función async await para acceder a los valores de la base de datos y ponerlos en los inputs
  try {
    const producto = await clienteServicios.editarProducto(id)
    src.value = producto.src;
    categoria.value = producto.categoria;
    nombre.value = producto.nombre;
    precio.value = producto.precio;
    descripcion.value = producto.descripcion;
  } catch (e) {
    console.log(e);
    window.location.href = "../error/error.html"
  }
}
obtenerInfo(id)

//función para escuchar botón submit y actualizar información

const formulario = document.querySelector("[data-form]")
formulario.addEventListener("submit", (e) => {
  e.preventDefault()
  const url = new URL(window.location)
  const id = url.searchParams.get("id")
  //seleccionamos los inputs del archivo editarProducto
  const src = document.querySelector('[data-src]').value
  const categoria = document.querySelector('[data-categoria]').value
  const nombre = document.querySelector('[data-nombre]').value
  const precio = document.querySelector('[data-precio]').value
  const descripcion = document.querySelector('[data-descripcion]').value
  const actualizar = async () => {
    try {
      const data = await clienteServicios.actualizarProducto(src, categoria, nombre, precio, descripcion, id)
      return data
    } catch (error) {
      console.log("error en función actualizar", error);
    }
  }
  actualizar();

})