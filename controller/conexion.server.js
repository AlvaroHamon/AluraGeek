

const obtenerProductos = async () => {
    try {
        const respuesta = await fetch("http://localhost:3000/producto")
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

// const crearProductos = async (link, categoria, nombre, precio, descripcion) => {
//     try {
//         const respuesta = await fetch("http://localhost:3000/producto", {
//             method: "POST",
//             headers: { "Content-type": "application/json" },
//             body: JSON.stringify({ link, categoria, nombre, precio, descripcion, id: uuid.v4() })
//         })
//         console.log(respuesta);
//         return respuesta
//     } catch (error) {
//         console.log(error);
//     }

// }
const crearProductos = async (src, categoria, nombre, precio, descripcion) => {
    try {
        const respuesta = await fetch("http://localhost:3000/producto", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({ src, categoria, nombre, precio, descripcion, id: uuid.v4() })
        });

        if (respuesta.status >= 200 && respuesta.status < 300) {
            const datos = await respuesta.json();
            return datos;
        } else {
            throw new Error('Error al crear el producto');
        }
    } catch (error) {
        throw new Error('Error en la solicitud al servidor');
    }
}

const eliminarProducto = async (id) => {
    try {
        const respuesta = await fetch(`http://localhost:3000/producto/${id}`, {
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
        const respuesta = await fetch(`http://localhost:3000/producto/${id}`)
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
        const datos = await fetch(`http://localhost:3000/producto/${id}`, {
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

