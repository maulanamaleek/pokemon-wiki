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
    <div>
      {evolution.map((ev) => (
        <div key={ev.id}>
          {ev.name}
        </div>
      ))}
    </div>
  )

  const statsElem = (
    <div>
      {stats.map((st) => (
        <div key={st.id}>
          {st.stat.name} - {st.base_stat}
        </div>
      ))}
    </div>
  )

  const abilitiesElem = (
    <div>
      {abilities.map((ab) => (
        <div key={ab.id}>
          <span>{ab.is_hidden}</span>
          <span>{ab.ability.name}</span>
          <span>{ab.ability.effects[0].effect}</span>
        </div>
      ))}
    </div>
  )

  return (
    <div>
      <Image
        src={image}
        width={120}
        height={120}
        alt={name}
        onError={() => {
          setImage('/assets/icons/pokeball.svg')
        }}
      />
      <span>Nᵒ{id}</span>
      <span>{name}</span>
      <span>Exp: {base_experience}</span>
      <span>Weight: {transformWeight(weight)}kg</span>
      <span>Height: {transformHeight(height)}m</span>
      <span>Rate: {capture_rate}%</span>
      {tagListElem}
      {evolutionChainElem}
      {statsElem}
      {abilitiesElem}
    </div>
  )
}

export default DetailCard