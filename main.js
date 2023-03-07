var colores = ["bg-color1", "bg-color2", "bg-color3", "bg-color4"]; // Array con los nombres de las clases
var index = 0; // Índice actual del array
let contador = 0;

const play = function() {

    var body = document.querySelector("body"); // Selecciona el body
    var text = document.querySelector("h1"); // Selecciona el elemento h1
    var text = document.querySelector("h2");
    var text = document.querySelector("button");

    if(contador === 2){
      
      var sonido = new Audio("./assets/butters_song.mp3");
      sonido.play();
      contador = contador+ 1
      setTimeout(function() {
        let butter = document.getElementById("kenny");
        butter.style.visibility = 'visible';
      }, 6000);
      
      setTimeout(function() {
        let butter = document.getElementById("butters");
        butter.style.visibility = 'visible';
      }, 29600);
      
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

