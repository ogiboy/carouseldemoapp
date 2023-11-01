import Image from 'next/image'
import { spacePhotos } from './images'

const Card = () => {
  return (
    <div className="card">
      {spacePhotos.map((photo, index) => {
        return (
          <figure key={photo.id}>
            <Image
              src={photo.img}
              alt={photo.name}
              id={photo.id}
              width={500}
              height={500}
            />
            <figcaption>{photo.name}</figcaption>
          </figure>
        )
      })}
    </div>
  )
}

export default Card
