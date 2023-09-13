import React from "react";
import "./StaffInfos.css";
const StaffInfo = (props) => {
  return (
    <div className="staffInfo-card">
      {/* 接種疫苗 */}
      <div className="staffCovid">
        <span>{props.covid ? "已接種疫苗" : "未接種疫苗"}</span>
      </div>
      {/* 員工頭像 */}
      <div className="staffImg">
        <img src={props.img} alt="staff" />
      </div>
      {/* 員工編號 */}
      <span className="staffText">
        員工編號: <span>{props.number}</span>
      </span>
      {/* 員工姓名 */}
      <span className="staffText">
        員工姓名: <span>{props.name}</span>
      </span>
      {/* 評分 */}
      <img
        src="images\staffInfo-star.png"
        alt="start"
        style={{ clipPath: `inset(0 ${100 - props.star * 20}% 0 0)` }}
      />
      {/* 員工案件數 */}
      <div className="staffAbility">
        <div>
          <img src="images\staffInfo-case.png" alt="case" />
          <span>服務件數</span>
        </div>
        <span>{props.caseCount}件</span>
      </div>
      {/* 服務態度 */}
      <div className="staffAbility">
        <div>
          <img src="images\staffInfo-smile.png" alt="smile" />
          <span>服務態度</span>
        </div>
        <span>Levle {props.levle}</span>
      </div>
      {/* 良民證 */}
      <div className="staffAbility">
        <div>
          <img src="images\staffInfo-goodguy.png" alt="goodguy" />
          <span>良民證</span>
        </div>
      </div>
      {/* 浣熊管家 */}
      <div className="staffAbility">
        <div>
          <img src="images\staffInfo-raccoon.png" alt="raccoon" />
          <span>浣熊管家認證</span>
        </div>
      </div>
    </div>
  );
};

export default StaffInfo;
