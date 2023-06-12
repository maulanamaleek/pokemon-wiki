import { Feed, Prisma, User } from '@prisma/client'
import React from 'react'
import FeedItem from './FeedItem'

interface IFeedListProps {
  data: (Feed & { user: User })[]
}

const FeedList = ({
  data
}: IFeedListProps) => {
  return (
    <div className="flex flex-col gap-5">
      {data.map((feed) => <FeedItem key={feed.id} data={feed} />)}
    </div>
  )
}

export default FeedList