import FeedForm from '@components/FeedForm'
import FeedList from '@components/FeedList'
import { Feed } from '@prisma/client'
import { prisma } from '@utils/prisma'
import React from 'react'

const Forum = async () => {
  const data = await prisma.feed.findMany({
    orderBy: {
      created_at: 'desc'
    },
    include: {
      user: true
    }
  })

  return (
    <div className="z-10 mt-20">
      <FeedForm />
      <FeedList data={data} />
    </div>
  )
}

export default Forum