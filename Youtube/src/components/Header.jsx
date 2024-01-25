import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { AiOutlineAudio } from "react-icons/ai";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { VscBell } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { toggleActions } from "../store/toggleSlice";
import { searchSliceAction } from "../store/searchSlice";
import { useRef } from "react";
const Header = ({toggle}) => {
  const searchRef = useRef("");
  // console.log(searchRef.current);
  const search = useSelector((store) => store.search);
  const dispatch = useDispatch();
  const handleToggle = () => {
    dispatch(toggleActions.handleToggle())
  };
  let value;
  console.log(value);
  const handleInput = () => {
     value = searchRef.current;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchSliceAction.searchFunc(value))
  }
  return (
    <div className="d-flex px-4 py-2 h-[100px] align-items-center justify-content-between">
      <div className="d-flex gap-2 align-items-center">
      <button className="rounded-circle border-0 p-3 btn-hover hamBur" onClick={handleToggle}>
        <RxHamburgerMenu className="fs-4"/>
        </button>
        <div className="d-flex align-items-center gap-2">
          <img
            src="./youtube-logo.png"
            alt="youtube-logo"
            width="40px"
            height="35px"
          />
          <h3 className="fs-3 fw-bold">Youtube</h3>
        </div>
      </div>
     <div className=" gap-2 search-bar" style={{width:"50%"}}>
     <form className="rounded-start-pill rounded-end-pill border d-flex align-items-center" onSubmit={handleSubmit} style={{ width:"100%" ,height:"50px"}}>
        <input type="text" ref={searchRef} placeholder="Search" className="rounded-start-pill border-0 px-3" value={search} onChange={handleInput} style={{height:"100%", width:"85%"}} />
        <button type="submit" className="rounded-end-pill p-2 border-0" style={{height:"100%", width:"15%"}}>
          {" "}
          <CiSearch className="fs-3" />{" "}
        </button>
      </form>
      <button className="rounded-circle border-0 p-3">
        <AiOutlineAudio className="fs-5" />
      </button>
     </div>
      
      <div className="d-flex align-items-center gap-2">
      <button className="rounded-circle border-0 p-3 btn-hover">
        <HiOutlineVideoCamera className="fs-5 "/>
        </button>
        <button className="rounded-circle border-0 p-3 btn-hover">
        <VscBell className="fs-5"/>
        </button>
        <img
          src="https://th.bing.com/th/id/OIP.h0hPZzAziPf3v-srHQTdWQHaHa?rs=1&pid=ImgDetMain"
          alt="profile-image"
          width="35px"
          height="35px"
          className="rounded-circle disp-laptop"
        />
        <CiSearch className="fs-3 disp-mobile" />
      </div>
    </div>
  );
};

export default Header;
