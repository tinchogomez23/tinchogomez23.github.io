function bienvenida(){
    const hoy = new Date()
    document.getElementById("caja_bienvenida").style.display = "block";
    document.getElementById("renglon_bienvenida").innerHTML = hoy.toLocaleDateString();
}