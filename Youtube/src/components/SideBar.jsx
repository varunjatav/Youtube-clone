import { HiMiniHome } from "react-icons/hi2";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";
import { LiaHistorySolid } from "react-icons/lia";
import { GoVideo } from "react-icons/go";
import { MdOutlineWatchLater } from "react-icons/md";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const SideBar = () => {
  const toggle=  useSelector(store => store.toggle)
  return (
    <div className={`p-2 ${toggle ? "width-15" : "width-5"} side-bar width-mobile`} style={{height:"800px"}}>
      <div>
      <Link to="/" className="text-decoration-none text-black">
        <div
          className="d-flex align-items-center gap-4 btn-hover p-2 rounded"
          style={{ width: "100%", height: "50px" }}
        >
          
          <div className="p-auto" style={{ height: "100%", width: "10%" }}>
            <HiMiniHome className="fs-4 m-auto" />
          </div>
          <div
            className={`${toggle ? "d-block" : "d-none"}`}
            style={{  width: "90%" }}
          >
            <p className="fs-6">Home</p>
          </div>
          
        </div>
        </Link>
        <div
          className="d-flex align-items-center gap-4 btn-hover p-2 rounded"
          style={{ width: "100%", height: "50px" }}
        >
          <div className="p-auto" style={{ height: "100%", width: "10%" }}>
            <SiYoutubeshorts className="fs-4 m-auto" />
          </div>
          <div className={`${toggle ? "d-block" : "d-none"}`}style={{ height: "100%", width: "90%" }}>
            <p className="fs-6">Shorts</p>
          </div>
        </div>
        <div
          className="d-flex align-items-center gap-4 btn-hover p-2 rounded"
          style={{ width: "100%", height: "50px" }}
        >
          <div className="p-auto" style={{ height: "100%", width: "10%" }}>
            <MdOutlineSubscriptions className="fs-4 m-auto" />
          </div>
          <div className={`${toggle ? "d-block" : "d-none"}`}style={{ height: "100%", width: "90%" }}>
            <p className="fs-6">Subscription</p>
          </div>
        </div>
      </div>
      <hr className={`${toggle ? "d-block" : "d-none"}`}/>
      <div className={`${toggle ? "d-block" : "d-none"}`}>
        <h5>
          You <IoIosArrowForward />
        </h5>
        <div
          className="d-flex align-items-center gap-4 btn-hover p-2 rounded"
          style={{ width: "100%", height: "50px" }}
        >
          <div className="p-auto" style={{ height: "100%", width: "10%" }}>
            <VscAccount className="fs-4 m-auto" />
          </div>
          <div className={`${toggle ? "d-block" : "d-none"}`} style={{ height: "100%", width: "90%" }}>
            <p className="fs-6">Your Channel</p>
          </div>
        </div>
        <div
          className="d-flex align-items-center gap-4 btn-hover p-2 rounded"
          style={{ width: "100%", height: "50px" }}
        >
          <div className="p-auto" style={{ height: "100%", width: "10%" }}>
            <LiaHistorySolid className="fs-4 m-auto" />
          </div>
          <div className={`${toggle ? "d-block" : "d-none"}`} style={{ height: "100%", width: "90%" }}>
            <p className="fs-6">History</p>
          </div>
        </div>
        <div
          className="d-flex align-items-center gap-4 btn-hover p-2 rounded"
          style={{ width: "100%", height: "50px" }}
        >
          <div className="p-auto" style={{ height: "100%", width: "10%" }}>
            <GoVideo className="fs-4 m-auto" />
          </div>
          <div className={`${toggle ? "d-block" : "d-none"}`} style={{ height: "100%", width: "90%" }}>
            <p className="fs-6">Your Videos</p>
          </div>
        </div>
        <div
          className="d-flex align-items-center gap-4 btn-hover p-2 rounded"
          style={{ width: "100%", height: "50px" }}
        >
          <div className="p-auto" style={{ height: "100%", width: "10%" }}>
            <MdOutlineWatchLater className="fs-4 m-auto" />
          </div>
          <div className={`${toggle ? "d-block" : "d-none"}`} style={{ height: "100%", width: "90%" }}>
            <p className="fs-6">Watch Later</p>
          </div>
        </div>
      </div>
      <hr className={`${toggle ? "d-block" : "d-none"}`}/>
      <div className={`${toggle ? "d-block" : "d-none"}`}>
        <h5>Subscriptions</h5>
        <div
          className="d-flex align-items-center gap-4 btn-hover p-2 rounded"
          style={{ width: "100%", height: "50px" }}
        >
          <div className="p-auto" style={{ height: "100%", width: "10%" }}>
            <VscAccount className="fs-4 m-auto" />
          </div>
          <div className="" style={{ height: "100%", width: "90%" }}>
            <p className="fs-6">Your Channel</p>
          </div>
        </div>
        <div
          className="d-flex align-items-center gap-4 btn-hover p-2 rounded"
          style={{ width: "100%", height: "50px" }}
        >
          <div className="p-auto" style={{ height: "100%", width: "10%" }}>
            <LiaHistorySolid className="fs-4 m-auto" />
          </div>
          <div className="" style={{ height: "100%", width: "90%" }}>
            <p className="fs-6">History</p>
          </div>
        </div>
        <div
          className="d-flex align-items-center gap-4 btn-hover p-2 rounded"
          style={{ width: "100%", height: "50px" }}
        >
          <div className="p-auto" style={{ height: "100%", width: "10%" }}>
            <GoVideo className="fs-4 m-auto" />
          </div>
          <div className="" style={{ height: "100%", width: "90%" }}>
            <p className="fs-6">Your Videos</p>
          </div>
        </div>
        <div
          className="d-flex align-items-center gap-4 btn-hover p-2 rounded"
          style={{ width: "100%", height: "50px" }}
        >
          <div className="p-auto" style={{ height: "100%", width: "10%" }}>
            <MdOutlineWatchLater className="fs-4 m-auto" />
          </div>
          <div className="" style={{ height: "100%", width: "90%" }}>
            <p className="fs-6">Watch Later</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
