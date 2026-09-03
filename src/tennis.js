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
    return `${puntajes[this.puntosJ1]}-${puntajes[this.puntosJ2]}`;
  }
}
export default Tennis;
