import { Feed, Prisma, User } from '@prisma/client'
import React from 'react'
import FeedItem from './FeedItem'
import MoreBtn from '@components/MoreBtn'

interface IFeedListProps {
  data: (Feed & { user: User })[]
}

const FeedList = ({
  data
}: IFeedListProps) => {
  return (
    <div className="flex flex-col gap-10 w-full">
      {data.map((feed) => <FeedItem key={feed.id} data={feed} />)}

      <MoreBtn />
    </div>
  )
}

export default FeedList