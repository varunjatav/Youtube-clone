import React from 'react'
import Avatar from './Avatar'
import { HiOutlineDotsVertical } from "react-icons/hi";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
const Comments = () => {
  return (
    <div className="row py-2">
    <div className="col-1">
      <Avatar />
    </div>
    <div className="col-10">
      <p className="fw-semibold mb-0" style={{fontSize:"14px"}}>@snakedesignermotion_graphic <span className="fw-light">2 years ago</span> </p>
      <p className='mb-0"' style={{fontSize:"15px"}}>OMG! Thank you so much! You've been very helpful. I wish you success and a million subscribers. </p>
     <div className='d-flex gap-3'>
      <BiLike style={{cursor:"pointer"}}/>
      <BiDislike style={{cursor:"pointer"}}/>
     </div>
     
    </div>
    <div className="col-1">
      <HiOutlineDotsVertical/>
    </div>
  </div>
  )
}

export default Comments