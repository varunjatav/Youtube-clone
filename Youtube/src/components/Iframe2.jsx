import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";

const Iframe2 = () => {
 
  // console.log("Iframe: ", item);
  return (
    <div className="col single-thumbnail">
      <img src="https://www.nsbpictures.com/wp-content/uploads/2021/01/background-for-thumbnail-youtube-9.jpg" alt="thumbnail" />
      <div className="d-flex align-center justify-start gap-3 pt-3 py-1">
        <Avatar />
        <div>
          <p className="fw-semibold mb-0 text-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            laboriosam animi,
          </p>
          <p className="video-para fw-light ">
            Lorem ipsum dolor 
          </p>
        </div>
      </div>
    </div>
  );
};
export default Iframe2;