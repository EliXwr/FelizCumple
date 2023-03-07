var colores = ["bg-color1", "bg-color2", "bg-color3", "bg-color4"]; // Array con los nombres de las clases
var index = 0; // Índice actual del array
let contador = 0;

function slimShady(){
  let butter = document.querySelectorAll("butters");
  
}

const play = function() {

    var body = document.querySelector("body"); // Selecciona el body
    var text = document.querySelector("h1"); // Selecciona el elemento h1
    var text = document.querySelector("h2");
    var text = document.querySelector("button");

    if(contador === 4){
      
      var sonido = new Audio("./assets/butters_song.mp3");
      sonido.play();
      contador = contador+ 1
      setTimeout(28000,slimShady)
      }else{
        contador += 1;
    }

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

