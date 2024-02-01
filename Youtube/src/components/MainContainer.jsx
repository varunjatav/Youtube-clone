import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Iframe from "./Iframe";
import { Link } from "react-router-dom";
import { getVedios } from "../store/fetchVediosSlice";



const MainContainer = () => {
  const dispatch = useDispatch();
  const toggle = useSelector((store) => store.toggle);
  const vedioItems = useSelector((store) => store.fetchVedios);
  const search = useSelector((store) => store.search);

console.log("Search", search);
 useEffect(() => {
    dispatch(getVedios(search));
 },[search])
 
  // console.log("vedio Items: ",vedioItems.data);
  return (
    <>
    {vedioItems.loading && <p>Loading...</p>}
            {vedioItems.error && <p>Error occurred!</p>}
   
    <div className="container">
      <div
        className={`row row-cols-1 row-cols-md-2 ${
          toggle ? " row-cols-lg-3" : " row-cols-lg-4"
        } g-2 g-lg-3`}
      >
      {vedioItems.data &&
      vedioItems.data.map((item, index) => (
        <Link key={index} to='/videoId' className="text-decoration-none">
        <Iframe key={index} item={item} />
        </Link>
      ))}
      </div>
    </div>
    </>
  );
};

export default MainContainer;
