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
  const time = moment(data.created_at).fromNow(false)
  return (
    <div className="flex flex-col border-gray-300 border rounded-md py-4 px-5">
      <div className="flex gap-2 items-center">
        <Avatar size={25} imgUrl={data.user.avatarUrl} />
        <h2>{data.user.email}</h2>
        <span className="hidden sm:block text-gray-500">{time}</span>
      </div>
      <p className="mt-2">
        {data.description}
      </p>


      <div className="rounded-lg overflow-hidden my-2 w-full" style={{
        height: '300px',
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

      <span className="sm:hidden mb-3 text-gray-500">{time}</span>

      <FeedActions data={data} />
    </div>
  )
}

export default FeedItem