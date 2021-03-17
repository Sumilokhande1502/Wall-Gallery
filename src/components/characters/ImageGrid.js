import React from 'react'
import ImageItem from './ImageItem'
import Spinner from '../ui/Spinner'

const ImageGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className='cards'>
      {items.map((item) => (
        <ImageItem key={item.id} item={item}></ImageItem>
      ))}
    </section>
  )
}

export default ImageGrid
