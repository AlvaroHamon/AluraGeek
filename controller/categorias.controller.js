const select = document.querySelector("[data-categoria]")

const obtenerCategoria = async () => {
  try {
    const respuesta = await fetch("https://alurageek-l7w3ih4e5-alvarohamon.vercel.app/categorias")
    const data = await respuesta.json()
    data.forEach(({ categoria }) => {
      const option = document.createElement("option")
      option.text = categoria;
      option.value = categoria;
      select.appendChild(option)
      
    });
  } catch (error) {
    console.log("error al cargar categorias", error);
  }
}
obtenerCategoria()

const crearCategoria = async (categoria) => {
  try {
    const respuesta = await fetch("https://alurageek-l7w3ih4e5-alvarohamon.vercel.app/categorias", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ categoria, id: uuid.v4() })
    })
    if (respuesta.ok) {
      const datos = await respuesta.json()
      return datos
    } else {
      throw new Error()
    }
  } catch (error) {
    console.log("Error en crearCategoria", error);
  }
}

export const fCategoria = {
  obtenerCategoria,
  crearCategoria
}