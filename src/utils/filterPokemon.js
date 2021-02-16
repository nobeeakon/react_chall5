export default function filterPokemon(pokeList, name) {
  // validate pokeList
  if (!Array.isArray(pokeList)) return [];

  // validate name
  if (typeof name !== "string") return [];

  if (name === "") return [];
  return (
    Array.isArray(pokeList) &&
    pokeList.filter((pokemon) => {
      return pokemon.name.includes(name);
    })
  );
}
