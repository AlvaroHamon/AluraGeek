const imagenPorDefecto = '../../img/perfil.png'
const archivo = document.getElementById("foto")
const img = document.getElementById('img')
archivo.addEventListener('change', (e) => {
    if (e.target.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            img.src = e.target.result;
        }
        reader.readAsDataURL(e.target.files[0])
    } else {
        img.src = imagenPorDefecto;
    };
})