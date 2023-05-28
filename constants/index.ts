/**
 * Constants variable used Globally
 */

import { EPokemonType } from "@/types/pokemon"

export const exampleList = {
  "data": {
    "list": [
      {
        "name": "bulbasaur",
        "id": 1,
        "types": [
          {
            "type": {
              "name": "grass"
            }
          },
          {
            "type": {
              "name": "poison"
            }
          }
        ]
      },
      {
        "name": "ivysaur",
        "id": 2,
        "types": [
          {
            "type": {
              "name": "grass"
            }
          },
          {
            "type": {
              "name": "poison"
            }
          }
        ]
      },
      {
        "name": "venusaur",
        "id": 3,
        "types": [
          {
            "type": {
              "name": "grass"
            }
          },
          {
            "type": {
              "name": "poison"
            }
          }
        ]
      },
      {
        "name": "charmander",
        "id": 4,
        "types": [
          {
            "type": {
              "name": "fire"
            }
          }
        ]
      },
      {
        "name": "charmeleon",
        "id": 5,
        "types": [
          {
            "type": {
              "name": "fire"
            }
          }
        ]
      },
      {
        "name": "charizard",
        "id": 6,
        "types": [
          {
            "type": {
              "name": "fire"
            }
          },
          {
            "type": {
              "name": "flying"
            }
          }
        ]
      },
      {
        "name": "squirtle",
        "id": 7,
        "types": [
          {
            "type": {
              "name": "water"
            }
          }
        ]
      },
      {
        "name": "wartortle",
        "id": 8,
        "types": [
          {
            "type": {
              "name": "water"
            }
          }
        ]
      },
      {
        "name": "blastoise",
        "id": 9,
        "types": [
          {
            "type": {
              "name": "water"
            }
          }
        ]
      },
      {
        "name": "caterpie",
        "id": 10,
        "types": [
          {
            "type": {
              "name": "bug"
            }
          }
        ]
      },
      {
        "name": "metapod",
        "id": 11,
        "types": [
          {
            "type": {
              "name": "bug"
            }
          }
        ]
      },
      {
        "name": "butterfree",
        "id": 12,
        "types": [
          {
            "type": {
              "name": "bug"
            }
          },
          {
            "type": {
              "name": "flying"
            }
          }
        ]
      }
    ]
  }
}

export const POKEMON_AMOUNT = 1281;


export const TAG_COLOR: Record<EPokemonType, string> = {
  bug: '',
  dark: '',
  dragon: '',
  electric: '',
  fairy: '',
  fighting: '',
  fire: '',
  flying: '',
  ghost: '',
  grass: '',
  ground: '',
  ice: '',
  normal: '',
  poison: '',
  psychic: '',
  rock: '',
  steel: '',
  water: ''
}