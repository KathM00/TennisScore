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
    const diferencia = this.puntosJ1 - this.puntosJ2;
    
    const j1Gana = this.puntosJ1 >= 4 && diferencia >= 2;
    const j2Gana = this.puntosJ2 >= 4 && diferencia <= -2;
    const etapaDeuce = this.puntosJ1 >= 3 && this.puntosJ2 >= 3;

    const condiciones = [
      { cumple: j1Gana, resultado: "Game for player 1" },
      { cumple: j2Gana, resultado: "Game for player 2" },
      { cumple: etapaDeuce && diferencia === 0, resultado: "Deuce" },
      { cumple: etapaDeuce && diferencia === 1, resultado: "Advantage Player 1" },
      { cumple: etapaDeuce && diferencia === -1, resultado: "Advantage Player 2" },
      { cumple: !etapaDeuce && !j1Gana && !j2Gana, resultado: `${puntajes[this.puntosJ1]}-${puntajes[this.puntosJ2]}` }
    ];

    return condiciones.find(condicion => condicion.cumple).resultado;
  }
}
export default Tennis;