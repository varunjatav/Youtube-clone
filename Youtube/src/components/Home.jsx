import React from "react";
import Buttons from "./Buttons";
import { IoIosArrowBack } from "react-icons/io";
import { MdArrowForwardIos } from "react-icons/md";
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
  return (
    <div>
      <div className="scrollable-tab-container">
        <div className="left-arrow">
          <IoIosArrowBack className="active" />
        </div>
        <ul>
          <li>
            <a href="#" className="active-btn">
              All
            </a>
          </li>
          <li>
            <a href="#">Mixes</a>
          </li>
          <li>
            <a href="#">Music</a>
          </li>
          <li>
            <a href="#">Reaction Videos</a>
          </li>
          <li>
            <a href="#">Computer programming</a>
          </li>
          <li>
            <a href="#">Movie Musicals</a>
          </li>
          <li>
            <a href="#">Gaming</a>
          </li>
          <li>
            <a href="#">Coding</a>
          </li>
          <li>
            <a href="#">Computer programming</a>
          </li>
          <li>
            <a href="#">Movie Musicals</a>
          </li>
          <li>
            <a href="#">Gaming</a>
          </li>
          <li>
            <a href="#">Coding</a>
          </li>
        </ul>
        <div className="right-arrow">
          <MdArrowForwardIos/>
        </div>
      </div>
    </div>
  );
};

export default Home;
