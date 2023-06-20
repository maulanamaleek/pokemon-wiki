"use client";
import { Locale } from '@/utils/i18n'
import { gql, useQuery } from '@apollo/client';
import Card from '@components/Card';
import { POKEMON_AMOUNT, exampleList } from '@constants';
import { ELang } from '@utils/i18n/types';

import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import Pagination from '@components/Pagination';
import { useState } from 'react';
import { IPokemonDetailResponse, IPokemonDisplay, IPokemonListResponse } from '@/types/pokemon';
import DetailCard from '@components/DetailCard';

const query = gql`query pokemonList {
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

const perPage = 12;
const maxPage = Math.floor(POKEMON_AMOUNT / perPage);

interface HomeProps {
  pokemon: any;
}

export default function Home({
  pokemon
}: HomeProps) {
  const [page, setPage] = useState(1);
  const [selectedPokemon, setSelectedPokemon] = useState<number | null>(1);
  const { data: pokemonList, error } = useSuspenseQuery<IPokemonListResponse>(gql`query pokemonList {
    list: pokemon_v2_pokemon(limit: ${perPage}, offset: ${(page * perPage) - 12}) {
      name
      id
      types: pokemon_v2_pokemontypes(limit: 3) {
        type: pokemon_v2_type {
          name
        }
      }
    }
  }
  `);

  const { data: detail, error: detailError } = useSuspenseQuery<IPokemonDetailResponse>(gql`
    query pokemonPreview {
      detail: pokemon_v2_pokemon_by_pk(id: ${selectedPokemon}) {
        id
        name
        order
        height
        weight
        base_experience
        abilities: pokemon_v2_pokemonabilities {
          slot
          ability: pokemon_v2_ability {
            name
            id
            effects: pokemon_v2_abilityeffecttexts(where: {language_id: {_eq: 9}}) {
              language_id
              effect
            }
          }
          is_hidden
          id
        }
        specy: pokemon_v2_pokemonspecy {
          evolution_chain_id
          capture_rate
        }
        stats: pokemon_v2_pokemonstats {
          id
          stat_id
          stat: pokemon_v2_stat {
            name
          }
          base_stat
        }
        types: pokemon_v2_pokemontypes {
          type: pokemon_v2_type {
            name
            id
          }
        }
      }
      evolution_chain: pokemon_v2_evolutionchain_by_pk(id: 205) {
        evolution: pokemon_v2_pokemonspecies {
          name
          id
        }
      }
    }
  `)

  Locale.setLanguage(ELang.ID);
  const locale = Locale.getLocale();

  if (error || detailError) {
    return <h1>Error request graphql...</h1>
  }

  const handleNext = () => {
    setPage(p => p + 1)
  }

  const handlePrev = () => {
    setPage(p => p - 1)
  }

  const handlePageFirst = () => {
    setPage(1);
  }
  const handlePageLast = () => {
    setPage(maxPage);
  }

  const pokeListElem = (() => {
    if (!pokemonList) return;
    return pokemonList.list.map((d: any) => (
      <Card
        id={d.id}
        imgUrl={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${d.id}.gif`}
        name={d.name}
        types={d.types}
        onClick={() => setSelectedPokemon(d.id)}
      />
    ));
  })()



  return (
    <main className="">

      <div className="flex md:gap-10 justify-between w-full md:w-auto mt-20 ">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 flex-wrap mx-auto w-full md:w-3/4 flex-1">
          {pokeListElem}
        </div>
        <div className="md:w-64 shadow-lg h-max rounded-xl relative bg-white">
          <DetailCard detail={detail} />
        </div>
      </div>
      <Pagination
        hasPrev={page > 1}
        hasNext={page < maxPage}
        onNext={handleNext}
        onPrev={handlePrev}
        onFirst={handlePageFirst}
        onLast={handlePageLast}
      />
    </main>
  )
}
