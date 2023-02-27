var x = 0 ;
function contarClicks(){
    x++;
        document.getElementById("icon1").innerHTML='Gracias por tu comentario' +' '+ x;
}
document.getElementById("boton1").onclick=function(){
        contarClicks();
}
document.getElementById("btn2").onclick = function(){
    document.getElementById("icon2").innerHTML="Espero noticias";
}

document.getElementById("btn3").onclick = function(){
    document.getElementById("icon3").innerHTML="Será para otra ocasión";
}

/**
 * Me hubiera gustado utilizar la funcion contarClicks para cada comentario pero no lo logré.
 * Encontré videos en you tube relacionados con mi idea pero sería mentirle a uds y sobre todo a mi.
 * Son mas complejos para mi entendimiento del tema.
 * O que por ejemplo, si clickeo sobre una opción no me permita hacerlo sobre las otras.
 */
