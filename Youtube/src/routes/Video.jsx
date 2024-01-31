import React from "react";
import { useParams } from "react-router-dom";
import RelatedVideo from "../components/RelatedVideo";
import Avatar from "../components/Avatar";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { PiShareFatLight } from "react-icons/pi";
import { TfiDownload } from "react-icons/tfi";
const Video = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let videoId = useParams();
  console.log(videoId);
  return (
    <div className="row" style={{ width: "100%" }}>
      <div className="col-8">
        <iframe
          width="100%"
          height="515"
          src="https://www.youtube.com/embed/7LyS3Qpv9gw?si=-BCx8FA2CHOZNdZB"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="rounded-3"
        ></iframe>
        <div>
          <h4>
            How To Master React In 2024 (Complete Roadmap) | A Must-Watch Guide
            for Frontend Developers
          </h4>
          <div className="row">
            <div className="col d-flex align-items-center justify-content-between">
              <Avatar />
              <div>
                <p className="fw-semibold mb-0">Technical Suneja CLips</p>
                <p style={{ fontSize: "10px", color: "grey" }}>
                  633 Subscriber
                </p>
              </div>

              <button className="btn btn-dark rounded-pill fw-semibold px-3" style={{fontSize:"14px"}}> Subscribe</button>
            </div>
            <div className="col d-flex align-items-center justify-content-between">
              <div>
                <button className="btn btn-light rounded-start-pill py-1 px-3 border-0">
                  <AiOutlineDislike /> <span>54</span>
                </button>
                <button className="btn btn-light rounded-end-pill py-1 px-3 border-0">
                  <AiOutlineLike /> <span>54</span>
                </button>
              </div>
              <button className="btn btn-light rounded-pill px-3 border-0"> <PiShareFatLight/> Share</button>
              <button className="btn btn-light rounded-pill px-3 border-0"> <TfiDownload/> Download</button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-4">
        {arr.map((item, index) => (
          <RelatedVideo key={index} />
        ))}
      </div>
    </div>
  );
};

export default Video;
{
  /* <iframe width="560" height="315" src="https://www.youtube.com/embed/K3Qzzggn--s?si=w9eDmtqT_MAkRozv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */
}
