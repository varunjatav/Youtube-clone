import React from "react";
import { useParams } from "react-router-dom";

const Video = () => {
  let videoId = useParams();
  console.log(videoId);
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}?si=w9eDmtqT_MAkRozv`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Video;
{/* <iframe width="560" height="315" src="https://www.youtube.com/embed/K3Qzzggn--s?si=w9eDmtqT_MAkRozv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}