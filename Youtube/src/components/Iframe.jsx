import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Iframe = ({item}) => {

  const [Title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  if (!item || !item.snippet) {
    // Handle the case where item is undefined or has unexpected properties
    console.error("Invalid item:", item);
    return null; // or render some default content or an error message
  }
  useEffect(() => {
    setTitle(item.snippet.title.slice(0,50));
    setDesc(item.snippet.description.slice(0,40));
  },[])
  // console.log("Iframe: ", item);
  return (
    <Link to={`/${item.id.videoId}`} className='text-decoration-none text-black'>
    <div className="col single-thumbnail">
   
      <img src={item && item.snippet.thumbnails.high.url} alt={item && item.snippet.title} />
      <div className="d-flex align-center justify-start gap-3 p-1">
        <img
          src={item && item.snippet.thumbnails.default.url}
          alt="person"
        />
        <div>
          <p className="fw-bold">
            {item && Title}
          </p>
          <p>{item && desc}..</p>
        </div>
      </div>
    </div>
    </Link>
  )
}

export default Iframe;


 {/* <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${item &&item.snippet.channelId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe> */}