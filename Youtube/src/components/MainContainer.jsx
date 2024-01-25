import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Iframe from "./Iframe";
import { fetchVediosAction } from "../store/fetchVediosSlice";

// GET https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc%2Cc0KYU2j0TM4%2CeIho2S0ZahI&key=[YOUR_API_KEY] HTTP/1.1
// Authorization: Bearer [YOUR_ACCESS_TOKEN]
// Accept: application/json
// var items ;
const API_KEY = "AIzaSyDvUJrvsEnygogqEa52oyigP9KHv4D1OC8";

const MainContainer = () => {
  const dispatch = useDispatch();
  const toggle = useSelector((store) => store.toggle);
  const vedioItems = useSelector((store) => store.fetchVedios);
  const search = useSelector((store) => store.search);
 useEffect(() => {
   const getVideos = async () => {
    let response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?q=${search}&key=${API_KEY}&part=snippet&maxResults=20`
    );
    const  data  = await response.json();
    // let data = response.json();
     dispatch(fetchVediosAction.fetchVedios(data.items));
    // console.log(data.items);
  };
  getVideos();
 },[])
 
  console.log("vedio Items: ",vedioItems);
  return (
    <div className="container">
      <div
        className={`row row-cols-1 row-cols-md-2 ${
          toggle ? " row-cols-lg-3" : " row-cols-lg-4"
        } g-2 g-lg-3`}
      >
      {vedioItems && vedioItems.map((item,index) => <Iframe key={index} item={item}/>)} 
        <Iframe/>
      </div>
    </div>
  );
};

export default MainContainer;
