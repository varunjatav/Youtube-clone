import React, { useEffect, useState } from 'react'
  
const RelatedVideo = ({item}) => {
  const [Title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  useEffect(() => {
    setTitle(item.snippet.title.slice(0,50));
    setDesc(item.snippet.description.slice(0,40));
  },[])
  return (
    <div className='row' style={{cursor:"pointer"}} >
        <div className="col">
        <img
          src={item && item.snippet.thumbnails.high.url}
          alt={item && item.snippet.title}
        
          width="100%"
          height="80%"
        />
        </div>
        <div className='col'>
        <p className="fw-semibold mb-0 text-black"> {item && Title}</p>
            <p className="video-para fw-light text-black">{item && desc}..</p>
        </div>
    </div>
  )
}

export default RelatedVideo