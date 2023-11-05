"use client"

import { useEffect, useState } from 'react'
import { spacePhotos } from './images'
import Image from 'next/image'
import { useScreenSize } from './ScreenContext'

export default function Carousel() {
  const { screenType } = useScreenSize()

  const [mainPhoto, setMainPhoto] = useState(0)

  const handlePreBtn = () => {
    setMainPhoto((prevMainPhoto) =>
      prevMainPhoto === 0 ? spacePhotos.length - 1 : prevMainPhoto - 1
    )
  }

  const handleNextBtn = () => {
    setMainPhoto((prevMainPhoto) =>
      prevMainPhoto === spacePhotos.length - 1 ? 0 : prevMainPhoto + 1
    )
  }

  const handleDots = (index) => setMainPhoto(index)

  useEffect(() => {
    const autoSlider = setInterval(() => {
      setMainPhoto((prevSlide) => (prevSlide + 1) % spacePhotos.length)
    }, 3000)
    return () => clearInterval(autoSlider)
  }, [])

  return (
    <div className={`wrapper ${screenType}`}>
      <div className={`card ${screenType}`}>
        {spacePhotos.map((photo, index) => {
          const isMainPhoto = index === mainPhoto
          const imageWidth = isMainPhoto ? 700 : 500
          const imageHeight = isMainPhoto ? 550 : 500
          const imageStyle = {
            borderRadius: '20px',
            width: imageHeight,
            height: imageHeight,
          }
          return (
            <figure
              className={`${isMainPhoto ? 'main' : ''} ${screenType}`}
              key={photo.id}
            >
              <Image
                src={photo.img}
                alt={photo.name}
                id={photo.id}
                width={imageWidth}
                height={imageHeight}
                placeholder="blur"
                style={imageStyle}
                sizes="100vw"
              />
              <figcaption>{photo.name}</figcaption>
            </figure>
          )
        })}
      </div>
      <div className={`dots ${screenType}`}>
        {spacePhotos.map((photo, index) => (
          <span
            key={index}
            className={`dot ${index === mainPhoto ? 'active' : ''}`}
            onClick={() => handleDots(index)}
          ></span>
        ))}
      </div>
      <div className={`controls ${screenType}`}>
        <button onClick={handlePreBtn} className="preBtn">
          Previous
        </button>
        <button onClick={handleNextBtn} className="nextBtn">
          Next
        </button>
      </div>
    </div>
  )
}
