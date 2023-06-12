'use client'
import Avatar from '@components/Avatar'
import React, { useRef, useState } from 'react'
import Image from 'next/image'

const FeedForm = () => {
  const [image, setImage] = useState<File | null>(null);
  const [text, setText] = useState('');
  const [title, setTitle] = useState('Default title');
  const fileInputRef = useRef<HTMLInputElement | null>(null)

  const handleUploadFile: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    // pattern for image/jpeg, image/png, image/jpg
    const imagePattern = /(image)\/(jpeg|png|jpg)/;
    const fileList = e.target.files;
    if (fileList?.[0]) {
      setImage(fileList[0])
    }
  }

  const handleFormSubmit = () => {
    // validate first
    console.log('here')

    // text is required
    if (!text) {
      return;
    }

    // submit handler then clear input

    // upload image to storage and get img url
    // 

    const bodyForm = {
      description: text,
      title,
      userId: 2,
      images: ['https://www.jamtangan.com/cdn-cgi/image/fit=cover,format=auto/https://assets.jamtangan.com/images/product/casio/EFV-540D-1AVUDF/1l.jpg']
    }
    console.log({ bodyForm })

    fetch('/api/feed', {
      method: 'POST',
      body: JSON.stringify(bodyForm)
    })
      .then(() => {

      })
      .catch(() => {

      })

    setText('');
    setImage(null);

  }

  const renderImagePlaceholder = (() => {
    if (image) {
      const imgObjUrl = URL.createObjectURL(image);
      return (
        <Image
          className="object-cover"
          src={imgObjUrl}
          width={200}
          height={100}
          alt="feed image"
        />
      )
    }
  })()

  return (
    <div className="flex flex-col gap-4">
      <div className='flex items-start gap-5'>
        <Avatar
          size={30}
          imgUrl='https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/12.svg'
        />
        <textarea value={text} onChange={(e) => setText(e.target.value)} className="bg-white p-2 flex-1 resize-none" rows={5} placeholder="Share your thought" />
      </div>
      {renderImagePlaceholder}
      <div className="flex justify-between pl-12 items-center">
        <span
          className="cursor-pointer hover:bg-slate-200 rounded-sm h-5 flex items-center px-0.5 ease-in"
          onClick={() => fileInputRef.current?.click()}
        >
          <Image
            src="/assets/icons/image.svg"
            width={17}
            height={17}
            alt="image input"
          />
        </span>
        <input
          ref={fileInputRef}
          id="formImageInput"
          type="file"
          className="hidden"
          onChange={handleUploadFile}
        />
        <button onClick={handleFormSubmit} className="bg-green-300 px-4 py-1 rounded-full hover:bg-green-400">Submit</button>
      </div>

      <button onClick={() => fetch('/api/feed/5')}>COBA FETCH</button>
      <button onClick={() => fetch('/api/feed/like', { method: 'POST', body: JSON.stringify({ id: 5 }) })}>COBA Like</button>
      <button onClick={() => fetch('/api/feeds')}>GET ALL FEEDS</button>
    </div>
  )
}

export default FeedForm