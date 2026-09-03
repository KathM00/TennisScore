import Tennis from "./tennis.js"; 

const marcadorSpan = document.querySelector("#marcador");
const btnJugador1 = document.querySelector("#btn-jugador1");
const btnJugador2 = document.querySelector("#btn-jugador2");


const partido = new Tennis();


const actualizarPantalla = () => {
  marcadorSpan.innerHTML = partido.obtenerScore();
};


btnJugador1.addEventListener("click", () => {
  partido.jugador1Anota();
  actualizarPantalla();
});

btnJugador2.addEventListener("click", () => {
  partido.jugador2Anota();
  actualizarPantalla();
});
