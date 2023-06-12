import Avatar from '@components/Avatar';
import { Feed, User } from '@prisma/client'
import React from 'react'
import FeedActions from './FeedActions';
import Image from 'next/image';
import moment from 'moment';

interface IFeedItemProps {
  data: Feed & { user: User };
}

const FeedItem = ({
  data
}: IFeedItemProps) => {
  const time = moment(data.created_at).format('ddd hh:mm A')
  return (
    <div>
      <Avatar size={25} imgUrl={data.user.avatarUrl} />
      <h2>{data.user.email}</h2>
      <h3>{time}</h3>
      <p>
        {data.description}
      </p>

      <div className="rounded-lg overflow-hidden" style={{
        width: '200px',
        height: '100px',
        display: 'block',
        position: 'relative'
      }}>
        <Image
          src={data.images[0]}
          alt="imagesss....."
          fill
          style={{
            objectFit: 'cover'
          }}
        />
      </div>

      <div>
        <p>{data.likes}</p>
        <p>{data.dislikes}</p>
      </div>

      <FeedActions data={data} />
    </div>
  )
}

export default FeedItem