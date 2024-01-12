import { HiMiniHome } from "react-icons/hi2";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";
import { LiaHistorySolid } from "react-icons/lia";
import { GoVideo } from "react-icons/go";
import { MdOutlineWatchLater } from "react-icons/md";
const SideBar = ({ toggle }) => {
  return (
    <div className={`p-2 ${toggle ? "width-15" : "width-5"}`} style={{height:"800px"}}>
      <div>
        <div
          className="d-flex align-items-center gap-4 btn-hover p-2 rounded"
          style={{ width: "100%", height: "50px" }}
        >
          <div className="p-auto" style={{ height: "100%", width: "10%" }}>
            <HiMiniHome className="fs-4 m-auto" />
          </div>
          <div
            className={`${toggle ? "d-block" : "d-none"}`}
            style={{ height: "100%", width: "90%" }}
          >
            <h5 className={` fs-5`}>Home</h5>
          </div>
        </div>
        <div
          className="d-flex align-items-center gap-4 btn-hover p-2 rounded"
          style={{ width: "100%", height: "50px" }}
        >
          <div className="p-auto" style={{ height: "100%", width: "10%" }}>
            <SiYoutubeshorts className="fs-4 m-auto" />
          </div>
          <div className={`${toggle ? "d-block" : "d-none"}`}style={{ height: "100%", width: "90%" }}>
            <h5 className="fs-5">Shorts</h5>
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
            <h5 className="fs-5">Subscription</h5>
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
          <div className="" style={{ height: "100%", width: "90%" }}>
            <h5 className="fs-5">Your Channel</h5>
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
            <h5 className="fs-5">History</h5>
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
            <h5 className="fs-5">Your Videos</h5>
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
            <h5 className="fs-5">Watch Later</h5>
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
            <h5 className="fs-5">Your Channel</h5>
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
            <h5 className="fs-5">History</h5>
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
            <h5 className="fs-5">Your Videos</h5>
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
            <h5 className="fs-5">Watch Later</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
