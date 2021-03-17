import React from 'react'

const ImageItem = ({ item }) => {
  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={item.img} alt='' />
        </div>
        <div className='card-back'>
        </div>
      </div>
    </div>
  )
}

export default ImageItem
