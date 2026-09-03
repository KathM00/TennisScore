import Tennis from "./tennis";

describe("Tennis", () => {
  it("deberia mostrar Love-Love cuando ningun jugador anoto", () => {
    let tennis = new Tennis();
    expect(tennis.obtenerScore()).toEqual("Love-Love");
  });
});

describe("Tennis", () => {
  it("deberia mostrar 15-Love cuando el jugador 1 anoto un punto", () => {
    let tennis = new Tennis();
    tennis.jugador1Anota();
    expect(tennis.obtenerScore()).toEqual("15-Love");
  });
});