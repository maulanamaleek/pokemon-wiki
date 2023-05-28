import Image from 'next/image';
import styles from './style.module.css';
import Tag from '@components/Tag';
import { useEffect, useState } from 'react';

interface ICardProps {
  imgUrl: string;
  name: string;
  id: number;
  types: any[];
  onClick: () => void;
}

const Card = ({
  imgUrl,
  name,
  id,
  types,
  onClick
}: ICardProps) => {
  const [image, setImage] = useState('');

  useEffect(() => {
    setImage(imgUrl);
  }, [imgUrl])

  const tagListElem = (() => {
    return (
      <div className={styles.tagList}>
        {types.slice(0, 3).map((t) => {
          return (
            <Tag key={t.type.name} text={t.type.name} />
          )
        })}
      </div>
    )
  })()


  return (
    <div className={styles.card} onClick={onClick}>
      <Image
        className={styles.cardImage}
        src={image}
        width={48}
        height={48}
        alt={name}
        onError={() => {
          setImage('/assets/icons/pokeball.svg')
        }}
      />
      <span className={styles.cardId}>Nᵒ{id}</span>
      <span className={styles.cardName}>{name}</span>
      {tagListElem}
    </div>
  )
}

export default Card