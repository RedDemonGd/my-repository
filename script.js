const fechaInicio = new Date("2026-03-23T04:15:26");

function actualizarContador() {

    const ahora = new Date();

    let diferencia = ahora - fechaInicio;

    let segundos = Math.floor(diferencia / 1000);

    let minutos = Math.floor(segundos / 60);
    segundos %= 60;

    let horas = Math.floor(minutos / 60);
    minutos %= 60;

    let dias = Math.floor(horas / 24);
    horas %= 24;

    let meses = Math.floor(dias / 30);
    dias %= 30;

    let años = Math.floor(meses / 12);
    meses %= 12;

    document.getElementById("contador").innerHTML =
        `${años} años<br>
         ${meses} meses<br>
         ${dias} días<br>
         ${horas} horas<br>
         ${minutos} minutos<br>
         ${segundos} segundos`;
}

actualizarContador();

setInterval(actualizarContador, 1000);

function entrar(){

    document.getElementById("portada").style.display = "none";

    document.getElementById("contenido").style.display = "block";

}

function mensajeSecreto(){

    alert("👀 Encontraste algo.");

}