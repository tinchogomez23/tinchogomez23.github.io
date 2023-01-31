//Mensaje de bienvenida
function bienvenida(){
    const hoy = new Date()
    document.getElementById("caja_bienvenida").style.display = "block";
    document.getElementById("renglon_bienvenida").innerHTML = hoy.toLocaleDateString();
}

document.getElementById("foto_perfil").addEventListener("mouseover",agrandar());
var ancho_foto = document.getElementById("foto_perfil").style.width;
var alto_foto = document.getElementById("foto_perfil").style.height;
function agrandar() {
    ancho_foto += ancho_foto*0.1;
    alto_foto += alto_foto*0.1;
    document.getElementById("foto_perfil").style.width = ancho_foto;
    document.getElementById("foto_perfil").style.height = alto_foto;
}