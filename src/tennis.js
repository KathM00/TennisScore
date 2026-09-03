class Tennis {
  constructor() {
    this.puntosJ1 = 0;
  }

  jugador1Anota() {
    this.puntosJ1++;
  }

  obtenerScore() {
    if (this.puntosJ1 === 1) {
      return "15-Love";
    }
    return "Love-Love";
  }
}
export default Tennis;

