var colores = ["bg-color1", "bg-color2", "bg-color3", "bg-color4"]; // Array con los nombres de las clases
var index = 0; // Índice actual del array


const play = function() {

    var body = document.querySelector("body"); // Selecciona el body
    var text = document.querySelector("h1"); // Selecciona el elemento h1
    var text = document.querySelector("h2");
    var text = document.querySelector("button");

    // Elimina la clase anterior y agrega la nueva clase al body
    body.classList.remove(colores[index]);
    index = (index + 1) % colores.length;
    body.classList.add(colores[index]);

    // Elimina la clase anterior y agrega la nueva clase al texto
    text.classList.remove(colores[index]);
    text.c
    lassList.add(colores[(index+1) % colores.length]);
}

document.addEventListener('click', play);