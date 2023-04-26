const equipo = prompt("nombre de tu equipo de futbol");
const victorias = parseInt(prompt("cuantos partidos gano este equipo"));
const empates = parseInt(prompt("¿cantidad de empates conseguidos?"))

const temporada = (victorias*3) + empates;

function print(frase){
    document.write(frase);
}

print('El total de puntos conseguidos es' + " " + temporada + " " + "puntos");