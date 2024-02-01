import React from 'react'

const RelatedVideo = () => {
  return (
    <div className='row' style={{cursor:"pointer"}} >
        <div className="col">
        <img
          src="https://www.nsbpictures.com/wp-content/uploads/2021/01/background-for-thumbnail-youtube-3.jpg"
          alt="thubnail"
          width="100%"
          height="80%"
        />
        </div>
        <div className='col'>
        <p className="fw-semibold mb-0 text-black">How to Render 360 Panorama in Blender (360 Rendering in Blender Tutorial)</p>
            <p className="video-para fw-light ">chocofur</p>
        </div>
    </div>
  )
}

export default RelatedVideo