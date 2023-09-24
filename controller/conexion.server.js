

const obtenerProductos = async () => {
  try {
    const respuesta = await fetch("https://alurageek-l7w3ih4e5-alvarohamon.vercel.app/producto")
    if (respuesta.status >= 200 && respuesta.status < 300) {
      const datos = await respuesta.json()
      return datos
    } else {
      throw new Error()
    }
  } catch (error) {
    window.location.href("./screens/error.html")
  }
}

const crearProductos = async (src, categoria, nombre, precio, descripcion) => {
  try {
    const respuesta = await fetch("https://alurageek-l7w3ih4e5-alvarohamon.vercel.app/producto", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ src, categoria, nombre, precio, descripcion, id: uuid.v4() })
    });
    if (respuesta.ok) {
      // La solicitud se completó correctamente (código de estado 200-299)
      const datos = await respuesta.json();
      console.log("Producto creado:", datos);
      return datos;
    } else {
      // La solicitud no se completó correctamente (código de estado diferente)
      const errorData = await respuesta.json();
      console.error("Error al crear el producto:", errorData);
      throw new Error('Error al crear el producto');
    }


    // if (respuesta.status >= 200 && respuesta.status < 300) {
    //   const datos = await respuesta.json();
    //   console.log(datos);
    //   return datos;
    // } else {
    //   throw new Error('Error al crear el producto');
    // }
  } catch (error) {
    console.log('Error en la solicitud al servidor:', error);
    throw new Error('Error en la solicitud al servidor');
  }
}

const eliminarProducto = async (id) => {
  try {
    const respuesta = await fetch(`https://alurageek-l7w3ih4e5-alvarohamon.vercel.app/producto?id=${id}`, {
      method: "DELETE"
    })
    if (respuesta.status >= 200 && respuesta.status < 300) {
      return respuesta;
    } else {
      throw new Error();
    }
  } catch (error) {
    console.log(error);
  }
}

const editarProducto = async (id) => {

  try {
    const respuesta = await fetch(`https://alurageek-l7w3ih4e5-alvarohamon.vercel.app/producto/${id}`)
    if (respuesta.status >= 200 && respuesta.status < 300) {
      const datos = await respuesta.json();
      return datos
    } else {
      throw new Error()
    }
  } catch (error) {
    console.log("Error en funcion editarProducto");
    console.log(error);
  }
}

const actualizarProducto = async (src, categoria, nombre, precio, descripcion, id) => {
  try {
    const datos = await fetch(`https://alurageek-l7w3ih4e5-alvarohamon.vercel.app/producto${id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ src, categoria, nombre, precio, descripcion })
    })
    return datos;
  } catch (error) {
    console.log("error en función actualizarProducto ", error);
  }
}


export const clienteServicios = {
  obtenerProductos,
  crearProductos,
  eliminarProducto,
  editarProducto,
  actualizarProducto
}

