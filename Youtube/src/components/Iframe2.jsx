import React from "react";
import Avatar from "./Avatar";

const Iframe2 = () => {
  return (
    <div>
      <div className="col single-thumbnail">
        <img
          src="https://www.nsbpictures.com/wp-content/uploads/2021/01/background-for-thumbnail-youtube-3.jpg"
          alt="thubnail"
        />
        <div className="d-flex align-center justify-start gap-3 pt-3 py-1">
         <Avatar/>
          <div>
            <p className="fw-semibold mb-0 text-black">How to Render 360 Panorama in Blender (360 Rendering in Blender Tutorial)</p>
            <p className="video-para fw-light ">chocofur</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Iframe2;
