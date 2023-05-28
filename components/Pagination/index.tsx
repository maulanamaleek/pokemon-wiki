'use client';
import React, { useState } from 'react'

interface IPaginationProps {
  hasNext: boolean;
  hasPrev: boolean;

  onNext: () => void;
  onPrev: () => void;
  onFirst: () => void;
  onLast: () => void;
}

const Pagination = ({
  hasNext,
  hasPrev,
  onNext,
  onPrev,
  onFirst,
  onLast
}: IPaginationProps) => {

  const _next = () => {
    if (!hasNext) return;
    onNext()
  }
  const _prev = () => {
    if (!hasPrev) return;
    onPrev()
  }

  return (
    <div className="flex items-center rounded-md border-2 border-gray-500 h-10 mt-10 overflow-hidden">
      <div
        className={`${hasPrev ? 'bg-white cursor-pointer' : 'bg-gray-300 cursor-default'} flex items-center justify-center h-full px-2`}
        onClick={onFirst}
      >
        <span>First</span>
      </div>
      <div
        className={`${hasPrev ? 'bg-white cursor-pointer' : 'bg-gray-300 cursor-default'} flex items-center justify-center h-full px-2`}
        onClick={_prev}
      >
        <span>Previous</span>
      </div>
      <div
        className={`${hasNext ? 'bg-white cursor-pointer' : 'bg-gray-300 cursor-default'} flex items-center justify-center h-full px-4 border-l-2 border-gray-500`}
        onClick={_next}
      >
        <span>Next</span>
      </div>
      <div
        className={`${hasNext ? 'bg-white cursor-pointer' : 'bg-gray-300 cursor-default'} flex items-center justify-center h-full px-4 border-l-2 border-gray-500`}
        onClick={onLast}
      >
        <span>Last</span>
      </div>
    </div>
  )
}

export default Pagination