class Tennis {
  constructor() {
    this.puntosJ1 = 0;
  }

  jugador1Anota() {
    this.puntosJ1++;
  }

  obtenerScore() {
    const puntajes = ["Love", "15", "30", "40"];
    return `${puntajes[this.puntosJ1]}-Love`;
  }
}
export default Tennis;
