'use client';
import Image from 'next/image';
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
        className={`${hasPrev ? 'bg-white cursor-pointer' : 'bg-gray-300 cursor-default'} flex items-center justify-center h-full px-4`}
        onClick={onFirst}
      >
        <Image
          src="assets/icons/double_arrow_left.svg"
          width={25}
          height={25}
          alt="first page"
        />
      </div>
      <div
        className={`${hasPrev ? 'bg-white cursor-pointer' : 'bg-gray-300 cursor-default'} flex items-center justify-center h-full px-4 border-l-2 border-gray-500`}
        onClick={_prev}
      >
        <Image
          src="assets/icons/arrow_left.svg"
          width={25}
          height={25}
          alt="previous page"
        />
      </div>
      <div
        className={`${hasNext ? 'bg-white cursor-pointer' : 'bg-gray-300 cursor-default'} flex items-center justify-center h-full px-4 border-l-2 border-gray-500`}
        onClick={_next}
      >
        <Image
          src="assets/icons/arrow_right.svg"
          width={25}
          height={25}
          alt="next page"
        />
      </div>
      <div
        className={`${hasNext ? 'bg-white cursor-pointer' : 'bg-gray-300 cursor-default'} flex items-center justify-center h-full px-4 border-l-2 border-gray-500`}
        onClick={onLast}
      >
        <Image
          src="assets/icons/double_arrow_right.svg"
          width={25}
          height={25}
          alt="last page"
        />
      </div>
    </div>
  )
}

export default Pagination