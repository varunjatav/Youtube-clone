import React from "react";

import Tabs from "../components/Tabs";
import { useSelector } from "react-redux";
import MainContainer from "../components/MainContainer";
const buttonOptions = [
  "All",
  "Mixes",
  "Music",
  "Reaction Videos",
  "Computer programming",
  "Movie Musicals",
  "Gaming",
  "Live",
  "All",
  "Mixes",
  "Music",
  "Reaction Videos",
  "Computer programming",
  "Movie Musicals",
  "Gaming",
  "Live",
];

const Home = () => {
  const toggle=  useSelector(store => store.toggle);
  return (
    <div className={` ${toggle ? "width-consise" :"width-expand"} width-mobile mainVedioContainer`}>
      <Tabs buttonOptions={buttonOptions} />
     <MainContainer/>
    </div>
  );
};

export default Home;
