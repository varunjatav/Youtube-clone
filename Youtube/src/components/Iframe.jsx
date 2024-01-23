import React from 'react'

const Iframe = () => {
  return (
    <div className="col single-thumbnail">
    <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/uilQwWLIXLs?si=nUu4qwD0Q8k59q6k"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <div className="d-flex align-center justify-start gap-3 p-1">
        <img
          src="https://th.bing.com/th/id/OIP.QjynegEfQVPq5kIEuX9fWQHaFj?rs=1&pid=ImgDetMain"
          alt="person"
        />
        <div>
          <p className="fw-bold">
            Responsive Horizontal Scrollable & Draggable Tab Menu | With Tab
            Content - Html, CSS &
          </p>
          <p>Bandai Namco Entertainment America 1.7M views 1 month ago</p>
        </div>
      </div>
    </div>
  )
}

export default Iframe