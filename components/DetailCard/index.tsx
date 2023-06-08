import { IPokemonDetailResponse } from '@/types/pokemon'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';

import styles from './style.module.css';
import Tag from '@components/Tag';
import { transformHeight, transformWeight } from '@utils';

interface IDetailCardProps {
  detail: IPokemonDetailResponse;
}

const DetailCard = ({
  detail
}: IDetailCardProps) => {
  const [image, setImage] = useState('');
  const {
    detail: {
      id,
      name,
      base_experience,
      weight,
      height,
      specy: {
        capture_rate,
        evolution_chain_id,
      },
      abilities,
      stats,
      types
    },
    evolution_chain: {
      evolution
    }
  } = detail;


  useEffect(() => {
    setImage(`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${id}.svg`);
  }, [id])

  const tagListElem = (
    <div className={styles.tagList}>
      {types.slice(0, 3).map((t) => {
        return (
          <Tag key={t.type.name} text={t.type.name} />
        )
      })}
    </div>
  )

  const evolutionChainElem = (
    <div className="flex flex-row justify-between w-full mt-4">
      {evolution.map((ev) => (
        <div key={ev.id}>
          {ev.name}
        </div>
      ))}
    </div>
  )

  const statsElem = (
    <div className="flex flex-col items-start w-full mt-4">
      <h4 className="font-semibold">Stats</h4>
      {stats.map((st) => (
        <div key={st.id}>
          {st.stat.name} - {st.base_stat}
        </div>
      ))}
    </div>
  )

  const abilitiesElem = (

    <div className="flex flex-col items-start w-full mt-4">
      <h4 className="font-semibold">Abilities</h4>
      {abilities.map((ab) => (
        <div key={ab.id} className="mt-2">
          <span>{ab.is_hidden}</span>
          <h5 className="font-semibold capitalize text-green-500">{ab.ability.name}</h5>
          <span className="text-sm ">{ab.ability.effects[0].effect}</span>
        </div>
      ))}
    </div>
  )

  return (
    <div className="flex flex-col items-center gap-1 h-auto px-5 pb-8">
      <Image
        src={image}
        width={120}
        height={120}
        alt={name}
        onError={() => {
          setImage('/assets/icons/pokeball.svg')
        }}
      />
      <span className="font-bold mt-4">Nᵒ{id}</span>
      <span className="font-semibold text-xl capitalize">{name}</span>
      {tagListElem}
      <div className="grid grid-cols-2 justify-between mt-2 w-full">
        <span>Exp: {base_experience}</span>
        <span>Weight: {transformWeight(weight)}kg</span>
        <span>Height: {transformHeight(height)}m</span>
        <span>Rate: {capture_rate}%</span>
      </div>
      {statsElem}
      {abilitiesElem}
      {evolutionChainElem}
    </div>
  )
}

export default DetailCard