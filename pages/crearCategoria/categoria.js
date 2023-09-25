import { fCategoria } from "../../controller/categorias.controller.js"

const formulario = document.querySelector("[data-form]")
formulario.addEventListener("submit", (e) => {
  e.preventDefault()
  const categoria = document.querySelector("[data-categoria]").value
  const nuevaCategoria = async () => {
    try {
      const data = await fCategoria.crearCategoria(categoria)
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Categoria creada correctamente',
        showConfirmButton: true,
        timerProgressBar: true,
        timer: 3500
      });
      return data
    } catch (error) {
      console.log(error);
      Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'Categoria creada correctamente',
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3500
      })
    }
  }

  nuevaCategoria()
})