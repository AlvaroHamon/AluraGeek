document.addEventListener('keyup', e => {
  if (e.target.matches("#buscador")) {
    const searchTerm = e.target.value.trim().toLowerCase();
    const tarjetas = document.querySelectorAll(".card");

    tarjetas.forEach(tarjeta => {
      const nombreProducto = tarjeta.querySelector("p").textContent.toLowerCase();

      if (nombreProducto.includes(searchTerm)) {
        tarjeta.classList.remove("filtro");
      } else {
        tarjeta.classList.add("filtro");
      }
    });
  }
});



    // document.querySelectorAll(".card p").forEach(producto => {
    //   producto.textContent.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
    //     ? producto.classList.remove("filtro") : producto.classList.add("filtro")
    // })