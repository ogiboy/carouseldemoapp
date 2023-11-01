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
  // transform: `translateX(${offset}%)`,

  return (
    <div className="wrapper">
      <div className="card">
        {spacePhotos.map((photo, index) => {
          const offset = index - mainPhoto
          const isMainPhoto = Math.abs(offset) === 0
          const style = {
            opacity: Math.abs(offset) === 0 ? 1 : 0.5,
          }
          const imageWidth = isMainPhoto ? 700 : 500
          const imageHeight = 500

          return (
            <figure key={photo.id} style={style}>
              <Image
                src={photo.img}
                alt={photo.name}
                id={photo.id}
                width={imageWidth}
                height={imageHeight}
              />
              <figcaption>{photo.name}</figcaption>
            </figure>
          )
        })}
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
