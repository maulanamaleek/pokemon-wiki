'use client'
import { Feed, User } from '@prisma/client'
import Image from 'next/image';
import React from 'react'

interface IFeedActions {
  data: Feed & { user: User }
}

const FeedActions = ({
  data
}: IFeedActions) => {
  return (
    <div className="flex gap-5 items-center">
      <div className="flex items-center gap-1">
        <Image
          className="cursor-pointer"
          src="/assets/icons/like.svg"
          width={20}
          height={20}
          alt="News"
        />
        <span>{data.likes}</span>
      </div>

      <div className="flex items-center gap-1">
        <Image
          className="cursor-pointer"
          src="/assets/icons/dislike.svg"
          width={20}
          height={20}
          alt="News"
        />
        <span>{data.dislikes}</span>
      </div>

      <div className="flex items-center gap-1">
        <Image
          className="cursor-pointer"
          src="/assets/icons/comment.svg"
          width={20}
          height={20}
          alt="News"
        />
        <span>{data.dislikes}</span>
      </div>
      {/* <button
        className="bg-blue-500 px-4 h-10 rounded-full mr-5"
        onClick={() => fetch('/api/feed/like', { method: 'POST', body: JSON.stringify({ id: data.id }) })}
      >Like
      </button>
      <button
        className="bg-blue-500 px-4 h-10 rounded-full"
        onClick={() => fetch('/api/feed/dislike', { method: 'POST', body: JSON.stringify({ id: data.id }) })}>
        Dislike
      </button> */}
      {/* <button
        className="bg-red-400 px-4 h-10 rounded-full"
        onClick={() => fetch(`/api/feed/${data.id}`, { method: 'DELETE' })}>
        Delete
      </button> */}

      {/* <div>
        <h3>Comments</h3>
      </div> */}
    </div>
  )
}

export default FeedActions