import React from "react";
// import { useParams } from "react-router-dom";
import RelatedVideo from "../components/RelatedVideo";
import Avatar from "../components/Avatar";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { PiShareFatLight } from "react-icons/pi";
import { TfiDownload } from "react-icons/tfi";
import Comments from "../components/Comments";

const Video = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9,10];

  return (
    <div className="row mt-5">
      <div className="col-12 col-lg-8">
        <iframe
          width="100%"
          height="515"
          src="https://www.youtube-nocookie.com/embed/7LyS3Qpv9gw?si=-BCx8FA2CHOZNdZB"
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
            <div className="col-12 col-md-6 d-flex align-items-center justify-content-between">
              <Avatar />
              <div>
                <p className="fw-semibold mb-0">Technical Suneja CLips</p>
                <p style={{ fontSize: "10px", color: "grey" }}>
                  633 Subscriber
                </p>
              </div>

              <button
                className="btn btn-dark rounded-pill fw-semibold px-3"
                style={{ fontSize: "14px" }}
              >
                {" "}
                Subscribe
              </button>
            </div>
            <div className="col-12 col-md-6 d-flex align-items-center justify-content-between">
              <div>
                <button className="btn btn-light rounded-start-pill py-1 px-3 border-0">
                  <AiOutlineDislike /> <span>54</span>
                </button>
                <button className="btn btn-light rounded-end-pill py-1 px-3 border-0">
                  <AiOutlineLike /> <span>54</span>
                </button>
              </div>
              <button className="btn btn-light rounded-pill px-3 border-0">
                {" "}
                <PiShareFatLight /> Share
              </button>
              <button className="btn btn-light rounded-pill px-3 border-0">
                {" "}
                <TfiDownload /> Download
              </button>
            </div>
          </div>
        </div>
        <div className="p-3 text-bg-light rounded-3">
          <p className="info">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
            temporibus accusantium iusto odio omnis reprehenderit ipsa,
            veritatis, delectus aspernatur neque earum impedit architecto
            provident quia consequatur labore eius velit doloremque?
            <br />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            praesentium debitis id repellat excepturi, quia quod animi dicta
            inventore perferendis quam, non alias. Provident mollitia laborum
            distinctio vel et quod.
            <br />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
            temporibus accusantium iusto odio omnis reprehenderit ipsa,
            veritatis, delectus aspernatur neque earum impedit architecto
            provident quia consequatur labore eius velit doloremque? Lorem,
            <br />
            ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            praesentium debitis id repellat excepturi, quia quod animi dicta
            inventore perferendis quam, non alias. Provident mollitia laborum
            distinctio vel et quod.
          </p>

          <button className="btn btn-[#fff] border-0 fw-semibold">
            Show More
          </button>
        </div>
        <div className="p-4">
          <h5>21 Comments</h5>
          <div className="row py-2">
            <div className="col-1">
              <Avatar />
            </div>

            <input
              type="text"
              className="col-11 border-0 border-bottom"
              placeholder="Add a comment.."
            />
          </div>
          {arr.slice(0,3).map((item, index) => (
          <Comments/>
        ))}
        </div>
      </div>
      <div className="col-12 col-lg-4">
        {arr.map((item, index) => (
          <RelatedVideo key={index} />
        ))}
      </div>
    </div>
  );
};

export default Video;
