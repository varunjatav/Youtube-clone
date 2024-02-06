import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { AiOutlineAudio } from "react-icons/ai";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { VscBell } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { toggleActions } from "../store/toggleSlice";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import { useEffect, useState } from "react";
import searchSlice, { searchSliceAction } from "../store/searchSlice";

const Header = () => {

  const dispatch = useDispatch();
  const [inputVal, setInputVal] = useState("");
  const handleToggle = () => {
    dispatch(toggleActions.handleToggle())
  };
  const handleChange = (e) => {
  e.preventDefault();
  setInputVal(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    // setInputVal(e.target.value);
    dispatch(searchSliceAction.searchFunc(inputVal));
   
  };

  return (
    <div className="d-flex px-3 align-items-center justify-content-between position-fixed top-0 z-2" style={{height: "80px", width:"100%", backgroundColor:"white"}}>
      <div className="d-flex gap-2 align-items-center">
      <button className="rounded-circle border-0 p-2 btn-hover hamBur" onClick={handleToggle}>
        <RxHamburgerMenu className="fs-4"/>
        </button>
        <div>
          <Link to="/">
          <img
            src="./youtube-logo.png"
            alt="youtube-logo"
            width="100px"
            height="100px"
          />
          </Link>
        </div>
      </div>
     <div className="gap-2 search-bar" style={{width:"50%",height:"40px"}}>
     <form className="rounded-start-pill rounded-end-pill border d-flex align-items-center " style={{ width:"100%" ,height:"40px"}} onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" placeholder="Search" className="rounded-start-pill border-0 px-3"  style={{height:"100%", width:"85%"}} />
        <button type="submit" className="rounded-end-pill p-2 border-0" style={{height:"100%", width:"15%"}}>
          <CiSearch className="fs-3" />
        </button>
      </form>
      <button className="rounded-circle border-0 p-2 audio-btn" >
        <AiOutlineAudio className="fs-5" />
      </button>
     </div>
      
      <div className="d-flex align-items-center gap-2 account-btn-div">
      <button className="rounded-circle border-0 p-2 btn-hover">
        <HiOutlineVideoCamera className="fs-5 "/>
        </button>
        <button className="rounded-circle border-0 p-2 btn-hover">
        <VscBell className="fs-5"/>
        </button>
        <Avatar/>
      </div>
    </div>
  );
};

export default Header;
