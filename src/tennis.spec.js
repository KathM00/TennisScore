import Tennis from "./tennis";

describe("Tennis", () => {
  let tennis;

  beforeEach(() => {
    tennis = new Tennis();
  });

  it("deberia mostrar Love-Love cuando inicia el partido", () => {
    expect(tennis.obtenerScore()).toEqual("Love-Love");
  });

  it("deberia mostrar 15-Love cuando el jugador 1 anoto un punto", () => {
    tennis.jugador1Anota();
    expect(tennis.obtenerScore()).toEqual("15-Love");
  });

  it("deberia mostrar 30-Love cuando el jugador 1 anota 2 veces", () => {
    tennis.jugador1Anota();
    tennis.jugador1Anota();
    expect(tennis.obtenerScore()).toEqual("30-Love");
  });

  it("deberia mostrar 40-Love cuando el jugador 1 anota 3 veces", () => {
    tennis.jugador1Anota();
    tennis.jugador1Anota();
    tennis.jugador1Anota();
    expect(tennis.obtenerScore()).toEqual("40-Love");
  });

  it("deberia mostrar Love-15 cuando el jugador 2 anota 1 vez", () => {
    tennis.jugador2Anota();
    expect(tennis.obtenerScore()).toEqual("Love-15");
  });

});

  

  