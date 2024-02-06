import React from 'react'

const Avatar = ({imageUrl}) => {
  return (
    <img className='avatar' src={imageUrl ? imageUrl.url : "https://th.bing.com/th/id/OIP.h0hPZzAziPf3v-srHQTdWQHaHa?rs=1&pid=ImgDetMain"} alt="person" />
  )
}

export default Avatar