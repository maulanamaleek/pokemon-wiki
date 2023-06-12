'use client'
import { Feed, User } from '@prisma/client'
import React from 'react'

interface IFeedActions {
  data: Feed & { user: User }
}

const FeedActions = ({
  data
}: IFeedActions) => {
  return (
    <div>
      <button
        className="bg-blue-500 px-4 h-10 rounded-full mr-5"
        onClick={() => fetch('/api/feed/like', { method: 'POST', body: JSON.stringify({ id: data.id }) })}
      >Like
      </button>
      <button
        className="bg-blue-500 px-4 h-10 rounded-full"
        onClick={() => fetch('/api/feed/dislike', { method: 'POST', body: JSON.stringify({ id: data.id }) })}>
        Dislike
      </button>
      <button
        className="bg-red-400 px-4 h-10 rounded-full"
        onClick={() => fetch(`/api/feed/${data.id}`, { method: 'DELETE' })}>
        Delete
      </button>

      <div>
        <h3>Comments</h3>
      </div>
    </div>
  )
}

export default FeedActions