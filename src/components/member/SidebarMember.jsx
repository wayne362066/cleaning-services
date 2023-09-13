import React from "react";
import { Link } from "react-router-dom";
import "../../components/dashboard/dashboard.css";
const SidebarMember = () => {
  const changeStyle = (e) => {
    const otherItems = document.querySelectorAll("span");
    otherItems.forEach((item) => {
      item.classList.remove("sideBarBtnToggle");
    });
    e.target.classList.toggle("sideBarBtnToggle");
  };
  return (
    <div className="aside">
      <div className="aside-main">
        <h3>會員專區</h3>
        <div>
          <h5 className="aside-title">會員資料</h5>
          <Link
            onClick={(e) => {
              changeStyle(e);
            }}
            to={"/member/memberinfo"}
            className="Link-decoration"
          >
            <span>基本資料</span>
          </Link>
          <Link
            onClick={(e) => {
              changeStyle(e);
            }}
            to={"/member/changepwd"}
            className="Link-decoration"
          >
            <span>更改密碼</span>
          </Link>
        </div>
        <div>
          <h5 className="aside-title">我的訂單</h5>
          <Link
            onClick={(e) => {
              changeStyle(e);
            }}
            to=""
            className="Link-decoration"
          >
            <span>處理中</span>
          </Link>
          <Link
            onClick={(e) => {
              changeStyle(e);
            }}
            to=""
            className="Link-decoration"
          >
            <span>歷史訂單</span>
          </Link>
        </div>
      </div>
    </div>
    // <div className="aside">
    //   <div className="aside-main">
    //     <h3>會員專區</h3>
    //     <div className="member">
    //       <h5 className="aside-title aside-title-member">會員資料</h5>
    //       <Link to=""><span>基本資料</span></Link>
    //       <Link to=""><span>更改密碼</span></Link>
    //     </div>
    //     <div className="member">
    //       <h5 className="aside-title aside-title-member">
    //         <Link to="">訂單查詢</Link>
    //       </h5>
    //     </div>
    //     <div className="member">
    //       <h5 className="aside-title aside-title-member">歷史訂單</h5>
    //     </div>
    //   </div>
    // </div>
  );
};

export default SidebarMember;
