class Tennis {
  constructor() {
    this.puntosJ1 = 0;
    this.puntosJ2 = 0;
  }

  jugador1Anota() {
    this.puntosJ1++;
  }

  jugador2Anota() {
    this.puntosJ2++;
  }

  obtenerScore() {
    const puntajes = ["Love", "15", "30", "40"];
    const j1Gana = this.puntosJ1 >= 4;
    const j2Gana = this.puntosJ2 >= 4;

    const condiciones = [
      { cumple: j1Gana, resultado: "Game for player 1" },
      { cumple: j2Gana, resultado: "Game for player 2" },
      { cumple: !j1Gana && !j2Gana, resultado: `${puntajes[this.puntosJ1]}-${puntajes[this.puntosJ2]}` }
    ];
    return condiciones.find(condicion => condicion.cumple).resultado;
    
  }
}
export default Tennis;
