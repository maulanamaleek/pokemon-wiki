/**
 * Due to a lot of properties in https://pokeapi.co/
 * I only make essential typing base on usage in this project
 */


export enum EPokemonType {
  Bug = 'bug',
  Dark = 'dark',
  Dragon = 'dragon',
  Electric = 'electric',
  Fairy = 'fairy',
  Fighting = 'fighting',
  Fire = 'fire',
  Flying = 'flying',
  Ghost = 'ghost',
  Grass = 'grass',
  Ground = 'ground',
  Ice = 'ice',
  Normal = 'normal',
  Poison = 'poison',
  Psychic = 'psychic',
  Rock = 'rock',
  Steel = 'steel',
  Water = 'water'
}

export interface IPokemonType {
  type: {
    name: string;
  }
}

export interface IPokemonDisplay {
  id: number;
  name: string;
  types: IPokemonType[];
}

export interface IPokemonListResponse {
  list: IPokemonDisplay[]
}

export interface IPokemonDetailResponse {
  detail: IDetail
  evolution_chain: EvolutionChain
}

export interface IDetail {
  id: number
  name: string
  order: number
  height: number
  weight: number
  base_experience: number
  abilities: IAbility[]
  specy: ISpecy
  stats: IStat[]
  types: IType[]
}

export interface IAbility {
  slot: number
  ability: {
    name: string
    id: number
    effects: IEffect[]
  }
  is_hidden: boolean
  id: number
}

export interface IEffect {
  language_id: number
  effect: string
}

export interface ISpecy {
  evolution_chain_id: number
  capture_rate: number
}

export interface IStat {
  id: number
  stat_id: number
  stat: {
    name: string;
  }
  base_stat: number
}

export interface IType {
  type: {
    name: string;
    id: number;
  }
}


export interface EvolutionChain {
  evolution: IEvolution[]
}

export interface IEvolution {
  name: string
  id: number
}
