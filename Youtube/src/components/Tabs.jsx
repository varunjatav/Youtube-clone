import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward  } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { activeActions } from "../store/activeSlice";

const Tabs = ({buttonOptions}) => {

    const dispatch = useDispatch();
    const activeIndex = useSelector((state) => state.active);
    const handleActive =(id) => {
    dispatch(activeActions.setActiveClass(id === activeIndex ? null : id));
    }
  return (
    <div >
    <div className="scrollable-tab-container">
      <div className="left-arrow">
        <IoIosArrowBack className="active" />
      </div>
      <ul>
        {buttonOptions.map((button,index) => (
         
          <li key={index}>
          <a onClick={()=>handleActive(index)}  id={index} href="#"  className={`${activeIndex === index && "active-btn"}`}>
            {button}
          </a>
        </li>
        ))}
        
     
      </ul>
      <div className="right-arrow">
      <IoIosArrowForward />
      </div>
    </div>
  </div>
  )
}

export default Tabs