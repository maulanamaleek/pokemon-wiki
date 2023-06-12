import FeedForm from '@components/FeedForm'
import FeedList from '@components/FeedList'
import { prisma } from '@utils/prisma'
import React from 'react'

const Forum = async () => {
  const res = await prisma.feed.findMany({
    orderBy: {
      created_at: 'desc'
    },
    include: {
      user: true
    }
  })


  console.log({ res })

  return (
    <div className="z-10 mt-20">
      <FeedForm />
      <FeedList data={res} />
    </div>
  )
}

export default Forum