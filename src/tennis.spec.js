import Tennis from "./tennis";

describe("Tennis", () => {
  it("deberia mostrar Love-Love cuando ningun jugador anoto", () => {
    let tennis = new Tennis();
    expect(tennis.obtenerScore()).toEqual("Love-Love");
  });
});