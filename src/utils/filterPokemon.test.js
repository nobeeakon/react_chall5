import filterPokemon from "./filterPokemon";
import { mockPokemonsData } from "../mock/pokeData";

describe("Filter Pokemon", () => {
  test("it should return an array", () => {
    let name = "a";
    let result = filterPokemon(mockPokemonsData, name) instanceof Array;
    expect(result).toBe(true);
  });

  test("it should return an empty array", () => {
    let name = "";
    let result = filterPokemon(mockPokemonsData, name).length;
    expect(result).toBe(0);
  });

  test("it should return an array with charizard object", () => {
    let name = "charizard";
    const charizard = [
      {
        name: "charizard",
        sprites: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
          front_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/6.png"
        },
        videoLink: "https://www.youtube.com/watch?v=evvO5Gcl-mo"
      }
    ];
    let result = filterPokemon(mockPokemonsData, name);
    expect(result).toStrictEqual(charizard);
  });

  /* BUNUS */
  test("it should validate the 'pokeList' argument", () => {
    let resultNull = filterPokemon(null, "a");
    let resultUndefined = filterPokemon(undefined, "a");
    let resultNotArray = filterPokemon("", "a");

    expect(resultNull).toStrictEqual([]);
    expect(resultUndefined).toStrictEqual([]);
    expect(resultNotArray).toStrictEqual([]);
  });

  test("it should validate the 'name' argument", () => {
    let resultNull = filterPokemon(mockPokemonsData, null);
    let resultUndefined = filterPokemon(mockPokemonsData, undefined);
    let resultNotArray = filterPokemon(mockPokemonsData, [
      "charizard",
      "zangoose"
    ]);

    expect(resultNull).toStrictEqual([]);
    expect(resultUndefined).toStrictEqual([]);
    expect(resultNotArray).toStrictEqual([]);
  });
});
