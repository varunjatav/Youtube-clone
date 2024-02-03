import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Iframe from "./Iframe";
import { Link } from "react-router-dom";
import Iframe2 from "./Iframe2";

import { TbError404 } from "react-icons/tb";
import { getVideos } from "../store/fetchVideosSlice";

const MainContainer = () => {
  const dispatch = useDispatch();
  const toggle = useSelector((store) => store.toggle);
  const VideoItems = useSelector((store) => store.fetchVideos);
  const search = useSelector((store) => store.search);
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  console.log("Search", search);
  useEffect(() => {
    dispatch(getVideos());
  }, []);

  console.log("Video Items: ",VideoItems.data);
  return (
    <>
      {VideoItems.loading && (
      
          <div className="spinner-border text-danger d-flex  m-auto" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
       
      )}
      {VideoItems.error && <div><TbError404/></div>}

      <div className="container">
        <div
          className={`row row-cols-1 row-cols-md-2 ${
            toggle ? " row-cols-lg-3" : " row-cols-lg-4"
          } g-2 g-lg-3`}
        >
          {VideoItems.data &&
            VideoItems.data.map((item, index) => (
              <Link key={index} to={`/${item.id.videoId}`} className="text-decoration-none">
                <Iframe key={index} item={item} />
              </Link>
            ))}
          {/* {arr.map((item, index) => (
   <Link key={index} to='/videoId' className="text-decoration-none">
        <Iframe2 key={index} item={item} />
        </Link>
))} */}
        </div>
      </div>
    </>
  );
};

export default MainContainer;
