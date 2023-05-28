import { gql } from "@apollo/client";

export const getPokemonList = gql`
query pokemonList {
  list: pokemon_v2_pokemon(limit: 12, offset: 0) {
    name
    id
    types: pokemon_v2_pokemontypes(limit: 3) {
      type: pokemon_v2_type {
        name
      }
    }
  }
}
`