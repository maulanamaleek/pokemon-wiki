import React, { FC } from 'react'
import Image from 'next/image';

interface IAvatarProps {
  size: number;
  imgUrl: string;
}

type TImage = typeof Image;

const Avatar: FC<IAvatarProps> = ({
  size,
  imgUrl,
}) => {
  return (
    <Image
      src={imgUrl}
      alt={imgUrl}
      width={size}
      height={size}
      className="rounded-full object-contain"

    />
  )
}

export default Avatar