import Tennis from "./tennis";

describe("Tennis", () => {
  let tennis;

  beforeEach(() => {
    tennis = new Tennis();
  });

  const anotarPuntos = (puntosJ1, puntosJ2) => {
    for (let i = 0; i < puntosJ1; i++) tennis.jugador1Anota();
    for (let i = 0; i < puntosJ2; i++) tennis.jugador2Anota();
  };

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

  it("deberia mostrar Love-30 cuando el jugador 2 anota 2 veces", () => {
    tennis.jugador2Anota();
    tennis.jugador2Anota();
    expect(tennis.obtenerScore()).toEqual("Love-30");
  });

  it("deberia mostrar 30-15 cuando jugador 1 anota 2 veces y jugador 2 anota 1 vez", () => {
    tennis.jugador1Anota();
    tennis.jugador1Anota();
    tennis.jugador2Anota();
    expect(tennis.obtenerScore()).toEqual("30-15");
  });

  it("deberia mostrar Game for player 1 cuando el jugador 1 anota 4 veces", () => {
    tennis.jugador1Anota();
    tennis.jugador1Anota();
    tennis.jugador1Anota();
    tennis.jugador1Anota();
    expect(tennis.obtenerScore()).toEqual("Game for player 1");
  });

  it("deberia mostrar Game for player 2 cuando el jugador 2 anota 4 veces", () => {
    tennis.jugador2Anota();
    tennis.jugador2Anota();
    tennis.jugador2Anota();
    tennis.jugador2Anota();
    expect(tennis.obtenerScore()).toEqual("Game for player 2");
  });

  it("deberia mostrar Deuce cuando ambos jugadores tienen 3 puntos", () => {
    anotarPuntos(3, 3);
    expect(tennis.obtenerScore()).toEqual("Deuce");
  });

  it("deberia mostrar Advantage Player 1 cuando jugador 1 anota 4 veces y jugador 2 anota 3 veces", () => {
    anotarPuntos(4, 3);
    expect(tennis.obtenerScore()).toEqual("Advantage Player 1");
  });

  it("deberia mostrar Advantage Player 2 cuando jugador 2 anota 4 veces y jugador 1 anota 3 veces", () => {
    anotarPuntos(3, 4);
    expect(tennis.obtenerScore()).toEqual("Advantage Player 2");
  });

  it("deberia mostrar Game for player 1 al ganar por 2 puntos despues de Deuce", () => {
    anotarPuntos(3, 3); 
    anotarPuntos(2, 0);
    expect(tennis.obtenerScore()).toEqual("Game for player 1");
  });

});

  

  