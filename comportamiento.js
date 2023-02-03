function bienvenida(){//Genera la fecha del día de hoy para mostrar en el mensaje de bienvenida
    const hoy = new Date()
    document.getElementById("caja_bienvenida").style.display = "block";
    document.getElementById("renglon_bienvenida").innerHTML = hoy.toLocaleDateString();
}

function agrandar(elemento){                    //Agranda el elemento que se le pasa como parámetro
    elemento.style.transform = "scale(1.25,1.25)";
    elemento.style.transition = "transform 1s";
}

function achicar(elemento){                     //Achica el elemento que se le pasa como parámetro
    elemento.style.transform = "scale(1,1)";
    elemento.style.transition = "transform 1s";
}

function subrayar(titulo){                      //Subraya y cambia de color al título de cada apartado de la 
    titulo.style.color = "ForestGreen";         //sección de información adicional
    titulo.style.textDecoration = "underline";
    titulo.style.transition = "color 0.5s";
}
 function sacar_estilos(titulo){                //Vuelve a los estilos originales que tenían los títulos
    titulo.style.color = "beige";
    titulo.style.textDecoration = "none";
 }