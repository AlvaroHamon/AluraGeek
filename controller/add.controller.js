import { clienteServicios } from "./conexion.server.js"
const addProducto = document.querySelector('[data-form]')

addProducto.addEventListener("submit", (e) => {
    e.preventDefault()
    const src = document.querySelector('[data-src]').value
    const categoria = document.querySelector('[data-categoria]').value
    const nombre = document.querySelector('[data-nombre]').value
    const precio = document.querySelector('[data-precio]').value
    const descripcion = document.querySelector('[data-decripcion]').value

    const crear = async () => {
        try {
            const datos = await clienteServicios.crearProductos(src, categoria, nombre, precio, descripcion)
            console.log(datos);
            return datos
        } catch (error) {
            console.log("error en funcion crear", error);
        }
    }
    crear()
})
