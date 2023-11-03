import { useState } from 'react'
import { spacePhotos } from './images'
import Image from 'next/image'

export default function Carousel() {
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

  return (
    <div className="wrapper">
      <div className="card">
        {spacePhotos.map((photo, index) => {
          const isMainPhoto = index === mainPhoto
          const imageWidth = isMainPhoto ? 700 : 500
          const imageHeight = 500
          {
            /* const style = {
            opacity: isMainPhoto ? 1 : 0.7,
          } */
          }

          const imageStyle = {
            borderRadius: '20px',
          }

          return (
            <figure
              // style={style}
              className={isMainPhoto ? 'main' : ''}
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
              />
              <figcaption>{photo.name}</figcaption>
            </figure>
          )
        })}
      </div>
      <div className="dots">
        {spacePhotos.map((photo, index) => (
          <span
            key={index}
            className={`dot ${index === mainPhoto ? 'active' : ''}`}
            onClick={() => handleDots(index)}
          ></span>
        ))}
      </div>
      <div className="controls">
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
